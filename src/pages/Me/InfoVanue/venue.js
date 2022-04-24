import React, {useState, useEffect} from 'react';
import {Text, View, TextInput,Image, Dimensions, TouchableOpacity, Modal, FlatList, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import MapView , { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoder';
import axios from 'axios';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationView from "react-native-location-view";
import {Header, Gap, DropdownData} from '../../../components';
import {COLORS, useForm} from '../../../utils';
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
  import API from '../../../service';

const {width, height} = Dimensions.get('window')


// AIzaSyDQidmXKQXgVghdz7ZbgNYUUSjUa7inWG4
const InfoVanue = ({navigation}) => {
  const [namegor, onNamegor] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [response, setResponse] = React.useState(null);
  const [resimage, setImage] = React.useState(null);
  const [resimage64, setImage64] = React.useState(null);
  const [marker, setMarker] = React.useState([{latitude: -6.171363285510512, longitude: 106.82676031725384}]);
  const [form, setForm] = useForm({
    lapIndoor: false,
    lapOutdoor: false,
    toilet: false,
    parkir: false,
    mushola: false,
    kantin: false,
    ruang: false,
  });
  const [lat, setLat] =  React.useState("");
  const [long, setLong] =  React.useState("");

  const [address, setAddress] = React.useState("");

  const [time, setTime] = useForm({
    // hari: '',
    buka: '',
    tutup: '',
    bukaId: '',
    tutupId: '',
  })

  const [jadwal, setJadwal] = useState([]);

  const initialValue = [
        {
          id: "93a7f089-f84b-4d95-b039-3db836518914",
          state: 'lapIndoor',
          value: 'Indoor',
          img: <Field />,
          status: form.lapIndoor,
        },
        {
          id: "93a7f089-f84b-4d95-b039-3db836518915",
          state: 'lapOutdoor',
          value: 'Outdoor',
          img: <Field />,
          status: form.lapOutdoor,
        },
        {
          id: "abff9d9a-dcfb-4222-be37-0ebfcdd6e059",
          state: 'toilet',
          value: 'Toilet',
          img: <Toilet />,
          status: form.toilet,
        },
        {
          id: "93a7f089-f84b-4d95-b039-3db836518916",
          state: 'parkir',
          value: 'Parkir',
          img: <Parking />,
          status: form.parkir,
        },
        {
          id: "93a7f089-f84b-4d95-b039-3db836518917",
          state: 'mushola',
          value: 'Mushola',
          img: <Mosque />,
          status: form.mushola,
        },
        {
          id: "93a7f089-f84b-4d95-b039-3db836518918",
          state: 'kantin',
          value: 'Kantin',
          img: <Canteen />,
          status: form.kantin,
        },
        {
          id: "93a7f089-f84b-4d95-b039-3db836518919",
          state: 'ruang',
          value: 'Ruang Ganti',
          img: <Hanger />,
          status: form.ruang,
        },
      ];

  const [hour, setHour] = useState([{
    id: '',
    name: '',
    value: '',
  }]);

  // USE EFFECT

  useEffect(() => {
    getTime();
  }, []);

  const getTime = async () => {
    await API.create('TIME').time()
    .then((res) => {
      let time = res.data.data;
      let newData = time.map(item => {
        let data = {
          id: item.id,
          name: item.time,
          value: item.time
        }

        return data
      })
      // console.log('NewData',newData);
      setHour(newData);
    })
    .catch(error => console.log("Error ", error))
  }

  const saveDays = () => {
    let data = {
      // id: time.hari,
      // hari: time.hari,
      buka: time.buka,
      tutup: time.tutup
    }
    console.log('[JADWAL]', data);
    let dataBuka = time.buka;
    let dataTutup = time.tutup;
    if(dataTutup <= dataBuka){
      // setJadwal(jadwal => [...jadwal, data])
      Alert.alert(
        "Error",
        "Anda tidak dapat input lebih dari jam buka",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
      ])
    }else{
      setJadwal(jadwal => [...jadwal, data])
      setModalVisible(!modalVisible);
    }
  };

  const openModal = () => {
    let dataJadwal = jadwal.length;
    if(dataJadwal == 0){
      setModalVisible(!modalVisible)
    } else {
      Alert.alert(
        "Error",
        "Anda sudah input waktu",
        [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ])
    }
    
  }

  const sendVenue = () => {
    let data = {
        "name": namegor,
        "address": address,
        "latitude": lat,
        "longitude": long,
        "facilityId": "93a7f089-f84b-4d95-b039-3db836518914,abff9d9a-dcfb-4222-be37-0ebfcdd6e059",
        "image": resimage64,
        "startTimeId": time.bukaId,
        "endTimeId": time.tutupId,
    }

    console.log('[DATA]',data);

  }

  const onMark = async (loc) => {
    console.log('ini lat long', loc.latitude);
    const lat = loc.latitude;
    const long = loc.longitude;

    let data = [...marker];
    data[0] = loc;
    setMarker(data);
    geo(lat, long)
  }

  const geo = async(lat, long) => {
    var lokasi = {
        lat: lat,
        lng: long
      };
      setLat(lat);
      setLong(long);
      
      await Geocoder.geocodePosition(lokasi).then(res => {
        //   console.log('ISI RES', res[0].formattedAddress);
          setAddress(res[0].formattedAddress);
      })
      .catch(err => console.log(err))
  }

  const handleSubmit = (textInput) => {
    let url = 'https://maps.googleapis.com/maps/api/place/jakarta/json?input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyDQidmXKQXgVghdz7ZbgNYUUSjUa7inWG4'
    // axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.locationInput.split(' ').join('') + "&key=" + REACT_APP_GOOGLE_PLACES_API)
    axios.get(url)
    .then(
      response => 
      console.log('[RES]', response)
    )
    .catch(error => console.log("Error: ", error))
  }

  const addTime = (item, type, typeId) => {
    // console.log('ADD TIME', type, item);
    if(type == 'buka'){
      setTime(type,item.value) && setTime(typeId, item.id);
    } else {
      let timeOpen = parseInt(time.buka);
      let timeClose = parseInt(item.value);
      setTime(type,item.value) && setTime(typeId, item.id);
      if(timeClose <= timeOpen){
        Alert.alert(
        "Error",
        "Anda tidak dapat input lebih dari jam buka",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ])
      } else {
        setTime(type,item.value) && setTime(typeId, item.id);
      }
    }
    
  }

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
            height: height * 0.35,
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
              <View style={[Default.row, {alignItems: 'center'}]}>
                <View>
                  <Text>Jam Buka</Text>
                  <DropdownData
                    placeholder={'Buka'}
                    containerStyle={{width: width * 0.4, height: height * 0.06, marginTop: 10}}
                    items={hour}
                    controller={instance => (controller.current = instance)}
                    onChangeItem={item => addTime(item, 'buka', 'bukaId')}
                  />
                </View>
                <Gap width={10}/>
                <Text style={{marginTop: 30}}>-</Text>
                <Gap width={10}/>
                <View>
                  <Text>Jam Tutup</Text>
                  <DropdownData
                    placeholder={'Tutup'}
                    containerStyle={{width: width * 0.4, height: height * 0.06, marginTop: 10}}
                    items={hour}
                    controller={instance => (controller.current = instance)}
                    onChangeItem={item => addTime(item, 'tutup', 'tutupId')}
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

  const removeSc = (day) => {
    let data =  jadwal.filter(value => value.id != day)
    setJadwal(data);
  }

  const renderJadwal = ({item, index}) => (
    <View key={item.hari}>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 0.5, width: width * 0.95, alignSelf: 'center', alignItems: 'center'}]}>
        {/* <Text>{item.hari}</Text> */}
        <Icon name={'clock'} size={20} color={COLORS.primary}/>
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
        <View style={[Default.row, {alignItems: 'center'}]}>
          <TouchableOpacity onPress={() => removeSc(item.hari)}>
            <Icon3 name={'minuscircle'} size={20} color={COLORS.error} style={{alignSelf: 'center'}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  const openCamera = () => {
    launchImageLibrary({
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: true,
    }, 
        //   setImage
        //   (res) => {Alert.alert(res.assets[0].uri)},
        // (res) => console.log('[FOTO]', res)
        (res) => onImage(res)
      // Alert.alert(res.assets[0].uri)
    )
  }

  const onImage = (e) => {
    setImage(e);
    setImage64(e.assets[0].base64);
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

  return (
    <View style={Styles.container}>
      <View>{Filter()}</View>
      <Header title={'Edit Venue'} onPress={() => navigation.goBack()} />
      <Gap height={10}/>
      <ScrollView style={{flex: 1, height: height * 0.7}}>
        <View style={[Default.row,{backgroundColor: COLORS.greenpastel, width: width, justifyContent: 'center'}]}>
            <View>
                <Text style={[Styles.titleEditVanue, {fontSize: 17}]}>Deskripsi Venue</Text>
            </View>
        </View>
        <View>
            <Text style={{paddingLeft: 10, paddingTop: 10}}>Gelanggang Olah Raga ( GOR ) :</Text>
            <View style={{padding: 10}}>
                <View style={{borderWidth: 1, borderRadius: 5, borderColor: COLORS.greyLight}}>
                    <TextInput
                      style={{marginLeft: 5}}
                      placeholder='Nama GOR'
                      onChangeText={onNamegor}
                      value={namegor}
                    />  
                </View>
            </View>
        </View>
        <Gap height={10}/>
        <View style={[Default.row,{backgroundColor: COLORS.greenpastel, width: width, justifyContent: 'flex-end'}]}>
          <View>
            <Text style={[Styles.titleEditVanue, {fontSize: 17}]}>Jadwal</Text>
          </View>
          <View style={[Default.center, {width: 50, marginLeft: 110}]}>
            <TouchableOpacity onPress={() => openModal()}>
              <Icon2 name={'add-circle'} size={20} color={COLORS.primary} style={{alignSelf: 'center'}}/>
              <Text style={{fontWeight: 'bold', fontSize: 10, textAlign: 'center'}}>Tambah</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={10}/>
        <FlatList
          style={{height: height * 0.08, width: width}}
          data={jadwal}
          renderItem={renderJadwal}
          // numColumns={2}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        /> 
        <Gap height={10}/>
        <View>
          <Text style={{paddingLeft: 10, paddingBottom: 10}}>Fasilitas :</Text>
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
        <Gap height={20}/>
        <View style={{alignItems: 'center'}}>
          {resimage ? null :
          <TouchableOpacity style={Styles.cardViewcamera} onPress={() => openCamera()}>
            <Icon name={'camera'} size={50}/>
            <Text>Tambah Foto</Text>
          </TouchableOpacity>}
          {resimage?.assets &&
            resimage?.assets.map(({ uri }) => (
              <TouchableOpacity key={uri} style={Styles.cardViewcamera} onPress={() => openCamera()}>
                <Image
                  resizeMode="cover"
                  resizeMethod="scale"
                  style={{ width: 200, height: 200 }}
                  source={{ uri: uri }}
                  />
              </TouchableOpacity>
           ))}
        </View>
        <Gap height={20}/>
        <View style={[Default.row,{backgroundColor: COLORS.greenpastel, width: width, justifyContent: 'center'}]}>
            <View>
                <Text style={[Styles.titleEditVanue, {fontSize: 17}]}>Alamat</Text>
            </View>
        </View>
        <Gap height={10}/>
        <View style={[Default.row, {paddingHorizontal: 10}]}>
            <View style={{width: width * 0.8, borderWidth: 0.5, borderRadius: 7}}>
              <TextInput
                style={{marginLeft: 10}}
                placeholder={'Cari'}
              />
            </View>
            <TouchableOpacity style={{backgroundColor: COLORS.greyLight2, marginLeft: 10, width: 50, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderRadius: 10}} onPress={() => handleSubmit()}>
              <Icon name={'search'} size={20} color={COLORS.greyLight}/>  
            </TouchableOpacity>
        </View> 
        {/* <View style={{width: width * 0.8, borderWidth: 0.5, borderRadius: 7}}>
          <LocationView
            apiKey={"AIzaSyDQidmXKQXgVghdz7ZbgNYUUSjUa7inWG4"}
            initialLocation={{
              latitude: -6.17460307255347,
              longitude: 106.82736737672572,
            }}
        />
        </View> */}
        <Gap height={10}/>
        <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>    
           <MapView 
            provider={PROVIDER_GOOGLE} 
            style={{height: 400, width: 380}}
            onPress={(e) => onMark(e.nativeEvent.coordinate)}
            initialRegion={{ 
                latitude: -6.171363285510512,
                longitude: 106.82676031725384,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}>
                {
                  marker.map((mark, i) => (
                    <Marker coordinate={{latitude: mark.latitude, longitude: mark.longitude}} key={i} />
                  ))
                }
            </MapView> 
        </View>
        <View>
            <Text style={{paddingLeft: 10, paddingTop: 10}}>Alamat</Text>
            <View style={{padding: 10}}>
                <View style={{borderWidth: 1, borderRadius: 10, borderColor: COLORS.greyLight}}>
                    <TextInput
                        style={{marginLeft: 10}}
                        placeholder='Alamat Lengakap (Pin Lokasi Dahulu)'
                        multiline={true}
                        value={address}
                        onChangeText={setAddress}
                    />  
                </View>
            </View>
        </View>
        <Gap height={20}/>
      </ScrollView>
      <Gap height={20}/>
      <View style={{width: width, height: height * 0.1, backgroundColor: COLORS.greyLight2, justifyContent: 'center', alignItems: 'center'}}>
       <View style={[Default.center, {position: 'absolute'}]}>
        <TouchableOpacity 
            style={[Default.center,{width: width * 0.9, height: height * 0.05 ,backgroundColor: COLORS.primary, borderRadius: 7}]}
            onPress={()=>sendVenue()}
        >
          <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>SAVE</Text>
        </TouchableOpacity>
      </View>   
      </View>
    </View>
  );
};

export default InfoVanue;
