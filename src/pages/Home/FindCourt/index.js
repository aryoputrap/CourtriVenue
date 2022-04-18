/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
// import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  // Alert,
  // Linking,
  FlatList,
  Image,
} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
import {getDistance} from 'geolib';
import {Gap, Header, StartRating} from '../../../components';
import {
  Location,
  Toilet,
  Parking,
  Canteen,
  Field,
  Mosque,
  Hanger,
} from '../../../asset';
import {Styles, Default} from '../../styles';
import {data} from '../../../utils/data';
const {width, height} = Dimensions.get('window');
import getDirections from 'react-native-google-maps-directions';
// import LocationEnabler from 'react-native-location-enabler';

// const {
//   PRIORITIES: {HIGH_ACCURACY},
//   useLocationSettings,
// } = LocationEnabler;

const FindCourt = ({navigation, route}) => {
  // const [lat, setLat] = useState(0);
  // const [long, setLong] = useState(0);
  // const [distance, setDistance] = useState(null);
  // const [white, setColor] = useState('#fff');
  // const [green, setColor2] = useState('#88CD0C');
  // const [status, setStatus] = useState(1);
  const [text, setText] = useState('');

  const initialValue = [
    {id: 1,
      nama: 'Gor Senopati',
      alamat: 'JL.Salemba No.28, Setiabudi, Jakarta Selatan.',
      star: 1.5,
      loc: {latitude: -6.21781246208, longitude: 106.801503461},
      img:
        'https://cdn.idntimes.com/content-images/community/2020/09/lapangan-futsal-94db8dd85c516f7bffe3836900ae1e6e_600x400.jpg',
      dataimg: [
        {
          id: 1,
          value: 'Indoor | Lantai Vinyl',
          img: <Field />,
          status: true,
        },
        {
          id: 2,
          value: 'Toilet',
          img: <Toilet />,
          status: true,
        },
        {
          id: 3,
          value: 'Parkir',
          img: <Parking />,
          status: true,
        },
        {
          id: 4,
          value: 'Mushola',
          img: <Mosque />,
          status: true,
        },
        {
          id: 5,
          value: 'Kantin',
          img: <Canteen />,
          status: true,
        },
        {
          id: 6,
          value: 'Ruang Ganti',
          img: <Hanger />,
          status: true,
        },
      ],}];

  const [datalist, setDatalist] = useState(initialValue)

  // const loc = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       console.log('latitude', position);
  //       setLat(position.coords.latitude);
  //       setLong(position.coords.longitude);
  //       var dis = getPreciseDistance(
  //         {
  //           latitude: position.coords.latitude,
  //           longitude: position.coords.longitude,
  //         },
  //         {latitude: 37.421998333333335, longitude: -122.08400000000002},
  //       );
  //       setDistance(`${dis / 1000} KM`);
  //     },
  //     error => Alert.alert('Error', JSON.stringify(error)),
  //     {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
  //   );
  //   Geolocation.watchPosition(position => {
  //     const lastPosition = JSON.stringify(position);
  //     console.log('las pos', lastPosition);
  //     // this.setState({lastPosition});
  //   });
  // };

  const kordinat = (dataLat, datLong) => {
    const datakordinat = getDistance(route.params.pos, {
      latitude: dataLat,
      longitude: datLong,
    });
    return datakordinat / 1000;
  };

  const handleGetDirections = (a, b) => {
    const data = {
      source: {
        latitude: route.params.latitude,
        longitude: route.params.longitude,
      },
      destination: {
        latitude: a,
        longitude: b,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving',
          // value: 'driving', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
    };
    getDirections(data);
  };

  useEffect(() => {
    // loc();
    // console.log('enable', enabled);
    // {
    //   !enabled && requestResolution();
    // }
    setDatalist(data);
  }, []);

  const SearchFilterFunction = (text) => {
    const newData = datalist.filter(function(item) {
      const itemData = item.nama
        ? item.nama.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setDatalist(newData ? newData : 'Not Found');
    setText(text);
  }

  const clear = () => {
    setText('');
    setDatalist(data)
  }

  const renderItem = ({item, index}) => (
    <View key={index} style={{margin: 10}}>
      <TouchableOpacity
        key={item.id}
        style={Styles.cardview}
        onPress={() =>
          navigation.navigate('BoCourt', {
            image: item.img,
            nama: item.nama,
            alamat: item.alamat,
          })
        }>
        <View>
          <View style={Default.row}>
            <Image
              source={{
                uri: item.img,
              }}
              style={{
                width: width * 0.45,
                height: height * 0.15,
                borderRadius: 10,
              }}
            />
            <Gap width={10} />
            <View
              style={{
                width: width * 0.43,
                height: height * 0.15,
                // backgroundColor: 'red',
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                {item.nama}
              </Text>
              <Text style={{fontWeight: '600', fontSize: 12}}>
                {item.alamat}
              </Text>
              <View style={{marginTop: 13, width: width * 0.3}}>
                <StartRating
                  disabled={true}
                  maxStars={5}
                  rating={item.star}
                  starSize={25}
                  fullStarColor="gold"
                  emptyStarColor="grey"
                  halfStarEnabled
                  starPadding={5}
                />
              </View>
            </View>
          </View>
          <Gap height={10} />
          <View>
            <View
              style={{
                flex: 1,
                height: height * 0.1,
                width: width * 0.1,
                flexWrap: 'wrap',
                // backgroundColor: 'blue',
              }}>
              {item.dataimg.map(itemfas => {
                return (
                  <View style={{width: width * 0.325}}>
                    {itemfas.status == false ? (
                      <View />
                    ) : (
                      <View
                        style={[
                          Default.row,
                          {
                            // backgroundColor: 'red',
                            marginBottom: 5,
                            width: width * 0.25,
                          },
                        ]}>
                        {itemfas.img}
                        <Gap width={10} />
                        <Text style={{fontSize: 9, marginTop: 5}}>
                          {itemfas.value}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
            <View
              style={{
                marginLeft: width * 0.7,
                // justifyContent: 'center',
                flex: 1,
                // justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={Default.center}
                onPress={() =>
                  handleGetDirections(item.loc.latitude, item.loc.longitude)
                }>
                <Location height={25} width={25} />
                <Text
                  style={{
                    fontSize: 9,
                    marginTop: 5,
                    // textAlign: 'center',
                    // width: width * 0.5,
                  }}>
                  {/* {kordinat(item.loc.latitude, item.loc.longitude / 1000)} KM */}
                  {kordinat(item.loc.latitude, item.loc.longitude)} KM
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Gap width={15} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={Styles.container2}>
      <Header
        title={route.params.status}
        onPress={() => navigation.goBack(route.params.goback)}
        onChangeText={(text) => SearchFilterFunction(text)}
        value={text}
        onPressIcon={() => clear()}
        input={route.params.input ? true : false}
      />
      <View>
        <FlatList
          style={Styles.view_flatList2}
          data={datalist}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FindCourt;
