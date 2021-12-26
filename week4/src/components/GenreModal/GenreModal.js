import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {FlatList} from 'react-native';

import styles from './GenreModal.styles';
import Button from '../Button';
import useGenres from '../../hooks/useFetch';

const MovieFilterModal = ({isVisible, onClose, dataSend}) => {
  const url = 'http://10.0.2.2:3000/genres';
  const [selectedGenre, setSelectedGenre] = useState('');
  const {data} = useGenres(url);

  useEffect(() => {
    dataSend(selectedGenre);
  }, [selectedGenre]);

  const renderGender = ({item}) => (
    <Button text={item.name} onPress={() => handleSelectedGenre(item.name)} />
  );

  function handleSelectedGenre(genre) {
    setSelectedGenre(genre);
  }

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
        <Button text="ALLGENDER" onPress={() => handleSelectedGenre('')} />
       <FlatList renderItem={renderGender} data={data} /> 
    </Modal>
  );
};

export default MovieFilterModal;
