import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CustomButton from "../Components/CustomButton";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.wrapper}>
                <Text style={styles.mainText}>
                    Login
                </Text>
                <View style={styles.formContainer}>
                    <Text style={styles.labels}>Enter Mobile Number</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} />
                    <Text style={styles.labels}>Enter your Password</Text>
                    <TextInput style={styles.inputStyle} autoCapitalize="none"
                        autoCorrect={false} secureTextEntry={true} />
                    <TouchableOpacity style={styles.linkContainer}>
                        <Text style={styles.linkText}>Don't have an account?
                            <Text style={{color:"blue",marginLeft:"10px"}}>
                                 SignUp
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.btnContainer}>
                        <CustomButton title="LOGIN" />
                    </View>
                </View>
            </View>
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
        backgroundColor: "#fff"
    },
    wrapper: {
        width: "90%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    mainText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "gray"
    },
    formContainer: {
        height: "80%",
        width: "100%",
        marginTop: 20
    },
    labels: {
        fontSize: 18,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,

    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontSize: 18,
        marginBottom: 20
    },
    linkContainer: {
        marginTop: 10,
    },
    linkText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "gray"
    }

    ,
    btnContainer: {
        marginTop: 30
    }
})