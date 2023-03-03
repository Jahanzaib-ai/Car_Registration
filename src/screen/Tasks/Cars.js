import React, { useState, useEffect, useContext } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from "react-native";

import Add from 'react-native-vector-icons/Ionicons'
import Header from "../../component/Header";
import MainHeader from "../../component/MainHeader";
import { TodayTaskData, CompletedTaskData, OverdueTaskData } from "../../data/TasksData";
import CarsCard from "../../component/CarsCard";
import styles from "../../constant/Tasks/CarStyle";
import Spinner from "react-native-loading-spinner-overlay";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../../Routes/context";
import { LogoutAPI } from "../../api";
import { GetCars } from "../../api";

export default function Cars({ navigation }) {
  const { setUserID } = useContext(AuthContext)

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data)

  const getRecord = () =>{
    fetch('http://192.168.80.169:4000/api/v4/AllCars')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }

  useEffect(() => {
    getRecord()
    const unsubscribe = navigation.addListener('focus', () => {
      getRecord()
    });

    return unsubscribe;
  }, []);


  const Logout = async () => {
    setLoading(true)
    await LogoutAPI().then((res) => {
      console.log("response home ", res)

    }).catch((error) => {
      console.log(error)
      setLoading(false)
      // alert(error)
    })
    await AsyncStorage.removeItem("user_id");
    await AsyncStorage.removeItem("registerUser");
    alert("logout Successfully")
    setUserID(null)
    setLoading(false)
  }

  return (
    <View style={styles.container}>

      {
        loading ?
          <Spinner visible={true} />
          :
          null
      }

      {/* Header */}
      <MainHeader
        title={"Dashboard"}
        logout={() => Logout()}
      />

      {/* body */}
      <ScrollView contentContainerStyle={styles.body}>

        {/* Heading */}
        <Text style={styles.textHeading}>Welcome</Text>

        {/* Create Card Record */}
        <TouchableOpacity
          onPress={() => navigation.navigate("CreateRecord")}
          style={[styles.createBtn, { margin: 0, paddingVertical: 10 }]}>
          <Add name="ios-add-circle" size={15} color="#ffffff" />
          <Text style={[styles.typeText, { color: '#ffffff', marginLeft: 5, }]}>Create Car Record</Text>
        </TouchableOpacity>

        <Text style={styles.tasks}>Card Record</Text>
        <FlatList
          data={data.cars}
          keyExtractor={(stoke) => stoke.key}
          renderItem={({ item }) => {
            return (
              <CarsCard
                color={item.color}
                name={item.name}
                registrationNO={item.registration_no}
                model={item.model}
                price={item.price}
                navigation={() => navigation.navigate('CarDetail', item)}
              />
            )
          }}
        />

      </ScrollView>
    </View>
  );
};


