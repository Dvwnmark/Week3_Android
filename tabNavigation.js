import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';   
import { NavigationContainer } from '@react-navigation/native';
import { Platform, Text, View, Image } from "react-native";
import Bai1 from './screen/Bai1';
import Bai2 from './screen/Bai2';
const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        backgroundColor: '#000',
        posistion: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 70,

    },
    
};
    export default function tabNavigation() {
        return (
            <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={screenOptions}>
              <Tab.Screen
                name="Bai1"
                component={Bai1}
                options={{
                  tabBarIcon: ({ focused }) => {
                    const textColor = focused ? "#204c8b" : "#bababa";
                    return (
                      <View style={{ alignItems: "center", justifyContent: "center" }}>             
                        <Text style={{ fontSize: 12, color: textColor, fontWeight: "bold" }}>Bai1</Text>
                      </View>
                    )
                  }
      
                }}
              />
                <Tab.Screen
                  name='Bai2'
                  component={Bai2}
                  options={{
                    tabBarIcon:({focused})=>{
                      const textColor = focused ? "#204c8b" : "#bababa";
                      return(
                        <View style={{alignItems:"center", justifyContent:"center"}}>
                            <Text style={{ fontSize:12,color: textColor, fontWeight:"bold" }}>Bai2</Text>

                        </View>
                      )
                    }
                  }}
                />

              
                </Tab.Navigator>
            </NavigationContainer>
        );

    }

    