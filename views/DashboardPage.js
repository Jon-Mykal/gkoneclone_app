import React from "react";
import { View, Text, Button, TouchableOpacity, Pressable, StyleSheet, } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardHomePage from "./DashboardHomePage";
import DashboardWalletPage from "./DashboardWalletPage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const DashboardPage = () => {
    return (
        <Tab.Navigator activeColor="red"
            inactiveColor="grey"
            barStyle={{ backgroundColor: 'white' }}>
            <Tab.Screen name="Home"
                component={DashboardHomePage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen name="Wallet" 
                component={DashboardWalletPage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="wallet" color={color} size={26} />
                    ),
                }}  />
        </Tab.Navigator>
    );
}


const HomeV2 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={DashboardHomePage} />
        </Stack.Navigator>
    );
};

const drawerNavigatorScreenOptions = {
}

const drawerScreenOptions = {
    screenOne: {
        title: 'Screen One',
        // head
    }
}

export default DashboardPage;