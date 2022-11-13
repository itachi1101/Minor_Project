import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
export default function CustomStatusCard() {
    const [status,setStatus]=useState(false)
   
    return (
        <View style={styles.container}>
            <Text>
                
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f58478', 
        height:200,
        borderRadius:20,
        padding:20,
        width:300,
        marginLeft:30,
    }
})