import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Pressable, StyleSheet, ScrollView } from "react-native";
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Box, HStack, VStack } from '@react-native-material/core';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Rewards" onPress={() => alert('Rewards')} />
            <DrawerItem label="Tell us your opinion" onPress={() => alert('Tell us your opinion')} />
            <DrawerItem label="Help & Contact" onPress={() => alert('Help & Contact')} />
        </DrawerContentScrollView>
    );
};

const DashboardHomePage = ({ navigation }) => {
    const nav = navigation;
    // const st = useDrawerStatus();
    const [toggle, setToggle] = useState(true);

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            defaultStatus="closed"
            screenOptions={{
                drawerPosition: 'right',
                drawerActiveTintColor: 'red',
                headerTintColor: 'red',
                drawerType: 'front',
                headerRight: () => (
                    <View>
                        <Pressable style={{ padding: 15 }} onPress={() => { setToggle(!toggle); alert(toggle) }}>
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
            {/* <Drawer.Screen name="TellOpinion"
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

                }} /> */}
        </Drawer.Navigator>
    );
};

const HomeV2 = ({ route }) => {
    return (
        <ScrollView>
            <VStack spacing={10}>
                <View style={{ height: 320, width: '100%', backgroundColor: 'gray' }}></View>
                <View style={{ height: 320, width: '100%', backgroundColor: 'lightgray', alignItems: 'center', justifyContent: 'center' }}>
                    <VStack spacing={15}>
                        <HStack spacing={15}>
                            {
                                ["Receive Money", "Pay Bills", "Credit Card"].map((item, index) => {
                                    return (
                                        <Pressable style={{ alignItems: 'center' }} key={index} onPress={() => alert(item)}>
                                            <Box h={100} w={110} style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>{item}</Text>
                                            </Box>
                                        </Pressable>
                                    )
                                })
                            }
                        </HStack>
                        <HStack spacing={15}>
                            {
                                ["Rewards", "Champs Spirit"].map((item, index) => {
                                    return (
                                        <Pressable style={{ alignItems: 'center' }} key={index} onPress={() => alert(item)}>
                                            <Box h={100} w={110} style={{ backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>{item}</Text>
                                            </Box>
                                        </Pressable>
                                    )
                                })
                            }
                        </HStack>
                    </VStack>
                </View>
                <View style={{ height: 200, width: '100%', backgroundColor: 'white', alignItems: 'center', flexDirection: 'row' }}>
                    <ScrollView horizontal={true}>
                        <HStack spacing={12} mh={20}>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                                    return (
                                        <Pressable style={{ alignItems: 'center', justifyContent: 'center' }} key={index} onPress={() => alert(item)}>
                                            <Box h={90} w={90} style={{ backgroundColor: 'lightblue', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>Box {item}</Text>
                                            </Box>
                                            <Text style={{ marginTop: 10}}>Bill {item}</Text>
                                        </Pressable>
                                    )
                                })
                            }
                        </HStack>
                    </ScrollView>
                </View>
                <View style={{ height: 320, width: '100%', backgroundColor: 'red' }}></View>
            </VStack>

        </ScrollView>
    );
};

export default DashboardHomePage;