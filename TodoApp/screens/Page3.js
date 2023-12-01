import React from 'react'
import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'



export default function Page3 ({navigation, route}){
    const [newJob, setNewJob] = React.useState("")

    function addJob() {
        if (newJob) {
            let course = { ...route.params.course }
            course.jobs = [...course.jobs, { id: 0, nameJob: newJob }]
            let url = 'http://10.0.2.2:8080/JobsUser/' + route.params?.course.id;
            fetch(url, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(course)
            })
                .then((result) => {
                    if (result.ok) {
                        navigation.navigate("Page2", { name: course?.userName })
                    }
                })
        } else {
            alert("Vui lòng nhập tên job")
        }
    }

    function EditJob() {
        if (newJob) {
            let course = { ...route.params.course }
            course.jobs = course.jobs.map((item) => {
                if (item.id === route.params?.id) {
                    item.nameJob = newJob;
                    return item;
                }
                return item;
            })
            let url = 'http://10.0.2.2:8080/JobsUser/' + route.params?.course.id;
            fetch(url, {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(course)
            })
                .then((result) => {
                    if (result.ok) {
                        navigation.navigate("Page2", { name: course?.userName })
                    }
                })
        } else {
            alert("Vui lòng nhập tên job")
        }
    }
    return(
        <View style={{ flex: 1, alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                {
                    (route.params?.title) ? route.params.title : "ADD YOUR JOB"
                }
            </Text>
            <View style={{ flexDirection: 'row', width: "80%", alignItems: 'center', justifyContent: 'flex-start', marginTop: 50 }}>
                <Image style={{ width: 20, height: 20, marginRight: 15 }} source={require("../src/image/Frame3.png")} />
                <TextInput value={newJob} onChangeText={setNewJob} style={{ padding: 10, width: 300, borderWidth: 1, borderRadius: 15 }} placeholder='Input your job' />
            </View>
            <TouchableOpacity onPress={route.params?.id ? EditJob : addJob} style={{ width: 100, height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50, backgroundColor: "blue", borderRadius: 20 }}>
                <Text style={{ fontWeight: 'bold', color: "white" }}>FINISH</Text>
            </TouchableOpacity>
            <Image style={{ width: 200, height: 200, marginTop: 100 }} source={require("../src/image/Image95.png")} />
        </View>
    )
}