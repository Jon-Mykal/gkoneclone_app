import React from 'react';
import { Pressable, Text } from '@react-native-material/core';
import { View, StyleSheet } from 'react-native';

const CustomButton = ({ label, onPress, style }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [
            {
                backgroundColor: pressed ? 'white' : 'red',
                transition: 'all ease .2s'
            },
            style
        ]}>
            {
            ({ pressed }) => (
                <Text style={
                    pressed ? { ...styles.text, color: "red" } : styles.text
                }>{label}</Text>
                )
            }
        </Pressable>
    );
};


const baseStyles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        cursor: 'pointer'
    }
});
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonSolid: {
        ...baseStyles.button,
        backgroundColor: 'white'
    },
    buttonOutline: {
        ...baseStyles.button,
        borderWidth: 1,
        borderColor: 'white',
        
        // border: 1, borderColor: 'white', borderStyle: 'solid'
    }
});

export default CustomButton;