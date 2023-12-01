import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function GetStarted({navigation, route}) {

    const [name, setName] = useState('thanhtung');
    const [userData, setUserData] = useState(null);
    
    const fetchUserData = async (username) => {
        try {
            const response = await fetch(`https://6544ab0b5a0b4b04436caf78.mockapi.io/api/ToDo?name=${username}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            setUserData(data);
            navigation.navigate("Home", {userData: data});
        } catch (error) {
            console.error('Error fetching user data:', error.message);
        }
    };

    const handleFetchUser = () => {
        fetchUserData(name);
    };

    return (
        <View style={styles.container}>
            <Image style={{ width: 200, height: 200 }} resizeMode="contain" source={require("../assets/image.png")} />
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "violet", textAlign: "center" }}>MANAGE YOUR {'\n'} TASK</Text>
            <View style={{ marginTop: 50,width: 300, height: 50, borderColor: "#111", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons style={{ marginLeft: 10 }} name="email-outline" size={30} color="black" />
                <TextInput style={{ marginLeft: 10, width: "80%", height: 50, fontSize: 20, borderWidth: 1, borderColor: 'transparent', borderRadius: 10, paddingLeft: 15, paddingRight: 15 }} value={name} onChangeText={setName} placeholder="Enter your name" />
            </View>
            <Pressable onPress={handleFetchUser} style={{ marginTop: 20, width: 200, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>GET STARTED</Text>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate("Register")}} style={{ marginTop: 20, width: 200, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff" }}>REGISTER</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});