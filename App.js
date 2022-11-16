import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PreviousBills from './src/Screens/UserScreens/PreviousBills';
import UserMainScreen from './src/Screens/UserScreens/UserMainScreen';
import UserRegisterComplaintScreen from './src/Screens/UserScreens/UserRegisterComplaint';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <UserMainScreen/> */}
      <UserRegisterComplaintScreen/>
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
