import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './LoadingScreen';
import CustomerLoginScreen from '../screens/CustomerLogin';
import BusinessLoginScreen from '../screens/BusinessLogin';
import CustomerSignupScreen from '../screens/CustomerSignup';
import BusinessSignupScreen from '../screens/BusinessSignup';
import CustomerMenuScreen from '../screens/CustomerMenu';
import BusinessMenuScreen from '../screens/BusinessMenu';
import LandingScreen from '../screens/LandingScreen';

const RootStack = createNativeStackNavigator({
  screens: {
    Loading: {
      screen: LoadingScreen,
      options: { headerShown: false }  // Disable header for Loading screen
    },
    Landing: {
      screen: LandingScreen,
      options: { headerShown: false }  // Disable header for Landing screen
    },
    BusinessLogin: {
      screen: BusinessLoginScreen,
      options: { headerShown: false }  // Disable header for BusinessLogin screen
    },
    BusinessSignup: {
      screen: BusinessSignupScreen,
      options: { headerShown: false }  // Disable header for BusinessSignup screen
    },
    BusinessMenu: {
      screen: BusinessMenuScreen,
      options: { headerShown: false }  // Disable header for BusinessMenu screen
    },
    CustomerLogin: {
      screen: CustomerLoginScreen,
      options: { headerShown: false }  // Disable header for CustomerLogin screen
    },
    CustomerSignup: {
      screen: CustomerSignupScreen,
      options: { headerShown: false }  // Disable header for CustomerSignup screen
    },
    CustomerMenu: {
      screen: CustomerMenuScreen,
      options: { headerShown: false }  // Disable header for CustomerMenu screen
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

const AppNavigation = () => {
  return <Navigation />;
};

export default AppNavigation;
