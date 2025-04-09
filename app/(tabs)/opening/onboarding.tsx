import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

const slides = [
    {
        id: 1,
        image: require('@/assets/images/slide1.png'),
        title: 'Transportasi & Perjalanan',
        description: 'Aplikasi membantu Anda memilih kendaraan sesuai preferensi dan perjalanan terbaik.',
    },
    {
        id: 2,
        image: require('@/assets/images/slide2.png'),
        title: 'Praktis dan Hemat',
        description: 'Pilih kendaraan mudah, harga transparan, proses cepat!',
    },
    {
        id: 3,
        image: require('@/assets/images/slide3.png'),
        title: 'Pilihan Beragam',
        description: 'Temukan pilihan mobil, motor, atau jasa pengangkutan yang beragam dan sesuai keinginan anda',
    },
];

const Onboarding = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleScroll = (event: any) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentSlide(slideIndex);
    };

    const renderItem = ({ item }: { item: typeof slides[0] }) => (
        <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            />
            <View style={styles.pagination}>
                {slides.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            currentSlide === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <Link href="/opening/login">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </View>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    slide: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: width * 0.7,
        height: height * 0.4,
        resizeMode: 'contain',
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'left',
        color: '#555',
        lineHeight: 22,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#1E1E99',
    },
    inactiveDot: {
        backgroundColor: '#ccc',
    },
    buttonContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#1E1E99',
        paddingVertical: 15,
        paddingHorizontal: 140,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Onboarding;