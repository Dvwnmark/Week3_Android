import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
  } from "react-native";
  import React, { useCallback, useEffect, useState } from "react";
  import { StatusBar } from "expo-status-bar";
  import { Entypo } from '@expo/vector-icons';
  
  
  
  export default function Bai1() {
    return (
      <View style={styles.voucherScreen}>
        <Entypo name="circle" size={150} color="black" />
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>GROW</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>YOUR BUSINESS</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, textAlign: "center", textAlignVertical: "center" }}>
          We will help you to grow your business using online server
        </Text>
        <View style={{flexDirection:"row", width: "100%", justifyContent: "space-around"}}>
          <View style={{backgroundColor: "#e3c000", padding: 10, borderRadius: 10, width: 100, alignItems: "center"}}><Text style={{fontWeight: "bold"}}>LOGIN</Text></View>
          <View style={{backgroundColor: "#e3c000", padding: 10, borderRadius: 10, width: 100, alignItems: "center"}}><Text style={{fontWeight: "bold"}}>SIGN UP</Text></View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
  const styles = StyleSheet.create({
    voucherScreen: {
      flex: 1,
      backgroundColor: "#33CCFF",
      alignItems: "center",
      justifyContent: "space-around",
      marginBottom: 50,
    },
  });