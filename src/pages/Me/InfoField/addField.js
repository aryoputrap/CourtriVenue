import React, {useState} from 'react';
import {Text, View, TextInput, Dimensions, TouchableOpacity, Modal, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import {Header, Gap, DropdownData} from '../../../components';
import { COLORS, useForm} from '../../../utils';
import {Default, Styles} from '../../styles';

const {width, height} = Dimensions.get('window')

const InfoField = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
  const [jadwal, setJadwal] = useState([]);
  const [time, setTime] = useForm({
    hari: '',
    buka: '',
    tutup: '',
    hargaharian: '',
    hargabulanan: ''
  })
  const [days] = useState({
    data: [
      {
        name: 'Senin',
        value: 'Senin',
      },
      {
        name: 'Selasa',
        value: 'Selasa',
      },
      {
        name: 'Rabu',
        value: 'Rabu',
      },
      {
        name: 'Kamis',
        value: 'Kamis',
      },
      {
        name: 'Jumat',
        value: 'Jumat',
      },
      {
        name: 'Sabtu',
        value: 'Sabtu',
      },
      {
        name: 'Minggu',
        value: 'Minggu',
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

  const removeSc = (day) => {
    let data =  jadwal.filter(value => value.id != day)
    setJadwal(data);
  }

  const renderJadwal = ({item, index}) => (
    <View key={item.buka}>
      <View style={[Default.row, {borderBottomWidth: 0.5,paddingVertical: 5, width: width * 0.95, alignSelf: 'center', alignItems: 'center'}]}>
        <View style={[Default.row, {width: 100}]}>
          <View>
            <Text>{item.buka}</Text>
          </View>
          <Gap width={7}/>
          <Text>-</Text>
          <Gap width={7}/>
          <View>
            <Text>{item.tutup}</Text>
          </View>
        </View>
        <Gap width={10}/>
        <View style={{width: 100, alignItems: 'center'}}>
          <Text>{item.hargaharian}</Text>
        </View>
        <Gap width={10}/>
        <View style={{width: 100, alignItems: 'center'}}>
          <Text>{item.hargabulanan}</Text>
        </View>
        <Gap width={10}/>
        <View style={[Default.row, {width: 100}]}>
          <TouchableOpacity style={{marginLeft: 15}} onPress={() => removeSc(item.buka)}>
            <Icon3 name={'minuscircle'} size={20} color={COLORS.error}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  const saveDays = () => {
    // let x = []
    console.log('[JADWAL]', jadwal);
    let data = {
      id: time.buka,
      buka: time.buka,
      tutup: time.tutup,
      hargaharian: time.hargaharian,
      hargabulanan: time.hargabulanan,
    }
    // const a = jadwal.push(data)
    setJadwal(jadwal => [...jadwal, data])
    setModalVisible(!modalVisible);
    // console.log('SAVE DAYS', a);
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
        <View style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.45)'
        }}>
          <View style={{
            width: width * 0.95,
            height: height * 0.45,
            backgroundColor: 'white',
            borderRadius: 7,
            alignSelf: 'center',
          }}>
            <View style={[Default.row, {
              backgroundColor: COLORS.greenpastel,
              borderTopRightRadius: 7,
              borderTopLeftRadius: 7,
              justifyContent: 'flex-end'
              }]}>
              <View>
                <Text style={[Styles.titleEditVanue, {fontSize: 15}]}>Tambah Jadwal</Text>
              </View>
              <View style={[Default.center, {width: 50, marginLeft: 70}]}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Icon3 name={'closecircle'} size={20} color={COLORS.primary}/>
                </TouchableOpacity>
              </View>
            </View>
            <Gap height={5} />
            <View style={[Default.row, {justifyContent: 'space-between', width: width * 0.9, paddingHorizontal: 3, alignSelf: 'center', alignItems: 'center',marginTop: 10}]}>
              <View style={[Default.row, {alignItems: 'center'}]}>
                <View>
                  <Text>Buka</Text>
                  <DropdownData
                    placeholder={'Buka'}
                    containerStyle={{width: width * 0.41, height: height * 0.05, marginTop: 10}}
                    items={hour.data}
                    controller={instance => (controller.current = instance)}
                    onChangeList={(items, callback) => {
                      Promise.resolve(setHour(items)).then(() => callback());
                    }}
                    // defaultValue={cityid}
                    // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                    // searchablePlaceholder={'Cari Courtri Promo'}
                    onChangeItem={item => setTime('buka',item.value)}
                  />
                </View>
                <Gap width={10}/>
                <Text style={{marginTop: 30}}>-</Text>
                <Gap width={10}/>
                <View>
                  <Text>Tutup</Text>
                  <DropdownData
                    placeholder={'Tutup'}
                    containerStyle={{width: width * 0.41, height: height * 0.05, marginTop: 10}}
                    items={hour.data}
                    controller={instance => (controller.current = instance)}
                    onChangeList={(items, callback) => {
                        Promise.resolve(setHour(items)).then(() => callback());
                    }}
                    // defaultValue={cityid}
                    // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                    // searchablePlaceholder={'Cari Courtri Promo'}
                    onChangeItem={item => setTime('tutup', item.value)}
                  />
                </View>
              </View>
            </View>
            <Gap height={20}/>
            <View style={[Default.row,{paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center'}]}>
                <View style={Default.row}>
                  <Text style={{width: 100}}>Harga Harian</Text>
                  <Text style={{width: 10}}>:</Text>
                </View>
                <TextInput
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: COLORS.greyLight,
                    width: width * 0.55,
                    height: height * 0.045,
                    backgroundColor: 'white'
                  }}
                  onChangeText={e => setTime('hargaharian',e)}
                />
            </View>
            <Gap height={20}/>
            <View style={[Default.row,{paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center'}]}>
                <View style={Default.row}>
                  <Text style={{width: 100}}>Harga Bulanan</Text>
                  <Text style={{width: 10}}>:</Text>
                </View>
                <TextInput
                  style={{
                    fontSize: 15,
                    textAlign: 'center',
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: COLORS.greyLight,
                    width: width * 0.55,
                    height: height * 0.045,
                    backgroundColor: 'white'
                  }}
                  onChangeText={e => setTime('hargabulanan',e)}
                />
            </View>
            <Gap height={15}/>
            <View style={[Default.center, {marginTop: 20}]}>
              <TouchableOpacity 
                onPress={() => saveDays()}
                style={{
                  backgroundColor: COLORS.primary,
                  width: width * 0.85,
                  height: 40,
                  justifyContent: 'center',
                  borderRadius: 7,
                }}>
                <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 17, color: 'white'}}>SAVE</Text>
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
      <Header title={'Lapangan'} onPress={() => navigation.goBack()} />
      <Gap height={20}/>
      <View style={{backgroundColor: COLORS.greenpastel, height: height * 0.25, width: width * 0.95, alignSelf: 'center', borderRadius: 10}}>
      <Gap height={5}/>
        <View style={[Default.row,{paddingHorizontal: 10, justifyContent: 'space-between', alignItems: 'center'}]}>
            <View style={Default.row}>
              <Text style={{width: 140}}>Cabang Olah Raga</Text>
              <Text style={{width: 10}}>:</Text>
            </View>
            <DropdownData
              placeholder={'Pilih Cabang Olah Raga'}
              containerStyle={{width: width * 0.5, height: height * 0.05, marginTop: 10}}
              items={cabor.data}
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
        <Gap height={20}/>
        <View style={[Default.row,{paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center'}]}>
            <View style={Default.row}>
              <Text style={{width: 140}}>Nama Lapang</Text>
              <Text style={{width: 10}}>:</Text>
            </View>
            {/* <Text style={{fontSize: 15, textAlign: 'center'}}>Lapangan VIP</Text> */}
            <TextInput
              style={{
                fontSize: 15,
                textAlign: 'center',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.greyLight,
                width: width * 0.5,
                height: height * 0.045,
                backgroundColor: 'white'
              }}
            />
        </View>
      </View>
      <Gap height={30}/>
      <View style={[Default.row,{backgroundColor: COLORS.greenpastel, width: width, justifyContent: 'flex-end'}]}>
        <View>
          <Text style={[Styles.titleEditVanue, {fontSize: 17}]}>Jadwal</Text>
        </View>
        <View style={[Default.center, {width: 50, marginLeft: 110}]}>
          <TouchableOpacity 
            onPress={() => setModalVisible(!modalVisible)}
            // style={{alignSelf}}
          >
            <Icon2 name={'add-circle'} size={20} color={COLORS.primary} style={{alignSelf: 'center'}}/>
            <Text style={{fontWeight: 'bold', fontSize: 10, textAlign: 'center'}}>Tambah</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Gap height={10}/>
      <View style={[Default.row,{backgroundColor: COLORS.greenpastel, width: width}]}>
        <View style={{width: 120}}>
          <Text style={[Styles.fieldTable, {fontSize: 12}]}>Waktu</Text>
        </View>
        <View style={{width: 100}}>
          <Text style={[Styles.fieldTable, {fontSize: 12}]}>Harian(Rp)</Text>
        </View>
        <Gap width={10}/>
        <View style={{width: 100}}>
          <Text style={[Styles.fieldTable, {fontSize: 12}]}>Bulanan(Rp)</Text>
        </View>
        <View style={{width: 70}}>
          <Text style={[Styles.fieldTable, {fontSize: 12}]}>Aksi</Text>
        </View>
      </View>
      <Gap height={10}/>
      <FlatList
        style={{height: height * 0.12, width: width}}
        data={jadwal}
        renderItem={renderJadwal}
        // numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <Gap height={20}/>
      <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
        <TouchableOpacity
            onPress={() => console.log('[JADWAL]', jadwal)}
            // onPress={() => btnOrder()}
            style={[
              Styles.btnFull,
              {
                position: 'absolute',
                justifyContent: 'flex-end',
                backgroundColor: 'orange',
                borderColor: 'orange',
                marginLeft: 10,
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
     
    </View>
  );
};

export default InfoField;
