import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import vehicleData from '@/data/vehicleData';
import { useRouter } from 'expo-router';

const ConfirmPage = () => {
    const router = useRouter();
    const vehicle = vehicleData.find((v) => v.id === 1);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('@/assets/images/back.png')} style={{ width: 13, height: 30, tintColor: '#fff' }} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Favorite</Text>
            </View>

            <View style={{ padding: 20 }}>
                <View style={styles.card}>
                    <Image source={{ uri: vehicle?.image }} style={styles.image} />
                    <View style={styles.cardDetails}>
                        <Text style={styles.vehicleName}>{vehicle?.name}</Text>
                        <Text style={styles.price}>{vehicle?.price}</Text>
                        <Text style={styles.subtext}>Unit: 1</Text>
                        <Text style={styles.subtext}>Service: No</Text>
                    </View>
                </View>

                <View style={styles.statusContainer}>
                    <Text style={styles.statusText}>
                        Menunggu Konfirmasi Penyewaan{'\n'}Dari Penyedia Jasa.
                    </Text>
                    <View style={styles.iconPlaceholder}>
                        <Image
                            source={require('@/assets/images/clock.png')}
                        />
                    </View>

                    <View style={styles.progressContainer}>
                        <View style={[styles.circle, styles.activeCircle]} />
                        <View style={styles.line} />
                        <View style={styles.circle} />
                        <View style={styles.line} />
                        <View style={styles.circle} />
                        <View style={styles.line} />
                        <View style={styles.circle} />
                        <View style={styles.line} />
                        <View style={styles.circle} />
                    </View>
                </View>

                <TouchableOpacity onPress={() => router.push('/homepage/home')} style={styles.confirmButton}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

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
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        padding: 12,
    },
    image: {
        width: 120,
        height: 80,
        borderRadius: 8,
        marginRight: 12,
    },
    cardDetails: {
        flex: 1,
    },
    vehicleName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    subtext: {
        fontSize: 13,
        color: 'gray',
    },
    statusContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    statusText: {
        color: '#00005F',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 20,
    },
    iconPlaceholder: {
        borderRadius: 50,
        marginBottom: 20,
    },
    icon: {
        fontSize: 28,
        color: 'white',
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#ddd',
    },
    activeCircle: {
        backgroundColor: '#00005F',
    },
    line: {
        width: 40,
        height: 2,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
    },
    confirmButton: {
        backgroundColor: '#00005F',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    confirmText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ConfirmPage;