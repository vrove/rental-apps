import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, Modal } from 'react-native';
import { useRouter } from 'expo-router';
import vehicleData from '@/data/vehicleData';
import { FlatList } from 'react-native';

const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const years = ['2024', '2025', '2026'];

const renderPickerColumn = (data: string[], selectedValue: string, setValue: React.Dispatch<React.SetStateAction<string>>) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item}
    showsVerticalScrollIndicator={false}
    style={styles.picker}
    getItemLayout={(_, index) => ({ length: 40, offset: 40 * index, index })}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => setValue(item)} style={styles.pickerItem}>
        <Text style={[styles.pickerText, selectedValue === item && styles.pickerTextSelected]}>{item}</Text>
      </TouchableOpacity>
    )}
  />
);

const SelectVehicle = () => {
    const router = useRouter();
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [unit, setUnit] = useState(1);
    const [rentalDays, setRentalDays] = useState(1);

    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedDay, setSelectedDay] = useState('01');
    const [selectedMonth, setSelectedMonth] = useState('April');
    const [selectedYear, setSelectedYear] = useState('2025');
    const [modalVisible, setModalVisible] = useState(false);
    const [requestStatus, setRequestStatus] = useState('pending');


    
    const selectedVehicle = vehicleData[0];

    const totalPrice = parseInt(selectedVehicle.price.replace(/[^0-9]/g, '')) * unit * rentalDays;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image source={require('@/assets/images/back.png')} style={{ width: 13, height: 30, tintColor: '#fff' }} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Selected</Text>
                <Image source={require('@/assets/images/heart-add.png')} style={styles.bookmark}/>
            </View>

            <View style={styles.rentContainer}>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Antar & Jemput Kendaraan</Text>
                    <Switch
                        value={toggleSwitch}
                        onValueChange={setToggleSwitch}
                        thumbColor={toggleSwitch ? '#03045E' : '#ccc'}
                        trackColor={{ false: '#ccc', true: '#81b0ff' }}
                    />
                </View>

                <View style={styles.vehicleCard}>
                    <Image source={{ uri: selectedVehicle.image }} style={styles.vehicleImage} />
                    <View style={styles.vehicleInfo}>
                        <Text style={styles.vehicleName}>Toyota Avanza</Text>
                        <Text style={styles.vehiclePrice}>{selectedVehicle.price}</Text>
                        <Text style={styles.vehicleRating}>
                           Rated : ⭐⭐⭐⭐(102)
                        </Text>
                        <Text style={styles.vehicleCapacity}>Capacity: 6</Text>
                    </View>
                </View>

                <View style={styles.counterContainer}>
                    <Text style={styles.counterLabel}>Unit:</Text>
                    <View style={styles.counter}>
                        <TouchableOpacity onPress={() => setUnit(Math.max(1, unit - 1))}>
                            <Text style={styles.counterButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{unit}</Text>
                        <TouchableOpacity onPress={() => setUnit(unit + 1)}>
                            <Text style={styles.counterButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.counterContainer}>
                    <Text style={styles.counterLabel}>Day:</Text>
                    <View style={styles.counter}>
                        <TouchableOpacity onPress={() => setRentalDays(Math.max(1, rentalDays - 1))}>
                        <Text style={styles.counterButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{rentalDays}</Text>
                        <TouchableOpacity onPress={() => setRentalDays(rentalDays + 1)}>
                        <Text style={styles.counterButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Price:</Text>
                    <Text style={styles.priceValue}>{selectedVehicle.price}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Service:</Text>
                    <Text style={styles.priceValue}>Rp. 0</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Total:</Text>
                    <Text style={styles.priceValue}>Rp. {totalPrice.toLocaleString('id-ID')}</Text>
                </View>

                <TouchableOpacity style={styles.actionButton} onPress={() => setModalVisible(true)}>
                    <Image source={require('@/assets/images/calendar.png')} style={styles.actionIcon} />
                    <Text style={styles.actionButtonText}>
                        {selectedDate ? selectedDate : 'Tentukan tanggal penyewaan'}
                    </Text>
                    <Text style={styles.nextArrow}>{'>'}</Text>
                </TouchableOpacity>

                    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Pilih Tanggal</Text>
                        <View style={styles.pickerRow}>
                            {renderPickerColumn(days, selectedDay, setSelectedDay)}
                            {renderPickerColumn(months, selectedMonth, setSelectedMonth)}
                            {renderPickerColumn(years, selectedYear, setSelectedYear)}
                        </View>
                        <TouchableOpacity style={styles.confirmButton} onPress={() => {
                            const formatted = `${selectedDay} ${selectedMonth} ${selectedYear}`;
                            setSelectedDate(formatted);
                            console.log('Selected Date:', formatted);
                            setModalVisible(false);
                        }}>
                            <Text style={styles.confirmText}>Confirm</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    </Modal>
                <TouchableOpacity style={styles.actionButton}>
                    <Image source={require('@/assets/images/location.png')} style={styles.actionIcon} />
                    <Text style={styles.actionButtonText}>Masukan lokasi Pengantaran</Text>
                    <Text style={styles.nextArrow}>{'>'}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push('/selectVehicle/confirm')} style={styles.requestButton}>
                    <Text style={styles.requestButtonText}>Request</Text>
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
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    rentContainer:{
        padding: 20
    },
    switchLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    vehicleCard: {
        flexDirection: 'row',
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
    },
    vehicleImage: {
        width: 190,
        height: 120,
        borderRadius: 15    ,
    },
    vehicleInfo: {
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    vehicleName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    vehiclePrice: {
        fontSize: 14,
        color: '#03045E',
    },
    vehicleRating: {
        fontSize: 12,
        color: '#555',
    },
    vehicleCapacity: {
        fontSize: 12,
        color: '#555',
    },
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    counterLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        color: '#03045E',
    },
    counterValue: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    priceLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceValue: {
        fontSize: 16,
    },
    actionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#03045E',
        borderRadius: 15,
        marginBottom: 10,
    },
    actionButtonText: {
        marginTop: 8,
        fontSize: 16,
        color: '#03045E',
        textAlign: 'center',
        marginLeft: -40,
    },
    requestButton: {
        backgroundColor: '#03045E',
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
    },
    requestButtonText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    nextArrow: {
        fontSize:36,
        marginTop:-8,
        marginLeft:8,
        fontWeight: 200,
    },
    actionIcon: {
        marginTop: 4,
        width: 30,
        height: 30,
        marginLeft: 15,
        tintColor: '#03045E',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContent: {
        width: 350,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      pickerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
      },
      picker: {
        flex: 1,
        maxHeight: 120,
        marginHorizontal: 5,
      },
      pickerItem: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      pickerText: {
        fontSize: 18,
        color: 'gray',
      },
      pickerTextSelected: {
        color: '#00005F',
        fontWeight: 'bold',
      },
      confirmButton: {
        backgroundColor: '#00005F',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 10,
      },
      confirmText: {
        color: '#fff',
        fontSize: 16,
      },
      bookmark:{
        width: 30,
        height: 30,
        marginLeft: 100,
        tintColor: '#fff',
      }
});

export default SelectVehicle;