import {
  ActivityIndicator,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Constants from '../../../Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import {
  getImageFromCamera,
  getImageFromGallery,
} from '../../../utils/getImage';
import RadioButton from '../../../components/buttons/RadioButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const EditProfileScreen = ({ route, navigate }) => {
  const navigation = useNavigation();

  const optionsGender = ['Male', 'Female'];

  const [description, setDescription] = useState(null);
  const [email, setEmail] = useState(null);
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [occupation, setOccupation] = useState(null);

  // Date picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setDob(date);
    hideDatePicker();
  };
  // set maxDate for DateTimePickerModal
  const maxDate = new Date();
  maxDate.setTime(Date.now());

  const [updateTitle, setUpdateTitle] = useState('Update');
  const [buttonColor, setButtonColor] = useState('#F83E69');
  const [isLoading, setIsLoading] = useState(false);

  const [visibleGender, setVisibleGender] = useState(false);
  const handleVisibleGender = () => {
    setVisibleGender(!visibleGender);
  };
  const handleOptionChange = (option) => {
    setGender(option);
  };

  // upload avatar img
  const [avatarUri, setAvatarUri] = useState(null);
  const handleTakeAvatar = async () => {
    const uri = await getImageFromGallery();
    if (uri) {
      setAvatarUri(uri);
      ToastAndroid.show('Avatar Updated', ToastAndroid.SHORT);
    }
  };

  // upload cover photo
  const [coverImageURI, setCoverImageURI] = useState(null);
  const handleTakePicture = async () => {
    const uri = await getImageFromCamera();
    if (uri) {
      setCoverImageURI(uri);
      ToastAndroid.show('Cover Photo Updated', ToastAndroid.SHORT);
    }
  };
  const handlePickImage = async () => {
    const uri = await getImageFromGallery();
    if (uri) {
      setCoverImageURI(uri);
      ToastAndroid.show('Cover Photo Updated', ToastAndroid.SHORT);
    }
  };

  const handleUpdate = () => {
    setButtonColor('#bbbbbb');
    setUpdateTitle('PROGRESSING...');
    setIsLoading(true);

    setTimeout(function () {
      setButtonColor('#F83E69');
      setUpdateTitle('Update');
      setIsLoading(false);
      navigation.navigate('Profile');
      ToastAndroid.show('Updated', ToastAndroid.SHORT);
    }, 1000);
  };

  return (
    <View style={styles.rootView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarView}>
          <View style={styles.avatarImg}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  avatarUri ||
                  'https://haycafe.vn/wp-content/uploads/2022/02/Anh-trai-dep-mac-vest-den.jpg',
              }}
            />

            <TouchableOpacity onPress={handleTakeAvatar}>
              <MaterialCommunityIcons
                name="image-plus"
                size={20}
                color="black"
                style={styles.iconAddAvatar}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* begin upload cover media */}
        <View style={styles.updateCoverMediaView}>
          <Text style={styles.updateCoverMediaTitle}>Update Cover media</Text>
          <View style={styles.updateCoverMediaBody}>
            <MaterialCommunityIcons
              name="cloud-upload"
              size={40}
              color="lightgray"
              style={styles.cloudUploadIcon}
            />
            <Text style={styles.uploadDescription}>
              Let's upload photos and videos
            </Text>
            <View style={styles.uploadBtnsView}>
              <TouchableOpacity
                style={styles.uploadBtn}
                onPress={handlePickImage}
              >
                <MaterialCommunityIcons
                  name="cloud-upload"
                  size={13}
                  color={Constants.colors.white}
                />
                <Text style={styles.buttonName}>OPEN GALLERY</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadBtn}
                onPress={handleTakePicture}
              >
                <MaterialCommunityIcons
                  name="cloud-upload"
                  size={13}
                  color={Constants.colors.white}
                />
                <Text style={styles.buttonName}>OPEN CAMERA</Text>
              </TouchableOpacity>
            </View>
            {coverImageURI && (
              <Image
                source={{ uri: coverImageURI }}
                style={styles.coverPhotoImg}
              />
            )}
          </View>
        </View>
        {/* end upload caver media */}

        {/* begin add description */}
        <View style={styles.addDescriptionView}>
          <Text style={styles.addDescriptionTitle}>Add description</Text>
          <TextInput
            multiline
            maxLength={120}
            numberOfLines={4}
            onChangeText={(text) => setDescription(text)}
            value={description}
            placeholder="Say something..."
            style={styles.textInputDescription}
          />
        </View>
        {/* end add description */}

        {/* begin information */}
        <View style={styles.infoView}>
          <View style={styles.inputInfoView}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={Constants.colors.gray}
              style={styles.infoIcon}
            />
            <TextInput
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType="email-address"
              style={styles.textInputInfo}
            />
          </View>
          <View style={styles.inputInfoView}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={20}
              color={Constants.colors.gray}
              style={styles.infoIcon}
            />
            <TextInput
              placeholder="Date of birth"
              onChangeText={(text) => setDob(text)}
              editable={false}
              value={dob ? moment(dob).format('YYYY-MM-DD') : 'Date of birth'}
              style={styles.textInputInfo}
            />
            <TouchableOpacity
              onPress={showDatePicker}
              style={{
                position: 'absolute',
                right: 10,
              }}
            >
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color={Constants.colors.gray}
              />
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              maximumDate={maxDate}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <View style={styles.inputInfoView}>
            <MaterialCommunityIcons
              name="gender-male-female"
              size={20}
              color={Constants.colors.gray}
              style={styles.infoIcon}
            />

            <TextInput
              onChangeText={(text) => setGender(text)}
              value={gender}
              editable={false}
              placeholder="Gender"
              style={styles.textInputInfo}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 10,
              }}
              onPress={handleVisibleGender}
            >
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color={Constants.colors.gray}
              />
            </TouchableOpacity>
          </View>
          {visibleGender && (
            <View
              style={[
                styles.inputInfoView,
                {
                  borderBottomWidth: 1,
                  borderBottomColor: Constants.colors.gray,
                },
              ]}
            >
              <RadioButton
                options={optionsGender}
                onChange={handleOptionChange}
              />
            </View>
          )}
          <View style={styles.inputInfoView}>
            <TextInput
              onChangeText={(text) => setOccupation(text)}
              value={occupation}
              placeholder="Occupation"
              style={{
                position: 'relative',
                paddingLeft: 50,
                color: Constants.colors.textColor,
              }}
            />
          </View>
        </View>
        {/* end information */}

        <TouchableOpacity
          style={{
            backgroundColor: buttonColor,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingVertical: 16,
          }}
          onPress={handleUpdate}
        >
          <Text style={styles.updateTitle}>{updateTitle}</Text>
        </TouchableOpacity>
        {/* Show loading icon in the middle of the screen */}
        <Modal visible={isLoading} transparent={true}>
          <View style={styles.modal}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: Constants.colors.white,
    padding: 15,
  },
  avatarView: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarImg: {},
  avatar: {
    position: 'relative',
    borderRadius: 35,
    width: 100,
    aspectRatio: 1,
    resizeMode: 'contain',
    backgroundColor: 'gray',
  },
  iconAddAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  updateCoverMediaView: {
    marginVertical: 15,
  },
  updateCoverMediaTitle: {
    fontWeight: 'bold',
    color: Constants.colors.textColor,
    marginBottom: 5,
  },
  updateCoverMediaBody: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Constants.colors.gray,
    padding: 16,
    alignItems: 'center',
  },
  cloudUploadIcon: {
    marginBottom: 16,
  },
  uploadDescription: {
    color: Constants.colors.gray,
    paddingVertical: 16,
  },
  uploadBtnsView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  uploadBtn: {
    backgroundColor: Constants.colors.black,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonName: {
    color: Constants.colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  coverPhotoImg: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Constants.colors.black,
    resizeMode: 'cover',
    borderWidth: 1,
  },
  addDescriptionView: {},
  addDescriptionTitle: {
    fontWeight: 'bold',
    color: Constants.colors.textColor,
    marginBottom: 5,
  },
  textInputDescription: {
    borderColor: Constants.colors.gray,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: Constants.colors.textColor,
  },
  infoView: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Constants.colors.gray,
    marginVertical: 10,
  },
  inputInfoView: {
    marginVertical: 8,
  },
  infoIcon: {
    position: 'absolute',
    left: 10,
    top: 5,
  },
  textInputInfo: {
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: Constants.colors.gray,
    paddingLeft: 50,
    paddingBottom: 10,
    color: Constants.colors.textColor,
  },
  updateBtn: {
    backgroundColor: Constants.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 16,
  },
  updateTitle: {
    textTransform: 'uppercase',
    color: Constants.colors.white,
    fontWeight: 'bold',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
