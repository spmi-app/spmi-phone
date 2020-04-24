import React, { useState, useEffect, useCallback } from 'react';
import ItemCard from '../../components/cardItem';
import { FlatList, View } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import database from '@react-native-firebase/database';

const ref = database().ref('/contents/');
// Add filtering for Native Part while Off of Elastic
// To-do think bout binary search on Firebase realtime database
const searchKey = ['title', 'description'];

export default ({ filter }) => {
  const [renderData, setRender] = useState([]);
  const [serverData, setData] = useState([]);
  const [textFilter, setText] = useState('');

  const setDataForList = snapshot => {
    setData(
      Object.values(snapshot.val() || {}).filter(item =>
        item.tags.includes(filter),
      ),
    );
  };

  useEffect(() => {
    if (textFilter.length > 2) {
      setRender(
        serverData.filter(item =>
          searchKey.some(key =>
            item[key].toLowerCase().includes(textFilter.toLowerCase()),
          ),
        ),
      );
    } else {
      setRender(serverData);
    }
  }, [serverData, textFilter]);

  useEffect(() => {
    ref.orderByChild('title').on('value', setDataForList);
    return () => ref.orderByChild('title').off('value', setDataForList);
  }, []);

  return (
    <View style={{ padding: 10, flex: 1 }}>
      <Item>
        <Icon active name="search" />
        <Input
          onChangeText={text => setText(text)}
          value={textFilter}
          placeholder="What are you facing?"
        />
      </Item>
      <FlatList
        refreshing={false}
        data={renderData}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
