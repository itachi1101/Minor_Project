import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserMainScreen from './src/Screens/UserScreens/UserMainScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <UserMainScreen/>

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
