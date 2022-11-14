import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function BillPaymentCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Pay Your Bill
            </Text>
            <TouchableOpacity style={styles.payContainer}>
                <Text style={styles.payText}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        height: 200,
        borderRadius: 20,
        padding: 20,
        width: 300,
        marginLeft: 30,
        marginRight: 30
    },
    heading:{
        padding:10,
        fontSize:25,
        fontWeight:'bold',
        letterSpacing:1.2,
        marginBottom:30,
        textAlign:"center"
    },
    payContainer:{
        display:"flex",
        justifyContent:"center",
        padding:15,
        backgroundColor:'coral',
        borderRadius:15,
    },
    payText:{
        fontSize:20,
        color:"white",
        textAlign:"center"

    }
})