import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const EditProfile = () => {
    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('jhondoe21@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('+62');

    // Check if all fields are filled
    const isFormFilled = firstName && lastName && dateOfBirth && phoneNumber;

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Edit Profile</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                {/* First Name */}
                <Text style={styles.label}>First Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                {/* Last Name */}
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter last name"
                    value={lastName}
                    onChangeText={setLastName}
                />

                {/* Date of Birth */}
                <Text style={styles.label}>Date of Birth</Text>
                <View style={styles.inputWithIcon}>
                    <Image
                        source={require('@/assets/images/calendar.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.inputWithIconText}
                        placeholder="DD/MM/YYYY"
                        value={dateOfBirth}
                        onChangeText={setDateOfBirth}
                    />
                </View>

                {/* Email */}
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputWithIcon}>
                    <Image
                        source={require('@/assets/images/sms.png')}
                        style={styles.icon}
                    />
                    <TextInput
                        style={styles.inputWithIconText}
                        placeholder="Enter your email"
                        value={email}
                        editable={false}
                    />
                </View>

                {/* Phone Number */}
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="+62"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />

                {/* Update Button */}
                <TouchableOpacity
                    style={[
                        styles.updateButton,
                        isFormFilled ? styles.updateButtonActive : styles.updateButtonInactive,
                    ]}
                    disabled={!isFormFilled}
                    onPress={() => {
                        router.back();
                    }}
                >
                    <Text style={styles.updateButtonText}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6EF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#03045E',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#fff',
        marginRight: 10,
    },
    headerTitle: {
        marginLeft: 130,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    form: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#03045E',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#03045E',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: '#03045E',
    },
    inputWithIconText: {
        flex: 1,
    },
    updateButton: {
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    updateButtonActive: {
        backgroundColor: '#03045E',
    },
    updateButtonInactive: {
        backgroundColor: '#B1B1CD',
    },
    updateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default EditProfile;