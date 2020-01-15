import React, { useState, useEffect, useCallback } from 'react';
import ItemCard from '../../components/cardItem';
import { FlatList, View } from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

const JSON_PATH = 'https://spmi-app.firebaseio.com/contents.json'


const getData = async () => {
  try {
    let response = await fetch(JSON_PATH);
    let comment = await response.json();

    return comment;
  } catch (err) {
    console.log(err);
  }
};

export default ({ navigation }) => {
  const [demoData, setData] = useState([]);;

  useEffect(() => {
    getData().then(data => setData(Object.values(data)));
  }, []);

  console.log({demoData})
  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Item>
        <Icon active name="search" />
        <Input placeholder="What are you facing?" />
      </Item>
      <FlatList
        refreshing={false}
        onRefresh={()=>getData().then(data => setData(Object.values(data)))}
        data={demoData}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
