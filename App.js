import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import EmailPhoneConfirmationScreen from './screens/EmailPhoneConfirmationScreen';
import SetPinCodeScreen from './screens/SetPinCodeScreen'; 
import HomeScreen from './screens/HomeScreen';
import AddCardScreen from './screens/AddCardScreen';
import ProfileScreen from './screens/ProfileScreen';
import ContactsScreen from './screens/ContactScreen';
import AddContactScreen from './screens/AddContactScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import PasswordRecoveringScreen from './screens/PasswordRecoveringScreen';
import PinCodeInputScreen from './screens/PinCodeInputScreen';
import ContactTransferScreen from './screens/ContactTransferScreen';
import TransferStatusScreen from './screens/TransferStatusScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import Test from './components/test';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Confirmation" component={EmailPhoneConfirmationScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SetPinCode" component={SetPinCodeScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="AddCard" component={AddCardScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="AddContact"
          component={AddContactScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="ContactDetail"
          component={ContactDetailScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="PasswordRecovering"
        component={PasswordRecoveringScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="PinCodeInput"
        component={PinCodeInputScreen}
        options={{ headerShown: false }}
      />  */}
      {/* <Stack.Screen name="ContactTransfer" component={ContactTransferScreen} options={{ headerShown: false }} />  */}
      <Stack.Screen name="TransferStatus" component={TransferStatusScreen} options={{ headerShown: false }} /> 
      {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />  */}
      {/* <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false }} />  */}
      {/* <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
