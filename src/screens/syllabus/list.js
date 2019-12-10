import * as React from 'react';
import ItemCard from '../../components/cardItem';
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
    title: 'Memo 1 Assignment',
    description:
      'The goal of this memo would be to help you define the scope with your clients.',
    badge: {
      background: '#E3F2FD',
      text: 'A',
      textColor: '#2196F3',
    },
  },
  {
    logo: '',
    title: 'Blue Apron Case',
    description: 'Calculate customer lifetime value for Blue Apron',
    badge: {
      background: '#00C853',
      text: 'C',
      textColor: '#219653',
    },
  },
  {
    logo: '',
    title: 'Guest Speaker',
    description:
      'John Smth is the CMO of MasterCard for 10 years.  Click to see bio and schedule lunch.',
  },
  {
    logo: '',
    title: 'Nielsen Exercise - Pricing',
    description:
      'In this session, Will will take you through an hands on exercise...',
  },
  {
    logo: '',
    title: 'Sprint Session',
    description:
      'Ad nibh case sed, est cu vide primis, est at zril nemore. Vis alterum aliquam ad.',
  },
];
