import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Favorite = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Favorite</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Image
                    source={require('@/assets/images/favorite-img.png')}
                    style={styles.image}
                />
                <Text style={styles.message}>Anda belum memiliki favorite</Text>
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    image: {
        marginTop: -150,
        width: 350,
        height: 350,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    message: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default Favorite;