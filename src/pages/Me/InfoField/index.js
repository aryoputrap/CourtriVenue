import React, {useState} from 'react';
import {Text, View, TextInput, Dimensions, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Header, Gap} from '../../../components';
import { COLORS } from '../../../utils';
import {Default, Styles} from '../../styles';

const {width, height} = Dimensions.get('window')

const InfoField = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <View style={Styles.container}>
      <View>{Filter()}</View>
      <Header title={'Info Lapangan'} onPress={() => navigation.goBack()} />
      <Gap height={25}/>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Addfield')}
        style={[Default.row,Default.center,{
          justifyContent: 'space-between', padding: 10,
          backgroundColor: COLORS.greenpastel,
          borderRadius: 10,
          width: width * 0.95,
          alignSelf: 'center'
        }]}
      >
        <Text style={{fontWeight: 'bold'}}>Tambah Lapangan</Text>
        <Icon name={'add-circle'} size={30} color={COLORS.primary}/>
      </TouchableOpacity>
      <Gap height={10}/>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20,textAlign: 'left', fontWeight: 'bold', color: COLORS.primary}}>Badminton</Text>
      </View>
      <View style={[Styles.cardView, {alignSelf: 'center', justifyContent: 'center', backgroundColor: COLORS.greenpastel}]}>
        <View style={{padding: 10}}>
         <Text style={{fontSize: 18,textAlign: 'left', fontWeight: 'bold'}}>Lapangan Satu</Text> 
        </View>
        <Gap height={5}/>
        <View style={[Default.row,{paddingHorizontal: 10, justifyContent: 'space-between'}]}>
          <View style={Default.row}>
            <Text style={{width: 150}}>Harga Harian / Jam</Text>
            <Text style={{width: 10}}>:</Text>
          </View>
          <Text style={{fontSize: 15, textAlign: 'center'}}>Rp 100.000</Text>
        </View>
        <View style={[Default.row,{paddingHorizontal: 10, justifyContent: 'space-between'}]}>
          <View style={Default.row}>
            <Text style={{width: 150}}>Harga Member / Jam</Text>
            <Text style={{width: 10}}>:</Text>
          </View>
          <Text style={{fontSize: 15, textAlign: 'center'}}>Rp 75.000</Text>
        </View>
      </View>
      <Gap height={15}/>
    </View>
  );
};

export default InfoField;
