// CustomerLoginScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import FrmButton from '../src/components/form/formButton';
import FrmLabel from '../src/components/form/formLabel';
import FrmInput from '../src/components/form/formTextInput';
import Header from '../src/components/Header';

//uses custom components for input, label and button

const CustomerSignup = ({navigation}) => {
  const handleSignUp = () => {
    navigation.navigate('CustomerLogin');
  };
  return(
    <View style={styles.page}>
    <Header title={'TiffinApp - Customer Sign Up'} TxtStyle={{color: 'white'}}/>
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
    
  </View>
  );
}
  
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

export default CustomerSignup;
