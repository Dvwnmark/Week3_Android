import { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from "react-native";



const listProduct= [
    {id: 1, image: require("../assets/bione-removebg-preview.png"),nameProduct:"Pinarello",price:1800,description:"It is a very important form of writing as we write almost everything in paragraphs, be in an answer,essay,story,emails,etc.",type:"MOUNTAIN"},
    {id: 2, image: require("../assets/bione-removebg-preview.png"),nameProduct:"Pina Moutain",price:1700,description:"It is a very important form of writing as we write almost everything in paragraphs, be in an answer,essay,story,emails,etc.",type:"MOUNTAIN"},
    {id: 3, image: require("../assets/bithree_removebg-preview.png"),nameProduct:"Pina Bike",price:1500,description:"It is a very important form of writing as we write almost everything in paragraphs, be in an answer,essay,story,emails,etc.",type:"ROADBIKE"},
    {id: 4, image: require("../assets/bifour_-removebg-preview.png"),nameProduct:"Pinarello",price:1900,description:"It is a very important form of writing as we write almost everything in paragraphs, be in an answer,essay,story,emails,etc.",type:"ROADBIKE"},
    {id: 5, image: require("../assets/bione-removebg-preview.png"),nameProduct:"Pina Mountain",price:2700,description:"It is a very important form of writing as we write almost everything in paragraphs, be in an answer,essay,story,emails,etc.",type:"MOUNTAIN"},
    {id: 6, image: require("../assets/bitwo-removebg-preview.png"),nameProduct:"Pina Bike",price:1350,description:"It is a very important form of writing as we write almost everything in paragraphs, be in an answer,essay,story,emails,etc.",type:"ROADBIKE"},
]
export default function Page2({navigation, route}){
    const [selectButton, setSelectButton] = useState("ALL");
    const [filteredProduct, setFilteredProduct] = useState(listProduct);


    const ButtonHandler= (buttonName) =>{
            setSelectButton(buttonName);
    };
    useEffect(()=>{
        filterProduct();
    },[selectButton]);

    const filterProduct = () =>{
        if(selectButton ==="ALL"){
            setFilteredProduct(listProduct);
        } else {
            const filtered1 = listProduct.filter(item => item.type === selectButton);
            setFilteredProduct(filtered1);
        }
    };
    return(
        <View style={styles.container}>
                <Text style={{fontWeight:"bold",fontSize:25,color:"red",marginRight:"30%",marginTop:"10%"}}>The world's Best Bike</Text>
            <View style={styles.tabProduct}>
                <TouchableOpacity onPress={()=>ButtonHandler('ALL')} style={styles.selectPro}>
                    <Text style={{color: selectButton === "ALL" ? "red":"black",fontSize:17, fontWeight:"bold"}}>ALL</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>ButtonHandler('ROADBIKE')} style={styles.selectPro}>
                    <Text style={{color: selectButton === "ROADBIKE" ?"red":"black",fontSize:17, fontWeight:"bold"}}>ROADBIKE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>ButtonHandler('MOUNTAIN')} style={styles.selectPro}>
                    <Text style={{color: selectButton === "MOUNTAIN" ? "red":"black",fontSize:17, fontWeight:"bold"}}>MOUNTAIN</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                numColumns={2}
                data={filteredProduct}
                renderItem={({item})=>
                <TouchableOpacity onPress={()=> navigation.navigate("Page3",{item})}  style={styles.clickPr}>
                    
                    <Image source={item.image} resizeMode="contain" style={{height:129, width:130}}/>
                    <Text style={{fontSize:19,fontWeight:"bold"}}>{item.nameProduct}</Text>
                    <Text style={{fontSize:19,fontWeight:"400"}}>${item.price}</Text>
                
                </TouchableOpacity>
            }
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    
    },
    selectPro:{
        borderWidth:1,
        borderColor:"#f39a9a",
        borderRadius:7,
        width:100,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:15
    },
    tabProduct:{
        flexDirection: "row", 
        marginTop: 30,
        marginBottom:10
    },
    clickPr:{
        backgroundColor:"#fef5ec",
        width:179,
        height:210,
        margin:9,
        borderRadius:19,
        borderWidth:1,
        borderColor:"#fef5ec",
        alignItems:"center",
        justifyContent:"center"
    
    },
    

})