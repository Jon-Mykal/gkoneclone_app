import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from '@react-native-material/core';

const InputWithLabel = ({ label, placeholder, value, onChangeText, isNumeric = false, secureInput = false }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        variant='outlined'
        secureTextEntry={secureInput}
        keyboardType={isNumeric ? 'numeric' : 'default'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default InputWithLabel;