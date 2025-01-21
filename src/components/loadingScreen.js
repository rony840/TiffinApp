import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoadingScreen = () => {
  const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Landing'); // After 2 seconds, go to Welcome screen
    }, 2000); // Adjust this time as needed
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        alt="App Logo"
        resizeMode="contain"
        style={styles.loadImg}
        source={require('../images/tiffin.png')}
      />
      <ActivityIndicator size="large" color="#d39900" />
      <Text style={styles.loadingText}>TiffinApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf4',
  },
  loadImg: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d39900',
    marginTop: 10,
  },
});

export default LoadingScreen;
