/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  SafeAreaView,
  Image,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {connect,useDispatch} from 'react-redux';
import {Gap, Header, DropdownData, StartRating} from '../../../components';
import {Styles, Default} from '../../styles';
import Accordian from './test';
import {addBooking} from '../../../redux/actions/homeAction';

const {width, height} = Dimensions.get('window');

const BoCourt = ({order, navigation, route}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dateData, setDatedata] = useState('Pilih tanggal');
  const [white, setColor] = useState('#fff');
  const [green, setColor2] = useState('#88CD0C');
  const [cityid, setCityid] = useState(null);
  const [day, setDay] = useState(null);
  const [status, setStatus] = useState(1);
  const [menu] = useState([
    {
      title: 'Reguler 1',
      range: 'Rp 80.000 - Rp 110.000',
      data: [
        // {key: null, value: null},
        {key: '07:00', value: 'booked', price: 80000},
        {key: '08:00', value: false, price: 80000},
        {key: '09:00', value: false, price: 80000},
        {key: '10:00', value: false, price: 80000},
        {key: '11:00', value: false, price: 80000},
        {key: '12:00', value: false, price: 80000},
        // {key: '13:00', value: false, price: 80000},
        // {key: '14:00', value: false, price: 80000},
        // {key: '15:00', value: 'booked', price: 80000},
        // {key: '16:00', value: false, price: 80000},
        // {key: '17:00', value: false, price: 80000},
        // {key: '18:00', value: false, price: 80000},
        // {key: '19:00', value: false, price: 110000},
        // {key: '20:00', value: false, price: 110000},
        // {key: null, value: null},
      ],
    },
    {
      title: 'Reguler II',
      range: 'Rp 70.000 - Rp 100.000',
      data: [
        {key: '07:00', value: 'booked', price: 70000},
        {key: '08:00', value: 'booked', price: 70000},
        {key: '09:00', value: false, price: 70000},
        {key: '10:00', value: false, price: 70000},
        {key: '11:00', value: false, price: 70000},
        {key: '12:00', value: false, price: 70000},
        // {key: '13:00', value: false, price: 70000},
        // {key: '14:00', value: false, price: 70000},
        // {key: '15:00', value: false, price: 70000},
        // {key: '16:00', value: false, price: 70000},
        // {key: '17:00', value: false, price: 70000},
        // {key: '18:00', value: false, price: 70000},
        // {key: '19:00', value: false, price: 70000},
        // {key: '20:00', value: false, price: 70000},
        // {key: '21:00', value: false, price: 100000},
        // {key: '22:00', value: false, price: 100000},
        // {key: '23:00', value: false, price: 100000},
        // {key: '24:00', value: false, price: 100000},
      ],
    },
    {
      title: 'Reguler III',
      range: 'Rp 120.000 - Rp 150.000',
      data: [
        {key: '07:00', value: false, price: 120000},
        {key: '08:00', value: false, price: 120000},
        {key: '09:00', value: false, price: 120000},
        {key: '10:00', value: false, price: 120000},
        {key: '11:00', value: false, price: 120000},
        {key: '12:00', value: false, price: 120000},
        {key: '13:00', value: false, price: 120000},
        {key: '14:00', value: false, price: 120000},
        {key: '15:00', value: false, price: 120000},
        {key: '16:00', value: false, price: 120000},
        {key: '17:00', value: false, price: 120000},
        {key: '18:00', value: false, price: 120000},
        {key: '19:00', value: false, price: 120000},
        {key: '20:00', value: false, price: 120000},
        {key: '21:00', value: false, price: 150000},
        {key: '22:00', value: false, price: 150000},
        {key: '23:00', value: false, price: 150000},
        {key: '24:00', value: false, price: 150000},
      ],
    },
    {
      title: 'VIP I',
      range: 'Rp 200.000 - Rp 230.000',
      data: [
        {key: '07:00', value: false, price: 200000},
        {key: '08:00', value: false, price: 200000},
        {key: '09:00', value: false, price: 200000},
        {key: '10:00', value: false, price: 200000},
        {key: '11:00', value: false, price: 200000},
        {key: '12:00', value: false, price: 200000},
        {key: '13:00', value: false, price: 200000},
        {key: '14:00', value: false, price: 200000},
        {key: '15:00', value: false, price: 200000},
        {key: '16:00', value: false, price: 200000},
        {key: '17:00', value: false, price: 200000},
        {key: '18:00', value: false, price: 200000},
        {key: '19:00', value: false, price: 200000},
        {key: '20:00', value: false, price: 200000},
        {key: '21:00', value: false, price: 200000},
        {key: '22:00', value: false, price: 230000},
        {key: '23:00', value: false, price: 230000},
        {key: '24:00', value: false, price: 230000},
      ],
    },
  ]);

  const [month, setMonth] = useState({
    data: [
      {
        name: 'Januari',
        value: 'Januari',
      },
      {
        name: 'Februari',
        value: 'Februari',
      },
      {
        name: 'Maret',
        value: 'Maret',
      },
      {
        name: 'April',
        value: 'April',
      },
      {
        name: 'Mei',
        value: 'Mei',
      },
      {
        name: 'Juni',
        value: 'Juni',
      },
      {
        name: 'Juli',
        value: 'Juli',
      },
      {
        name: 'Agustus',
        value: 'Agustus',
      },
      {
        name: 'September',
        value: 'September',
      },
      {
        name: 'Oktober',
        value: 'Oktober',
      },
      {
        name: 'November',
        value: 'November',
      },
      {
        name: 'Desember',
        value: 'Desember',
      },
    ],
  });

  const [days, setDays] = useState({
    data: [
      {
        name: 'Senin',
        value: 'Senin',
      },
      {
        name: 'Selasa',
        value: 'Selasa',
      },
      {
        name: 'Rabu',
        value: 'Rabu',
      },
      {
        name: 'Kamis',
        value: 'Kamis',
      },
      {
        name: 'Jumat',
        value: 'Jumat',
      },
      {
        name: 'Sabtu',
        value: 'Sabtu',
      },
      {
        name: 'Minggu',
        value: 'Minggu',
      },
    ],
  });

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
    // console.log('3',item.id);
    setCityid(item.id);
    // setCity(city => ({...city, ['data']: item.cities}));
  };

  const renderAccordians = () => {
    const items = [];
    for (const item of menu) {
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
    // console.log('[ORDER]', menu[0].data);
    // navigation.navigate('BoConfrim');
    // for (let i = 0; i < menu.length; i++) {
    // //  console.log('looping', menu[i].title);
    // //Solut a
    //  let order = menu[i].data
    //  const orderDetail = order.filter(obj => {
    //   return obj.title & obj.data.value == true;
    //  });
    //  console.log(
    //    'Ini Order Detail', orderDetail
    //  );
    // }
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
    // console.log('[ALL ORDER]', order.orders);
    // console.log('ini order detail 1', order.orders[0]);
    // console.log('ini order detail 2', order.orders[1]);
    // console.log('[ORDER]', orderDetail);
    // console.log('[TOTAL]', orderDetail.order.sum("price"));
    orderDetail.forEach(x => x.total = x.order.reduce((val, cur) => val + cur.price, 0));
    
    // console.log('[TOTAL]', orderDetail.sum('Total'));
    
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
                containerStyle={{width: width * 0.36, height: height * 0.05}}
                items={month.data}
                controller={instance => (controller.current = instance)}
                onChangeList={(items, callback) => {
                  Promise.resolve(setMonth(items)).then(() => callback());
                }}
                defaultValue={cityid}
                // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                searchablePlaceholder={'Cari Courtri Promo'}
                onChangeItem={item => onitem(item)}
              />
            </View>
            <Gap width={15} />
            <View>
              <DropdownData
                placeholder={'Akhir'}
                containerStyle={{width: width * 0.36, height: height * 0.05}}
                items={month.data}
                controller={instance => (controller.current = instance)}
                onChangeList={(items, callback) => {
                  Promise.resolve(setMonth(items)).then(() => callback());
                }}
                defaultValue={cityid}
                // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                searchablePlaceholder={'Cari Courtri Promo'}
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
                containerStyle={{width: width * 0.36, height: height * 0.05}}
                items={days.data}
                controller={instance => (controller.current = instance)}
                onChangeList={(items, callback) => {
                  Promise.resolve(setDays(items)).then(() => callback());
                }}
                defaultValue={day}
                // onChangeItem={(e) => setCountry(e.value) && setPhone('')}
                searchablePlaceholder={'Cari Courtri Promo'}
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
                backgroundColor: 'white',
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
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('BoConfrim')}
                style={[
                  Styles.btnStatus2,
                  {
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    marginLeft: 15,
                    marginTop: 20,
                    marginBottom: 10,
                  },
                ]}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: white,
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
      <View>{modal}</View>
      <Header
        title={'Futsal'}
        onPress={() => navigation.navigate('FindCourt')}
      />
      <SafeAreaView style={[Styles.container2, {alignContent: 'center',alignItems: 'center', justifyContent: 'center'}]}>
        <ScrollView style={[Styles.scroolView_listvanue, {paddingBottom: 50}]}>
          <View
            style={[
              Default.padding10,
              Default.row,
              Styles.viewHeaderbo,
            ]}>
            <View style={{marginTop: 20}}>
              <Image
                source={{
                  uri: route.params.image,
                }}
                style={{
                  width: width * 0.45,
                  height: height * 0.15,
                  borderRadius: 10,
                }}
              />
            </View>
            <Gap width={15} />
            <View style={{width: width * 0.35, marginTop: 20}}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                {route.params.nama}
              </Text>
              <Text style={{fontWeight: '600', fontSize: 13}}>
                {route.params.alamat}
              </Text>
              <Gap height={10} />
              <StartRating
                disabled={true}
                maxStars={5}
                // rating={item.star}
                rating={3}
                starSize={25}
                fullStarColor="gold"
                emptyStarColor="grey"
                halfStarEnabled
                starPadding={5}
              />
            </View>
          </View>
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
          <Gap height={15} />
          {renderswitch()}
          <TouchableOpacity
            onPress={() => btnOrder()}
            style={[
              Styles.btnStatus2,
              {
                backgroundColor: 'orange',
                borderColor: 'orange',
                marginLeft: 15,
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    order: state.order,
  };
};


export default connect(mapStateToProps, null)(BoCourt);
