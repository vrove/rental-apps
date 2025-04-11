import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const Register = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();

    const isButtonEnabled = phoneNumber.length > 0 && isChecked;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's Start!</Text>
            <Text style={styles.subtitle}>Input your phone number</Text>
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
                style={styles.customCheckboxContainer}
                onPress={() => setIsChecked(!isChecked)}
            >
                <View style={[styles.customCheckbox, isChecked && styles.customCheckboxChecked]} />
                <Text style={styles.checkboxLabel}>Saya menyetujui syarat & ketentuan dan kebijakan privasi </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    isButtonEnabled ? styles.buttonActive : styles.buttonInactive,
                ]}
                disabled={!isButtonEnabled}
                onPress={() => {
                    if (isButtonEnabled) {
                        router.push('/opening/otp');
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
    title: {
        marginTop: 40,
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
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        marginRight: 10,
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
    customCheckboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    customCheckbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        marginRight: 10,
    },
    customCheckboxChecked: {
        backgroundColor: '#1E1E99',
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#555',
    },
});

export default Register;