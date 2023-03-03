import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'

import Star from 'react-native-vector-icons/Ionicons'
import CheckBox from 'react-native-vector-icons/AntDesign'
import Edit from 'react-native-vector-icons/Feather'
import Exclamation from 'react-native-vector-icons/FontAwesome5'
import Forward from 'react-native-vector-icons/Ionicons'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../util/Color"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CarsCard({ navigation, name, color, registrationNO }) {
    return (
        <TouchableOpacity style={styles.subContainer} onPress={navigation}>
            <Text style={styles.title}>{name}</Text>

            <View style={{ flexDirection: 'row', width: "98%", justifyContent: 'space-between', alignSelf: 'center' }} >
                <Text style={styles.text}>Reg. #: <Text style={{ color: COLORS.black, }}> {registrationNO} </Text></Text>
                <Text style={[styles.text, {width: '30%' }]}>Color <Text style={{ color: COLORS.black, }}> {color} </Text></Text>
            </View>
            <Forward name='chevron-forward' size={20} color={COLORS.orange} style={{ alignSelf: 'flex-end', marginRight: 5, marginTop: -5 }} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        flex: 1,
        width: "96%",
        marginTop: 12,
        alignSelf: 'center',
        borderRadius: 5,
        elevation: 6,
        backgroundColor: COLORS.white,
        padding: 10,
    },
    title: { 
        fontSize: 18, 
        fontWeight: '600', 
        lineHeight: 20, 
        color: COLORS.black, 
        width: '50%' 
    },
    text: { 
        fontSize: 14, 
        fontWeight: '500', 
        lineHeight: 20, 
        width: '50%' 
    }
    

})