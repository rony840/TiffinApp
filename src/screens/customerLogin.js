// CustomerLoginScreen.js
import React, {useState} from 'react';
import { View, SafeAreaView,Text, StyleSheet, Pressable } from 'react-native';
import FrmButton from '../components/form/FormButton';
import FrmLabel from '../components/form/FormLabel';
import FrmInput from '../components/form/FormTextInput';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

//using custom components for input, label, button and header.
const CustomerLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  // Extract username from email
  const handleLogin = () => {
    if (email && password) {
      // For now, we just extract the username from the email, later we can add actual validation or backend logic
      const username = email.split('@')[0]; // Extracting username from email
      // Navigate to the CustomerMenu screen and pass the username
      navigation.navigate('CustomerMenu', { username });
    } else {
      // Handle the case where login info is missing, e.g., show an alert
      alert('Please enter your email and password.');
    }
  };
    return(
      <SafeAreaView style={styles.page}>
    <Header title={'TiffinApp - Customer Login'} TxtStyle={{color: 'white'}}/>
    <View style={styles.container}>
        <FrmLabel title={'Email'}/>
        <FrmInput placeholder={'johndoe@example.com'} value={email} onChange={setEmail}/>
        <FrmLabel title={'Password'}/>
        <FrmInput placeholder={'*******'} value={password} onChange={setPassword} secureTextEntry/>
        <FrmButton title={'Log In'} onPress={handleLogin}/>
        <View style={styles.signupContainer}>
          <Text style={{fontSize: 16, padding: 5 }}>Don't have an account?</Text>
          <Pressable
            onPress={() => navigation.navigate('CustomerSignup')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(255, 223, 181)' : 'rgba(255, 255, 255, 0)',
              },
              styles.wrapperCustom,
            ]}
          >
            <Text style={{ fontSize: 16,color: '#d39900', fontWeight: 800}}> Sign-Up Now!</Text>
          </Pressable>
        </View>
    </View>
  </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  page:{
    flex: 1,
    backgroundColor: '#e8ecf4'
    
  },
  signupContainer: {
    flexDirection: 'row', // Align text and button horizontally
    justifyContent: 'center', // Center them horizontally
    alignItems: 'center', // Center them vertically
    marginTop: 20, // Adjust spacing between inputs and signup
  },
  container: {
    padding: 50,
    flex: 1,
    justifyContent: 'top',
    alignItems: 'left',
    marginVertical: 150,
    
  },
  title: {
    fontSize: 30,
    color: '#1D2A32',
  },
});

export default CustomerLoginScreen;
