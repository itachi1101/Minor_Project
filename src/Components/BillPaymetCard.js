import { StyleSheet, Text, View } from "react-native";

export default function BillPaymentCard(){
    return(
        <View style={styles.container}>
            <Text>
                Bill Payment Card
            </Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        backgroundColor: '#f58478', 
        height:200,
        borderRadius:20,
        padding:20,
        width:300,
        marginLeft:30,
        marginRight:30
    }
})