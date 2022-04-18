import React, {useState} from 'react';
import {Text, View, TextInput, Dimensions, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Header, Gap} from '../../../components';
import { COLORS } from '../../../utils';
import {Default, Styles} from '../../styles';

const {width, height} = Dimensions.get('window')

const Withdraw = ({navigation}) => {
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
      <Header title={'Penarikan'} onPress={() => navigation.goBack()} />
      <View style={[Styles.headerMe, {alignSelf: 'center', justifyContent: 'center', marginTop: 20, backgroundColor: '#f3fae6'}]}>
        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>GOR SETIABUDI</Text>
        <Gap height={15}/>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Rp 1.000.000</Text>
      </View>
      <Gap height={15}/>
      <View style={{padding: 10}}>
        <Text>Jumlah Penarikan :</Text>
        <Gap height={10}/>
        <TextInput
         keyboardType={'number-pad'}
         textAlign={'center'}
         placeholder={'Jumlah Penarikan'}
         style={{borderWidth: 1, borderRadius: 5, borderColor: COLORS.greyLight}}
        />
        <Gap height={10}/>
        <View style={{alignSelf: 'flex-end'}}>
          <TouchableOpacity
              // onPress={() => btnOrder()}
              style={[
                Styles.btnStatus2,
                {
                  backgroundColor: 'orange',
                  borderColor: 'orange',
                },
              ]}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: COLORS.white,
                }}>
                Penarikan
              </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Gap height={10}/>
      <View style={{backgroundColor: COLORS.primary}}>
        <Text style={{padding: 10, textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 17}}>Riwayat</Text>
      </View>
      <View style={{alignSelf: 'flex-end', padding: 5, marginRight: 10}}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Icon name='filter-list' size={30}/>
        </TouchableOpacity>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <View>
          <Text>13 Januari 2022</Text>
          <Text>Senin, 13:00</Text>
        </View>
        <View>
          <Text>Rp 500.000</Text>
          <Text>BCA</Text>
        </View>
      </View>
      <View style={[Default.row, {justifyContent: 'space-between', padding: 10, borderBottomWidth: 1, width: width * 0.95, alignSelf: 'center'}]}>
        <View>
          <Text>17 Februari 2022</Text>
          <Text>Jum'at, 13:00</Text>
        </View>
        <View>
          <Text>Rp 500.000</Text>
          <Text>BNI</Text>
        </View>
      </View>
    </View>
  );
};

export default Withdraw;
