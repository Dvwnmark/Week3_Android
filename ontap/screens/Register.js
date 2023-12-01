
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';



export default function Register({navigation}) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        fetch('https://6544ab0b5a0b4b04436caf78.mockapi.io/api/ToDo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, password, text: [] }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setName('');
                setPassword('');
                navigation.navigate("GetStarted");
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register Form</Text>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                />
            </View>
            <Pressable style={{ marginTop: 20, width: 200, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row" }} onPress={handleRegister}>
                <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff" }}>Register</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 10,
    },
});
