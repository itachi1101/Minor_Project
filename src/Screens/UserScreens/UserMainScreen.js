import { StatusBar } from "expo-status-bar";
import { BackHandler, ScrollView, StyleSheet, Text, View } from "react-native";
import BillPaymentCard from "../../Components/BillPaymetCard";
import CustomStatusCard from "../../Components/CustomStatusCard";

export default function UserMainScreen() {
    return (
        <View style={styles.container} >
            <ScrollView horizontal={true} style={styles.scrollViewContainer}>
                <CustomStatusCard />
                <BillPaymentCard />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: StatusBar.currentHeight,
    },
    scrollViewContainer: {
        width: "100%",
        height: "80%",
        marginTop: 80,
    }
})