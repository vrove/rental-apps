import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
import vehicleData from '@/data/vehicleData';
import motorcycleData from '@/data/motorcycleData';
import pickupData from '@/data/pickupData';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>('Car Rental');
    const router = useRouter();

    const getCategoryData = () => {
        switch (selectedCategory) {
            case 'Car Rental':
                return vehicleData;
            case 'Motorcycle':
                return motorcycleData;
            case 'Pick Up':
                return pickupData;
            default:
                return [];
        }
    };

    const renderVehicleItem = ({ item }: { item: typeof vehicleData[0] }) => (
        <View style={styles.vehicleCard}>
            <Image source={{ uri: item.image }} style={styles.vehicleImage} />
            <Text style={styles.vehicleName}>{item.name}</Text>
            <Text style={styles.vehiclePrice}>{item.price}</Text>
            {item.originalPrice && (
                <Text style={styles.vehicleOriginalPrice}>{item.originalPrice}</Text>
            )}
            <Text style={styles.vehicleUsage}>{item.usage}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/opening/login')}>
                    <Text style={styles.backButton}>{'<'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/help/help')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.helpButton}>need help?</Text>
                    <Image
                        source={require('@/assets/images/headphone.png')}
                        style={styles.iconHelp}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/notification/notification')}>
                    <Image
                        source={require('@/assets/images/bell-icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.navContainer}>
                <View style={styles.profileContainer}>
                    <Image
                        style={styles.profileIcon}
                        source={require('@/assets/images/profile.png')}
                    />
                    <Text style={styles.greeting}>Hello Chanlie</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity
                        style={[
                            styles.categoryCard,
                            selectedCategory === 'Car Rental' && styles.selectedCategoryCard,
                        ]}
                        onPress={() => setSelectedCategory('Car Rental')}
                    >
                        <Image
                            source={require('@/assets/images/car-icon.png')}
                            style={[
                                styles.categoryIcon,
                                selectedCategory === 'Car Rental' && styles.selectedCategoryIcon,
                            ]}
                        />
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === 'Car Rental' && styles.selectedCategoryText,
                            ]}
                        >
                            Car Rental
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.categoryCard,
                            selectedCategory === 'Motorcycle' && styles.selectedCategoryCard,
                        ]}
                        onPress={() => setSelectedCategory('Motorcycle')}
                    >
                        <Image
                            source={require('@/assets/images/motorcycle-icon.png')}
                            style={[
                                styles.categoryIcon,
                                selectedCategory === 'Motorcycle' && styles.selectedCategoryIcon,
                            ]}
                        />
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === 'Motorcycle' && styles.selectedCategoryText,
                            ]}
                        >
                            Motorcycle
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.categoryCard,
                            selectedCategory === 'Pick Up' && styles.selectedCategoryCard,
                        ]}
                        onPress={() => setSelectedCategory('Pick Up')}
                    >
                        <Image
                            source={require('@/assets/images/pickup-icon.png')}
                            style={[
                                styles.categoryIcon,
                                selectedCategory === 'Pick Up' && styles.selectedCategoryIcon,
                            ]}
                        />
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === 'Pick Up' && styles.selectedCategoryText,
                            ]}
                        >
                            Pick Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.promoContainer}>
                <Text style={styles.promoTitle}>Hot Promo</Text>
                <TouchableOpacity onPress={() => router.push('/promo/promo')}>
                    <Text style={styles.seeMore}>See More</Text>
                </TouchableOpacity>
            </View>
            <ImageBackground
                source={require('@/assets/images/promo-bg.png')}
                style={styles.promoBanner}
                imageStyle={{ borderRadius: 10 }}
            >
                <Text>
                    <Text style={styles.promoDate}>31 mar - 4 apr</Text>
                </Text>
                <Image
                    source={require('@/assets/images/hot-price.png')}
                    style={styles.hotPriceImage}
                />
                <Text style={styles.promoDescription}>
                    nikmati promo khusus lebaran, bisa mudik dan jalan-jalan tanpa takut kehabisan!
                </Text>
                <TouchableOpacity style={styles.orderButton} onPress={() => router.push('/promo/promo')}>
                    <Text style={styles.orderButtonText}>Order Now</Text>
                </TouchableOpacity>
            </ImageBackground>
            <TouchableOpacity onPress={() => router.push('/selectVehicle/select')}>
                <FlatList
                    data={getCategoryData()}
                    renderItem={renderVehicleItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.vehicleList}
                />
            </TouchableOpacity>
            <View style={styles.popularContainer}>
                <Text style={styles.popularTitle}>Populer</Text>
                <TouchableOpacity onPress={() => router.push('/selectVehicle/select')} style={styles.popularGrid}>
                    {getCategoryData().map((item) => (
                        <View key={item.id} style={styles.popularCard}>
                            <Image source={{uri: item.image}} style={styles.popularImage} />
                            <Text style={styles.popularName}>{item.name}</Text>
                            <Text style={styles.popularPrice}>{item.price}</Text>
                            <Text style={styles.popularUsage}>{item.usage}</Text>
                        </View>
                    ))}
                </TouchableOpacity>
            </View>
            <View style={styles.mapButtonContainer}>
                <TouchableOpacity
                    style={styles.mapButton}
                    onPress={() => {
                        router.push('/maps/maps');
                    }}
                >
                    <Text style={styles.mapButtonText}>gunakan peta</Text>
                    <Image
                        source={require('@/assets/images/map-icon.png')}
                        style={styles.mapButtonIcon}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};


export const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 80,
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#03045E',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 30,
    },
    greeting: {
        color: '#fff',
        fontSize: 18,
        marginRight: 120,
    },
    icon: {
        marginTop: 3,
        width: 20,
        height: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#fff',
    },
    navContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#03045E',
        paddingVertical: 20,
        paddingBottom: 70,
    },
    notificationIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileContainer: {
        marginTop: -20,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },
    profileIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginTop: -2,
        tintColor: '#fff',
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        zIndex: 1,
    },
    iconHelp: {
        width: 20,
        height: 20,
        tintColor: '#fff',
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
        marginLeft: 220,
    },
    promoContainer: {
        marginTop: -95,
        paddingTop: 50,
        borderTopStartRadius: 30,
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: -20,
        paddingBottom: 40,
    },
    promoTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000',
    },
    promoDate: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#B1B1CD',
    },
    seeMore: {
        color: '#e0cc04',
        fontSize: 14,
    },
    promoBanner: {
        width: width - 40,
        height: 190,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        marginBottom: 20,
    },
    hotPriceImage: {
        width: 130,
        height: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    promoDescription: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 10,
        fontWeight: '200',
        textAlign: 'justify',
        maxWidth: '50%',
    },
    orderButton: {
        backgroundColor: '#e0cc04',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    vehicleList: {
        paddingHorizontal: 20,
        borderColor: '#fff',
    },
    vehicleCard: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginRight: 15,
        padding: 10,
        width: width * 0.4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 15,
    },
    vehicleImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    vehicleName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    vehiclePrice: {
        fontSize: 14,
        color: '#03045E',
        marginBottom: 5,
    },
    vehicleOriginalPrice: {
        fontSize: 12,
        color: '#aaa',
        textDecorationLine: 'line-through',
    },
    categoryCard: {
        width: '25%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderEndEndRadius: 30,
        borderTopStartRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
    },
    selectedCategoryCard: {
        backgroundColor: '#03045E',
    },
    categoryIcon: {
        width: 28,
        height: 25,
        marginBottom: 10,
    },
    selectedCategoryIcon: {
        tintColor: '#fff',
    },
    categoryText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
    selectedCategoryText: {
        color: '#fff',
    },
    vehicleUsage: {
        fontSize: 12,
        color: '#555',
        marginTop: 5,
    },
    popularContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    popularTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    popularGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    popularCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    popularImage: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    popularName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    popularPrice: {
        fontSize: 14,
        color: '#03045E',
        marginBottom: 5,
    },
    popularUsage: {
        fontSize: 12,
        color: '#555',
    },
    mapButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    mapButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#03045E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    mapButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10,
    },
    mapButtonIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
    },
});

export default Home;