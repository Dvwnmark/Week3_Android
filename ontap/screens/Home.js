import { View, Text, StyleSheet, Image, TextInput, Pressable, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState, useEffect } from 'react';



export default function Home({navigation, route}){
    const [search, setSearch] = useState('');
    const userData = route.params.userData;
    const userName = route.params.userData[0].name;
    
    console.log(userData);
    const todo = userData[0].text;

    return(
        <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 15, width: "100%", marginTop: 50 }}>
            <Pressable onPress={() => { navigation.navigate("GetStarted") }}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <View style={{ marginLeft: 30, flexDirection: "row", alignItems: "center" }}>
                <Image style={{ width: 50, height: 50 }} resizeMode="contain" source={require("../assets/avt.png")} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{userName}</Text>
                    <Text style={{ fontSize: 18 }}>Have a agrete day a head</Text>
                </View>
            </View>
        </View>
        <View style={{ marginTop: 30, width: '300px', height: '50px', borderColor: "#f0f0f0", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center", height: 50}}>
            <AntDesign style={{ marginLeft: 10 }} name="search1" size={24} color="black" />
            <TextInput style={{marginLeft: 10, width: "80%", height: "100%", fontSize: 20 }} value={search} onChangeText={text => setSearch(text)} placeholder="Search" />
        </View>
        <View>
            {todo.map((item, index) => (
                <Pressable key={index} style={{ backgroundColor: "#e4e8ea", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20, marginTop: 20, flexDirection: "row", width: 300, justifyContent: "space-between", height: 50, alignItems: "center" }}>
                    <AntDesign name="checksquareo" size={24} color="#4faa71" />
                    <Text style={{ fontSize: 17 }}>{item}</Text>
                    <FontAwesome name="pencil" size={24} color="#de7d80" />
                </Pressable>
            ))}
        </View>
        <Pressable onPress={()=>{navigation.navigate("Add", {data: userData})}}  style={{ marginTop: 15, backgroundColor: "#24c3d9", width: 60, height: 60, borderRadius: 50, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
            <Entypo name="plus" size={40} color="#fff" />
        </Pressable>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center"
    },
})