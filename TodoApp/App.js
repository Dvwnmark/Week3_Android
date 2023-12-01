import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name='Page1' component={Page1 }options={{ headerTitle:""}}/>
        <Stack.Screen name='Page2' component={Page2} options={{ headerTitle:""}}/>
        <Stack.Screen name='Page3' component={Page3} options={{ headerTitle:""}}/>
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

