import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from '../Routes/context';

import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

export default function Providers() {
    const [userID, setUserID] = useState(null);

    useEffect(() => {
        (async () => {
            const id = await AsyncStorage.getItem("user_id");
            if (id !== null) {
                setUserID(id);
            }
        })();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AuthContext.Provider
                value={{ userID, setUserID }}>
                {userID ?
                    <AppNavigation />
                    :
                    <AuthNavigation />
                }
            </AuthContext.Provider>
        </SafeAreaView>
    );
}
