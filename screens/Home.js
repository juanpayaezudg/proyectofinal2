import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { WebView } from "react-native-webview";
import FontAwesome from '@expo/vector-icons/FontAwesome';


const API_KEY = "9e9688c17fcc73602da667a7d932ff59";
const CITY = "Guadalajara";

const HomeScreen = ({ navigation}) => {
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
        navigation.navigate("Directorio");
    };
    const handleButtonPress2 = () => {
        navigation.navigate("Login");
    };
    const nullbutton = () => {
        alert("coming soon");
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
                    source={{ uri: "https://maps.app.goo.gl/yYWviikjzkNgZNCk7" }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true} 
                />
            </View>
            <View>
            <TouchableOpacity style={styles.iconButton} onPress={handleButtonPress2}>
                <FontAwesome name="user-circle-o" size={40} color="black" />
            </TouchableOpacity>                
            </View>

            <TouchableOpacity style={styles.button} onPress={nullbutton}>
                <Text style={styles.buttonText}>Realidad Aumentada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={nullbutton}>
                <Text style={styles.buttonText2}>Módulos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button3} onPress={handleButtonPress}>
                <Text style={styles.buttonText3}>Directorio</Text>
            </TouchableOpacity>


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
        top: 70,
        left: 10,
    },
    weatherText: {
        fontSize: 18,
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 230,
        height: 70,
        top: 35
    },
    iconContainer: {
        top: -150,
        right: 155,
    },
    iconButton: {
        left: 150,
        top: -550,
    },
    button: {
        backgroundColor: "purple",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        top: -517,
        right: 70,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },    
    button2: {
        backgroundColor: "gray",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        top: -547,
        right: -100,
    },
    buttonText2: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    button3: {
        backgroundColor: "orange",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: "center",
        top: -20,
        right: -2,
    },
    buttonText3: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },   
    webViewContainer: {
        width: 360, 
        height: 500, 
        top: 60,
        left: -1,
    },
});

export default HomeScreen;
