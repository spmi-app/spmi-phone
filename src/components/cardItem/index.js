import * as React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

export default ({ item }) => (
  <Card style={{ minHeight: 320, justifyContent: 'center' }}>
    {item.badge ? (
      <View
        style={{
          width: 55,
          height: 55,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 10,
          backgroundColor: item.badge.background,
        }}>
        <Text>{item.badge.text}</Text>
      </View>
    ) : null}
    <CardItem header>
      <Text>{item.title}</Text>
    </CardItem>
    <CardItem>
      <Body>
        <Text>{item.description}</Text>
      </Body>
    </CardItem>
  </Card>
);
