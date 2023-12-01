import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import GetStarted from './screens/GetStarted';
import UpdateAndAdd from './screens/UpdateAndAdd';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
        <Stack.Screen name='Add' component={UpdateAndAdd} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={Register} options={{headerStyle:{
          backgroundColor:"#00bdd5"},
          headerTintColor:"#fff",
          headerTitleStyle:{
            fontWeight:"bold"
          },
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
