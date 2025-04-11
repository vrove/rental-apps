import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const SettingPage = () => {
    const router = useRouter();

    const [isPushNotifEnabled, setIsPushNotifEnabled] = useState(true);
    const [isMessageEnabled, setIsMessageEnabled] = useState(true);
    const [isPromoEnabled, setIsPromoEnabled] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/homepage/more')}>
                    <Text style={styles.backButton}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
            </View>

            <View style={styles.switchContainer}>
                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>Push Notifikasi</Text>
                    <Switch
                        value={isPushNotifEnabled}
                        onValueChange={setIsPushNotifEnabled}
                        trackColor={{ false: '#ccc', true: '#03045E' }}
                        thumbColor={isPushNotifEnabled ? '#fff' : '#f4f3f4'}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>Pesan</Text>
                    <Switch
                        value={isMessageEnabled}
                        onValueChange={setIsMessageEnabled}
                        trackColor={{ false: '#ccc', true: '#03045E' }}
                        thumbColor={isMessageEnabled ? '#fff' : '#f4f3f4'}
                    />
                </View>
                <View style={styles.switchRow}>
                    <Text style={styles.switchLabel}>Promo</Text>
                    <Switch
                        value={isPromoEnabled}
                        onValueChange={setIsPromoEnabled}
                        trackColor={{ false: '#ccc', true: '#03045E' }}
                        thumbColor={isPromoEnabled ? '#fff' : '#f4f3f4'}
                    />
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Bahasa</Text>
                    <Text style={styles.infoValue}>Indonesia</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Nomor versi</Text>
                    <Text style={styles.infoValue}>1.2.3 (0)</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Negara</Text>
                    <Text style={styles.infoValue}>Indonesia</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
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
    switchContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#03045E',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    switchLabel: {
        fontSize: 14,
        color: '#333',
    },
    infoContainer: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    infoLabel: {
        fontSize: 14,
        color: '#03045E',
        fontWeight: 'bold',
    },
    infoValue: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default SettingPage;