import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UserCommentCard from '../cards/UserCommentCard';

const CommentModal = ({ visible, onClose }) => {
  const [comment, setComment] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text>20 bình luận</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeCommentBtn}>
              <Ionicons name="close" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <UserCommentCard />
            <UserCommentCard />
            <UserCommentCard />
            <UserCommentCard />
          </ScrollView>
          <View style={styles.modalFooter}>
            <TextInput
              style={styles.inputComment}
              onChangeText={(comment) => setComment(comment)}
              value={comment}
              placeholder="Nhập bình luận..."
            />
            <TouchableOpacity style={styles.sendBtn}>
              <Ionicons name="send" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommentModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingHorizontal: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '60%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  closeCommentBtn: {
    padding: 5,
    right: 5,
    position: 'absolute',
  },
  scrollView: {
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    gap: 5,
  },
  inputComment: {
    backgroundColor: '#eee',
    color: '#000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '90%',
    borderRadius: 99,
    fontSize: 14,
  },
  sendBtn: {},
});
