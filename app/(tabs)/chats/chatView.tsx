import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const messages = [
    {
        id: 1,
        sender: 'me',
        text: 'Hai, Pak Steven. Apakah masih tersedia kendaraan.',
        time: '07.58',
    },
    {
        id: 2,
        sender: 'other',
        text: 'Hai, Tiara! Ya, Kendaraan masih tersedia.',
        time: '07.58',
    },
    {
        id: 3,
        sender: 'me',
        text: 'Okey, Kebetulan. Saya mau melakukan perjalanan ke luar daerah, apakah mobil avanza tersedia?',
        time: '07.59',
    },
    {
        id: 4,
        sender: 'other',
        text: 'Iya, tersedia, silahkan melakukan pembookingan terlebih dahulu.',
        time: '08.12',
    },
];

const ChatView = () => {
    const router = useRouter();

    const [inputMessage, setInputMessage] = useState('');

    const renderMessageItem = ({ item }: { item: typeof messages[0] }) => (
        <View
            style={[
            styles.messageContainer,
            item.sender === 'me' ? styles.myMessage : styles.otherMessage,
            ]}
        >
            <Text
            style={[
                item.sender === 'me' ? styles.messageTextMe : styles.messageTextOther,
            ]}
            >
            {item.text}
            </Text>
            <Text style={styles.messageTime}>{item.time}</Text>
        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/homepage/chat')}>
                <Image source={require('@/assets/images/back.png')} style={{ width: 13, height: 30, tintColor: '#fff' }} />
                </TouchableOpacity>
                <View style={styles.headerContent}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/36/b2/58/36b258a660f7bfdb8a7bddf90ffd9482.jpg' }}
                        style={styles.avatar}
                    />
                    <Text style={styles.headerTitle}>Steven L</Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={require('@/assets/images/call-icon.png')}
                        style={styles.callIcon}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={messages}
                renderItem={renderMessageItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.messageList}
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ketik pesan disini"
                    placeholderTextColor="#aaa"
                    value={inputMessage}
                    onChangeText={setInputMessage}
                />
                <TouchableOpacity style={styles.sendButton}>
                    <Image
                        source={require('@/assets/images/send-icon.png')}
                        style={styles.sendIcon}
                    />
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
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    callIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
    },
    messageList: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    messageContainer: {
        maxWidth: '70%',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
    },
    myMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E6E6E6',
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#03045E',
    },
    messageTextMe: {
        fontSize: 14,
        color: '#000',
    },
    messageTextOther: {
        fontSize: 14,
        color: '#fff',
    },
    messageTime: {
        fontSize: 12,
        color: '#ddd',
        textAlign: 'right',
        marginTop: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#1E1E99',
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 14,
        backgroundColor: '#D9D9E7',
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#D9D9E7',
        borderRadius: 20,
        padding: 10,
    },
    sendIcon: {
        width: 20,
        height: 20,
    },
});

export default ChatView;