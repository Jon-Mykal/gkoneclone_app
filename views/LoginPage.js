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
    const mobileNumberChangeHandler = (text) => {

        setMobileNo(prev => {
            
            if (prev.length == 0) {
                console.log(prev);
                return `1+ ${text}`;
            }
            else if (prev.startsWith("1+")) {
                
                // console.log("Starts With", , text.substring(2, text.length));
                if (text.length > 0) {
                    // text.splice()
                    let formattedText = `${text.substring(0, 2)}${text.substring(2, text.length)}`;
                    let index = prev.startsWith("+1");
                    
                    console.log(`${formattedText}`);
                    return `${formattedText}`;
                }
                // console.log(prev.split("+1"), text.includes("+1"));
                return text;
            }
            
            return `${text}`;
        });
    }
    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={screenHeight + 55}>
            <View style={styles.container}>
                <VStack mt={90} spacing={12}>
                    <VStack>
                        <Text style={{ fontSize: 30, color: 'gray' }}>Welcome to the</Text>
                        <Text style={{ fontSize: 36, color: '#EA0000', fontWeight: 'bold' }}>
                            CK<Text style={{ color: 'black' }}>TWO</Text> experience
                        </Text>
                    </VStack>
                    <VStack mt={20}>
                        <InputWithLabel label="Mobile number" placeholder="Mobile number" value={mobileNo} onChangeText={mobileNumberChangeHandler} isNumeric={true} />
                        <InputWithLabel label="Passcode" placeholder="Passcode" secureInput={true} isNumeric={true} />
                    </VStack>
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
        marginTop: 10,
        marginBottom: 30,
        marginHorizontal: 20,
        flexDirection: 'column',
        // marginVertical: 20,
        justifyContent: 'space-between',
        height: windowHeight
    }
});