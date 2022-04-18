/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {Header, Button} from '../../../components';
import {Styles, Default} from '../../styles';
import {MANDIRI, BNI, BRI} from '../../../asset';

const {width, height} = Dimensions.get('window');

const PaymentDetail = ({navigation, home}) => {
  return (
    <View style={Styles.container}>
      <Header
        // disable
        title="Metode Pembayaran"
        onPress={() => navigation.goBack(1)}
      />
      <View style={{paddingHorizontal: 20}}>
        <MANDIRI />
        <View>
          <Text>No. Rekening:</Text>
          <Text>23482638462387</Text>
          <Text>a.n Courtri Persada</Text>
        </View>
      </View>
      <View style={Styles.lineBottom} />
      <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
        <Text>Detail Pemesanan</Text>
      </View>
      <View
        style={[Default.row, Default.spaceBetween, {paddingHorizontal: 20}]}>
        <Text style={{textAlign: 'center'}}>Lapangan</Text>
        <Text>Jam</Text>
        <Text>Harga</Text>
      </View>
      <View
        style={[Default.row, Default.spaceBetween, {paddingHorizontal: 20}]}>
        <Text style={{textAlign: 'center'}}>VIP 1</Text>
        <Text style={{textAlign: 'center'}}>17:00 - 19:00</Text>
        <Text>Rp 200.000</Text>
      </View>
      <View
        style={[
          Default.row,
          Default.spaceBetween,
          {paddingHorizontal: 20, paddingVertical: 10, marginTop: 50},
        ]}>
        <Text>Kode Promo:</Text>
        <Text>{home.promo.label}</Text>
      </View>
      <View
        style={[Default.row, Default.spaceBetween, {paddingHorizontal: 20}]}>
        <Text>Diskon:</Text>
        <Text>{home.promo.value} %</Text>
      </View>
      <View style={Styles.lineBottom} />
      <View style={{paddingHorizontal: 20, paddingVertical: 10, marginTop: 20}}>
        <Text style={{fontSize: 16, color: 'grey'}}>Total Pembayaran :</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>RP 250.000</Text>
      </View>
      <View style={Styles.lineBottom} />
      <View style={{flex: 1, justifyContent: 'flex-end', padding: 20}}>
        <View>
          <Button
            title={'Konfrimasi Pembayaran'}
            width={width * 0.9}
            onPress={() =>
              navigation.navigate('MainApp', {
                screen: 'Booking',
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

// export default PaymentDetail;
const mapStateToProps = state => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps, null)(PaymentDetail);
