import {  StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function CustomButton({title}) {
  return (
            <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>{title}</Text>
            </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor:"coral",
    width:200,
    height:60,
    borderRadius:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  appButtonText:{
    fontSize:20,
    fontWeight:'bold',
    letterSpacing:1.2,
    color:"white"
  }
  
});
