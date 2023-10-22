import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Page1({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.textLabel}>A premium online store for sporter and their stylish choice</Text>
        
        <View style={styles.image}>
            <Image style={styles.mainImg} resizeMode="contain" source={require('../assets/bifour_-removebg-preview.png')}/>
        </View>
            <Text style={styles.textLabel1}>POWER BIKE SHOP</Text>
        <TouchableOpacity style={styles.submit} onPress={()=>{navigation.navigate("Page2")}}>
            <Text style={styles.textSubmit}>Get Started</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        //justifyContent:"center",
        backgroundColor:"white"
    },
    textLabel:{
        fontSize:23,
        fontWeight:"bold",
        textAlign:"center",
        width:"90%",
        margin:13,
        fontStyle:"normal"
    },
    image:{
        width:"95%",
        height:390,
        margin:30,
        borderWidth:1,
        borderColor:"#FFCCCC",
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFCCCC"
    },
    mainImg:{
        width:360,
        height:290,
    },
    textLabel1:{
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center" ,
    },
    submit:{
        width:"90%",
        height:60,
        margin:35,
        backgroundColor:"#FF3333",
        borderRadius:99,
        justifyContent:"center",
    },
    textSubmit:{
        fontSize:21,
        fontWeight:"bold",
        textAlign:"center",
        color:"white",  
    }

})