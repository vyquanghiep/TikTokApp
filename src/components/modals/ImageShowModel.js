import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  Image,
  View,
} from 'react-native';
import React from 'react';
import Constants from '../../Constants';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageShowModel = ({ visible, onClose, img }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
          <Icon name="close" size={24} color={Constants.colors.black} />
        </TouchableOpacity>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
    </Modal>
  );
};

export default ImageShowModel;

const styles = StyleSheet.create({
  container: {
    width: Constants.screen.width,
    height: Constants.screen.height,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeBtn: {
    padding: 10,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
});
