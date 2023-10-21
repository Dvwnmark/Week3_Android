import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import SelectColor from "./SelectColor";


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown :false}}/>
                <Stack.Screen name="SelectColor" component={SelectColor} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}