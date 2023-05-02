import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Constants from '../../../Constants';
import NavigateCard from '../../../components/cards/NavigateCard';

const ProfileScreen = ({ route, navigate }) => {
  return (
    <View style={styles.rootView}>
      <View style={styles.headerProfile}>
        <Image
          style={styles.avatarView}
          source={{
            uri: 'https://haycafe.vn/wp-content/uploads/2022/02/Anh-trai-dep-mac-vest-den.jpg',
          }}
        />
        <View style={styles.infoView}>
          <Text style={styles.nameUser}>Lương Văn Cương</Text>
          <Text style={styles.emailUser}>Chuong@gmail.com</Text>
        </View>
      </View>

      <View style={styles.contactDetailView}>
        <Text style={styles.contactHeader}>Contact Details</Text>
        <View style={styles.contactBody}>
          <NavigateCard
            icon="user-alt"
            name="Edit Profile"
            screenName="EditProfile"
          />
          <NavigateCard
            icon="mail-bulk"
            name="Email address"
            screenName="Profile"
          />
          <NavigateCard
            icon="phone-alt"
            name="Phone number"
            screenName="Profile"
          />
          <NavigateCard
            icon="map-marker-alt"
            name="Residential addresses"
            screenName="Profile"
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  headerProfile: {
    backgroundColor: Constants.colors.white,
    paddingVertical: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarView: {
    borderRadius: 99,
    width: 64,
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: 'gray',
  },
  infoView: {
    marginLeft: 14,
  },
  nameUser: {
    color: Constants.colors.primary,
    fontSize: 18,
  },
  emailUser: {
    color: Constants.colors.textColor,
    fontSize: 14,
  },
  contactDetailView: {
    marginTop: 20,
  },
  contactHeader: {
    marginLeft: 20,
    fontSize: 13,
    color: Constants.colors.textColor,
  },
});
