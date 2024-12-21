import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import appFirebase from './credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase)

const API_KEY = "9e9688c17fcc73602da667a7d932ff59";
const CITY = "Guadalajara";

const LoginScreen = (props) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        // Configurar Google Sign-In
        GoogleSignin.configure({
            offlineAccess: true,
            webClientId: '459236924644-cljfvho9ehidta6va1av3uh4fv3lug1k.apps.googleusercontent.com', // Reemplaza con tu Client ID web
            //androidClientId: '459236924644-us9du3qnk2js647hrihqii9h0751k84p.apps.googleusercontent.com', // Reemplaza con tu Client ID de Android
            iosClientId: '459236924644-3808r5pcvmki798j9ekqesamfjob9io7.apps.googleusercontent.com', // Reemplaza con tu Client ID de iOS
            scopes: ['profile', 'email'], // Solicitar acceso al perfil y email
        });

        // Obtener clima
        const fetchWeather = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
                );
                const data = await response.json();
                setWeather(data.main.temp);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();
    }, []);

    // Función para manejar el inicio de sesión
    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("Usuario logueado:", userInfo);
        } catch (error) {
            console.error("Error en el inicio de sesión con Google:", error);
        }
    };

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const logueo = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            Alert.alert('Inicio de sesión exitoso')
            props.navigation.navigate("Inicio")
        }
        catch (error) {
            console.error("Error en el inicio de sesión:", error);
        }
    }    

    return (
        <View style={styles.container}>
            {/* Mostrar clima */}
            <View style={styles.weatherContainer}>
                <Text style={styles.weatherText}>
                    {weather ? `${weather}°C` : "Cargando clima..."}
                </Text>
            </View>

            {/* Botón de Google Sign-In */}
            <View style={styles.googleButtonContainer}>
                <GoogleSigninButton
                    style={styles.googleButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={handleGoogleLogin}
                />
            </View>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="weather-partly-cloudy" size={40} color="black" />
            </View>
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder="correo@gmail.com" style={{paddingHorizontal:15}} 
                    onChangeText={(text)=>setEmail(text)}/>
                </View>
                <View style={styles.cajaTexto}>
                    <TextInput placeholder="contraseña" style={{paddingHorizontal:15}}
                    onChangeText={(text)=>setPassword(text)} secureTextEntry={true}/>
                </View>
            <View style={styles.PadreBoton}>
                <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
                    <Text style={styles.TextoBoton}>Iniciar sesión</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    weatherContainer: {
        position: "absolute",
        top: 60,
        left: 10,
    },
    weatherText: {
        fontSize: 18,
    },
    googleButtonContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    googleButton: {
        width: 230,
        height: 48,
    },
    iconContainer: {
        top: -220,
        left: -160,
    },
    tarjeta:{
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cajaTexto:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:30,
        marginVertical:10
    },
    PadreBoton:{
        alignItems:'center'
    },
    cajaBoton:{
        backgroundColor:'#525FE1',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    TextoBoton:{
        textAlign:'center',
        color:'white'
    }

});

export default LoginScreen;
