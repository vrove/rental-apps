import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
const Trips = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('@/assets/images/back.png')} style={{ width: 13, height: 30, tintColor: '#fff' }} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Trips</Text>
                <TouchableOpacity onPress={() => router.push('/help/help')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.helpButton}>need help?</Text>   
                    <Image
                        source={require('@/assets/images/headphone.png')}
                        style={styles.iconHelp}
                    />
                </TouchableOpacity>
                <View style={styles.notificationIcons}>
                    <TouchableOpacity onPress={() => router.push('/notification/notification')}>
                        <Image
                            source={require('@/assets/images/bell-icon.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="cari paket wisata anda"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Image
                        source={require('@/assets/images/search-icon.png')}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.emptyStateContainer}>
                <Image
                    source={require('@/assets/images/car-trip.png')}
                    style={styles.emptyStateImage}
                />
                <Text style={styles.emptyStateTitle}>Tidak Ada Jadwal Wisata</Text>
                <Text style={styles.emptyStateSubtitle}>
                    ayo temukan paket wisata dan nikmati suasana liburan yang menyenangkan
                </Text>
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
        justifyContent: 'space-between',
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
    },
    headerTitle: {
        marginLeft: 140,
        marginRight: -130,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    helpButton: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#e0cc04',
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderBottomRightRadius: 0,
        marginLeft: 170,
    },
    notificationIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    iconHelp: {
        width: 20,
        height: 20,
        tintColor: '#fff',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    searchInput: {
        flex: 1,
        fontSize: 14,
        color: '#000',
        paddingVertical: 10,
    },
    searchButton: {
        padding: 10,
    },
    searchIcon: {
        width: 20,
        height: 20,
        tintColor: '#aaa',
    },
    emptyStateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#E6E6EF',
    },
    emptyStateImage: {
        width: 350,
        height: 350,
        resizeMode: 'contain',
        marginTop: -250,
        marginBottom: -50,
    },
    emptyStateTitle: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
    },
    emptyStateSubtitle: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Trips;