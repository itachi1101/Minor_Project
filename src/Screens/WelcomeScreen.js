import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../Components/CustomButton';
import welcomeImage from '../Images/welcomeImage.jpg'
export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image style={styles.img} source={welcomeImage}/>
            <CustomButton title="Let's Begin"/>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    width:"100%",
    backgroundColor: '#fff',
    display:"flex",
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper:{
    width:"80%",
    height:"70%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:"100%",
    height:"60%",
    marginBottom:40
  }
  
});
