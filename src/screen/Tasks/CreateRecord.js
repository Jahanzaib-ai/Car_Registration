import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, Dimensions, Modal } from 'react-native'
import Add from 'react-native-vector-icons/Ionicons'
import Check from 'react-native-vector-icons/AntDesign'
import Header from '../../component/Header'
import { COLORS } from '../../util/Color'
import SuccessModal from '../../component/SuccessModal'
import styles from '../../constant/Tasks/CreateCarStyle'
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
import Spinner from 'react-native-loading-spinner-overlay'

import { CreateRecords } from '../../api'
import { PrivateValueStore } from '@react-navigation/native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const categories = [
    { id: 1, label: 'SUV', value: 'SUV' },
    { id: 2, label: 'Sedan', value: 'Sedan' },
    { id: 3, label: 'Hatchback', value: 'Hatchback' },
    { id: 4, label: 'Coupe', value: 'Coupe' },
    { id: 5, label: 'Convertible', value: 'Convertible' },
    { id: 6, label: 'Van', value: 'Van' },
    { id: 7, label: 'Truck', value: 'Truck' },
];

export default function CreateRecord({ navigation }) {

    // State
    const [saveModal, setSaveModal] = useState(false)

    const [category, setCategory] = useState("");
    const [color, setColor] = useState("");
    const [model, setModel] = useState("");
    const [price, setprice] = useState("");
    const [registrationNo, setRegistrationNo] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(false)
    const [carType, setCarType] = useState("SUV")
    const [value, setValue] = useState("")

    const [colorError, setColorError] = useState('');
    const [modelError, setModelError] = useState('');
    const [priceError, setpriceError] = useState('');
    const [registrationNoError, setRegistrationNoError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const OnchangePickerSeletedHandler = (value, index) => {
        setValue(value)
        setCarType(categories[index].label)
    }


    const handleSubmit = async () => {
        // Validate form data
        let isValid = true;

        if (!color) {
            setColorError('Color is required');
            isValid = false;
        } else {
            setColorError('');
        }

        if (!model) {
            setModelError('Model is required');
            isValid = false;
        } else {
            setModelError('');
        }

        if (!price) {
            setpriceError('price is required');
            isValid = false;
        } else {
            setpriceError('');
        }

        if (!registrationNo) {
            setRegistrationNoError('Registration number is required');
            isValid = false;
        } else {
            setRegistrationNoError('');
        }

        if (!description) {
            setDescriptionError('Description is required');
            isValid = false;
        } else {
            setDescriptionError('');
        }

        if (!isValid) {
            return;
        }

        if ( color != "" && model != "" && price != "" && registrationNo != "" && description != "") {
            setLoading(true)
            let response = await CreateRecords(carType, color.trim(), model.trim(), price.trim(), registrationNo.trim(), description.trim())
            console.log("res", response);

            try {
                if(response.success == true){
                    setLoading(false)
                    // Alert.alert("Successfully, ", response.message)
                    saveTask()
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

    // Save Modal Open for 2 seconds
    const saveTask = () => {
        setSaveModal(true)
        setTimeout(() => {
            setSaveModal(false);
        }, 2000);
    }

    return (
        <View style={styles.container}>

            {/* Header */}
            <Header
                goBack={() => navigation.goBack()}
                title={"Create Car Record"}
            // save={() => navigation.goBack()}
            />

            {/* body */}
            <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps='always'>

                {/* Category */}
                <Text style={styles.textHeading}>Category</Text>
                <View style={styles.pickerStyle}>
                        <Picker
                            selectedValue={value}
                            onValueChange={(itemValue, itemIndex) => OnchangePickerSeletedHandler(itemValue, itemIndex)}
                            itemStyle={{ color: "white", alignItems: 'center' }}
                        >
                            {
                                categories.map((item, index) => {
                                    return (
                                        <Picker.Item label={item.label} value={item.id} style={{ alignSelf: 'center' }} />
                                    )
                                })
                            }
                        </Picker>
                    </View>

                {/* Color */}
                <Text style={[styles.textHeading]}>Color</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter Color...'
                    placeholderTextColor={COLORS.placeholder}
                    keyboardType="default"
                    value={color}
                    onChangeText={(value) => setColor(value)}
                />
                {colorError ? <Text style={styles.error}>{colorError}</Text> : null}

                {/* Model */}
                <Text style={styles.textHeading}>Model</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter Modal'
                    placeholderTextColor={COLORS.placeholder}
                    keyboardType="default"
                    value={model}
                    onChangeText={(value) => setModel(value)}
                />
                {modelError ? <Text style={styles.error}>{modelError}</Text> : null}

                {/* Made By */}
                <Text style={styles.textHeading}>Price</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter Company'
                    placeholderTextColor={COLORS.placeholder}
                    keyboardType='number-pad'
                    value={price}
                    onChangeText={(value) => setprice(value)}
                />
                {priceError ? <Text style={styles.error}>{priceError}</Text> : null}

                {/* Registration No. */}
                <Text style={styles.textHeading}>Registration #:</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter Reg. No.'
                    placeholderTextColor={COLORS.placeholder}
                    keyboardType="default"
                    value={registrationNo}
                    onChangeText={(value) => setRegistrationNo(value)}
                />
                {registrationNoError ? <Text style={styles.error}>{registrationNoError}</Text> : null}

                {/* Registration No. */}
                <Text style={styles.textHeading}>Description:</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter Description'
                    placeholderTextColor={COLORS.placeholder}
                    keyboardType="default"
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                />
                {descriptionError ? <Text style={styles.error}>{descriptionError}</Text> : null}
            </ScrollView>

            {/* Buttons */}
            <View style={styles.bottomBtnContainer}>
                <TouchableOpacity style={styles.btnSave} onPress={() => handleSubmit()}>
                    <Check name="checkcircle" size={15} color={COLORS.white} />
                    <Text style={styles.textBottomBtn}>Save</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={[styles.btnSave, { width: '75%', backgroundColor: '#ffffff' }]} onPress={() => saveTask()}>
                    <Add name="ios-add-circle" size={15} color={COLORS.green} />
                    <Text style={[styles.textBottomBtn, { color: COLORS.green }]}>Save and add another</Text>
                </TouchableOpacity> */}
            </View>

            {/* Save Modal */}
            <Modal visible={saveModal} animationType='slide' transparent={true} >
                <View style={styles.modalContainer}>
                    <SuccessModal
                        statement={"Your Task is created successfully"}
                    />
                </View>
            </Modal>
        </View>
    )
}
