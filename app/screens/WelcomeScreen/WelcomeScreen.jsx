import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../assets/InstaFix.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <Image
                source={require('../../../assets/1.png')}
                style={styles.image}
            />

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
        justifyContent: 'center',
    },
    logoContainer: {
        position: 'absolute',
        top: height * 0.07,
        width: width * 0.5,
        height: height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: width * 0.95,
        height: height * 0.65,
        marginTop: -height * 0.02,
        alignSelf: 'center',
        left: width * 0.025,
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