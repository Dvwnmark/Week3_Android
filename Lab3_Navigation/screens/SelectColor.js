import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";


export default function SelectColor({navigation}){

    const [image, setImage] = useState(require("../assets/vs_blue.png"));
    const [color, setColor] = useState("blue");

    return(
        <View style={styles.container}>
            
            <View style={{height:170,flexDirection:"row",justifyContent:"row",paddingHorizontal:10, width:"100%"}}>
                <Image style={styles.image} source={image}></Image>
                <View>
                    <Text style={{fontSize:17,fontWeight:"bold"}}>Điện thoại V-smart Joy 3</Text>
                    <Text style={{fontSize:17}}>Hàng chính hãng</Text>
                    <Text style={{fontSize:17}}>Màu :{color}</Text>
                    <Text style={{fontSize:17}}>Cung cấp bởi Tiki Tradding</Text>
                    <Text style={{fontSize:17}}>1.790.000đ</Text>
                </View>
            </View>

            <View style={{backgroundColor:"#c4c4c4",width:"100%", alignItems:"center",height:"73%"}}>
                <Text style={{fontSize:17}} >Chọn một màu bên dưới</Text>
                <TouchableOpacity onPress={()=>{
                    setImage(require("../assets/vs_silver.png"));
                    setColor("Trắng");
                }}>
                    <View style={{ backgroundColor: "#c5f1fb", height:90,width:90,marginTop:9 }}></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setImage(require("../assets/vs_red.png"));
                    setColor("Đỏ");
                }}>
                    <View style={{backgroundColor:"red", height:90, width:90, margin:13}} ></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setImage(require("../assets/vs_black.png"))
                    setColor("Đen");
                }}>
                    <View style={{backgroundColor:"black", height:90, width:90, margin:13}}></View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    setImage(require("../assets/vs_blue.png"));
                    setColor("Xanh")
                }}>
                    <View style={{backgroundColor:"#234896", height:90, width:90, margin:13}}></View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => navigation.navigate("HomeScreen", {image:image})} >
                    <View style={{justifyContent:"center",height:40,width:300,borderRadius:9,borderColor:"red",backgroundColor:"#4d6dc1",alignItems:"center", marginTop:35}}>
                        <Text style={{color:"#fff", fontSize:25, fontWeight:"bold"}}>Xong</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"

    },
    image:{
        width:170,
        height:130,
        resizeMode:"contain"

    }
})