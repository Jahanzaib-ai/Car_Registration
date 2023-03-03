import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { COLORS } from '../util/Color'

import Login from "../screen/Authentication/Login";
import SignUp from "../screen/Authentication/SignUp";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: COLORS.green,
    },
    headerTintColor: "#FFFFFF",
    headerBackTitle: COLORS.green,
};

export default function AuthNavigation() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={screenOptionStyle}>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}