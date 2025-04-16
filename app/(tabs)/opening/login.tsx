import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/opening/onboarding')} style={{ marginBottom: 20 }}>
                <Image source={require('@/assets/images/back.png')} style={{ width: 13, height: 30, tintColor: '#1E1E99' }} />
            </TouchableOpacity>
            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.subtitle}>lets start your trip</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.countryCode}>+62</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#aaa"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>
            <TouchableOpacity
                style={[
                    styles.button,
                    phoneNumber.length > 0 ? styles.buttonActive : styles.buttonInactive,
                ]}
                disabled={phoneNumber.length === 0}
                onPress={() => {
                    if (phoneNumber.length > 0) {
                        router.push('/homepage/home');
                    }
                }}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    backButton: {
        fontSize: 40,
        color: '#1E1E99',
        marginBottom: 20,
        fontWeight: 200,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1E1E99',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E1E99',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 12,
        marginBottom: 20,
    },
    countryCode: {
        fontSize: 16,
        color: '#1E1E99',
        marginRight: 10,
        marginLeft: 10,
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#000',
    },
    button: {
        marginTop: '110%',
        width: width - 40,
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonActive: {
        backgroundColor: '#1E1E99',
    },
    buttonInactive: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Login;