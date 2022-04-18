import React from "react";
import {  Image, Text, View, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import Login from "./Telas/Telalogin/index";
import Cadastro from "./Telas/Telacadastro/index";
import AlterarSenha from "./Telas/TelaSenha";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Telalogin" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Telacadastro" component={Cadastro} />
        <Stack.Screen name="Telasenha" component={AlterarSenha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}