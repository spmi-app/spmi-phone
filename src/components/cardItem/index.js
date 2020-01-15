import * as React from 'react';
import { View, Image, ActivityIndicator, Linking } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

export default ({ item }) => {
  const press = item.pdf ? () => Linking.openURL(item.pdf.src) : () => null;

  return (
    <Card style={{ minHeight: 320, justifyContent: 'center' }}>
      <CardItem style={{flexDirection: 'column', alignItems: 'flex-start'}} button onPress={press}>
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
        {item.logo ? (
          <Image
            loadingIndicator={_ => <ActivityIndicator />}
            source={{ uri: item.logo.src }}
            style={{ height: 200, width: '100%', flex: 1 }}
            resizeMode="contain"
          />
        ) : null}
        <CardItem header>
          <Text>{item.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{item.description}</Text>
          </Body>
        </CardItem>
      </CardItem>
    </Card>
  );
};
