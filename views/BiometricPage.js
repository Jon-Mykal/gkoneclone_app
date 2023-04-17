import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as LocalAuthentication from 'expo-local-authentication';
import { Button } from '@react-native-material/core';

const BiometricPage = () => {
    const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);
    const fallBackToDefaultAuth = () => {

    };

    const handleBiometricAuth = async () => {
        // Check if biometrics are saved on user's device.
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics) {
            return Alert.alert(
                'Biometric record not found',
                'Please verify your identity with your password',
                'OK',
                () => fallBackToDefaultAuth()
            );
        }

       return Alert.prompt(
            "Authentication Required",
            "Use fingerprint to log in",
            () => console.log("Pressed")
        )

        // const biometricAuth = await LocalAuthentication.authenticateAsync({
        //     promptMessage: 'Login with Biometrics',
        //     disableDeviceFallback: true,
        //     cancelLabel: "Cancel"
        // })
    }
    // let biometricFlow;
    useEffect(() => {
        (async () => {
            const compatible = await LocalAuthentication.hasHardwareAsync();
            setIsBiometricSupported(compatible);
        })();
    });

    Alert.alert(
        'Title',
        'Message',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ],
        { cancelable: false }
      );

    return (
        <View>
            {
                isBiometricSupported ? <Button title="Login" onPress={() => handleBiometricAuth()} /> :
                    <Text>Face or Fingerprint scanner is not available on this device</Text>
            }
        </View>
    )
}

export default BiometricPage

const styles = StyleSheet.create({})