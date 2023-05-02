import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from '../../Constants';
import NavigateCard from '../../components/cards/NavigateCard';

function AccountScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.rootView}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.parentView}>
          <Text style={styles.parentTitle}>Account Settings</Text>
          <View style={styles.childrenView}>
            <NavigateCard icon="user-alt" name="Profile" screenName="Profile" />
            <NavigateCard
              icon="qrcode"
              name="My QR Code"
              screenName="Account"
            />
            {/* <NavigateCard icon="project-diagram" name="Analytics" /> */}
            <NavigateCard
              icon="credit-card"
              name="Payment"
              screenName="Payment"
            />
            <NavigateCard icon="wallet" name="My Wallet" screenName="Account" />
            <NavigateCard
              icon="wallet"
              name="My Community Wallet"
              screenName=""
            />
            <NavigateCard
              icon="sign-out-alt"
              name="Sign out"
              screenName="Login"
            />
            {/* <NavigateCard icon="store-alt" name="Store Info" /> */}
          </View>
        </View>

        <View style={styles.parentView}>
          <Text style={styles.parentTitle}>Security Settings</Text>
          <View style={styles.childrenView}>
            <NavigateCard
              icon="ellipsis-h"
              name="Password reset"
              screenName="Account"
            />
            <NavigateCard
              icon="lock"
              name="Face ID and PIN"
              screenName="Account"
            />
            <NavigateCard
              icon="sign-out-alt"
              name="Sign out"
              screenName="Login"
            />
          </View>
        </View>

        <View style={styles.parentView}>
          <Text style={styles.parentTitle}>App Settings</Text>
          <View style={styles.childrenView}></View>
        </View>
      </ScrollView>
    </View>

    // <View style={styles.rootView}>
    //   <TouchableOpacity style={styles.signInBtn} onPress={showSignInScreen}>
    //     <Text style={styles.signInText}>Sign In</Text>
    //   </TouchableOpacity>

    //   <TouchableOpacity style={styles.signInBtn} onPress={showSignUpScreen}>
    //     <Text style={styles.signInText}>Sign Up</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  signInBtn: {
    margin: 10,
    padding: 10,
    backgroundColor: 'green',
  },
  signInText: {
    color: Constants.colors.white,
  },
  parentView: {
    marginTop: 20,
  },
  parentTitle: {
    marginBottom: 6,
    marginLeft: 10,
    color: Constants.colors.textColor,
  },
});
