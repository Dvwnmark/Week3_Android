import { Text, View, StyleSheet, Image, TouchableOpacity, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function HomeScreen({navigation, route}){
    console.log(route.params);

    const image = route.params?.image?? require("../assets/vs_blue.png");
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.view1}>
                <Text style={{fontSize:18}}>Điện Thoại Vsmart Joy 3 - Hàng Chính Hãng</Text>
                <View style={styles.view2}>
                    <View style={{flexDirection:"row", marginBottom:10, marginLeft:17}}>
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                    </View>
                        <Text style={{fontSize:17, marginBottom:3}}> (Xem 828 đánh giá)</Text>
                </View>

                <View style ={styles.view3}>
                    <Text style={styles.text1}>1.790.000Đ</Text>
                    <Text style={{textDecorationLine:"line-through",fontSize:17,color:"black"}}>1.990.000Đ</Text>
                </View>

                <View style={styles.view4}>
                    <Text style={{fontWeight:"bold",fontSize:17,color:"red"}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <AntDesign name="questioncircleo" size={24} color="black" style={{marginRight:130}} />
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate("SelectColor")} style={{justifyContent:"center",width:"100%", alignItems:"center", height:40}}>
                    <View style={{flexDirection:"row",height:40,width:"90%",borderColor:"black",borderWidth:1, borderRadius:9,justifyContent:"space-around"}}>
                        <Text style={{fontSize:17, marginLeft:59}}>4 MÀU- CHỌN MÀU</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                
                <View style={{backgroundColor:"#ee0a0a",width:"90%",justifyContent: 'space-around',borderRadius:9, borderWidth:1,alignItems:"center",height:30, }}>
                    <Text style={{fontSize:17, fontWeight:"bold",color:"#fff"}}>CHỌN MUA</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"white"

    },
    image:{
        width:"80%", 
        height:450, 
        resizeMode:"contain"
    },
    view1:{
        width :"100%",
        height:200,
        justifyContent:"space-around",
        alignItems:"center",
        paddingHorizontal:10,
        
    },
    view2:{
        justifyContent:"space-between",
        width:"100%",
        alignItems:"center",
        flexDirection:"row"
    },
    view3:{
        justifyContent:"space-between",
        width:"100%",
        alignItems:"center",
        flexDirection:"row"
    },
    view4:{
        justifyContent: "space-between",
        flexDirection:"row",
        width:"100%",
    },
    text1:{
        fontSize:19,
        fontWeight:"bold"
    }

})