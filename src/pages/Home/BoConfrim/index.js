/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {
  Header,
  Gap,
  // DropdownData,
  Button,
  // StartRating,
} from '../../../components';
import { COLORS } from '../../../utils';
import {Styles, Default} from '../../styles';

const {width, height} = Dimensions.get('window');

const BookingConfrim = ({home, navigation, route}) => {
  // const [cityid, setCityid] = useState(null);
  const [dataOrder, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // console.log('[DATA]', route.params.data);
    console.log('[PROMO]',home.promo.value);
    setData(route.params.data);
  }, []);

  const cekNominal = nominal => {
    if (nominal == undefined) {
      setData(route.params.data);
    } else {
    if(home.isPromo == false){
      // setTotal(nominal)
      const reverse = nominal
      .toString().split("").reverse().join("");
      const ribuan = reverse.match(/\d{1,3}/g);
      const hasil = ribuan
        .join(".").split("") .reverse() .join("");
      return hasil;
    } else {
      // console.log('[PROMO]',nominal - nominal * home.promo.value/100);
      const diskon = dataOrder.total - (dataOrder.total * home.promo.value/100)
      // setTotal(diskon)
      const reverse = diskon
        .toString().split("").reverse().join("");
      const ribuan = reverse.match(/\d{1,3}/g);
      const hasil = ribuan
        .join(".").split("") .reverse() .join("");
      return hasil;
     }
    }
  };

  const btnOrder = () => {
    let data = {
      total: home.isPromo == false ? dataOrder.total : dataOrder.total - (dataOrder.total * home.promo.value/100),
    };

    console.log('HASIL', data);
  }

  const listData = ({item}) => {
    var highest =  Number.NEGATIVE_INFINITY;
    var lowest = Number.POSITIVE_INFINITY;
    var tmp;
    for (var i=item.order.length-1; i>=0; i--) {
        tmp = item.order[i].key.split(":")[0];
        if (tmp < lowest) lowest = tmp;
        if (tmp > highest) highest = tmp;
    }

    // console.log(lowest,highest);
    // console.log(item);
    //Total
    Array.prototype.sum = function (prop) {
      var total = 0
      for ( var i = 0, _len = this.length; i < _len; i++ ) {
          total += this[i][prop]
      }
      return total
    }

    const cekNominal = nominal => {
      const reverse = nominal
        .toString().split("").reverse().join("");
      const ribuan = reverse.match(/\d{1,3}/g);
      const hasil = ribuan
        .join(".").split("") .reverse() .join("");
      return hasil;
    };
    
    return(
      <View> 
        <View style={[Default.row, Default.spaceBetween,{height: height * 0.04, width: width * 0.9, alignItems: 'center'}]}>
          <View style={{justifyContent: 'center', width: width*0.25}}> 
            <Text style={{fontSize: 13, textAlign: 'center'}}>{item.title}</Text>
          </View>
          <View style={{justifyContent: 'center', width: width*0.35}}>
            <Text style={{textAlign: 'center', fontSize: 13}}>
              {lowest + ":00"} {lowest === highest ? null : ' - '} {lowest === highest ? null : highest + ":00"}
            </Text>
          </View>
          <View style={{justifyContent: 'center', width: width*0.25}}>
            <Text style={{fontSize: 13, textAlign: 'center'}}>Rp. {cekNominal(item.order.sum("price"))}</Text>
          </View>
        </View>
      </View>
  )}
  

  return (
    <View style={Styles.container}>
      <Header
        // disable
        title="Detail Pesanan"
        onPress={() => navigation.goBack()}
        // onPress={() =>
        //   navigation.navigate('MainApp', {
        //     screen: 'Booking',
        //   })
        // }
      />
      <ScrollView>
        <View style={Styles.bookingViewbottom}>
          <Text style={Styles.txtTitlebo}>{dataOrder.gor}</Text>
        </View>
        <View style={[Styles.bodyDetailbooking]}>
          <View>
            <View
              style={[
                // Default.padding10,
                Default.row,
                // Styles.viewHeaderbo,
                {justifyContent: 'center',borderRadius: 10,
                height: height * 0.17,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: COLORS.greyLight
              }
              ]}>
              <View style={{marginTop: 20}}>
                <Image
                  source={{
                    uri: route.params.data.image,
                  }}
                  style={{
                    width: width * 0.4,
                    height: height * 0.13,
                    borderRadius: 10,
                  }}
                />
              </View>
              <Gap width={15} />
              <View style={{width: width * 0.4, marginTop: 20}}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>Order</Text>
              <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginTop: 10}}>{dataOrder.orderDate}</Text>
              <Text style={{fontWeight: '600', fontSize: 13, marginTop: 20, textAlign: 'left'}}>
                {route.params.data.address}
              </Text>
              <Gap height={10} />
              </View>
            </View>
            <Gap height={10} />
            <Text style={{fontSize: 14}}>Ringkasan Pembayaran</Text>
          </View>
          <View>
              <View style={[Default.row, Default.spaceBetween, Styles.lineBottom]}>
                <View>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>Lapangan</Text>
                </View>
                <View>
                  <Text
                    style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
                    Jam
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 15, fontWeight: 'bold'}}>Total Harga</Text>
                </View>
              </View>
              <FlatList
                style={{
                  width: '100%',
                  height: '30%',
                  // backgroundColor: 'red',
                  borderRadius: 5,
                  borderWidth: 0.5,
                  borderColor: COLORS.greyLight
                }}
                data={dataOrder.orderBooking}
                // numColumns={4}
                keyExtractor={item => item.title}
                renderItem={listData}
              />
          </View>
          <Gap height={15} />
          <View
            style={[Default.spaceBetween, Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 15}}>Kode Promo</Text>
            {home.isPromo == false ? (
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 5, padding: 10, borderColor: COLORS.greyLight }}
                onPress={() => navigation.navigate('Promo')}>
                <Text>Promo</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{borderWidth: 1, borderRadius: 5, padding: 10, borderColor: COLORS.greyLight}}
                onPress={() => navigation.navigate('Promo')}>
                <Text>{home.promo.label}</Text>
              </TouchableOpacity>
            )}
          </View>
          <Gap height={10} />
          <View
            style={[Default.spaceBetween, Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 15}}>Diskon</Text>
            <View style={{width: width * 0.3}}>
              {home.isPromo == false ? (
                <Text style={{textAlign: 'center', fontSize: 15}}>0 %</Text>
              ) : (
                <Text style={{textAlign: 'center', fontSize: 15}}>
                  {home.promo.value} %
                </Text>
              )}
            </View>
          </View>
          <Gap height={10} />
          <View
            style={[Default.spaceBetween, Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 15}}>Total Pembayaran</Text>
            <View style={{width: width * 0.3}}>
              <Text style={{textAlign: 'center', fontSize: 15}}>Rp. {cekNominal(dataOrder.total)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{justifyContent: 'flex-end', padding: 20}}>
          <Button
            title={'Lanjut'}
            width={width * 0.9}
            onPress={() => btnOrder()}
          />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    home: state.home,
  };
};

export default connect(mapStateToProps, null)(BookingConfrim);
