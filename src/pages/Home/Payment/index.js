/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {Header, Button} from '../../../components';
import {Styles, Default} from '../../styles';
import {MANDIRI, BNI, BRI} from '../../../asset';

const {width, height} = Dimensions.get('window');

const Payment = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Header
        // disable
        title="Metode Pembayaran"
        onPress={() => navigation.goBack(1)}
      />
      <View style={Default.padding20}>
        <Text>Pilih Metode Pemayaran</Text>
      </View>
      <View>
        {/* <View style={Styles.lineBottom} /> */}
        <TouchableOpacity style={Styles.lineBottom}>
          <MANDIRI />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.lineBottom}>
          <BNI />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.lineBottom}>
          <BRI />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', padding: 20}}>
        <View>
          <Button
            title={'Bayar'}
            width={width * 0.9}
            onPress={() =>
              navigation.navigate('PaymentDetail', {
                back: 1,
                // nomor: item.no,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Payment;
