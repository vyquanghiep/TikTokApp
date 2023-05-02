import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from '../../Constants';

const CreditCard = ({ creditCard }) => {
  return (
    <View style={styles.container}>
      <View style={styles.creditCardHeader}>
        <Text style={styles.creditCardText}>Credit Card Number</Text>
        <View style={styles.creditCardIndex}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <View
              style={{
                borderColor: Constants.colors.primary,
                width: 14,
                height: 14,
                borderWidth: 2,
                borderRadius: 999,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {creditCard?.index ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: Constants.colors.primary,
                    width: 5,
                    height: 5,
                    borderRadius: 999,
                  }}
                ></TouchableOpacity>
              ) : null}
            </View>
            <Text
              style={{
                textTransform: 'uppercase',
                fontSize: 10,
                color: '#000',
              }}
            >
              default
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.creditCardView}>
          <Text style={styles.creditCardNumberText}>
            {creditCard?.creditCardNumber}
          </Text>
          <Image
            style={styles.creditCardImg}
            source={Constants.images.masterCard}
          />
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            Alert.alert(
              'Information',
              'Function is currently under maintenance!',
            );
          }}
        >
          <MaterialCommunityIcons
            name="delete-outline"
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  creditCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  creditCardText: {
    color: Constants.colors.textColor,
    fontSize: 14,
    fontWeight: 'bold',
  },
  creditCardIndex: {},
  bodyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditCardView: {
    width: '84%',
  },
  creditCardNumberText: {
    paddingVertical: 12,
    borderColor: Constants.colors.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    position: 'relative',
  },
  creditCardImg: {
    position: 'absolute',
    width: 40,
    height: 32,
    top: '15%',
    right: 5,
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 99,
    backgroundColor: Constants.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
