import React from "react";
import { View, Text, Button, TouchableOpacity, Pressable, StyleSheet, } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardHomePage from "./DashboardHomePage";
import DashboardWalletPage from "./DashboardWalletPage";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const DashboardPage = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={DashboardHomePage} options={{ headerShown: false }} />
            <Tab.Screen name="Wallet" component={DashboardWalletPage} />
        </Tab.Navigator>
    );
}


const HomeV2 = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
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