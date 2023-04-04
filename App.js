import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './views/StartPage';
import LoginPage from './views/LoginPage';
import CreateAccountPage from './views/CreateAccountPage';
import DashboardPage from './views/DashboardPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartPage} options={{ headerShown: false}}/>
        <Stack.Screen name="Create Account" component={CreateAccountPage} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false}} />
        <Stack.Screen name="Dashboard" component={DashboardPage} options={{ headerShown: false}} />
      </Stack.Navigator>
      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app</Text>

    //   <StatusBar style="auto" />
    // </View>
    // <StartPage />
  );
}

const StartPage2 = () => (
  <View style={{ backgroundColor: 'red', width: '100%', height: '100%' }}>
    <Pressable onPress={() => console.log('pressed')}>
      <Text>Press me</Text>
    </Pressable>
   { /* <View style={{
      paddingTop: 150, alignItems: 'center'
    }}>
      <Text style={{ fontSize: 25, color: "white" }}>Welcome to</Text>
      <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
        GK <Text style={{ color: "black" }}>One</Text>
      </Text>
    </View>
    <View style={{ paddingTop: '30vh' }}>
      {/* <Pressable style={{
        backgroundColor: "white",
        ...styles.buttonSolid
      }}>
        <Text style={{ color: 'red', fontWeight: "bold" }}>Create an account</Text>
      </Pressable> */}
      {/* <View style={{ marginVertical: 8 }}></View> */}
      {/* <Pressable style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'white' : 'red',
          transition: 'all ease .2s'
        },
        styles.buttonOutline
      ]}>
        {({ pressed }) => (
          <Text style={
            pressed ? { ...styles.text, color: "red" } : styles.text
          }>Log in</Text>)
        }
      </Pressable> 
    </View>*/}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
