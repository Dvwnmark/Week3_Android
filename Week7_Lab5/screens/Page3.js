import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 



export default function Page3({navigation,route}){
    const {item} = route.params;
    return(
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image resizeMode="contain" source={item.image} style={styles.img}/>
            </View>

            <View style={{width:"90%"}}>
                <Text style={{fontSize:25,fontWeight:"bold"}}>{item.nameProduct}</Text>
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:25, color:"#696969"}}>15% OFF | 50 $</Text>
                    <Text style={{fontSize:25,textDecorationLine:"line-through", marginLeft:50,fontWeight:"400"}}>499$</Text>
                </View>

                <View style={{marginTop:9}}>
                    <Text style={{fontSize:25, fontWeight:"bold"}}>Description</Text>
                    <Text style={{fontSize:17,marginTop:10}}>{item.description}</Text>
                </View>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center",margin:21}}>
                <AntDesign name="hearto" size={30} color="black" />
                <TouchableOpacity onPress={()=>navigation.navigate("Page1")} style={{width:"57%",height:50, backgroundColor:"#e94141",borderRadius:19, justifyContent:"center",alignItems:"center",marginLeft:39}}><Text style={{fontSize:17,color:"white"}}>Add To Cart</Text></TouchableOpacity> 
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    img:{
        height:250,
        width:250
    },
    viewImg:{
        height:"55%",
        width:"95%",
        margin:20,
        borderRadius:9,
        borderWidth:1,
        borderColor:"#FDECEC",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FDECEC"
    }
})