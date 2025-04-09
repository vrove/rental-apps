import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const MorePage = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backButton}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Profile</Text>
                <TouchableOpacity onPress={() => router.push('/notification/notification')}>
                    <Image
                        source={require('@/assets/images/bell-icon.png')}
                        style={styles.notificationIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.profileSection}>
                <Image
                    source={{ uri: 'https://avatar.iran.liara.run/public/72' }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Ayuni Anastasya</Text>
                <TouchableOpacity onPress={() => router.push('/editProfile/editProfile')} style={styles.editProfileButton}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require('@/assets/images/profile.png')}
                            style={styles.profileIcon}
                        />
                        <Text style={styles.editProfileText}>Edit Profile</Text>
                    </View>
                    <Text style={styles.arrowIcon}>{'>'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/homepage/favorites')}>
                    <Image
                        source={require('@/assets/images/favorites.png')}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/(tabs)/homepage/trips')}>
                    <Image
                        source={require('@/assets/images/trips.png')}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Trips</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require('@/assets/images/promo.png')}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Promo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <Image
                        source={require('@/assets/images/settings.png')}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/help/help')} style={styles.menuItem}>
                    <Image
                        source={require('@/assets/images/help.png')}
                        style={styles.menuIcon}
                    />
                    <Text style={styles.menuText}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.menuItem, styles.exitItem]} onPress={() => router.push('/opening/login')}>
                    <Image
                        source={require('@/assets/images/exit.png')}
                        style={styles.menuIcon}
                    />
                    <Text style={[styles.menuText, styles.exitText]}>Exit</Text>
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
        justifyContent: 'space-between',
        backgroundColor: '#03045E',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderStartEndRadius: 20,
        borderEndEndRadius: 20,
        marginTop: 50,
        paddingTop: 20,
        paddingBottom: 20,
    },
    backButton: {
        fontSize: 24,
        color: '#fff',
    },
    profileIcon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    notificationIcon: {
        width: 20,
        height: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    editProfileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1E1E99',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        width: '90%',
        justifyContent: 'space-between',
    },
    editProfileText: {
        fontSize: 14,
        color: '#1E1E99',
        marginRight: 5,
        fontWeight: 'bold',
    },
    arrowIcon: {
        fontSize: 24,
        fontWeight: 200,
        tintColor: '#1E1E99',
    },
    menuContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    menuItem: {
        width: '30%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6E6EF',
        paddingVertical: 20,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    menuIcon: {
        width: 24,
        height: 24,
        marginBottom: 10,
    },
    menuText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    exitItem: {
        backgroundColor: '#E6E6EF',
    },
    exitText: {
        color: '#FF3B30',
        fontWeight: 'bold',
    },
});

export default MorePage;