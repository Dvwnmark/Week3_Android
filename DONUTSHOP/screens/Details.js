import { useState } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function Details({navigation, route}){
    const {item} = route.params;
    const [quantity, setQuantity] = useState(1);

    return(
        <View style={styles.container}>
            <View style={{width:"100%", height:300, justifyContent:"center",alignItems:"center"}}>
                <Image source={{ uri: item.image}} resizeMode="contain" style={{width:300,height:300}}/>
            </View>
            <View style={{width:"100%", paddingHorizontal:10}}>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>{item.name}</Text>
                <View style={{alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
                    <Text style={{fontSize:20,fontWeight:"bold", opacity:0.5}}>{item.discription}</Text>
                    <Text style={{fontWeight:"bold",fontSize:30}}>${item.price}</Text>
                </View>
            </View>

            <View style={{width:"100%",paddingHorizontal:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:50}}>
                <View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <EvilIcons name="clock" size={30} color="black" />
                        <Text style={{marginLeft:15,fontSize:18, fontWeight:"bold",color:"#706666"}}>Delivery in</Text>
                    </View>
                    <Text style={{fontSize:20,fontWeight:"bold",marginLeft:45}}>30 min</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Pressable onPress={()=>{setQuantity(quantity+1)}} style={{height:35,width:35, backgroundColor:"#f1b000", borderRadius:10, borderWidth:1,borderColor: "#f0f0f0", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesome5 name="plus" size={24} color="#fff" />
                    </Pressable>
                    <Text style={{fontSize:20, fontWeight:"bold",marginHorizontal:10}}>{quantity}</Text>
                    <Pressable onPress={()=>{setQuantity(quantity-1)}} style={{height:35,width:35, backgroundColor:"#f1b000", borderRadius:10, borderWidth:1,borderColor: "#f0f0f0", alignItems: "center", justifyContent: "center" }}>
                        <FontAwesome5 name="minus" size={24} color="#fff" />
                    </Pressable>
                </View>
            </View>
            <View style={{width:"100%",paddingHorizontal:15, marginTop:25}}>
                <Text style={{fontSize:25, fontWeight:"bold"}}>Restaurant info</Text>
                <Text style={{fontSize:16, fontWeight:"bold",opacity:0.6}}>Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.</Text>
                <Pressable onPress={()=>{navigation.navigate("Home")}} style={{width:"100%", borderRadius:10,alignItems:"center",justifyContent:"center",marginTop:25,height:"19%",backgroundColor:"#f1b000",marginTop:61}}>
                    <Text style={{fontSize:21,fontWeight:"bold",color:"white"}}>Add to cart</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
    },
})