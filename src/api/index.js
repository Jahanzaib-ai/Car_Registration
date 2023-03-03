const BASE_URL = 'http://192.168.80.169:4000';
const DATABASE_NAME = '';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { PrivateValueStore } from '@react-navigation/native';

export const login = (email, password) => {
  console.log("email", email)
  console.log("password", password)

  return fetch('http://192.168.80.169:4000/api/v1/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password

    }),
  }).then(res => res.json());
}


export const Register = (name, email, mobile, password) => {

  return fetch('http://192.168.80.169:4000/api/v1/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      mobile: mobile,
      password: password
    }),
  }).then(res => res.json());
}


export const LogoutAPI = () => {

  return fetch("https://aljaliltest.ifrs16.app/web/session/logout", {
    method: 'GET',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res);
}

export const GetCars = (id, name, color, modal, registration_no, description ) => {

  return fetch("http://192.168.80.169:4000/api/v4/AllCars", {
    method: 'GET',
    headers: {
      //   'Content-Type': 'multipart/form-data',
    }
  }).then(res => res);
}

export const CreateRecords = (name, color, model, price, registration_no, description) => {

  return fetch('http://192.168.80.169:4000/api/v4/admin/cars/new', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      color: color,
      model: model,
      price: price,
      registration_no: registration_no,
      description: description
    }),
  }).then(res => res.json());
}

export const UpdateRecord = (name, color, model, price, registration_no) => {

  return fetch('http://192.168.80.169:4000/api/v4/admin/cars/'+id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      color: color,
      model: model,
      price: price,
      registration_no: registration_no
    }),
  }).then(res => res.json());
}

export const storeData = async (userId, password, user_name, registerUser,) => {
  console.log("at services/index=>", registerUser)
  try {
    await AsyncStorage.setItem('user_id', JSON.stringify(userId))
    await AsyncStorage.setItem('password', password)
    await AsyncStorage.setItem('user_name', user_name)
    await AsyncStorage.setItem('registerUser', registerUser)
    console.log(userId)
  } catch (e) {
    console.log("error", e)
    // saving error
  }
}
