
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../Components/CustomButton';

export default function SelectUserTypeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <Text style={styles.text}>
            Choose your account type
        </Text>
        <CustomButton title="Admin"/>
        <CustomButton title="User"/>
        <CustomButton title="Vehicle Owner"/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:`100%`,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight:'bold',
    fontSize:25
  },
  wrapper:{
    width:"90%",
    height:"40%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center"

  }
});
