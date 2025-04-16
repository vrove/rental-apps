import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const OTP = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '']);

    const isButtonEnabled = otp.every((digit) => digit !== '');

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Image source={require('@/assets/images/back.png')} style={{ width: 13, height: 30, tintColor: '#1E1E99' }} />
            </TouchableOpacity>

            {/* Title */}
            <Text style={styles.title}>Masukan Kode OTP</Text>
            <Text style={styles.subtitle}>
                kode verifikasi telah di kirim ke nomor +62812345678910
            </Text>

            {/* OTP Input */}
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(value, index)}
                    />
                ))}
            </View>

            <Text style={styles.timer}>Kode kedaluwarsa: <Text style={styles.timerBold}>03:09</Text></Text>

            <TouchableOpacity
                style={[
                    styles.verificationButton,
                    isButtonEnabled ? styles.verificationButtonActive : styles.verificationButtonInactive,
                ]}
                disabled={!isButtonEnabled}
                onPress={() => {
                    if (isButtonEnabled) {
                        router.push('/opening/onboarding');
                    }
                }}
            >
                <Text style={styles.verificationButtonText}>Verification</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resendButton}>
                <Text style={styles.resendButtonText}>Send again</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    backButton: {
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#1E1E99',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 30,
    },
    otpInput: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#1E1E99',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        backgroundColor: '#F5F5F5',
    },
    timer: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        marginBottom: 30,
    },
    timerBold: {
        fontWeight: 'bold',
        color: '#000',
    },
    verificationButton: {
        marginTop: '90%',
        width: '100%',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    verificationButtonActive: {
        backgroundColor: '#1E1E99',
    },
    verificationButtonInactive: {
        backgroundColor: '#E0E0E0',
    },
    verificationButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    resendButton: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E1E99',
        borderRadius: 10,
        paddingVertical: 10,
    },
    resendButtonText: {
        color: '#1E1E99',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default OTP;