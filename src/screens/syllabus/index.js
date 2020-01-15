import * as React from 'react';
import List from './list';
import { Icon } from 'native-base';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Syllabus"
      component={ContentTabs}
      options={{
        title: 'Syllabus',
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


const ContentTabs = () => (
  <Container>
    <Tabs renderTabBar={() => <ScrollableTab />}>
      <Tab heading="Tab1">
        <List />
      </Tab>
      <Tab heading="Tab2">
        <List />
      </Tab>
      <Tab heading="Tab3">
        <List />
      </Tab>
      <Tab heading="Tab4">
        <List />
      </Tab>
      <Tab heading="Tab5">
        <List />
      </Tab>
    </Tabs>
  </Container>
);
