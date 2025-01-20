import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import LoadingScreen from './src/components/loadingScreen';
import WelcomeScreen from './screens/welcomeScreen';
import BusinessLoginScreen from './screens/businessLogin';
import CustomerLoginScreen from './screens/customerLogin';
import BusinessSignup from './screens/businessSignup';
import CustomerSignup from './screens/customerSignup';
import CustomerMenu from './screens/customerMenu';
import BusinessMenu from './screens/businessMenu';

//using StackNavigation libarary
//npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-native-gesture-handler 
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="BusinessLogin" component={BusinessLoginScreen} />
        <Stack.Screen name="CustomerLogin" component={CustomerLoginScreen} />
        <Stack.Screen name="CustomerSignup" component={CustomerSignup} />
        <Stack.Screen name="BusinessSignup" component={BusinessSignup} />
        <Stack.Screen name="CustomerMenu" component={CustomerMenu} />
        <Stack.Screen name="BusinessMenu" component={BusinessMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
