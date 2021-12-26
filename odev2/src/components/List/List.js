import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import Card from '../Card/Card';
import AddBox from '../AddBox';
import Button from '../FilterButton';
import styles from './List.style';

const List = () => {
  const [data, setData] = useState([]);
  const [sortBy, setSortBy] = useState([]);

  const handleAsc = () => {
    data.sort(function (obj1, obj2) {
      return obj1.price - obj2.price;
    });
    setSortBy([...data]);
  };

  const handleDesc = () => {
    data.sort(function (obj1, obj2) {
      return obj2.price - obj1.price;
    });
    setSortBy([...data]);
  };

  const handleDate = () => {
    data.sort(function (a, b) {
      return new Date(b.id).getTime() - new Date(a.id).getTime();
    });
    setSortBy([...data]);
  };

  const renderData = ({item}) => {
    return (
      <View>
        <Card name={item.name} price={item.price} id={item.id} />
      </View>
    );
  };
  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button_container}>
        <Button onPress={handleAsc} text="Artan Fiyat" />
        <Button onPress={handleDesc} text="Azalan fiyat" />
        <Button onPress={handleDate} text="Tarih" />
      </View>

      <FlatList
        data={data}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={renderSeperator}
      />
      <AddBox data={data} setData={setData} />
    </SafeAreaView>
  );
};
export default List;
