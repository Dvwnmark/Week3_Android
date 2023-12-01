import { useState } from "react";
import { Image, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

export default function Page1({ navigation  })  {
    const [name , setName] = useState("")

    function addName(){
        if (name) {
            navigation.navigate("Page2", { name : name })
        } else {
            alert("Please enter your information !")
        }
    }
    return(
        <View style={{flex:1, alignItems:"center",backgroundColor:"#fff"}}>
            <Image style={{width:250,height:250}} source={require("../src/image/Image95.png")} resizeMode="contain"  />
                <Text style={{fontSize:25,fontWeight:"bold",marginTop:20}}>MANAGE YOUR TASK</Text>
            <View style={{flexDirection:"row",alignItems:"center",width:"80%",marginTop:50}}>
                <Image  style={{width:25, height:25,marginRight:10}} source={require("../src/image/Frame.png")} resizeMode="contain"/>
                <TextInput value={name} onChangeText={setName} placeholder="Enter Your Name" style={{borderWidth:1, padding:10,width:250}}/>
            </View>
            <TouchableOpacity onPress={addName} style={{width:350, height:60, borderWidth:1, justifyContent:"center",alignItems:"center",marginTop:50, borderRadius:10, backgroundColor:"violet",borderColor:"violet"}}>
                <Text style={{fontWeight:"bold",padding:5,color:"#fff", fontSize:19,fontWeight:"bold"}}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    )
}