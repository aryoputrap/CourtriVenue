import React, {useState} from 'react';
import {Text, View, TextInput,Image, Dimensions, TouchableOpacity, Modal, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {Header, Gap, DropdownData} from '../../../components';
import { COLORS, useForm} from '../../../utils';
import {Default, Styles} from '../../styles';
import {
    Location,
    Toilet,
    Parking,
    Canteen,
    Field,
    Mosque,
    Hanger,
  } from '../../../asset';

const {width, height} = Dimensions.get('window')

const InfoVanue = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [response, setResponse] = React.useState(null);
  const [form, setForm] = useForm({
    lapIndoor: false,
    lapOutdoor: false,
    toilet: false,
    parkir: false,
    mushola: false,
    kantin: false,
    ruang: false,
  });

  const [time, setTime] = useForm({
    hari: '',
    buka: '',
    tutup: ''
  })

  const [jadwal, setJadwal] = useState([]);

  const initialValue = [
        {
          id: 1,
          state: 'lapIndoor',
          value: 'Indoor',
          img: <Field />,
          status: form.lapIndoor,
        },
        {
          id: 1,
          state: 'lapOutdoor',
          value: 'Outdoor',
          img: <Field />,
          status: form.lapOutdoor,
        },
        {
          id: 2,
          state: 'toilet',
          value: 'Toilet',
          img: <Toilet />,
          status: form.toilet,
        },
        {
          id: 3,
          state: 'parkir',
          value: 'Parkir',
          img: <Parking />,
          status: form.parkir,
        },
        {
          id: 4,
          state: 'mushola',
          value: 'Mushola',
          img: <Mosque />,
          status: form.mushola,
        },
        {
          id: 5,
          state: 'kantin',
          value: 'Kantin',
          img: <Canteen />,
          status: form.kantin,
        },
        {
          id: 6,
          state: 'ruang',
          value: 'Ruang Ganti',
          img: <Hanger />,
          status: form.ruang,
        },
      ];
  const [days, setDays] = useState({
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
  const [hour2, setHour2] = useState({
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
  const [datalist] = useState(initialValue)

  const saveDays = () => {
    // let x = []
    console.log('[JADWAL]', jadwal);
    let data = {
      id: time.hari,
      hari: time.hari,
      buka: time.buka,
      tutup: time.tutup
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
            height: height * 0.29,
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
            <View style={[Default.row, {justifyContent: 'space-between', padding: 10, width: width * 0.9, alignSelf: 'center', alignItems: 'center',marginTop: 10}]}>
              <View>
                <Text>Hari</Text>
                <DropdownData
                  placeholder={'Hari'}
                  colortextplace={"red"} 
                  containerStyle={{width: width * 0.225, height: height * 0.05, marginTop: 10}}
                  items={days.data}
                  controller={instance => (controller.current = instance)}
                  onChangeList={(items, callback) => {
                    Promise.resolve(setDays(items)).then(() => callback());
                  }}
                  // defaultValue={cityid}
                  // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                  searchablePlaceholder={'Hari'}
                  onChangeItem={item => setTime('hari', item.value)}
                  // onChangeItem={item => console.log('ini item',item)}
                />
              </View>
              <View style={[Default.row, {alignItems: 'center'}]}>
                <View>
                  <Text>Jam Buka</Text>
                  <DropdownData
                    placeholder={'Buka'}
                    containerStyle={{width: width * 0.225, height: height * 0.05, marginTop: 10}}
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
                  <Text>Jam Tutup</Text>
                  <DropdownData
                    placeholder={'Tutup'}
                    containerStyle={{width: width * 0.225, height: height * 0.05, marginTop: 10}}
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

  const openCamera = () => {
    launchImageLibrary({
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    }, 
    //   setResponse
    (res) => {Alert.alert(res.assets[0].uri)},
      // Alert.alert(res.assets[0].uri)
    )
  }

  const renderItem = ({item, index}) => (
    <View key={index}>
      <View style={[Default.row, {alignItems: 'center', paddingLeft: 20, justifyContent: 'space-between', width: width * 0.47}]}>
      <View style={Default.row}>
        {item.img}
        <Text style={{marginHorizontal: 5}}>{item.value}</Text>
      </View>
      <CheckBox
        disabled={false}
        value={item.status}
        tintColors={{ true: COLORS.primary, false: COLORS.greyLight }}
        onValueChange={(value) => setForm(item.state, value)}
      />
      </View>
    </View>
  );

  const renderJadwal = ({item, index}) => (
    <View key={item.hari}>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 0.5, width: width * 0.95, alignSelf: 'center', alignItems: 'center'}]}>
        <Text>{item.hari}</Text>
        <View style={[Default.row, {alignItems: 'center'}]}>
          <View>
            <Text>{item.buka}</Text>
          </View>
          <Gap width={10}/>
          <Text>-</Text>
          <Gap width={10}/>
          <View>
            <Text>{item.tutup}</Text>
          </View>
        </View>
      </View>
    </View>
  )

  return (
    <View style={Styles.container}>
      <View>{Filter()}</View>
      <Header title={'Edit Vanue'} onPress={() => navigation.goBack()} />
      <View>
        <Gap height={20}/>
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={Styles.cardViewcamera} onPress={() => openCamera()}>
            <Icon name={'camera'} size={50}/>
            <Text>Tambah Foto</Text>
          </TouchableOpacity>
          {/* {response? null :
          <TouchableOpacity style={Styles.cardViewcamera} onPress={() => openCamera()}>
            <Icon name={'camera'} size={50}/>
            <Text>Tambah Foto</Text>
          </TouchableOpacity>} */}
          {response?.assets &&
            response?.assets.map(({ uri }) => (
              <TouchableOpacity key={uri} style={Styles.cardViewcamera} onPress={() => openCamera()}>
                <Image
                  resizeMode="cover"
                  resizeMethod="scale"
                  style={{ width: 150, height: 150 }}
                  source={{ uri: uri }}
                  />
              </TouchableOpacity>
           ))}
        </View>
        <Gap height={10}/>
        <View style={{paddingLeft: 20}}>
          <Text style={{textAlign: 'left'}}>Fasilitas</Text>
        </View>
        <FlatList
          style={{height: height * 0.12, width: width}}
          data={initialValue}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Gap height={5}/>
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
      <FlatList
        style={{height: height * 0.12, width: width}}
        data={jadwal}
        renderItem={renderJadwal}
        // numColumns={2}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <View style={[Default.center, {width: width, height: height * 0.075, backgroundColor: COLORS.greyLight2}]}>
        <TouchableOpacity style={[
          Default.center,
          {width: width * 0.9, height: height * 0.05 ,backgroundColor: COLORS.primary, borderRadius: 7}]}>
          <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoVanue;
