import * as React from 'react';
import List from './list';
import { Icon } from 'native-base';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import database from '@react-native-firebase/database';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Content"
      component={TagTabs}
      options={{
        title: 'Content',
        headerLeft: () => (
          <Icon
            style={{ paddingLeft: 10 }}
            fontSize={16}
            onPress={navigation.openDrawer}
            name="menu"
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const TagTabs = () => {
  const [demoTabs, setDemoTabs] = React.useState([]);

  React.useEffect(() => {
    const ref = database().ref('/tags/');

    ref.on(
      'value',
      snapshot => {
        console.log(snapshot.val())
        setDemoTabs(Object.values(snapshot.val()).sort((next,prev)=>next.order-prev.order))
      },
      function(errorObject) {
        console.log('The read failed: ' + errorObject.code);
      },
    );
  }, []);

  return (
    <Container>
      <Tabs renderTabBar={() => <ScrollableTab />}>
        {demoTabs.map((tab, index) => (
          <Tab key={index} heading={tab.label}>
            <List label={tab.label} filter={tab.id} />
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};
