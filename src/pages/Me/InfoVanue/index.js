import React, {useState} from 'react';
import {Text, View, TextInput,Image, Dimensions, TouchableOpacity, Modal, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Header, Gap} from '../../../components';
import { COLORS } from '../../../utils';
import {Default, Styles} from '../../styles';
import {
    Location,
    Toilet,
    Parking,
    Canteen,
    Field,
    Mosque,
    Hanger,
  } from '../../../asset';

const {width, height} = Dimensions.get('window')

const InfoVanue = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
  const [datalist] = useState(initialValue)

  const Filter = () => {
    return(
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.45)'
        }}>
          <View style={{
            width: width * 0.5,
            height: 150,
            backgroundColor: 'white',
            borderRadius: 7,
            alignSelf: 'center',
          }}>
            <TouchableOpacity
             style={[Default.row, {justifyContent: 'space-between', padding: 5}]}
             onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{marginLeft: 45}}>Riwayat Bulan</Text>
              <Text style={{marginRight: 5}}>X</Text> 
            </TouchableOpacity>
            <Gap height={5} />
            <View style={{marginLeft: 20}}>
              <TouchableOpacity style={{borderBottomWidth: 1, width: width * 0.3}}>
                <Text>Januari</Text>
              </TouchableOpacity>
              <Gap height={5}/>
              <TouchableOpacity style={{borderBottomWidth: 1, width: width * 0.3}}>
                <Text>Februari</Text>
              </TouchableOpacity>
            </View>
          </View>     
        </View>
      </Modal>
    </View>
    )
  }

  const renderItem = ({item, index}) => (
    <View key={index} style={{margin: 10}}>
      <View
        // onPress={() => navigation.navigate('Editvanue')}
        // onPress={() => navigation.navigate('Venue')}
        key={item.id}
        style={Styles.cardview}
        // onPress={() =>
        //   navigation.navigate('BoCourt', {
        //     image: item.img,
        //     nama: item.nama,
        //     alamat: item.alamat,
        //   })
        // }
        >
        <View style={{padding: 15}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: item.img,
              }}
              style={{
                width: width * 0.9,
                height: height * 0.3,
                borderRadius: 10,
                marginTop: 10,
              }}
            />
          </View>
          <Gap height={20} />
          <View style={{alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                {item.nama}
              </Text>
              <Gap height={10}/>
              <Text style={{fontWeight: '600', fontSize: 13}}>
                {item.alamat}
              </Text>
          </View>
          <Gap height={20} />
          <View
            style={{
              flex: 1,
              height: height * 0.1,
              width: width * 0.1,
              flexWrap: 'wrap',
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
          <Gap height={10}/>
          <View style={[Default.row, {justifyContent: 'space-between', paddingHorizontal: 17, width: width * 0.95, alignSelf: 'center'}]}>
            <View style={[Default.row, {justifyContent: 'center', alignContent: 'center', alignItems: 'center'}]}>
              <Icon name={'clock'} size={20} color={COLORS.primary}/>
              <Gap width={10} />
              <Text style={{fontSize: 12}}>Waktu Buka :</Text>
            </View>
            <Text style={{fontSize: 12}}>10:00 - 22:00</Text>
          </View>
        </View>
        {/* <Gap height={10}/>
        <View style={{backgroundColor: COLORS.primary}}>
          <Text style={{padding: 10, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 17}}>Waktu</Text>
        </View>
        <Gap height={10}/>
        <View style={[Default.row, {justifyContent: 'space-between', padding: 10, width: width * 0.95, alignSelf: 'center'}]}>
          <Icon name={'clock'} size={20} color={COLORS.primary}/>
          <Text>10:00 - 22:00</Text>
        </View> */}
        <Gap height={20}/>
      </View>
    </View>
  );

  return (
    <View style={[Styles.container, {backgroundColor: COLORS.greyLight2}]}>
      <View>{Filter()}</View>
      <Header title={'Informasi Vanue'} onPress={() => navigation.goBack()} />
      <View style={{flex: 1}}>
        <FlatList
          style={{height: height * 0.5}}
          data={datalist}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Gap height={10}/>
      <View style={{width: width, height: height * 0.1, backgroundColor: COLORS.greyLight2, justifyContent: 'center', alignItems: 'center'}}>
       <View style={[Default.center, {position: 'absolute'}]}>
        <TouchableOpacity 
            style={[Default.center,{width: width * 0.9, height: height * 0.05 ,backgroundColor: COLORS.primary, borderRadius: 7}]}
            onPress={() => navigation.navigate('Venue')}
        >
          <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>EDIT</Text>
        </TouchableOpacity>
       </View>   
      </View>   
    </View>
  );
};

export default InfoVanue;
