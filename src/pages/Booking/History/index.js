/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React, {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {
  Header,
  Gap,
  DropdownData,
  ButtonBorder,
  StartRating,
} from '../../../components';
import {Styles, Default} from '../../styles';

const {width, height} = Dimensions.get('window');

const History = ({navigation, route}) => {
  const [cityid, setCityid] = useState(null);
  const [country, setCountry] = useState(60);
  const [star, setStar] = useState(2.5);
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

  return (
    <View style={Styles.container}>
      <Header
        // disable
        title="Riwayat"
        onPress={() => navigation.goBack(1)}
      />
      <View style={Styles.bookingViewbottom}>
        <Text style={Styles.txtTitlebo}>Gor Senopati</Text>
      </View>
      <View style={[Styles.bodyDetailbooking, Default.padding10]}>
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
            <Text style={{textAlign: 'center', marginBottom: 10, fontSize: 17}}>
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
        <View style={{marginTop: 60, width: width * 0.5, alignSelf: 'center'}}>
          <StartRating
            disabled={false}
            maxStars={5}
            rating={star}
            selectedStar={rating => setStar(rating)}
            fullStarColor="gold"
            emptyStarColor="grey"
            halfStarEnabled
            starPadding={10}
          />
        </View>
        <View style={{marginTop: 60}}>
          <ButtonBorder
            title={'Submit'}
            borderColor={'gold'}
            color={'gold'}
            width={width * 0.9}
            onPress={() => console.log('masuk')}
          />
        </View>
      </View>
    </View>
  );
};

export default History;
