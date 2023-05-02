import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const userCommentCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.commentView}>
        <View style={styles.commentLeft}>
          <Image
            source={{
              uri: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-trai-dep-mac-vest-den.jpg',
            }}
            style={styles.userCommentImg}
          />
          <View style={styles.userCommentBody}>
            <Text style={styles.userCommentName}>Lương Văn Chương</Text>
            <Text style={styles.userCommentContent}>Cute thế</Text>
            <View style={styles.userCommentBottom}>
              <View style={styles.userCommentBottomLeft}>
                <Text style={styles.timeComment}>1 giờ</Text>
                <TouchableOpacity style={styles.replyBtn}>
                  <Text style={styles.replyBtnTitle}>Trả lời</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.userCommentBottomRight}>
                <TouchableOpacity style={styles.likeBtn}>
                  <Icon name="heart" size={18} color="gray" />
                </TouchableOpacity>
                <Text style={styles.likeNumber}>11</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default userCommentCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentLeft: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  userCommentImg: {
    width: 45,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 99,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  userCommentBody: {
    marginLeft: 10,
  },
  userCommentName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userCommentContent: {},
  userCommentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
  userCommentBottomLeft: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  userCommentBottomRight: {
    flexDirection: 'row',
    gap: 3,
  },
  timeComment: {},
  replyBtn: {},
  replyBtnTitle: {},
  likeBtn: {},
  likeNumber: {},
});
