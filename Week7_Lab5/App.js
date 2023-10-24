import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name= "Page1" component={Page1} options={{headerShown:false}}/> 
      <Stack.Screen name= "Page2" component={Page2} options={{headerShown:false,headerTitle:"The world's Best Bike",headerTitleStyle:{fontSize:19,color:"red",fontWeight:"bold"}}}/>
      <Stack.Screen name= "Page3" component={Page3}options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

