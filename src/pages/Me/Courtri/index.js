/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../../../components';
import {Default, Styles} from '../../styles';

const Courtri = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Default.padding10}>
        <Header title={'Courtri'} onPress={() => navigation.goBack()} />
      </View>
      <View>
        <Text style={{textAlign: 'justify', width: '90%', alignSelf: 'center'}}>
          Courtri dimiliki oleh PT. Trikarya Mitra Primaraga yang berdiri pada
          tahun 2021. Courtri menyediakan layanan penyewaan fasilitas olahraga,
          mulai dari bidang badminton, futsal, basket, voli, tenis lapangan,
          sepakbola, tenis meja dan biliar. Visi kami yaitu menjadi pilar utama
          dalam pengembangan UMKM dan memasyarakatkan olahraga Indonesia.
        </Text>
      </View>
    </View>
  );
};

export default Courtri;
