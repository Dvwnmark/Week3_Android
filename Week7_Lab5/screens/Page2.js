import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Page2({navigation}){
    const [product, setProduct] = useState(["All","RoadBike","Moutain"]);
    const [dataBike, setDataBike]= useState([
        {id: 1, name: "Pinarello", price: 1800, image: require("../assets/bione-removebg-preview.png") },
        {id: 2, name: "Pina Moutain", price: 1700, image: require("../assets/bitwo-removebg-preview.png") },
        {id: 3, name: "Pina Bike", price: 1500, image: require("../assets/bithree_removebg-preview.png") },
        {id: 4, name: "Pinarello", price: 1900, image: require("../assets/bifour_-removebg-preview.png") },
        {id: 5, name: "Pinarello", price: 2700, image: require("../assets/bione-removebg-preview.png") },
        {id: 6, name: "Pinarello", price: 1350, image: require("../assets/bitwo-removebg-preview.png") },
    ]);
    const [filterData, setFilterData] = useState(dataBike);
    const [checkBtn, setCheckBtn] = useState(0);

    function FilterData (index){
        if(index);
    }

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>The world's Best Bike</Text>
            </View>
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

})