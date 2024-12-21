import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const API_KEY = "9e9688c17fcc73602da667a7d932ff59";
const CITY = "Guadalajara";

const MateriasScreen = ({ navigation }) => {
    const [weather, setWeather] = useState(null);
    const [materias, setMaterias] = useState([]);

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

        const fetchMaterias = async () => {
            try {
                const response = await fetch("https://cuceimobile.space/Escuela/kardex.php"); 
                const data = await response.json();
                setMaterias(data.materias); 
            } catch (error) {
                console.error("Error fetching materias data:", error);
            }
        };

        fetchWeather();
        fetchMaterias();
    }, []);

    const renderMateria = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Nombre: {item.descripcion}</Text>
            <Text style={styles.itemText}>Calificación: {item.calificacion}</Text>
        </View>
    );

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

            <FlatList
                data={materias}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderMateria}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
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
        marginTop: 100,
        marginBottom: 20,
    },
    image: {
        width: 290,
        height: 70,
        top: -100,
        left: 38,
    },
    iconContainer: {
        marginBottom: 20,
        top: -190,
        right: 155
    },
    list: {
        width: "90%",
        top: -120,
    },
    itemContainer: {
        backgroundColor: "#f0f0f0",
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 16,
    },
});

export default MateriasScreen;
