import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import EmailPhoneConfirmationScreen from './screens/EmailPhoneConfirmationScreen';
import SetPinCodeScreen from './screens/SetPinCodeScreen'; 
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Confirmation" component={EmailPhoneConfirmationScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SetPinCode" component={SetPinCodeScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
