import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, StyleSheet, Dimensions, KeyboardAvoidingView } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';
import { Button, VStack } from "@react-native-material/core";
import InputWithLabel from "../components/InputWithLabel";
import CustomButton from "../components/CustomButton";

const windowHeight = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;

const LoginPage = ({ navigation }) => {
    const height = useHeaderHeight();
    const [mobileNo, setMobileNo] = useState("1+");
    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={screenHeight + 55}>
            <View style={styles.container}>
                <VStack mt={50} spacing={12}>
                    <VStack>
                        <Text style={{ fontSize: 30,  color: 'gray'}}>Welcome to the</Text>
                        <Text style={{ fontSize: 36, color: '#EA0000', fontWeight: 'bold' }}>
                            CK<Text style={{ color: 'black' }}>TWO</Text> experience
                        </Text>
                    </VStack>
                    <InputWithLabel label="Mobile number" placeholder="Email" value={mobileNo} onChangeText={setMobileNo} />
                    <InputWithLabel label="Passcode" placeholder="Passcode" secureInput={true} isNumeric={true} />
                </VStack>
                <View style={styles.fullHeight}>
                    <Button title="Log In"
                        color="#EA0000"
                        pressEffectColor="white"
                        pressEffect="highlight"
                        style={{
                            paddingVertical: 10,
                            marginTop: 20,
                        }}
                        tintColor="white"
                        onPress={() => navigation.navigate('Dashboard')}
                    />
                </View>

            </View>
        </KeyboardAvoidingView>
    );
}
// Need some kind of layout inspector
export default LoginPage;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'column',
        // marginVertical: 20,
        justifyContent: 'space-between',
        height: windowHeight - 100
    }
});