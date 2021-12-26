import React, {useState} from 'react';
import {View, Alert, Text, TouchableOpacity} from 'react-native';

import Input from '../Input/Input';
import styles from './AddBox.style';

const AddBox = ({data, setData}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  console.log(data);
  const handleSubmit = () => {
    if (!name && !price) {
      return Alert.alert('Hata!', 'alanları Doldurunuz!');
    }

    setData([...data, {name, price, id: Date.now()}]);
    setName('');
    setPrice('');
    console.log(name);
    console.log(price);
    return Alert.alert('Başarılı!', 'Ürün başarıyla eklendi!');
  };
  const handleChangeName = e => {
    setName(e);
  };
  const handleChangePrice = e => {
    setPrice(e);
  };

  return (
    <View style={styles.add_container}>
      <Input
        value={name}
        label="name"
        placeholder="name"
        onChangeText={handleChangeName}
      />
      <Input
        value={price}
        label="price"
        placeholder="price"
        onChangeText={handleChangePrice}
      />
      <TouchableOpacity
        style={styles.add_button}
        onPress={handleSubmit}
        title="Add">
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBox;
