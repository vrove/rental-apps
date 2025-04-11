import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList, Image, ImageBackground, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');


const PromoPage = () => {
    const router = useRouter();
    
    return (
       <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Promo</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Cari atau tambahkan promo"
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.searchIconContainer}>
                    <Image source={require('@/assets/images/search-icon.png')} style={styles.searchIcon} />
                </TouchableOpacity>   
            </View>

            <View style={styles.promoContainer}>
                <Text style={styles.promoTitle}>Hot Promo</Text>
                <TouchableOpacity>
                    <Text style={styles.seeMore}>See More</Text>
                </TouchableOpacity>
            </View>
            <ImageBackground
                source={require('@/assets/images/promo1.png')}
                style={styles.promoBanner}
                imageStyle={{ borderRadius: 10 }}
            >
                <TouchableOpacity style={styles.orderButton2}>
                    <Text style={styles.orderButtonText}>Order Now</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.promoContainer}>
                <Text style={styles.promoTitle}>Hot Promo</Text>
                <TouchableOpacity>
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
                <TouchableOpacity style={styles.orderButton}>
                    <Text style={styles.orderButtonText}>Order Now</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.promoContainer}>
                <Text style={styles.promoTitle}>Hot Promo</Text>
                <TouchableOpacity>
                    <Text style={styles.seeMore}>See More</Text>
                </TouchableOpacity>
            </View>
            <ImageBackground
                source={require('@/assets/images/promo3.png')}
                style={styles.promoBanner}
                imageStyle={{ borderRadius: 10 }}
            >
                <TouchableOpacity style={styles.orderButton2}>
                    <Text style={styles.orderButtonText}>Order Now</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: 80,
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingBottom: 80,
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#03045E',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 20,
        shadowColor: '#000',
        backgroundColor: '#fff',
    },
    searchInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 2,
        fontSize: 14,
        color: '#333',
    },
    searchIconContainer: {
        marginLeft: 10,
    },
    searchIcon: {
        width: 30,
        height: 30,
        tintColor: '#333',
    },
    promoList: {
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    promoCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    promoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    promoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    seeMore: {
        fontSize: 14,
        color: '#e0cc04',
        fontWeight: 'bold',
    },
    promoContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promoImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    promoTextContainer: {
        flex: 1,
    },
    promoDate: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#B1B1CD',
    },
    promoMainTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#03045E',
        marginBottom: 5,
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
    promoContainer: {
        paddingTop: 30,
        backgroundColor: '#f5f5f5',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: -20,
        paddingBottom: 40,
    },
    orderButton2: {
        backgroundColor: '#e0cc04',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginTop: 100,
    },
});

export default PromoPage;