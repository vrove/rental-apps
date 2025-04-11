import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const messages = [
    {
        id: 1,
        name: 'Steven L',
        message: 'Iya, tersedia, silahkan melakukan pembookingan terlebih dahulu.',
        time: '08:02',
        avatar: 'https://i.pinimg.com/736x/36/b2/58/36b258a660f7bfdb8a7bddf90ffd9482.jpg',
        status: 'online',
    },
    {
        id: 2,
        name: 'Ibu Kony',
        message: 'Selamat datang di Rental Yacht',
        time: '08:02',
        avatar: 'https://community.pmi.org/images/profile-photos/36DFFFD0-C504-DD13-F149D2D5F997955C.jpg',
        status: 'read',
    },
];

const Chat = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 20 }}>
            <Text style={styles.backButton}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.header}>Your Message</Text>
            <FlatList
            data={messages}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={styles.messageContainer}
                onPress={() => router.push(`/chats/chatView`)}
                >
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.messageContent}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
                <View style={styles.messageMeta}>
                    <Text style={styles.time}>{item.time}</Text>
                    {item.status === 'online' ? (
                    <View style={styles.onlineIndicator} />
                    ) : (
                    <Image
                        source={require('@/assets/images/read-icon.png')}
                        style={styles.readIcon}
                    />
                    )}
                </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.messageList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6EF',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginTop: 50,
    },
    backButton: {
        fontSize: 24,
        color: '#03045E',
        marginRight: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        marginLeft: 20,
    },
    messageList: {
        paddingBottom: 20,
    },
    messageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    messageContent: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    message: {
        fontSize: 14,
        color: '#555',
    },
    messageMeta: {
        alignItems: 'flex-end',
    },
    time: {
        fontSize: 12,
        color: '#aaa',
        marginBottom: 5,
    },
    onlineIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#4CAF50',
    },
    readIcon: {
        width: 16,
        height: 16,
    },
});

export default Chat;