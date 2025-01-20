import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';
import FrmButton from '../src/components/form/formButton';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.header}>
        <Image
          alt="App Logo"
          resizeMode="contain"
          style={styles.headerImg}
          source={require('../src/images/tiffin.png')}
        />
        <Text style={styles.title}>
          The <Text style={{ color: '#d39900' }}>TiffinApp</Text>
        </Text>
        <Text style={styles.subtitle}>Mom's Taste at your Doorstep!</Text>
      </View>

      <View style={styles.btnContainer}>
        <FrmButton
          title={'Business Login'}
          btStyle={{ height: 100, width: 300, marginBottom: 40 }}
          btTxt={{ fontSize: 24 }}
          onPress={() => navigation.navigate('BusinessLogin')}
        />
        <FrmButton
          title={'Customer Login'}
          btStyle={{ height: 100, width: 300, marginBottom: 20 }}
          btTxt={{ fontSize: 24 }}
          onPress={() => navigation.navigate('CustomerLogin')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginVertical: 136,
  },
  title: {
    fontSize: 41,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 36,
  },
});

export default WelcomeScreen;
