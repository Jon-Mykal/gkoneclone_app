import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Pressable, StyleSheet, } from "react-native";
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DashboardHomePage = ({ navigation }) => {
    const nav = navigation;
    // const st = useDrawerStatus();
    const [toggle, setToggle] = useState(true);

    return (
        <Drawer.Navigator
            
            defaultStatus="closed"
            screenOptions={{
                drawerPosition: 'right',
                drawerActiveTintColor: 'red',
                headerTintColor: 'red',
                drawerType: 'front',
                // drawerHideStatusBarOnOpen: true,
                headerRight: () => (
                    <View>
                        <Pressable style={{ padding: 15}} onPress={() => {setToggle(!toggle); alert(toggle)}}>
                            <Text>Header Right</Text>
                        </Pressable>
                    </View>
                ),
                drawerStyle: {
                    width: '70%',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    // height: '100%',
                    // position: 'absolute',
                    // top: 100
                },

            }}>
            <Drawer.Screen name="Rewards"
                component={HomeV2}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <View>
                            <Text>Rewards</Text>
                        </View>
                    ),
                    // headerShown: false,
                    // drawerPosition: 'left',

                }} />
            <Drawer.Screen name="TellOpinion"
                component={HomeV2}
                options={{
                    title: 'Tell us your opinion',
                    drawerIcon: ({ focused, color, size }) => (
                        <View>
                            <Text>Icon Opinion</Text>
                        </View>
                    ),
                    // headerShown: false,
                    // drawerPosition: 'left',

                }} />
            <Drawer.Screen name="Help"
                component={HomeV2}
                options={{
                    title: 'Help & Contact',
                    drawerIcon: ({ focused, color, size }) => (
                        <View>
                            <Text>Icon Help</Text>
                        </View>
                    ),
                    // headerShown: false,
                    // drawerPosition: 'left',

                }} />
        </Drawer.Navigator>
    );
};

const HomeV2 = ({ route }) => {
    return (
        <View>
            <Text>{route.name}</Text>
        </View>
    );
};

export default DashboardHomePage;