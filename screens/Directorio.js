import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import { WebView } from "react-native-webview";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const API_KEY = "9e9688c17fcc73602da667a7d932ff59";
const CITY = "Guadalajara";

const DirectoryScreen = ({navigation}) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
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

    const handleButtonPress = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.weatherContainer}>
                <Text style={styles.weatherText}>
                    {weather ? `${weather}°C` : "Cargando clima..."}
                </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: "https://www.ntrguadalajara.com/evidimg/2020-10-10_10-10-02___4740.jpg" }} // Cambia por la URL de tu imagen
                    style={styles.image}
                />
            </View>

            <View style={styles.container}>
                <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="weather-partly-cloudy" size={40} color="black" /></View>
            </View>
            
            
            <View style={styles.webViewContainer}>
                <WebView
                    source={{ uri: "https://www.cucei.udg.mx/es/directorio" }}
                    style={styles.webView}
                />
            <View>
            <TouchableOpacity style={styles.iconButton} onPress={handleButtonPress}>
                <FontAwesome name="user-circle-o" size={40} color="black" />
            </TouchableOpacity>                
            </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
    },
    weatherContainer: {
        position: "absolute",
        top: 50,
        left: 10,
    },
    weatherText: {
        fontSize: 18,
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: 100,
    },
    image: {
        width: 400,
        height: 200,
    },
    webViewContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
        top: -150,
    },
    webView: {
        flex: 1,
    },
    iconContainer: {
        top: -255,
        right: 160,
    },
    iconButton: {
        left:335,
        top: -520,
    },
});

export default DirectoryScreen;
