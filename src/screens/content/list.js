import * as React from 'react';
import ItemCard from '../../components/cardItem'
import { FlatList, View } from 'react-native';

export default ({ navigation }) => (
  <View style={{ padding: 10, flex: 1 }}>
    <FlatList
      data={demoDate}
      renderItem={({ item }) => <ItemCard item={item} />}
      keyExtractor={(_, index) => index.toString()}
    />
  </View>
);

const demoDate = [
  {
    logo: '',
    title: 'Consumer Decision Journey',
    description:
      'Companies that understand their consumers’ decision journey perform better than those that do not',
  },
  {
    logo: '',
    title: 'Consumer Decision Journey',
    description:
      'Companies that understand their consumers’ decision journey perform better than those that do not',
  },
  {
    logo: '',
    title: 'Consumer Decision Journey',
    description:
      'Companies that understand their consumers’ decision journey perform better than those that do not',
  },
  {
    logo: '',
    title: 'Consumer Decision Journey',
    description:
      'Companies that understand their consumers’ decision journey perform better than those that do not',
  },
];
