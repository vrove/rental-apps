import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Help = () => {
    const router = useRouter();

    const helpItems = [
        { id: 1, title: 'Pertanyaan Umum', icon: require('@/assets/images/message-question.png') },
        { id: 2, title: 'Saya adalah customers', icon: require('@/assets/images/people.png') },
        { id: 3, title: 'Saya adalah vendor', icon: require('@/assets/images/car.png') },
        { id: 4, title: 'Wallet', icon: require('@/assets/images/wallet.png') },
        { id: 5, title: 'Kecelakaan & Keadaan darurat', icon: require('@/assets/images/wallet.png') },
        { id: 6, title: 'Pengantar', icon: require('@/assets/images/key.png') },
    ];
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                <Image source={require('@/assets/images/back.png')} style={{ width: 13, height: 30, tintColor: '#fff' }} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Help</Text>
            </View>

            <View style={styles.content}>
                {helpItems.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.helpItem}>
                        <View style={styles.helpItemLeft}>
                            <Image source={item.icon} style={styles.helpIcon} />
                            <Text style={styles.helpText}>{item.title}</Text>
                        </View>
                        <Text style={styles.helpArrow}>{'>'}</Text>
                    </TouchableOpacity>
                ))}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Layanan Pengaduan Konsumen Vehicle Sulawesi Utara
                    </Text>
                    <Text style={styles.footerEmail}>Email: Vehicle.com</Text>
                </View>
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
        marginLeft: 150,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    helpItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#03045E',
    },
    helpItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    helpIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    helpText: {
        fontSize: 14,
        color: '#333',
    },
    helpArrow: {
        fontSize: 18,
        color: '#03045E',
    },
    footer: {
        backgroundColor: '#B1B1CD',
        padding: 15,
        borderRadius: 10,
        textAlign: 'left',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    footerText: {
        fontSize: 14,
        color: '#03045E',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    footerEmail: {
        fontSize: 14,
        color: '#555',
    },
});

export default Help;