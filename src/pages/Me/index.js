/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Profile, Phone, Email, Atm} from '../../asset';
import {Gap} from '../../components';
import {Styles, Default} from '../styles';
// import Feather from 'react-native-vector-icons/Feather';

const Me = ({navigation}) => {
  const [user, setUser] = useState('');

  const WhatsApp = () => {
    let url =
      'whatsapp://send?text=' + '[Vanue] - Hallo Admin' + '&phone=62' + '8158800024';
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened', data);
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  const logOut = async() => {
    let data = await AsyncStorage.removeItem('token');
    // console.log('[RES LOGOUT]', data);
    navigation.navigate('Splash')
   }

  return (
    <View style={Styles.container}>
      <View style={[Styles.headerMe, {alignSelf: 'center', justifyContent: 'center', marginTop: 20, backgroundColor: '#f3fae6'}]}>
        <View style={Default.padding20}>
          <View style={[Default.row, {alignItems: 'center'}]}>
            {/* <Feather name={"user"} size={35} color={'#88CD0C'} style={[Styles.logo, {marginLeft: 5}]}/> */}
            <Text
              style={{
                justifyContent: 'center',
                fontWeight: 'bold',
                // marginTop: 15,
                marginLeft: 5,
                fontSize: 17,
              }}>
              {/* {user} */}
              Aryo putra
            </Text>
          </View>
          <Gap height={10} />
          <View style={[Default.row, {alignItems: 'center', alignContent: 'center'}]}>
            <Phone height={25} />
            <Gap width={10} />
            <Text>08156757657</Text>
          </View>
          <Gap height={5} />
          <View style={[Default.row, {alignItems: 'center', alignContent: 'center'}]}>
            <Email height={25}/>
            <Gap width={10} />
            <Text>Courtri@gmail.com</Text>
          </View>
          <Gap height={5} />
          <View style={[Default.row, {alignItems: 'center', alignContent: 'center'}]}>
            <Email height={25}/>
            <Gap width={10} />
            <Text>BCA : 001119109</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Withdraw')}
        style={[Styles.headerMe2, {alignSelf: 'center', justifyContent: 'center', marginTop: 20, backgroundColor: '#f3fae6'}]}>
        <View style={Default.padding20}>
          <View style={[Default.row, {alignItems: 'center', alignContent: 'center', justifyContent:'space-between'}]}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>SALDO</Text>
              <Text style={{fontSize: 15}}>Rp 1.000.000</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Atm width={30} height={30} />
              <Gap height={5} />
              <Text style={{fontSize: 10, textAlign: 'center'}}>Penarikan</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      
      <View style={Default.padding20}>
        <TouchableOpacity onPress={() => navigation.navigate("Infovanue")}>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>Informasi Venue</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity onPress={() => navigation.navigate('Infofield')}>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>Informasi Lapangan</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity onPress={() => navigation.navigate('Pengaturan')}>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>
            Pengaturan Tutup Venue
          </Text>
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity onPress={() => WhatsApp()}>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>Hubungi Kami</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <TouchableOpacity onPress={() => logOut()}>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>Keluar</Text>
        </TouchableOpacity>
        <Gap height={20} />
      </View>
    </View>
  );
};

export default Me;
