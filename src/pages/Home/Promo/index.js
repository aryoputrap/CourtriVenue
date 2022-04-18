import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {Discount} from '../../../asset';
import {Header, Gap} from '../../../components';
import {Default, Styles} from '../../styles';
import {addPromo} from '../../../redux/actions/homeAction';

const {width, height} = Dimensions.get('window');
const Promo = ({navigation}) => {
  const dispatch = useDispatch();
  const [promo] = useState({
    data: [
      {
        label: 'HUTRI',
        value: 80,
        Description:
          'Promo hari raya kemerderdekaan Republlik Indonesia ke 81, semangat merah mu dapet diskon 80%',
      },
      {
        label: 'LEBARANPARCEL',
        value: 30,
        Description:
          'Nikmati Promo Ramadhan Ceria, setia dengan semangat puasa mu 30%',
      },
      {
        label: 'NATAL2022',
        value: 40,
        Description: 'Selamat Natal & Tahun Baru, Diskon ceria 40%',
      },
      {
        label: 'IMLEK2022',
        value: 40,
        Description: 'Selamat Natal & Tahun Baru, Diskon ceria 40%',
      },
      {
        label: 'BNI SATU HATI',
        value: 40,
        Description: 'Selamat Natal & Tahun Baru, Diskon ceria 40%',
      },
      {
        label: 'MANDIRI',
        value: 70,
        Description: 'Selamat Imlek 2022, ada diskon 70%',
      },
      {
        label: 'RESOLUSI2022',
        value: 10,
        Description: 'Jadikan 2022 Resolusi Sehat Mu dengan diskon 10%',
      },
      {
        label: 'SHOPEE',
        value: 20,
        Description: 'Untuk Wilayah JABODETABEK ada diskon shopee nih 20%',
      }
    ],
  });

  const onPromo = item => {
    dispatch(addPromo(item));
    navigation.goBack();
  };

  const renderItem = ({item, index}) => (
    <View key={index} style={{justifyContent: 'center'}}>
      <TouchableOpacity
        style={[Default.row,{borderWidth: 1, backgroundColor: 'white', marginBottom: 10, borderRadius: 5, padding: 10, borderColor: '#88CD0C'}]}
        onPress={() => onPromo(item)}>
        <Image source={Discount}/>
        <Gap width={10}/>
        <View style={{width: width * 0.65}}>
          <Text style={{marginBottom: 3, textAlign: 'center', fontWeight: 'bold'}}>{item.label}</Text>
          <View style={{marginBottom: 10}}>
            <Text style={{marginBottom: 3, textAlign: 'justify'}}>{item.Description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={Styles.container2}>
      <Header title={'Promo'} onPress={() => navigation.goBack()} />
      <View style={{paddingHorizontal: 20}}>
        <FlatList
          style={{marginTop: 10,  height: height * 0.8}}
          data={promo.data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Promo;
