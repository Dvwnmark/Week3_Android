import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function Screen1(){
    return(
        <View style ={styles.container}>
            
            <View style={{marginRight:20, marginTop:"20%"}}>
                <Text style = {{fontWeight:"bold",fontSize:39}}>LOGIN</Text>
            </View>

            <View style={{marginTop:25,flexDirection:"row",alignItems:"center", width:"90%",borderRadius:10,borderColor:"red",borderWidth:1}}>
            <FontAwesome name="user" size={25} color="black" style={{marginLeft:13,marginTop:14}}/>
                <TextInput style={{fontSize:15}} placeholder="Name"/>
            </View>

            <View style={{marginTop:20,flexDirection:"row",alignItems:"center", width:"90%",borderRadius:10,borderColor:"red",borderWidth:1}}>
            <Entypo name="lock" size={24} color="black"style={{marginLeft:13,marginTop:13}} /> 
                <TextInput style={{fontSize:15}} placeholder="Password"/>
            </View>

            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        //paddingHorizontal:20
        //alignItems: 'center',
        //justifyContent: 'center',
    },
  
});