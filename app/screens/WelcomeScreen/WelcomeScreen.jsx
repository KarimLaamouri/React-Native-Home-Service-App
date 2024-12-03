import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

const { width, height } = Dimensions.get('window');
const PHONE_WIDTH = width * 0.88; // Adjust this value to match your desired phone width
const PHONE_HEIGHT = height * 0.75; // Adjust this value to match your desired phone height

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.phoneContainer}>
                <ImageBackground
                    source={require('../../../assets/1.jpg')}
                    style={styles.backgroundImage}
                    resizeMode="cover"
                    imageStyle={styles.imageStyle}
                />
            </View>

            {/* Orange Bottom Section */}
            <View style={styles.bottomSection}>
                <View style={styles.bottomContent}>
                    <Text style={styles.bottomText}>
                        Let's Find <Text style={styles.boldText}>Professional</Text>{'\n'}
                        <Text style={styles.boldText}>Cleaning and repair</Text> Service
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.replace('MainTab')}
                    >
                        <Text style={styles.buttonText}>Let's Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    phoneContainer: {
        width: PHONE_WIDTH,
        height: PHONE_HEIGHT,
        marginTop: height * 0.05,
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    },
    imageStyle: {
        borderRadius: 40,
    },
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: Colors.PRIMARY,
        height: height * 0.28,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
    },
    bottomContent: {
        padding: 25,
    },
    bottomText: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
    },
    boldText: {
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: Colors.PRIMARY,
        fontSize: 16,
        fontWeight: '600',
    },
}); 