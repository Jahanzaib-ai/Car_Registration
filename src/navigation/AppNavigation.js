import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import Cars from '../screen/Tasks/Cars'
import CreateRecord from '../screen/Tasks/CreateRecord'
import CarDetail from '../screen/Tasks/CarDetail'

import { COLORS } from "../util/Color";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: COLORS.green,
    },
    headerTintColor: "#FFFFFF",
    headerBackTitle: COLORS.green,
};

export default function AppNavigation() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={screenOptionStyle}>
                <Stack.Screen name="Cars" component={Cars} options={{ headerShown: false }} />
                <Stack.Screen name="CreateRecord" component={CreateRecord} options={{ headerShown: false }} />
                <Stack.Screen name="CarDetail" component={CarDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}