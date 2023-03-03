import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image, Modal, Dimensions, Alert, } from 'react-native'

import Check from 'react-native-vector-icons/AntDesign'
import Calender from 'react-native-vector-icons/Feather'
import Edit from 'react-native-vector-icons/MaterialIcons'
import Delete from 'react-native-vector-icons/MaterialIcons'
import Exclamation from 'react-native-vector-icons/FontAwesome5'
import Add from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../util/Color'
import Header from '../../component/Header'
import SuccessModal from '../../component/SuccessModal'
import styles from '../../constant/Tasks/CarDetailStyle'
import { RadioButton } from "react-native-paper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Spinner from 'react-native-loading-spinner-overlay'
import AsyncStorage from '@react-native-async-storage/async-storage'

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const InfoView = ({ title, info }) => {
    return (
        <View style={styles.subInfoContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.textinfo}>{info}</Text>
        </View>
    )
}

export default function CarDetail({ navigation, route }) {

    const { _id, color, model, name, registration_no, price, } = route.params
    console.log(_id)

    // Modals
    const [editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [saveModal, setSaveModal] = useState(false)
    const [loading, setLoading] = useState(false)

    // States
    const [category, setCategory] = useState(name);
    const [colors, setColor] = useState(color);
    const [models, setModel] = useState(model);
    const [prices, setPrice] = useState(price);
    const [registrationNo, setRegistrationNo] = useState(registration_no);

    const [categoryError, setCategoryError] = useState('');
    const [colorError, setColorError] = useState('');
    const [modelError, setModelError] = useState('');
    const [priceError, setPriceError] = useState('');
    const [registrationNoError, setRegistrationNoError] = useState('');


    // Function
    const handleSubmit = async () => {
        // Validate form data
        let isValid = true;

        if (!category) {
            setCategoryError('Category is required');
            isValid = false;
        } else {
            setCategoryError('');
        }

        if (!colors) {
            setColorError('Color is required');
            isValid = false;
        } else {
            setColorError('');
        }

        if (!models) {
            setModelError('Model is required');
            isValid = false;
        } else {
            setModelError('');
        }

        if (!prices) {
            setPriceError('price is required');
            isValid = false;
        } else {
            setPriceError('');
        }

        if (!registrationNo) {
            setRegistrationNoError('Registration number is required');
            isValid = false;
        } else {
            setRegistrationNoError('');
        }
        if (!isValid) {
            return;
        }

        if (category != "" && colors != "" && models != "" && registrationNo != "" && prices != "") {
            setLoading(true)

            await fetch(`http://192.168.80.169:4000/api/v4/admin/cars/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: category,
                    color: colors,
                    model: models,
                    price: prices,
                    registration_no: registrationNo,
                })
            }).then(Response => {
                console.log('Record updated successfully:', Response);
                setLoading(false)
                saveEditTask()
                navigation.navigate('Cars')
            }).catch(error => {
                console.error('Error updating record name:', error);
                setLoading(false)
            });
        }
    }

    const saveEditTask = () => {
        setSaveModal(true)

        setTimeout(() => {
            setSaveModal(false);
        }, 2000);

        setEditModal(false)
    }

    const deleteRecord = async () =>{
        await fetch(`http://192.168.80.169:4000/api/v4/admin/cars/${_id}`, { 
            method: 'DELETE' 
        })
        .then((response) => {
            console.log('Record updated successfully:', response);
            setLoading(false)
            navigation.navigate('Cars')
        }).catch(error => {
            console.error('Error updating record name:', error);
            setLoading(false)
        });
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
            <Header
                goBack={() => navigation.goBack()}
                title={"Car Detail"}
            // save={""}
            />

            {/* body */}
            <ScrollView contentContainerStyle={styles.body}>

                {/* Buttons Container */}
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnEditTasks} onPress={() => setEditModal(true)}>
                        <Edit name="edit" size={12} color={COLORS.white} />
                        <Text style={styles.textEditTasks}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDelete} onPress={() => setDeleteModal(true)}>
                        <Delete name="delete" size={30} color='#FA3050' />
                    </TouchableOpacity>
                </View>

                {/* Information Container */}
                <View style={styles.infoContainer}>
                    <Image source={require("../../assest/image/logo1.jpg")} style={styles.image} />
                    <Text style={styles.textHeading}>{name}</Text>
                    <InfoView
                        title={"Registration No. :"}
                        info={registration_no}
                    />
                    <InfoView
                        title={"Modal :"}
                        info={model}
                    />
                    <InfoView
                        title={"Color :"}
                        info={color}
                    />
                    <InfoView
                        title={"Price :"}
                        info={price}
                    />
                </View>
            </ScrollView>

            {/* Edit Task Modal  */}
            <Modal visible={editModal} animationType='slide' transparent={true}>
                <View style={styles.mainContainerModal}>
                    <View style={styles.subContainerModal}>
                        <ScrollView contentContainerStyle={styles.bodyModal} keyboardShouldPersistTaps='always'>

                            {/* Category */}
                            <Text style={styles.textHeadingModal}>Category</Text>
                            <TextInput
                                style={styles.inputTextModal}
                                placeholder='Category...'
                                placeholderTextColor={COLORS.placeholder}
                                keyboardType="default"
                                value={category}
                                onChangeText={(value) => setCategory(value)}
                            />
                            {categoryError ? <Text style={styles.error}>{categoryError}</Text> : null}

                            {/* Color */}
                            <Text style={[styles.textHeadingModal]}>Color</Text>
                            <TextInput
                                style={styles.inputTextModal}
                                placeholder='Enter Color...'
                                placeholderTextColor={COLORS.placeholder}
                                keyboardType="default"
                                value={colors}
                                onChangeText={(value) => setColor(value)}
                            />
                            {colorError ? <Text style={styles.error}>{colorError}</Text> : null}

                            {/* Model */}
                            <Text style={styles.textHeadingModal}>Model</Text>
                            <TextInput
                                style={styles.inputTextModal}
                                placeholder='Enter Modal'
                                placeholderTextColor={COLORS.placeholder}
                                keyboardType="default"
                                value={models}
                                onChangeText={(value) => setModel(value)}
                            />
                            {modelError ? <Text style={styles.error}>{modelError}</Text> : null}

                            {/* Made By */}
                            <Text style={styles.textHeadingModal}>Price</Text>
                            <TextInput
                                style={styles.inputTextModal}
                                placeholder='Enter Company'
                                placeholderTextColor={COLORS.placeholder}
                                keyboardType="default"
                                value={prices}
                                onChangeText={(value) => setPrice(value)}
                            />
                            {priceError ? <Text style={styles.error}>{priceError}</Text> : null}

                            {/* Registration No. */}
                            <Text style={styles.textHeadingModal}>Registration #:</Text>
                            <TextInput
                                style={styles.inputTextModal}
                                placeholder='Enter Reg. No.'
                                placeholderTextColor={COLORS.placeholder}
                                keyboardType="default"
                                value={registrationNo}
                                onChangeText={(value) => setRegistrationNo(value)}
                            />
                            {registrationNoError ? <Text style={styles.error}>{registrationNoError}</Text> : null}
                        </ScrollView>

                        {/* Save Button */}
                        <TouchableOpacity style={styles.btnSave} onPress={() => handleSubmit()}>
                            <Check name="checkcircle" size={15} color={COLORS.white} />
                            <Text style={styles.textBottomBtn}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


            {/* Delete Modal */}
            <Modal visible={deleteModal} animationType='slide' transparent={true} >
                <View style={styles.modalContainer}>
                    <View style={styles.deleteModalContainer}>
                        {/* Modal Header */}
                        <View style={styles.deleteModalHeader}>
                            <Text style={styles.textDeleteModalHeader}>Delete Task?</Text>
                        </View>

                        {/* Delete Modal Body */}
                        <View style={styles.deleteModalBody}>
                            <Text style={[styles.textinfo, { textAlign: 'center', width: "70%" }]}>Are you sure you want to delete this task?</Text>
                        </View>

                        {/* Delete Modal Buttons */}
                        <View style={styles.deleteBtnContainer}>
                            <TouchableOpacity style={styles.deleteModalBtn} onPress={() => deleteRecord() }>
                                <Text style={[styles.textinfo, { width: '100%' }]}>OK</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteModalBtn} onPress={() => { setDeleteModal(false) }}>
                                <Text style={[styles.textinfo, { width: '100%' }]}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Save Modal */}
            <Modal visible={saveModal} animationType='slide' transparent={true} >
                <View style={styles.modalContainer}>
                    <SuccessModal
                        statement={"Your Task is edited successfully"}
                    />
                </View>
            </Modal>
        </View>
    )
}

