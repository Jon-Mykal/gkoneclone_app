import React from "react";
import { View, Text, Button, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const DashboardPage = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Wallet" component={Home} />
        </Tab.Navigator>
    );
}

const Home = () => {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default DashboardPage;