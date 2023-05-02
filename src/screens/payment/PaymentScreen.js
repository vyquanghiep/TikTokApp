import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Constants from '../../Constants';
import { useNavigation } from '@react-navigation/native';
import CreditCard from '../../components/cards/CreditCard';

const creditCards = [
  {
    id: '1',
    nameOnCard: 'Ho Thien Phuoc',
    creditCardNumber: '123456789101112',
    expires: '12/2023',
    cvv: '123',
    zipCode: '550000',
    billingAddress: 'Tam Phuoc, Phu Ninh, Quang Nam, Viet Nam',
    state: 'Phu Ninh',
    City: 'Quang Nam',
    index: true,
  },
  {
    id: '2',
    nameOnCard: 'Ho Thien Phuoc',
    creditCardNumber: '123456789221221',
    expires: '12/2023',
    cvv: '123',
    zipCode: '550000',
    billingAddress: 'Tam Phuoc, Phu Ninh, Quang Nam, Viet Nam',
    state: 'Phu Ninh',
    City: 'Quang Nam',
    index: false,
  },
];

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.bodyView}>
        <FlatList
          data={creditCards}
          renderItem={({ item }) => <CreditCard creditCard={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.navigate('AddPayment');
          }}
        >
          <Text style={styles.addButtonText}>Add another method</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bodyView: {
    marginBottom: 50,
  },
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
});
