import React from 'react';
import {Text, TextInput, View, StyleSheet, TouchableOpacity, Button} from 'react-native';



function LoginScreen({navigation})  {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    {/*header */}
                    <View style={styles.Header}>
                        <Text style={styles.loginText}>Login</Text>
                    </View>
                    {/*body */}
                    <View style={styles.body}>
                        {/*dong1 */}
                        <View>
                            <Text style={{
                                color: 'black', fontSize: 15
                            }}>Username</Text>
                        </View>
                        <View style={styles.inputAC}>
                            <View style={{
                                flex: 1,
                                padding: 10

                            }}>
                                <TextInput style={{}}
                                    placeholder={'Type your Username'}>


                                </TextInput>

                            </View>
                        </View>
                        {/*dong 2 */}
                        <View style={{
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: 'black', fontSize: 15
                            }}>Password</Text>
                        </View>
                        <View style={styles.inputpw}>
                            <View style={{
                                flex: 1,
                                padding: 10

                            }}>
                                <TextInput style={{}}
                                    placeholder={'Type your password'}
                                   >


                                </TextInput>

                            </View>

                        </View>
                        <Text style={{
                            marginLeft: 200,
                            marginTop: 5
                        }}>Fogot password?</Text>


                        {/*login button */}
                        
                       
                        
                        <View style={{
                            marginTop: 10,
                        }}
                        >
                            
                            <Button
                             onPress={() => navigation.navigate("Account")}
                                color="#4475eb"
                                title="Login" />
                        </View>
                       
                        {/*---------------------------------------------- */}
                        <View style={{
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text>Or Login Using</Text>
                        </View>
                        <View style={{
                            marginTop: 10,
                        }}
                        >
                            <Button

                                color="red"
                                title="Login With Google" />
                        </View>


                    </View>

                    {/*footer */}
                    <View style={styles.footer}>
                        <Text>Or Sign Up Using</Text>
                        <TouchableOpacity style={{
                            padding: 20,
                        }}
                        onPress={() => {
                          navigation.navigate('SignUp');
                        }}
                        >
                            <Text style={{
                                color: 'blue',
                                fontWeight: '500',
                            }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    );
}
export default LoginScreen 
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
    }
  
    
    
  });

  


 

