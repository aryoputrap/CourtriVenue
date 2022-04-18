/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Gap} from '../../components';
import {Styles, Default} from '../styles';

const Booking = ({navigation}) => {
  const [clr, setClr] = useState(1);

  const datax = [
    {
      gor: 'Gor Senopati',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
  ];

  const mendatang = [
    {
      gor: 'Gor Senopati',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
  ];

  const riwayat = [
    {
      gor: 'Gor Senopati',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
    {
      gor: 'Gor Orchid',
      nama: 'Wihandi Chen',
      no: '123123123123',
      hp: '+62815880932',
      status: 'Non-member',
      bo: '07 Feb 2021',
      lap: 'VIP 1, 17:00 - 19:00',
    },
  ];

  const tunda = (
    <ScrollView style={{marginBottom: 150}}>
      {datax.map((item, i) => {
        // eslint-disable-next-line prettier/prettier
      console.log('ini item',item);
        return (
          <TouchableOpacity
            key={i}
            style={[Default.row, Default.spaceBetween, Styles.bookingView]}
            onPress={() =>
              navigation.navigate('TodayBooking', {
                back: 1,
                nomor: item.no,
              })
            }>
            <View>
              <Text>{item.nama}</Text>
              <Text style={Styles.txtBold}>{item.no}</Text>
              <Text>{item.nama}</Text>
              <Text>{item.hp}</Text>
            </View>
            <View>
              <Text>{item.status}</Text>
              <Text>{item.bo}</Text>
              <Text>{item.lap}</Text>
              <Text>daat</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  const mendatangView = (
    <ScrollView style={{marginBottom: 150}}>
      {mendatang.map((item, i) => {
        // console.log('ini item',item);
        return (
          <TouchableOpacity
            key={i}
            style={[Default.row, Default.spaceBetween, Styles.bookingView]}
            onPress={() =>
              navigation.navigate('UpcommingBooking', {
                back: 1,
                nomor: item.no,
              })
            }>
            <View>
              <Text>{item.nama}</Text>
              <Text style={Styles.txtBold}>{item.no}</Text>
              <Text>{item.nama}</Text>
              <Text>{item.hp}</Text>
            </View>
            <View>
              <Text>{item.status}</Text>
              <Text>{item.bo}</Text>
              <Text>{item.lap}</Text>
              <Text>daat</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  const riwayatView = (
    <ScrollView style={{marginBottom: 150}}>
      {riwayat.map((item, i) => {
        // console.log('ini item',item);
        return (
          <TouchableOpacity
            key={i}
            style={[Default.row, Default.spaceBetween, Styles.bookingView]}
            onPress={() =>
              navigation.navigate('HistoryBooking', {
                back: 1,
                nomor: item.no,
              })
            }>
            <View>
              <Text>{item.nama}</Text>
              <Text style={Styles.txtBold}>{item.no}</Text>
              <Text>{item.nama}</Text>
              <Text>{item.hp}</Text>
            </View>
            <View>
              <Text>{item.status}</Text>
              <Text>{item.bo}</Text>
              <Text>{item.lap}</Text>
              <Text>daat</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );

  const booking = () => {
    switch (clr) {
      case 1:
        return <View>{tunda}</View>;
      case 2:
        return <View>{mendatangView}</View>;
      case 3:
        return <View>{riwayatView}</View>;
      default:
        return (
          <View style={Default.padding20}>
            <Text style={{textAlign: 'center'}}>No Connection</Text>
          </View>
        );
    }
  };

  return (
    <View style={Styles.container}>
      <View style={[Default.padding20, Default.row, {marginTop: 10}]}>
        <TouchableOpacity
          onPress={() => setClr(1)}
          style={[
            Styles.btnBorder,
            {
              backgroundColor: clr == 1 ? '#88CD0C' : 'white',
              borderColor: clr == 1 ? '#88CD0C' : 'black',
            },
          ]}>
          <Text
            style={[
              Styles.textData,
              {fontWeight: 'bold', color: clr == 1 ? 'white' : 'black'},
            ]}>
            Tertunda
          </Text>
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity
          onPress={() => setClr(2)}
          style={[
            Styles.btnBorder,
            {
              backgroundColor: clr == 2 ? '#88CD0C' : 'white',
              borderColor: clr == 2 ? '#88CD0C' : 'black',
            },
          ]}>
          <Text
            style={[
              Styles.textData,
              {fontWeight: 'bold', color: clr == 2 ? 'white' : 'black'},
            ]}>
            Mendatang
          </Text>
        </TouchableOpacity>
        <Gap width={10} />
        <TouchableOpacity
          onPress={() => setClr(3)}
          style={[
            Styles.btnBorder,
            {
              backgroundColor: clr == 3 ? '#88CD0C' : 'white',
              borderColor: clr == 3 ? '#88CD0C' : 'black',
            },
          ]}>
          <Text
            style={[
              Styles.textData,
              {fontWeight: 'bold', color: clr == 3 ? 'white' : 'black'},
            ]}>
            Riwayat
          </Text>
        </TouchableOpacity>
      </View>
      {booking()}
    </View>
  );
};

export default Booking;
