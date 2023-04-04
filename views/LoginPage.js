import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import { Button } from "@react-native-material/core";
import InputWithLabel from "../components/InputWithLabel";
import CustomButton from "../components/CustomButton";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    return (
        <View style={styles.container}>
            <InputWithLabel label="Mobile number" placeholder="Email"  />
            <InputWithLabel label="Passcode" placeholder="Password" secureInput={true}  />
            <CustomButton label="Log In"  />
        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    }
});