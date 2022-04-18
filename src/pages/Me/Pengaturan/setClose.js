import React, {useState} from 'react';
import {Text, View, TextInput, Dimensions, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Header, Gap, DropdownData} from '../../../components';
import { COLORS } from '../../../utils';
import {Default, Styles} from '../../styles';

const {width, height} = Dimensions.get('window')

const InfoField = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [half, setHalf] = useState(false);
  const [dateData, setDatedata] = useState('Pilih tanggal');
  const [date, setDate] = useState(new Date());
  const [cabor, setDays] = useState({
    data: [
      {
        name: 'Badminton',
        value: 'Badminton',
      },
      {
        name: 'Futsal',
        value: 'Futsal',
      },
      {
        name: 'Tenis Meja',
        value: 'Tenis Meja',
      },
      {
        name: 'Golf',
        value: 'Golf',
      },
      {
        name: 'Sepak Bola',
        value: 'Sepak Bola',
      },
      {
        name: 'Basket',
        value: 'Basket',
      },
      {
        name: 'Biliar',
        value: 'Biliar',
      },
      {
        name: 'Renang',
        value: 'Renang',
      },
    ],
  });

  const [hour, setHour] = useState({
    data: [
      {
        name: '07:00',
        value: '07:00',
      },
      {
        name: '08:00',
        value: '08:00',
      },
      {
        name: '09:00',
        value: '09:00',
      },
      {
        name: '10:00',
        value: '10:00',
      },
      {
        name: '11:00',
        value: '11:00',
      },
      {
        name: '12:00',
        value: '12:00',
      },
      {
        name: '19:00',
        value: '19:00',
      },
      {
        name: '20:00',
        value: '20:00',
      },
      {
        name: '21:00',
        value: '21:00',
      },
      {
        name: '22:00',
        value: '22:00',
      },
      {
        name: '23:00',
        value: '23:00',
      },
      {
        name: '24:00',
        value: '24:00',
      },
    ],
    });

  const format = () => {
      setModalVisible(false);
      let datePicker = date;
      let test =
        datePicker.getDate() +
        '-' +
        (datePicker.getMonth() + 1) +
        '-' +
        datePicker.getFullYear();
      setDatedata(test);
  };

  const Filter = () => {
    return(
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={Styles.modal}>
            <View style={Styles.modalBody}>
                <DatePicker
                    date={date}
                    androidVariant="nativeAndroid"
                    mode={'date'}
                    onDateChange={setDate}
                />
                <View style={{flexDirection: 'row-reverse', margin: 10}}>
                    <TouchableOpacity
                      onPress={format}
                      style={{...Styles.actions, backgroundColor: '#21ba45'}}>
                      <Text style={[Styles.textWhite, {fontWeight: 'bold', fontSize: 15}]}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{...Styles.actions, backgroundColor: '#db2828'}}
                      onPress={() => {
                          setModalVisible(false);
                      }}>
                      <Text style={[Styles.textWhite, {fontWeight: 'bold', fontSize: 15}]}>No</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>
    </View>
    )
  }

  return (
    <View style={Styles.container}>
      <View>{Filter()}</View>
      <Header title={'Pengaturan'} onPress={() => navigation.goBack()} />
      <Gap height={20}/>
      {/* {half ?: null} */}
      <View style={[Default.center,{backgroundColor: COLORS.greenpastel, height: height * 0.5, width: width * 0.95, alignSelf: 'center', borderRadius: 10}]}>
        <Gap height={10}/>
        <View>
            <TouchableOpacity
              style={[Default.row, Default.center, {
                marginVertical: 5,
                width: width * 0.85,
                alignSelf: 'center',
                backgroundColor: COLORS.white,
                padding: 5,
                paddingVertical: 8,
                // width: '94%',
                borderRadius: 7,
              }]}
              onPress={() => {
                setModalVisible(true);
              }}>
              <EvilIcons name="calendar" size={45} />
              <View style={Styles.dateViewMe}>
                <Text style={Styles.textTitle}>{dateData}</Text>
              </View>
            </TouchableOpacity>
        </View>
         <Gap height={20}/>
        {dateData == 'Pilih tanggal' ? null :
        <View>
          <TouchableOpacity 
            onPress={() => setHalf(!half)}
            style={[Default.center,{
              backgroundColor: half ? COLORS.white : COLORS.primary,
              height: height * 0.07,
              width: width * 0.85,
              alignSelf: 'center',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: half ? COLORS.primary: COLORS.greenpastel,
            }]}>
            <Text style={{fontWeight: 'bold', color: half? COLORS.primary : 'white', fontSize: 18}}>Sehari Full</Text>
          </TouchableOpacity>
        <Gap height={10}/>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>or</Text>
        <Gap height={10}/>
        <TouchableOpacity
          onPress={() => setHalf(!half)}
          style={[Default.center,{
            backgroundColor: half ? COLORS.primary :COLORS.white,
            height: height * 0.07,
            width: width * 0.85,
            alignSelf: 'center',
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: half ? COLORS.greenpastel: COLORS.primary,
          }]}>
            <Text style={{fontWeight: 'bold', color: half? 'white' : COLORS.primary, fontSize: 18}}>Setengah Hari</Text>
        </TouchableOpacity>
        <Gap height={20}/>
        {half ?
          <View style={{paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={Default.row}>
                <Text style={{textAlign: 'center'}}>Waktu Tutup</Text>
              </View>
              <Gap height={10}/>
              <View style={Default.row}>
                  <DropdownData
                      placeholder={'Mulai'}
                      containerStyle={{width: width * 0.4, height: height * 0.05, marginTop: 10}}
                      items={hour.data}
                      controller={instance => (controller.current = instance)}
                      onChangeList={(items, callback) => {
                          Promise.resolve(setDays(items)).then(() => callback());
                      }}
                      // defaultValue={cityid}
                      // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                      searchablePlaceholder={'Cabang Olah Raga'}
                      // onChangeItem={item => setTime('hari', item.value)}
                      // onChangeItem={item => console.log('ini item',item)}
                  />
                  <Gap width={20}/>
                  <DropdownData
                      placeholder={'Akhir'}
                      containerStyle={{width: width * 0.4, height: height * 0.05, marginTop: 10}}
                      items={hour.data}
                      controller={instance => (controller.current = instance)}
                      onChangeList={(items, callback) => {
                          Promise.resolve(setDays(items)).then(() => callback());
                      }}
                      // defaultValue={cityid}
                      // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                      searchablePlaceholder={'Cabang Olah Raga'}
                      // onChangeItem={item => setTime('hari', item.value)}
                      // onChangeItem={item => console.log('ini item',item)}
                  />
              </View>
          </View>
        : null}
        </View>
      }
        <Gap height={20}/>
      </View> 
      <Gap height={80}/>
      <TouchableOpacity
            onPress={() => btnOrder()}
            style={[
              Styles.btnFull,
              {
                backgroundColor: 'orange',
                borderColor: 'orange',
                marginLeft: 10,
                marginTop: 20,
                marginBottom: 50,
              },
            ]}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Save
            </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoField;
