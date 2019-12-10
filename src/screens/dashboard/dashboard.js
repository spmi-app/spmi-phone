import * as React from 'react';
import { Button, View } from 'react-native';

export default ({ navigation }) => (
  <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
    <Button
      onPress={() => navigation.openDrawer()}
      title="Go to notifications"
    />
  </View>
);
