import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import SelectUserTypeScreen from './src/Screens/SelectUserTypeScreen';
import RegisterScreen from './src/Screens/SignUpScreen';
import PreviousBills from './src/Screens/UserScreens/PreviousBills';
import UserMainScreen from './src/Screens/UserScreens/UserMainScreen';
import UserProfileScreen from './src/Screens/UserScreens/UserProfileScreen';
import UserRegisterComplaintScreen from './src/Screens/UserScreens/UserRegisterComplaint';
import WelcomeScreen from './src/Screens/WelcomeScreen';

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WelcomeScreen/>
      {/* <SelectUserTypeScreen/> */}
      {/* <RegisterScreen/> */}
      {/* <LoginScreen/> */}
      {/* <UserMainScreen/> */}
      {/* <UserProfileScreen/> */}
      {/* <UserRegisterComplaintScreen/> */}
      {/* <PreviousBills/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
