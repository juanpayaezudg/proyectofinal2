//import React from "react";
//import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import DirectoryScreen from "./screens/Directorio";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import 'react-native-gesture-handler';
import Logueado from "./screens/Logueado";
import MateriasScreen from "./screens/Materias";

//import AntDesign from '@expo/vector-icons/AntDesign';
//import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
//import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"> 
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Directorio" component={DirectoryScreen} />
                <Stack.Screen name="Inicio" component={Logueado} />
                <Stack.Screen name="Materias" component={MateriasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        );
        }
