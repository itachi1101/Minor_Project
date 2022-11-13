import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import profileImage from '../../Images/profile_image.webp'
import { useState } from "react";

export default function UserProfileScreen() {
    const [edit, setEdit] = useState(false)
    const handleEdit = (e) => {
        e.preventDefault();
        setEdit(!edit)
    }
    const handleSave = (e) => {
        e.preventDefault();
        setEdit(!edit)

    }
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.scrollContainer}>
                <View style={styles.wrapper}>
                    <Text style={styles.heading}>
                        Profile
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.profileImg} source={profileImage} />
                    </View>
                    <View style={styles.personalDetails}>
                        <View style={styles.container1}>
                            <Text style={styles.title}>
                                PERSONAL DETAILS
                            </Text>
                            <TouchableOpacity style={styles.editbtn} >
                                {
                                    edit ? <Text style={styles.editBtnText} onPress={handleSave}>Save</Text> :
                                        <Text style={styles.editBtnText} onPress={handleEdit}>Edit</Text>
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container2}>
                            <Text style={styles.labels}>Username</Text>
                            <TextInput style={styles.inputStyle} autoCapitalize="none"
                                autoCorrect={false} editable={edit}
                                placeholder="Aviral Budhani"
                            />
                            <Text style={styles.labels}>House Number</Text>
                            <TextInput style={styles.inputStyle} autoCapitalize="none"
                                autoCorrect={false} editable={edit}
                                placeholder="E-51"
                            />
                            <Text style={styles.labels}>Sector</Text>
                            <TextInput style={styles.inputStyle} autoCapitalize="none"
                                autoCorrect={false} editable={edit}
                                placeholder="20"
                            />
                            <Text style={styles.labels}>Place</Text>
                            <TextInput style={styles.inputStyle} autoCapitalize="none"
                                autoCorrect={false} editable={edit}
                                placeholder="Noida"
                            />
                            <Text style={styles.labels}>Email</Text>
                            <TextInput style={styles.inputStyle} autoCapitalize="none"
                                autoCorrect={false} editable={edit}
                                placeholder="notifyaviral@gmail.com"
                            />
                            <Text style={styles.labels}>Mobile Number</Text>
                            <TextInput style={styles.inputStyle} autoCapitalize="none"
                                autoCorrect={false} editable={edit}
                                placeholder="8076926336"
                            />

                        </View>
                    </View>
                </View>

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
    scrollContainer: {
        width: "95%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        marginTop: 80,

    },
    wrapper: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    ,
    heading: {
        padding: 15,
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 1.4
    }
    ,
    imageContainer: {
        height: 200,
        width: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
    ,
    profileImg: {
        height: 180,
        width: 180,
        borderRadius: 180 / 2
    }
    ,
    personalDetails: {
        backgroundColor: 'whitesmoke',
        width: "99%",
        marginTop: 20,
        borderRadius: 12,
        marginBottom:50
    }
    ,
    container1: {
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "",
        justifyContent: 'space-between'
    }
    ,
    title: {
        fontSize: 16,
        color: "gray",
        fontWeight: 'bold'
    }
    ,
    editbtn: {

    },
    editBtnText: {
        color: "blue",
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1.2
    },
    container2: {
        paddingHorizontal: 20,
        color: 'white',
        paddingVertical: 10
    },
    labels: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#7d7d7d",
        marginTop: 5,
        marginBottom: 5,
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 1,
        fontSize: 16,
        marginBottom: 10,

    }
})