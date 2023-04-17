import React from "react";
import { View, Text, Button, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import CarouselCards from "../components/CarouselCards";
import CarouselSlider from "../components/CarouselSlider";

const CreateAccountPage = () => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            {/* <Text>Create Account Page</Text> */}
            <CarouselSlider />
        </View>
    );
}

export default CreateAccountPage;

