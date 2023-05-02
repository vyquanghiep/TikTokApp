import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from '../Constants';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/account/AccountScreen';
import ProfileScreen from '../screens/account/profile/ProfileScreen';
import EditProfileScreen from '../screens/account/profile/EditProfileScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import PaymentScreen from '../screens/payment/PaymentScreen';
import AddPaymentScreen from '../screens/payment/AddPaymentScreen';

const AccountStack = createNativeStackNavigator();

const AccountStackScreens = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        // headerTitle: '',
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <MaterialCommunityIcons
                name="share-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}
              >
                <MaterialCommunityIcons
                  name="cart-minus"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
              <Text
                style={{
                  paddingHorizontal: 6,
                  position: 'absolute',
                  backgroundColor: Constants.colors.primary,
                  fontSize: 10,
                  color: Constants.colors.white,
                  borderRadius: 99,
                  right: 0,
                  top: 0,
                }}
              >
                2
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}
              >
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
              <Text
                style={{
                  paddingHorizontal: 6,
                  position: 'absolute',
                  backgroundColor: Constants.colors.primary,
                  fontSize: 10,
                  color: Constants.colors.white,
                  borderRadius: 99,
                  right: 0,
                  top: 0,
                }}
              >
                0
              </Text>
            </View>
          </View>
        ),
      }}
    >
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        option={{
          title: 'Account',
        }}
      />
      <AccountStack.Screen
        name="Profile"
        component={ProfileScreen}
        option={{
          title: 'Profile',
        }}
      />
      <AccountStack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        option={{
          title: 'Edit Profile',
        }}
      />
      <AccountStack.Screen
        name="Payment"
        component={PaymentScreen}
        option={{
          title: 'Payment',
        }}
      />
      <AccountStack.Screen
        name="AddPayment"
        component={AddPaymentScreen}
        option={{
          title: 'AddPayment',
        }}
      />
      <AccountStack.Screen
        name="Login"
        component={LoginScreen}
        option={{
          title: 'Login',
        }}
      />
      <AccountStack.Screen
        name="SignUp"
        component={SignUpScreen}
        option={{
          title: 'SignUp',
        }}
      />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreens;
