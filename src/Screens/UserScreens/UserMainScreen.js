import { StatusBar } from "expo-status-bar";
import { BackHandler, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import BillPaymentCard from "../../Components/BillPaymetCard";
import CalendarComponent from "../../Components/CalanderComponent";
import CustomStatusCard from "../../Components/CustomStatusCard";

export default function UserMainScreen() {
    return (
        <View style={styles.container} >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewContainer}>
                <CustomStatusCard />
                <BillPaymentCard />
            </ScrollView>
            <View style={styles.calendarContainer}>
                <Text style={styles.calendarText}>
                    Collection Record
                </Text>
                <CalendarComponent />
            </View>
            <TouchableOpacity style={styles.complainContainer}>
                <Text style={styles.complainText}>
                    Register Complaint
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: StatusBar.currentHeight,
    },
    scrollViewContainer: {
        marginTop: 80,
        flexGrow: 0,
    },
    calendarContainer:{
        padding:20
    }
    ,calendarText:{
        textAlign:"center",
        padding:20,
        fontSize:24,
        fontWeight:'bold',
        letterSpacing:1.2
    }
    ,
    complainContainer: {
        marginTop: 40,
        backgroundColor: 'coral',
        padding: 15,
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 18
    },
    complainText: {
        textAlign: "center",
        fontSize: 24,
        color: "white",
        fontWeight: 'bold'
    }
})