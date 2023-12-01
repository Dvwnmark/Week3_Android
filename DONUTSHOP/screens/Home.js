import { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text, View, TextInput } from "react-native";
import filter from 'lodash.filter'
import { StatusBar } from "expo-status-bar";


const API_ENDPOINT = `https://6544ab0b5a0b4b04436caf78.mockapi.io/api/Donut`;
export default function Home({navigation}) {
    
    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter]= useState([data]);

    useEffect(()=>{
        fetch (API_ENDPOINT)
        .then((response) => response.json())
        .then((json)=>{
            setData(json);
            setDataFilter(json);
        })
        .catch((error)=>console.error(error))
    },[])

    const handleOption = (option) =>{
        if (option === "ALL"){
            setDataFilter(data)
        }else{
            const filter = data.filter((item)=>item.type === option)
            setDataFilter(filter)
        }
    }


    return (
        <ScrollView>
        <View  style={styles.container}>
            <View style={{justifyContent:"flex-start",flexDirection:"row",width:"100%",marginTop:30}}>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:19,fontWeight:"500",color:"#595959"}}>Wellcome,Jala!</Text>
                    <Text style={{fontSize:22,fontWeight:"bold"}}>Choice you Best food</Text>
                </View>
            </View>

            <View style={{width:"95%"}}>
                <TextInput style={styles.input} placeholder="Search Food" clearButtonMode="always" autoCapitalize="none" autoCorrect={false}/>
            </View>

            <View style={{width:"100%", flexDirection:"row",justifyContent:"space-around",margin:15}}>
                <Pressable onPress={()=> handleOption("ALL")} style={{backgroundColor:"#FFC700",borderRadius:10,width:100,height:40,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:17,fontWeight:"bold"}}>Donut</Text>
                </Pressable>

                <Pressable onPress={()=> handleOption("Pink")} style={{backgroundColor:"#FFC700",borderRadius:10,width:100,height:40,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:17,fontWeight:"bold"}}>Pink Donut</Text>
                </Pressable>

                <Pressable onPress={()=> handleOption("Floating")} style={{backgroundColor:"#FFC700",borderRadius:10,width:100,height:40,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:17,fontWeight:"bold"}}>Floating</Text>
                </Pressable>
            </View>

            <View style={{width:"100%",alignItems:"center",margin:15}}>
                    {dataFilter.map((item)=>(
                        <Pressable key={item.id} onPress={()=>{navigation.navigate("Details",{item})}} style={{backgroundColor:"#f4dddd", width:"90%", height:120, flexDirection:"row",alignItems:"center",borderRadius:15,margin:7,paddingHorizontal:10}} >
                            <View style={{width: 100,height:100}}>
                                <Image source={{uri:item.image}} style={{width:100, height:100,borderRadius:10}}/>
                            </View>
                            <View style={{margin:10, height:100,justifyContent:"space-evenly"}}>
                                <Text style={{fontSize:18,fontWeight:"bold"}}>{item.name}</Text>
                                <Text style={{fontSize:17,fontWeight:"bold", opacity:0.5}}>{item.discription}</Text>
                                <Text style={{fontSize:19,fontWeight:"bold"}}>${item.price}</Text>
                            </View>
                        </Pressable>
                    )
                    )
                    }
            </View>
        </View>
        </ScrollView>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginVertical:50
    },
    input:{
        backgroundColor: "#F2F2F2",
        borderRadius: 10, 
        marginTop: 20, 
        width: "90%",
        height: 50,
        width:"90%",
        paddingLeft:14,
        marginLeft:10,
        fontSize:16.5
    }
})
