import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Dimensions,
    FlatList,
    Alert,
    ImageBackground,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Back from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/Entypo'
import { Auth_Screen_Styles, Splash_Screen_Styles } from "../../constant/Styles"

import { Register } from '../../api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignUp({ navigation }) {

    const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [emailErrorMsg, setEmailErrorMsg] = useState("")
    const [nameError, setNameError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const getUserEmail = (value) => {
        setEmail(value)
        setEmailErrorMsg("")
    }

    const SignUp = async () => {

        let isValid = true;
        if (!name) {
            setNameError('Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (EMAIL_REGEX.test(email) === false) {
            setEmailErrorMsg("Please Enter a Valid  Email")
        }

        if (!phoneNo) {
            setMobileError('Phone No. is required');
            isValid = false;
        } else {
            setMobileError('');
        }

        if (!password) {
            setPasswordError('Password is required at least 8 Charater');
            isValid = false;
        } else {
            setPasswordError('');
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError('Password not Match');
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (!isValid) {
            return;
        }

        if (name != "" && email != "" && password != "" && phoneNo != "") {
            setLoading(true)
            let response = await Register(name.trim(), email.trim(), phoneNo.trim(), password.trim())
            console.log("res", response);

            try {
                if(response.success == true){
                    setLoading(false)
                    Alert.alert("Account Created", response.message)
                    navigation.goBack()
                }
                else{
                    setLoading(false)
                    Alert.alert("Warning! ", response.message)
                }
            } catch (error) {
                setLoading(false)
                ("error", error)
            }
        }

        
        
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always" contentContainerStyle={{ backgroundColor: '#FFFFFF', flexGrow: 1, }}>

            {/* Header */}
            <View style={{ flex: 0.1 }}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()} >
                    {/* <Image style={{ margin: 18 }} source={require("../assets/images/back1.png")} /> */}
                    <Back name="chevron-back-outline" size={25} color={"#000000"} style={{ margin: 12 }} />
                </TouchableOpacity>
            </View>

            {/* body */}
            <View style={{ flex: 0.3, backgroundColor: '#FFFFFF', marginBottom: 10, }}>
                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                    <Text style={styles.titleText}>Create your </Text>
                    <Text style={[styles.titleText, { fontWeight: 'bold' }]}>account</Text>
                </View>
                <Text style={styles.subTitleText}>Enter the Detail here</Text>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 100 / 2, alignItems: 'center', marginTop: 20, justifyContent: 'center', alignSelf: 'center' }}
                    source={require("../../assest/image/logo1.jpg")}
                    resizeMethod='resize' />
            </View>

            {/* Form */}
            <View style={{ flex: 0.5, marginHorizontal: 20 }}>

                <View style={styles.inputTextContainer}>
                    <Ionicons name='person' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5, }}
                        keyboardType={'default'}
                        value={name}
                        placeholder='Name'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setName(text)} />
                </View>
                {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

                <View style={styles.inputTextContainer}>
                    <Ionicons name='mail' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'email-address'}
                        value={email}
                        placeholder='Email'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => getUserEmail(text)} />
                </View>
                <Text style={styles.error}>{emailErrorMsg != "" ? emailErrorMsg : ""}</Text>

                <View style={styles.inputTextContainer}>
                    <Icon1 name='phone' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'phone-pad'}
                        value={phoneNo}
                        placeholder='Phone No.'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setPhoneNo(text)} />
                </View>
                {mobileError ? <Text style={styles.error}>{mobileError}</Text> : null}

                <View style={styles.inputTextContainer}>
                    <Ionicons name='lock-closed' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'visible-password'}
                        value={password}
                        placeholder='Password'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setPassword(text)} />
                </View>
                {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}

                <View style={styles.inputTextContainer}>
                    <Ionicons name='lock-closed' size={12} color={'#252B5C'} />
                    <TextInput
                        style={{ width: "95%", marginLeft: 5 }}
                        keyboardType={'visible-password'}
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        placeholderTextColor="#A1A5C1"
                        onChangeText={(text) => setConfirmPassword(text)} />
                </View>
                {confirmPasswordError ? <Text style={styles.error}>{confirmPasswordError}</Text> : null}
            </View>

            <TouchableOpacity
                onPress={() => SignUp()}
                style={styles.btnRegister}>
                <Text style={styles.btnRegisterText}>Register</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff"
    },

    btnBack: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F5F4F8',
        margin: 20
    },
    titleText: {
        fontSize: 25,
        fontWeight: "500",
        color: '#000000'
    },
    subTitleText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        marginLeft: 20,
    },

    inputTextContainer: {
        flexDirection: 'row',
        padding: 7,
        paddingHorizontal: 10,
        backgroundColor: '#F5F4F8',
        borderRadius: 10,
        marginVertical: 6,
        alignItems: 'center'
    },
    btnRegister: {
        flex: 0.1,
        width: "80%",
        height: 60,
        backgroundColor: '#930000',
        borderRadius: 10,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    btnRegisterText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    error: {
        color: "red",
        marginTop: 0,
        fontSize: 12,
        marginLeft: 3
    }
})
