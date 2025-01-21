// CustomerLoginScreen.js
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import FrmButton from '../components/form/FormButton';
import FrmLabel from '../components/form/FormLabel';
import FrmInput from '../components/form/FormTextInput';
import Header from '../components/Header';

const BusinessSignupScreen = ({navigation}) => {
  
  const handleSignUp = () =>{
    navigation.navigate('BusinessLogin');
  };

  return(
    <SafeAreaView style={styles.page}>
    <Header title={'TiffinApp - Business Sign Up'} TxtStyle={{color: 'white'}}/>
    <View style={styles.container}>
        <FrmLabel title={'First Name'}/>
        <FrmInput placeholder={'John'}/>
        <FrmLabel title={'Last Name'}/>
        <FrmInput placeholder={'Doe'}/>
        <FrmLabel title={'Email'}/>
        <FrmInput placeholder={'johndoe@example.com'}/>
        <FrmLabel title={'Contact No'}/>
        <FrmInput placeholder={'1234567890'}/>
        <FrmLabel title={'Password'}/>
        <FrmInput placeholder={'*******'}/>
        <FrmLabel title={'Confirm Password'}/>
        <FrmInput placeholder={'*******'}/>
        <FrmButton title={'Sign Up'} onPress={handleSignUp}/>

    </View>
    
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    page:{
        flex: 1,
    },
  container: {
    padding: 50,
    flex: 1,
    justifyContent: 'top',
    alignItems: 'left',
    backgroundColor: '#e8ecf4',
  },
  title: {
    fontSize: 30,
    color: '#1D2A32',
  },
});

export default BusinessSignupScreen;
