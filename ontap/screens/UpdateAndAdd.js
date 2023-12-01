import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';


export default function UpdateAndAdd({navigation, route}) {
    const [toDoNew, setToDoNew] = useState('');
    const [userData, setUserData] = useState(route.params.data);
    
    console.log(userData);
    const [status, setStatus] = useState(false);

    const handelAdd = () => {
        fetch(`https://6544ab0b5a0b4b04436caf78.mockapi.io/api/ToDo/${userData[0].id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: [...userData[0].text, toDoNew] }),
    })
        .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
            return response.json();
        })
            .then(data => {
            console.log('Success:', data);
            setToDoNew('');
            setStatus(true);
            navigation.navigate("Home", { userData: [data] });
        })
            .catch(error => {
            console.error('Error:', error.message);
        });
    };  

    const handleHome = () => {
        navigation.navigate("Home", { email, data, update });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image style={styles.avatar} resizeMode="contain" source={require("../assets/avt.png")} />
            <View style={styles.userInfoText}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>name</Text>
                <Text style={{ fontSize: 18 }}>Have a great day ahead</Text>
            </View>
        </View>
            <Pressable onPress={() => { navigation.navigate("Home", { email }) }}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
        </View>

        <View style={styles.heading}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>ADD TO JOB</Text>
        </View>

        <View style={styles.inputContainer}>
            <FontAwesome name="sticky-note-o" size={24} color="green" />
            <TextInput
            style={styles.input}
            value={toDoNew}
            onChangeText={setToDoNew}
            placeholder="Enter your job"
            />
        </View>

        <Pressable style={styles.button} onPress={()=>{navigation.navigate("UpdateAndAdd")}}>
            <Text style={styles.buttonText}>FINISH</Text>
            <AntDesign name="arrowright" size={24} color="#fff" />
        </Pressable>

        <Pressable onPress={handelAdd} style={styles.button}>
            <Text style={styles.buttonText}>HOME</Text>
            <AntDesign name="arrowright" size={24} color="#fff" />
        </Pressable>

        <Image style={styles.image} resizeMode="contain" source={require("../assets/image.png")} />
    </View>
    );
}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 50,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 50,
        height: 50,
    },
    userInfoText: {
        marginLeft: 10,
    },
    heading: {
        marginTop: 20,
    },
    inputContainer: {
        width: '300px',
        height: '50px',
        borderColor: "#111",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
    },
    input: {
        marginLeft: 10,
        width: "80%",
        height: 50,
        fontSize: 20,
        borderStyle: 'solid',
    },
    button: {
        marginTop: 20,
        width: 200,
        height: 45,
        backgroundColor: "#00bdd5",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    image: {
        width: '200px',
        height: '200px',
        },
    });