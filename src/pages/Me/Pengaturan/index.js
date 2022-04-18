import React, {useState} from 'react';
import {Text, View, TextInput,Image, Dimensions, TouchableOpacity, Modal, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Header, Gap} from '../../../components';
import { COLORS } from '../../../utils';
import {Default, Styles} from '../../styles';

const {width, height} = Dimensions.get('window')

const Pengaturan = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Header title={'Pengaturan'} onPress={() => navigation.goBack()} />
      <Gap height={25}/>
      <TouchableOpacity 
        onPress={() => navigation.navigate('AddSetClose')}
        style={[Default.row,Default.center,{
          justifyContent: 'space-between', padding: 10,
          backgroundColor: COLORS.greenpastel,
          borderRadius: 10,
          width: width * 0.95,
          alignSelf: 'center'
        }]}
      >
        <Text style={{fontWeight: 'bold'}}>Pengaturan</Text>
        <Icon name={'add-circle'} size={30} color={COLORS.primary}/>
      </TouchableOpacity>
      <Gap height={10}/>
      <View style={{backgroundColor: COLORS.primary}}>
        <Text style={{padding: 10, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 17}}>Mendatang</Text>
      </View>
      <Gap height={10}/>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Senin</Text>
        <Text>10:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Selasa</Text>
        <Text>10:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Rabu</Text>
        <Text>10:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Kamis</Text>
        <Text>10:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Jum'at</Text>
        <Text>07:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Sabtu</Text>
        <Text>07:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Minggu</Text>
        <Text>07:00 - 22:00</Text>
      </View>
      <Gap height={10}/>
      <View style={{backgroundColor: COLORS.primary}}>
        <Text style={{padding: 10, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 17}}>Riwayat</Text>
      </View>
      <Gap height={10}/>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Senin</Text>
        <Text>10:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Selasa</Text>
        <Text>10:00 - 22:00</Text>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <Text>Rabu</Text>
        <Text>10:00 - 22:00</Text>
      </View>
    </View>
  );
};

export default Pengaturan;
