import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {Rating} from 'react-native-elements';
import Button from '../Button';
import Input from '../Input';

export default function CreateComments({onSend}) {
  const [rate, setRate] = useState();
  const [name, setName] = useState('');
  const [comment, setDescription] = useState('');

  function handleNavigateComments() {
    if (name === '' || comment === '') {
      Alert.alert('Bilgileri doldurunuz');
      return;
    }
    const commentObj = {
      name: name,
      comment: comment,
      rate: rate,
    };
    onSend(commentObj);
  }

  return (
    <View>
      <Rating
        ratingCount={5}
        showRating
        onFinishRating={value => setRate(value)}
        imageSize={20}
        backgroundColor="#e0e0e0"
      />
      <Input
        label="Name"
        placeHolder="name"
        onChangeText={value => setName(value)}
      />
      <Input
        label="Comment"
        placeHolder="comments"
        onChangeText={value => setDescription(value)}
      />
      <Button text="Add Comment" onPress={handleNavigateComments} />
    </View>
  );
}
