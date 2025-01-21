import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './LoadingScreen';
import CustomerLoginScreen from '../../screens/CustomerLogin';
import BusinessLoginScreen from '../../screens/BusinessLogin';
import CustomerSignupScreen from '../../screens/CustomerSignup';
import BusinessSignupScreen from '../../screens/BusinessSignup';
import CustomerMenuScreen from '../../screens/CustomerMenu';
import BusinessMenuScreen from '../../screens/BusinessMenu';
import LandingScreen from '../../screens/LandingScreen';

const RootStack = createNativeStackNavigator({
    screens: {
        Loading: LoadingScreen,
        Landing: LandingScreen,
        BusinessLogin: BusinessLoginScreen,
        BusinessSignup: BusinessSignupScreen,
        BusinessMenu: BusinessMenuScreen,
        CustomerLogin: CustomerLoginScreen,
        CustomerSignup: CustomerSignupScreen,
        CustomerMenu: CustomerMenuScreen,
    },
  });
  
const Navigation = createStaticNavigation(RootStack);

const AppNavigation = () => {
    return <Navigation />;
  };

export default AppNavigation

