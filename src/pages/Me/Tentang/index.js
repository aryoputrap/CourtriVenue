import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../../../components';
import {Default, Styles} from '../../styles';

const Tentang = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Default.padding10}>
        <Header title={'Tentang'} onPress={() => navigation.goBack()} />
      </View>
      <View>
        <Text>
          Courtri menyediakan halaman Kebijakan Privasi sebagai bentuk komitmen
          nyata untuk melindungi dan menjamin informasi pribadi pengguna
          aplikasi. Kebijakan Privasi berisi tentang dasar pengumpulan,
          penyimpanan, pengolahan, pengiriman, pemanfaatan, perubahan dan
          penghapusan informasi terkait pengguna Courtri.
        </Text>
      </View>
    </View>
  );
};

export default Tentang;
