import {
  ActivityIndicator,
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
import Constants from '../../Constants';

const AddPaymentScreen = ({ route, navigation }) => {
  const [nameOnCard, setNameOnCard] = useState(null);
  const [creditCardNumber, setCreditCardNumber] = useState(null);
  const [expires, setExpiresOn] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);

  // animation when click button "ADD PAYMENT METHOD"
  const [buttonColor, setButtonColor] = useState('#fa3c6a');
  const [addButtonText, setAddButtonText] = useState('Add payment method');
  const [isLoading, setIsLoading] = useState(false);
  const handleAddPaymentMethod = () => {
    setButtonColor('#bbbbbb');
    setAddButtonText('PROGRESSING...');
    setIsLoading(true);

    setTimeout(function () {
      setButtonColor('#fa3c6a');
      setAddButtonText('Update');
      setIsLoading(false);
      navigation.navigate('Payment');
      ToastAndroid.show('Payment Added!', ToastAndroid.SHORT);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 50 }}
      >
        <View style={styles.bodyView}>
          <View style={styles.inputView}>
            <Text style={styles.inputName}>Name on Card</Text>
            <TextInput
              style={styles.inputCard}
              onChangeText={setNameOnCard}
              value={nameOnCard}
              inputMode="text"
              numberOfLines={1}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputName}>Credit Card Number</Text>
            <TextInput
              style={styles.inputCard}
              onChangeText={setCreditCardNumber}
              value={creditCardNumber}
              inputMode="numeric"
              numberOfLines={1}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={[styles.inputView, { width: '45%' }]}>
              <Text style={styles.inputName}>Expires On</Text>
              <TextInput
                style={styles.inputCard}
                onChangeText={setExpiresOn}
                value={expires}
                inputMode="text"
                numberOfLines={1}
                placeholder="MM/YYYY"
              />
            </View>
            <View style={[styles.inputView, { width: '45%' }]}>
              <Text style={styles.inputName}>CVV</Text>
              <TextInput
                style={styles.inputCard}
                onChangeText={setCvv}
                value={cvv}
                inputMode="text"
                numberOfLines={1}
              />
            </View>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputName}>ZIP Code</Text>
            <TextInput
              style={styles.inputCard}
              onChangeText={setZipCode}
              value={zipCode}
              inputMode="text"
              numberOfLines={1}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputName}>Billing Address</Text>
            <TextInput
              style={styles.inputCard}
              onChangeText={setBillingAddress}
              value={billingAddress}
              inputMode="text"
              numberOfLines={1}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={[styles.inputView, { width: '45%' }]}>
              <Text style={styles.inputName}>State</Text>
              <TextInput
                style={styles.inputCard}
                onChangeText={setState}
                value={state}
                inputMode="text"
                numberOfLines={1}
              />
            </View>
            <View style={[styles.inputView, { width: '45%' }]}>
              <Text style={styles.inputName}>City</Text>
              <TextInput
                style={styles.inputCard}
                onChangeText={setCity}
                value={city}
                inputMode="text"
                numberOfLines={1}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: buttonColor }]}
          onPress={handleAddPaymentMethod}
        >
          <Text style={styles.addButtonText}>{addButtonText}</Text>
        </TouchableOpacity>
      </View>

      {/* Show loading icon in the middle of the screen */}
      <Modal visible={isLoading} transparent={true}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </Modal>
    </View>
  );
};

export default AddPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bodyView: {},
  bottomNav: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: Constants.screen.width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: Constants.colors.primary,
    marginVertical: 10,
    borderRadius: 10,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  inputView: {
    marginBottom: 20,
  },
  inputName: {
    color: Constants.colors.textColor,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputCard: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Constants.colors.lightGray,
    paddingHorizontal: 14,
    paddingVertical: 6,
    color: Constants.colors.textColor,
    fontSize: 14,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
