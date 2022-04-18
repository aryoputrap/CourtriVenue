/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Gap} from '../../components';
import {Styles, Default} from '../styles';

const {width, height} = Dimensions.get('window');

const Inbox = () => {
  return (
    <View style={[Styles.container1, {alignItems: 'center'}]}>
      <Gap height={15} />
      <View
        style={[
          Default.padding20,
          {
            width: width * 0.95,
            borderBottomColor: '#bdc3c7',
            borderTopColor: '#bdc3c7',
            backgroundColor: 'white',
            borderRadius: 10,
          },
        ]}>
        <Text style={{fontWeight: 'bold', fontSize: 17, borderBottomWidth: 1, paddingVertical: 5}}>Pembayaran Berhasil</Text>
        <Text style={{fontS: 15, marginTop: 5}}>Pembayaran Booking Lapangan di GOR Citra</Text>
        <View style={[Default.row, {marginVertical: 5}]}>
          <Text style={{fontS: 15, width: 60}}>Tanggal</Text>
          <Text style={{fontS: 15, width: 10}}>:</Text>
          <Text style={{fontS: 15, width: 100}}>05 Mei 2021</Text>
        </View>
        <View style={[Default.row, {marginVertical: 5}]}>
          <Text style={{fontS: 15, width: 60}}>Jam</Text>
          <Text style={{fontS: 15, width: 10}}>:</Text>
          <Text style={{fontS: 15, width: 100}}>17:00 - 18:00</Text>
        </View>
        <Text>Sudah kami terima, Silahkan datang tepat waktu. Terimakasih</Text>
      </View>
      <Gap height={15} />
      <View
        style={[
          Default.padding20,
          {
            width: width * 0.95,
            borderBottomColor: '#bdc3c7',
            borderTopColor: '#bdc3c7',
            backgroundColor: 'white',
            borderRadius: 10,
          },
        ]}>
        <Text style={{fontWeight: 'bold', fontSize: 17, borderBottomWidth: 1, paddingVertical: 5}}>Pembayaran Berhasil</Text>
        <Text style={{fontS: 15, marginTop: 5}}>Pembayaran Booking Lapangan di GOR Citra</Text>
        <View style={[Default.row, {marginVertical: 5}]}>
          <Text style={{fontS: 15, width: 60}}>Tanggal</Text>
          <Text style={{fontS: 15, width: 10}}>:</Text>
          <Text style={{fontS: 15, width: 100}}>05 Mei 2021</Text>
        </View>
        <View style={[Default.row, {marginVertical: 5}]}>
          <Text style={{fontS: 15, width: 60}}>Jam</Text>
          <Text style={{fontS: 15, width: 10}}>:</Text>
          <Text style={{fontS: 15, width: 100}}>17:00 - 18:00</Text>
        </View>
        <Text>Sudah kami terima, Silahkan datang tepat waktu. Terimakasih</Text>
      </View>
    </View>
  );
};

export default Inbox;
