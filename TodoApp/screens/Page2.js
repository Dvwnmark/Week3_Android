
import { useLayoutEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { Image } from 'react-native'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'


export default function Page2({navigation,route}){
    const [course, setCourse] =useState([])
    function EditJob(index) {
        navigation.navigate("Page3", { title: "EDIT YOUR JOB", course: course, id: index })
    }

    function AddNewJob() {
        navigation.navigate("Page3", { course: course })
    }

    useLayoutEffect(() => {
        let url = 'http://10.0.2.2:8080/JobsUser/' + route.params?.name;
        if (route.params?.name) {
            fetch(url, {
                method: "GET",
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network request failed');
                    }
                    return response.json();
                })
                .then(data => {
                    setCourse(data)
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [route, navigation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                        <Image style={{ width: 50, height: 50, marginRight: 10 }} source={require("../src/image/Frame4.png")} />
                        <View>
                            <Text style={{ fontWeight: "bold" }}>HI {route.params?.name}</Text>
                            <Text>Have agrate day a head</Text>
                        </View>
                    </View>
                )
            }
        })
    }, [route, navigation])
    return(
        <View style={{ alignItems: 'center', flex: 1, marginTop: 20 }}>
        <TextInput style={{ width: "80%", height: 45, borderWidth: 1, padding: 15, borderRadius: 30 }} placeholder='Search' />
        <View style={{ marginTop: 50, width: "80%", height: 400 }}>
            <FlatList
                data={course.jobs}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{ width: "100%", borderWidth: 1, padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 10, marginBottom: 20 }}>
                            <Image style={{ width: 20, height: 20 }} source={require("../src/image/Frame1.png")} />
                            <Text>{item.nameJob}</Text>
                            <TouchableOpacity onPress={() => { EditJob(item.id) }}>
                                <Image style={{ width: 20, height: 20 }} source={require("../src/image/Frame2.png")} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
        <TouchableOpacity onPress={AddNewJob} style={{ width: 50, height: 50, marginTop: 20, backgroundColor: "lightblue", borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: "#fff" }}>+</Text>
        </TouchableOpacity>
    </View>
    )
    
}