import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';
const { width } = Dimensions.get('window');

const Maps = () => {
    const router = useRouter();

    const [selectedLocation, setSelectedLocation] = useState({
        name: 'Kony Rent',
        image: require('@/assets/images/kony-rent.png'),
        rating: 4.5,
        days: 'Sen - Minggu',
        hours: '09.00 - 22.00',
        coordinate: { latitude: -6.200000, longitude: 106.816666 },
    });

    const locations = [
        {
            name: 'Kony Rent',
            image: require('@/assets/images/kony-rent.png'),
            rating: 4.5,
            days: 'Sen - Minggu',
            hours: '09.00 - 22.00',
            coordinate: { latitude: -6.200000, longitude: 106.816666 },
        },
        {
            name: 'RentRent',
            image: null,
            rating: 4.5,
            days: 'Sen - Minggu',
            hours: '09.00 - 22.00',
            coordinate: { latitude: -6.200000, longitude: 106.816666 },
        },
        {
            name: 'King Rent',
            image: null,
            rating: 4.5,
            days: 'Sen - Minggu',
            hours: '09.00 - 22.00',
            coordinate: { latitude: -6.200000, longitude: 106.816666 },
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => { router.push('/homepage/home') }}>
                        <Text style={styles.backButton}>{'<'}</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: '#fff'}}>Maps</Text>
                </View>
                <View style={{ flexDirection: 'row'}}>
                {locations.map((location, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.headerButton,
                            selectedLocation.name === location.name && styles.selectedHeaderButton,
                        ]}
                        onPress={() => setSelectedLocation(location)}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                style={[
                                    styles.headerButtonText,
                                    selectedLocation.name === location.name && styles.selectedHeaderButtonText,
                                ]}
                            >
                                {location.name}
                            </Text>
                            <Image
                                source={require('@/assets/images/arrow-right.png')}
                                style={{ width: 16, height: 16, marginLeft: 5, tintColor: '#000' }}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
                </View>
            </View>

            {/* Map */}
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: -6.200000,
                    longitude: 106.816666,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        coordinate={location.coordinate}
                        title={location.name}
                        onPress={() => setSelectedLocation(location)}
                    />
                ))}
            </MapView>

            {/* Bottom Card */}
            <View style={styles.bottomCard}>
                <Image source={selectedLocation.image} style={styles.locationImage} />
                <View style={styles.locationDetails}>
                    <Text style={styles.locationName}>{selectedLocation.name}</Text>
                    <Text style={styles.locationRating}>⭐ {selectedLocation.rating}</Text>
                    <Text style={styles.locationDays}>{selectedLocation.days}</Text>
                    <Text style={styles.locationHours}>{selectedLocation.hours}</Text>
                </View>
                <TouchableOpacity style={styles.moreInfoButton}>
                    <Text style={styles.moreInfoButtonText}>More Info</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#03045E',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 30,
    },
    headerButton: {
        paddingHorizontal: 7,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderWidth: 1,
    },
    selectedHeaderButton: {
        backgroundColor: '#B1B1CD',
    },
    headerButtonText: {
        fontSize: 14,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    selectedHeaderButtonText: {
        color: '#fff',
    },
    map: {
        flex: 1,
    },
    bottomCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    locationImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    locationDetails: {
        flex: 1,
    },
    locationName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    locationRating: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    locationDays: {
        fontSize: 12,
        color: '#555',
    },
    locationHours: {
        fontSize: 12,
        color: '#555',
    },
    moreInfoButton: {
        backgroundColor: '#1E1E99',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    moreInfoButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    backButton: {
        fontSize: 24,
        color: '#fff',
        marginRight: 120,
        marginLeft: -140,
    },
});

export default Maps;