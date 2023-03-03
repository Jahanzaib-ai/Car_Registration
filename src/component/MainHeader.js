import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

import Back from 'react-native-vector-icons/Ionicons'
import Logout from 'react-native-vector-icons/AntDesign'
import styles from "../constant/HeaderStyle";
import { COLORS } from '../util/Color'

export default function MainHeader({ goBack, title, logout }) {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>

            <View style={styles.rightContainer}>
                <TouchableOpacity onPress={logout}>
                    <Logout name="logout" size={25} color={COLORS.white} style={{ marginRight: 10 }} />
                </TouchableOpacity>
                <Image source={require("../assest/image/ProfileImage.jpeg")} style={styles.image} />
            </View>
        </View>
    )
}

