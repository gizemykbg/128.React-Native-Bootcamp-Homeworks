import {useRoute} from '@react-navigation/core';
import React, {useState} from 'react';

import {SafeAreaView, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import CommentCard from '../../components/CommentCard';
import useFetch from '../../hooks/useFetch';
import CreateComments from '../../components/CreateComment/CreateComment';
import styles from './CommentView.styles';

export default function Comments() {
  const route = useRoute();
  const {movieId} = route.params;
  const URL = 'http://10.0.2.2:3000/comments?movieId=' + movieId;
  const {data} = useFetch(URL);
  const [commentList, setCommentList] = useState([]);

  const renderComment = ({item}) => <CommentCard item={item} />;

  const handleComment = commentObj => {
    setCommentList([...commentList, commentObj]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CreateComments onSend={handleComment} />
      <Text style={styles.text}>Comments :</Text>
      {commentList ? (
        <FlatList data={commentList} renderItem={renderComment} />
      ) : null}
      {data ? (
        <FlatList
          style={styles.commentList1}
          data={data}
          renderItem={renderComment}
        />
      ) : (
        <Text>Be the first to comment</Text>
      )}
    </SafeAreaView>
  );
}
