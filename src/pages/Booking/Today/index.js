/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Header, Gap, DropdownData, ButtonBorder} from '../../../components';
import {Styles, Default} from '../../styles';

const {width, height} = Dimensions.get('window');

const Today = ({navigation, route}) => {
  const [cityid, setCityid] = useState(null);
  const [country, setCountry] = useState(60);
  const [phone, setPhone] = useState('');
  const [states, setStates] = useState({
    data: [
      {
        name: 'MERDEKA',
        value: 'MERDEKA',
      },
      {
        name: 'JUARA',
        value: 'JUARA',
      },
      {
        name: 'MENANG312',
        value: 'MENANG312',
      },
      {
        name: 'HUTRI',
        value: 'HUTRI',
      },
    ],
  });

  const onitem = item => {
    // console.log('3',item.id);
    setCityid(item.id);
    // setCity(city => ({...city, ['data']: item.cities}));
  };

  return (
    <View style={Styles.container}>
      <Header
        // disable
        title="Tertunda"
        onPress={() => navigation.goBack(1)}
      />
      <View style={Default.padding10}>
        <View style={Styles.bookingViewbottom}>
          <Text style={Styles.txtTitlebo}>Gor Senopati</Text>
        </View>
        <View style={Styles.bodyDetailbooking}>
          <View>
            <Text style={{fontSize: 17}}>Konfrimasi Pesanan</Text>
            <Gap height={10} />
            <Text style={{fontSize: 17}}>No Pesanan</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {route.params.nomor}
            </Text>
            <Gap height={10} />
            <Text style={{fontSize: 17}}>Ringkasan Pembayaran</Text>
          </View>
          <View style={[Default.row, Default.spaceBetween, Styles.lineBottom]}>
            <View>
              <Text style={{marginBottom: 10, fontSize: 17}}>Lapangan</Text>
              <Text>VIP 1</Text>
            </View>
            <View>
              <Text
                style={{textAlign: 'center', marginBottom: 10, fontSize: 17}}>
                Jam
              </Text>
              <Text style={{textAlign: 'center'}}>17:00 - 19:00</Text>
            </View>
            <View>
              <Text style={{marginBottom: 10, fontSize: 17}}>Total Harga</Text>
              <Text style={{textAlign: 'center'}}>Rp 100.000</Text>
            </View>
          </View>
          <Gap height={15} />
          <View
            style={[Default.spaceBetween, Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 15}}>Kode Promo</Text>
            <View>
              <Text>HUTRI</Text>
            </View>
          </View>
          <Gap height={10} />
          <View
            style={[Default.spaceBetween, Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 15}}>Diskon</Text>
            <View style={{width: width * 0.3}}>
              <Text style={{textAlign: 'center', fontSize: 15}}>Rp 50.000</Text>
            </View>
          </View>
          <Gap height={10} />
          <View
            style={[Default.spaceBetween, Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 15}}>Total Pembayaran</Text>
            <View style={{width: width * 0.3}}>
              <Text style={{textAlign: 'center', fontSize: 15}}>Rp 50.000</Text>
            </View>
          </View>
          <View style={{alignSelf: 'flex-end', marginTop: 35}}>
            <ButtonBorder
              title={'Cancel'}
              borderColor={'red'}
              color={'red'}
              width={width * 0.25}
              onPress={() => console.log('masuk')}
            />
          </View>
          <View style={{marginTop: 65}}>
            <ButtonBorder
              title={'Bayar'}
              borderColor={'orange'}
              color={'orange'}
              width={width * 0.9}
              onPress={() => console.log('masuk')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Today;
