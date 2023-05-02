import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Constants from '../../Constants';

const NavigateCard = ({ icon, name, screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardView}
      onPress={() => navigation.navigate(screenName)}
    >
      <View style={styles.leftView}>
        <Icon name={icon} size={20} />
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.arrowBtn}>
        <Icon name="chevron-right" size={15} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderColor: Constants.colors.lightGray,
    borderWidth: 1,
    borderBottomColor: Constants.colors.transparent,
  },
  leftView: {
    flexDirection: 'row',
    color: Constants.colors.black,
  },
  title: {
    marginLeft: 10,
    color: Constants.colors.black,
  },
});
