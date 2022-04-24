/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  // TextInput,
  Image,
  // StatusBar,
  Modal,
  SafeAreaView,
} from 'react-native';
import {
  TenismejaIcn,
  SoccerIcn,
  Banner,
  TenisIcn,
  FutsalIcn,
  BasketIcn,
  VolyIcn,
  BadmintonIcn,
  BilliardIcn,
  Bell,
  SearchHome,
  Futpng,
  Badpng,
} from '../../asset';
import {BtnCoat, Gap, DropdownData, StartRating} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Styles, Default} from '../styles';
import Geolocation from 'react-native-geolocation-service';
import LocationEnabler from 'react-native-location-enabler';
import Accordian from './test';
import {addBooking} from '../../redux/actions/homeAction';
import DatePicker from 'react-native-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {COLORS, dataMonth, dataDay, menuData} from '../../utils';

const {width, height} = Dimensions.get('window');

const {
  PRIORITIES: {HIGH_ACCURACY},
  useLocationSettings,
} = LocationEnabler;

const Home = ({navigation}) => {
  const [position, setPosition] = useState(0);
  const [user, setUser] = useState('');
  const [enabled, requestResolution] = useLocationSettings(
    {
      priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
      alwaysShow: true, // default false
      needBle: true, // default false
    },
    false,
  );
  //baru
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateData, setDatedata] = useState('Pilih tanggal');
  const [white, setColor] = useState('#fff');
  const [green, setColor2] = useState('#88CD0C');
  const [cityid, setCityid] = useState(null);
  const [day, setDay] = useState(null);
  const [status, setStatus] = useState(1);
  const [month, setMonth] = useState('');
  const [days, setDays] = useState('');

  const find = (e, x) => {
    navigation.navigate('FindCourt', {
      pos: position,
      latitude: position.latitude,
      longitude: position.longitude,
      status: x,
    });
  };

  const search = (e) => {
    navigation.navigate('FindCourt', {
      pos: position,
      latitude: position.latitude,
      longitude: position.longitude,
      input: e,
    });
  };

  useEffect(() => {
    // loc();
    // console.log('enable', enabled);
    {
      !enabled && requestResolution();
      Geolocation.getCurrentPosition(
        position => {
          console.log('ini position', position);
          setPosition(position.coords);
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
    getUser();
  }, []);

  const getUser = async() => {
   let data = await AsyncStorage.getItem('username')
   setUser(data)
  }

  // BARU

  const format = () => {
    setModalVisible(false);
    let datePicker = date;
    let test =
      datePicker.getDate() +
      '-' +
      (datePicker.getMonth() + 1) +
      '-' +
      datePicker.getFullYear();

    dispatch(addBooking(test));
    setDatedata(test);
  };

  const modalBody = (
    <View style={Styles.modalBody}>
      <DatePicker
        date={date}
        androidVariant="nativeAndroid"
        mode={'date'}
        onDateChange={setDate}
      />
      <View style={{flexDirection: 'row-reverse', margin: 10}}>
        <TouchableOpacity
          style={{...Styles.actions, backgroundColor: '#db2828'}}
          onPress={() => {
            setModalVisible(false);
          }}>
          <Text style={[Styles.textWhite, {fontWeight: 'bold', fontSize: 15}]}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={format}
          style={{...Styles.actions, backgroundColor: '#21ba45'}}>
          <Text style={[Styles.textWhite, {fontWeight: 'bold', fontSize: 15}]}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const modal = (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal haS been closed.');
      }}>
      <View style={Styles.modal}>
        <View>{modalBody}</View>
      </View>
    </Modal>
  );

  const onitem = item => {
    console.log('3',item.value);
    setMonth(item.value);
  };

  const renderAccordians = () => {
    const items = [];
    for (const item of menuData) {
      items.push(
        <Accordian
          title={item.title}
          range={item.range}
          data={item.data}
          // onPress={() => onClick(item.data.key)}
          // onClickx={(e) => console.log('ini data', item.data) & console.log('ini menu', menu[0])}
          // onClick={(e) => onClick(e)}
          // inClick={() => console.log('masuk true')}
        />,
      );
    }
    // console.log(items.data);
    return items;
  };

  const btnOrder = () => {
    const dataTotal = order.orders.map((obj) => {
      return {...obj, order: obj.order.filter((order) => order.value === true)}
    })

    const orderDetail = dataTotal.filter(obj => {
      return obj.order.length > 0;
    });
    //Total
    Array.prototype.sum = function (prop) {
      var total = 0
      for ( var i = 0, _len = this.length; i < _len; i++ ) {
          total += this[i][prop]
      }
      return total
    }

    orderDetail.forEach(x => x.total = x.order.reduce((val, cur) => val + cur.price, 0));

    navigation.navigate('BoConfrim',{
      data: {
        gor: route.params.nama,
        address: route.params.alamat,
        orderDate: dateData,
        orderBooking: orderDetail,
        total: orderDetail.sum('total'),
        image: route.params.image,
        // total: orderDetail.sum('Total')
      }
    });

  };

  const renderMember = () => {
    return (
      <View style={{marginLeft: 20}}>
        <View>
          <View style={[Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 17}}>Bulan</Text>
            <Gap width={5} />
            <Text style={{fontSize: 17}}>:</Text>
            <Gap width={15} />
            <View>
              <DropdownData
                placeholder={'Awal'}
                containerStyle={{width: width * 0.36, height: height * 0.055}}
                items={dataMonth}
                controller={instance => (controller.current = instance)}
                defaultValue={cityid}
                searchablePlaceholder={'Awal'}
                onChangeItem={item => onitem(item)}
              />
            </View>
            <Gap width={15} />
            <View>
              <DropdownData
                placeholder={'Akhir'}
                containerStyle={{width: width * 0.36, height: height * 0.055}}
                items={dataMonth}
                controller={instance => (controller.current = instance)}
                defaultValue={cityid}
                searchablePlaceholder={'Akhir'}
                onChangeItem={item => onitem(item)}
              />
            </View>
          </View>
        </View>
        <Gap height={10} />
        <View>
          <View style={[Default.row, {alignItems: 'center'}]}>
            <Text style={{fontSize: 17}}>Hari</Text>
            <Gap width={15} />
            <Text style={{fontSize: 17}}>:</Text>
            <Gap width={15} />
            <View>
              <DropdownData
                placeholder={'Hari'}
                containerStyle={{width: width * 0.76, height: height * 0.055}}
                items={dataDay}
                controller={instance => (controller.current = instance)}
                // onChangeList={(items, callback) => {
                //   Promise.resolve(setDays(items)).then(() => callback());
                // }}
                defaultValue={day}
                // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                searchablePlaceholder={'Cari Hari'}
                onChangeItem={item => onitem(item)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderswitch = () => {
    switch (status) {
      case 1:
        return (
          <View>
            <TouchableOpacity
              style={[Default.row, Default.center, {
                marginVertical: 5,
                alignSelf: 'center',
                backgroundColor: COLORS.white,
                padding: 5,
                paddingVertical: 8,
                // width: '94%',
                borderRadius: 7,
              }]}
              onPress={() => {
                setModalVisible(true);
              }}>
              <EvilIcons name="calendar" size={45} />
              <View style={Styles.dateView}>
                <Text style={Styles.textTitle}>{dateData}</Text>
              </View>
            </TouchableOpacity>
            <Gap height={10}/>
            <View>{renderAccordians()}</View>
          </View>
        );
      case 2:
        return (
          <View>
            <View>{renderMember()}</View>
            <View style={[Default.widthMax, {alignItems: 'center'}]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('BoConfrim')}
                style={[
                  Styles.btnStatus2,
                  {
                    // backgroundColor: 'orange',
                    borderColor: 'orange',
                    marginTop: 20,
                    marginBottom: 10,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'orange',
                  }}>
                  Cari
                </Text>
              </TouchableOpacity>
            </View>
            {renderAccordians()}
          </View>
        );
      default:
        return (
          <View>
            <Text>Please check your connection</Text>
          </View>
        );
    }
  };

  return (
    <View style={Styles.container}>
      <View style={{position: 'absolute', width: '100%'}}>
        <View style={Styles.headerHome} />
        <View style={[Default.row, Default.spaceBetween, {paddingTop: 15}]}>
          <View style={Default.paddinghor}>
            <Text
              style={[Styles.textWhite, {fontSize: 18, fontWeight: 'bold'}]}>
              Hallo
            </Text>
            <Text
              style={[Styles.textWhite, {fontSize: 18, fontWeight: 'bold'}]}>
              Selamat Datang
            </Text>
            <Text
              style={[Styles.textWhite, {fontSize: 18, fontWeight: 'bold'}]}>
              {user}
            </Text>
          </View>
          <TouchableOpacity style={{paddingRight: 5, paddingTop: 20}}>
            <Bell width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>
      <Gap height={height * 0.21} />
      <SafeAreaView style={[Styles.container2, {alignContent: 'center',alignItems: 'center', justifyContent: 'center'}]}>
        <ScrollView style={[Styles.scroolView_listvanue, {paddingBottom: 250}]} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <View style={[Default.row, Default.center, {marginTop: 20}]}>
            <TouchableOpacity
              style={[
                Styles.btnStatus,
                {
                  backgroundColor: status == 1 ? green : white,
                  borderBottomLeftRadius: 7,
                  borderTopLeftRadius: 7,
                },
              ]}
              onPress={() => setStatus(1)}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: status == 1 ? white : green,
                }}>
                Harian
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                Styles.btnStatus,
                {
                  backgroundColor: status == 2 ? green : white,
                  borderBottomRightRadius: 7,
                  borderTopRightRadius: 7,
                },
              ]}
              onPress={() => setStatus(2)}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: status == 2 ? white : green,
                }}>
                Bulanan
              </Text>
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          {renderswitch()}
          <View style={[Default.widthMax, {alignItems: 'center'}]}>
            <TouchableOpacity
              onPress={() => btnOrder()}
              style={[
                Styles.btnStatus2,
                {
                  backgroundColor: 'orange',
                  borderColor: 'orange',
                  marginTop: 20,
                  marginBottom: 50,
                },
              ]}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: white,
                }}>
                Order
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Gap height={height * 0.05} />
      </SafeAreaView>
    </View>
  );
};

export default Home;
