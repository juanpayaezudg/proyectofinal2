import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import progress from '../assets/progress.png';

const API_KEY = "9e9688c17fcc73602da667a7d932ff59";
const CITY = "Guadalajara";

const Logueado = ({ navigation }) => {
    const [weather, setWeather] = useState(null);
    const [totalCreditos, setTotalCreditos] = useState(0);

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

        const fetchCreditos = async () => {
            try {
                const response = await fetch("https://cuceimobile.space/Escuela/kardex.php"); // Cambia esta URL por tu JSON real
                const data = await response.json();

                // Supongamos que los créditos están en "creditosArea"
                const total = data.creditosArea.reduce((sum, area) => sum + area.creditosAdquiridos, 0);
                setTotalCreditos(total);
            } catch (error) {
                console.error("Error fetching creditos data:", error);
            }
        };

        fetchWeather();
        fetchCreditos();
    }, []);

    const handleButtonPress = () => {
        navigation.navigate("Materias");
    };

    const nullbutton = () => {
        alert("coming soon");
    };

    const ProgressBar = ({style}) => {
        return (
            <View style={[styles.progressBarContainer, style]}>
                <View style={[styles.progressBar, style]}>
                    <View style={[styles.progress, { width: "120%", height: 20 }]} />
                </View>
            </View>
        );
    };

    const ProgressBar2 = ({style}) => {
        return (
            <View style={[styles.progressBarContainer, style]}>
                <View style={[styles.progressBar2, style]}>
                    <View style={[styles.progress, { width: "120%", height: 20 }]} />
                </View>
            </View>
        );
    };

    const ProgressBar3 = ({style}) => {
        return (
            <View style={[styles.progressBarContainer, style]}>
                <View style={[styles.progressBar3, style]}>
                    <View style={[styles.progress, { width: "120%", height: 20 }]} />
                </View>
            </View>
        );
    };

    const ProgressBar4 = ({style}) => {
        return (
            <View style={[styles.progressBarContainer, style]}>
                <View style={[styles.progressBar4, style]}>
                    <View style={[styles.progress, { width: "120%", height: 20 }]} />
                </View>
            </View>
        );
    };

    const ProgressBar5 = ({style}) => {
        return (
            <View style={[styles.progressBarContainer, style]}>
                <View style={[styles.progressBar5, style]}>
                    <View style={[styles.progress, { width: "120%", height: 20 }]} />
                </View>
            </View>
        );
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
                    source={{ uri: "https://www.ntrguadalajara.com/evidimg/2020-10-10_10-10-02___4740.jpg" }}
                    style={styles.image}
                />
            </View>

            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="weather-partly-cloudy" size={40} color="black" />
            </View>

            <TouchableOpacity style={styles.button} onPress={nullbutton}>
                <Text style={styles.buttonText}>Realidad Aumentada</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2} onPress={nullbutton}>
                <Text style={styles.buttonText2}>Módulos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button3} onPress={handleButtonPress}>
                <Text style={styles.buttonText3}>Materias</Text>
            </TouchableOpacity>

            <View style={styles.gaugeChart}>
            <Image source={progress} style={styles.gaugeImage} />
            </View>

            <Text style={styles.porcentaje}>
                100.5%
            </Text>

            <Text style={styles.creditosText}>
                Créditos adquiridos: {totalCreditos}
            </Text>

            <Text style={styles.titulo1}>
                ESPECIALIZANTE OBLIGATORIA
            </Text>

            <Text style={styles.creditos1}>
                Créditos: 50
            </Text>

            <ProgressBar style={styles.barra1} />

            <Text style={styles.titulo2}>
                ESPECIALIZANTE SELECTIVA
            </Text>

            <Text style={styles.creditos2}>
                Créditos: 16
            </Text>

            <ProgressBar2 style={styles.barra2} />

            <Text style={styles.titulo3}>
                OPTATIVA ABIERTA
            </Text>

            <Text style={styles.creditos3}>
                Créditos: 18
            </Text>

            <ProgressBar3 style={styles.barra3} />

            <Text style={styles.titulo4}>
                BASICO COMUN
            </Text>

            <Text style={styles.creditos4}>
                Créditos: 149
            </Text>

            <ProgressBar4 style={styles.barra4} />

            <Text style={styles.titulo5}>
                BASICA PARTICULAR
            </Text>

            <Text style={styles.creditos5}>
                Créditos: 144
            </Text>

            <ProgressBar5 style={styles.barra5} />


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
    image: {
        width: 270,
        height: 70,
        right: -40,
    },
    iconContainer: {
        top: -70,
        left: -160,
    },
    porcentaje: {
        fontSize: 24,
        fontWeight: "bold",
        top: -60,
        left: 102,
    },
    creditosText: {
        fontSize: 18,
        fontWeight: "bold",
        top: -50,
        left: 80,
    },
    button: {
        backgroundColor: "purple",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        top: -35,
        left: -90
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
        top: -66,
        left: 125
    },
    buttonText2: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    button3: {
        backgroundColor: "orange",
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        top: -65,
        left: -134
    },
    buttonText3: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    progressBarContainer: {
        marginTop: 20,
        left: -60,
        width: "50%", 
    },
    progressBar: {
        width: "100%",
        height: 20,
        backgroundColor: "#e0e0e0", 
        borderRadius: 10,
    },
    progress: {
        height: "100%",
        backgroundColor: "#4caf50", 
        borderRadius: 10,
    },
    gaugeChart: {
        width: 50, 
        height: 50, 
        justifyContent: "center",
        alignItems: "center", 
    },
    gaugeImage: {
        width: "300%", 
        height: "300%", 
        resizeMode: "contain", 
        top: -40,
        left: 100,
    },
    titulo1: {
        top: -10,
        left: -80,
    },
    barra1: {
        top: -20,
        left: -41,
    },
    creditos1: {
        top: -2,
        left: 140,
    },
    titulo2: {
        top: -10,
        left: -90,
    },
    creditos2: {
        top: -2,
        left: 140,
    },
    barra2: {
        top: -20,
        left: -41,
    },
    titulo3: {
        top: -20,
        left: -120,
    },
    creditos3: {
        top: -2,
        left: 140,
    },
    barra3: {
        top: -20,
        left: -41,
    },
    titulo4: {
        top: -20,
        left: -127,
    },
    creditos4: {
        top: -2,
        left: 140,
    },
    barra4: {
        top: -20,
        left: -41,
    },
    titulo5: {
        top: -20,
        left: -112,
    },
    creditos5: {
        top: -2,
        left: 140,
    },
    barra5: {
        top: -20,
        left: -41,
    },
});

export default Logueado;
