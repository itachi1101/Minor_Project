import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function UserRegisterComplaintScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Register You Complaint
            </Text>
            <ScrollView style={styles.ScrollViewContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>HOUSE NUMBER : </Text>
                    <Text style={styles.value}>E-51</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>SECTOR : </Text>
                    <Text style={styles.value}>20</Text>
                </View>
                <View style={styles.wrapper}>
                    <Text style={styles.key}>OWNER NAME : </Text>
                    <Text style={styles.value}>Aviral Budhani</Text>
                </View>
                <TextInput style={styles.input} placeholder="write your complaint" />
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btn}>UPLOAD PHOTO</Text>
                </TouchableOpacity>
                <View style={{ display: "flex", justifyContent: "center", width: "100%", flexDirection: "column", alignItems: "center" }}>
                    <TouchableOpacity style={styles.submitContainer}>
                        <Text style={styles.btnSubmit}>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: StatusBar.currentHeight,
        alignItems: "center"
    },
    heading: {
        marginTop: 60,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        marginBottom: 20
    },
    ScrollViewContainer: {
        backgroundColor: 'whitesmoke',
        width: 360,
        borderRadius: 20,
        padding: 15,
        flexGrow: 0
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        width: "100%",
        justifyContent: "space-between",
    },
    key: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: 'gray'
    },
    value: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        padding: 10
    },
    input: {
        height: 200,
        padding: 10,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
        display: "flex",
        flexWrap: "wrap"
    },
    btnContainer: {
        padding: 10,
        backgroundColor: 'coral',
        width: 150,
        borderRadius: 10,
        marginBottom: 40,
    },
    btn: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center"
    },
    submitContainer: {
        padding: 10,
        backgroundColor: 'black',
        width:"90%",
        borderRadius: 20,
        marginBottom: 40,
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
    },
    btnSubmit: {
        color: "white",
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center"
    }

})