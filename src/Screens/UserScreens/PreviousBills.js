import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BillData from '../../fakeData/PreviousBillData'
export default function PreviousBills() {
    return (
        <View style={styles.container}>
            <View style={styles.headingWrapper}>

                <Text style={styles.heading}>
                    BILLING HISTORY
                </Text>
                <Text style={styles.subHeading}>
                    Address:
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>
                {
                    BillData.map((b) => {
                        return (
                            <View key={b.id} style={styles.listContainer}>
                                <Text style={styles.listContainerDate}>{b.date}</Text>
                                <Text style={styles.listContainerAmount}> {'\u20B9'} {b.amount}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: StatusBar.currentHeight
    },
    headingWrapper: {
        marginTop: 50,
        padding: 20,
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        textAlign:"center"
        
    },
    subHeading: {
        fontSize: 15,
        color: "gray",
        marginTop: 12,
        marginBottom:20
        
    },
    scrollContainer:{
        backgroundColor:"whitesmoke",
        width:350,
        padding:20,
        borderRadius:20,
        marginBottom:20,
        shadowColor:"#52006A",
        elevation:30,
        flexGrow:0
    },
    listContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        padding:12,
        borderBottomWidth:1,
        paddingVertical:18,
        borderColor:"gray"
    },
    listContainerDate:{
        fontSize:16,
        fontWeight:'bold',
        padding:3
    },
    listContainerAmount:{
        fontSize:16,
        padding:3,
        marginRight:19
    }
})