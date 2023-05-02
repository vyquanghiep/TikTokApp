import React from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";



function SignUpScreen({navigation})  {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
          {/*header */}
          <View style={styles.Header}>
            <Text style={styles.loginText}>Sign Up</Text>
          </View>
          {/*body */}
          <View style={styles.body}>
            {/*dong1 */}
            <View></View>
            <View style={styles.inputAC}>
              <View style={styles.input2}>
                <TextInput
                  style={{ alignItems: "center", justifyContent: "center" }}
                  placeholder={"User name"}
                ></TextInput>
              </View>
            </View>
            {/*dong 2 */}
            <View
              style={{
                marginTop: 5,
              }}
            ></View>
            <View style={styles.inputpw}>
              <View style={styles.input2}>
                <TextInput style={{}} placeholder={"Email"}></TextInput>
              </View>
            </View>
            {/*dong 3 */}
            <View
              style={{
                marginTop: 5,
              }}
            ></View>
            <View style={styles.inputpw}>
              <View style={styles.input2}>
                <TextInput style={{}} placeholder={"Phone number"}></TextInput>
              </View>
            </View>
            {/*dong 4 */}
            <View
              style={{
                marginTop: 5,
              }}
            ></View>
            <View style={styles.inputpw}>
              <View style={styles.input2}>
                <TextInput style={{}} placeholder={"Address"}></TextInput>
              </View>
            </View>
            {/*dong 5 */}
            <View
              style={{
                marginTop: 5,
              }}
            ></View>
            <View style={styles.inputpw}>
              <View style={styles.input2}>
                <TextInput style={{}} placeholder={"Password"}></TextInput>
              </View>
            </View>

            {/*login button */}
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Button color="#4475eb" title="Sign Up" />
            </View>
            {/*---------------------------------------------- */}
            <View
              style={{
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text>Already have an account?</Text>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  navigation.navigate('Login');
                }}
              >
                <Text style={{ color: "blue" }}> Login now</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: 5,
              }}
            >
              <Button color="red" title="Or Login With Google" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: '#4475EB',
  
  },
  container2: {
    backgroundColor:'white',
                    margin: 10,
                    flex: 1,
                    borderRadius: 10,
  },
  container3: {
    flex: 1,
    marginVertical: 20,
  },
  Header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText :{
    fontSize: 30,
    fontWeight: 'bold',
    color:'black',
  },
  body: { 
    flex:6,
    margin: 30},

  inputAC:{ marginTop:10,
    flexDirection:'row',
    borderColor: 'grey',
    borderWidth:1,
    borderRadius: 10},

  inputpw: {marginTop:10,
    flexDirection:'row',
    borderColor: 'grey',
    borderWidth:1,
    borderRadius: 10},
  
  footer: {
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input2: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20
  }

  
  
});
