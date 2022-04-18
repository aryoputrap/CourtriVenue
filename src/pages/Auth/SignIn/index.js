/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import API from '../../../service';
import {Gap, Header} from '../../../components';
import {Styles, Default, buttonActive, buttonInActive} from '../../styles';

const {width, height} = Dimensions.get('window');
const SignIn = ({navigation}) => {
  const [btncol] = useState(true);
  const [phone, setPhone] = useState('');
  const [load, setLoad] = useState(false);

  const onLogin = async () => {
    setLoad(true);
    const cekphone = '+62' + phone;
    const data = {
      phone: cekphone,
    };
    await API.create('AUTH').login(data)
    .then((res) => {
        // console.log('[RES LOGIN]' , res);
        setLoad(false);
        if (res.status == 200) {
          navigation.navigate('OTP', {
            hp: '+62' + phone,
          });
        }
      }
    ).catch(error => {
        console.log(error.messages);
        Alert.alert('Error', error);
        setLoad(false);
    })
  };

  const loading = (
    <Modal
      transparent={true}
      visible={load}
      onRequestClose={() => {
        Alert.alert('Modal haS been closed.');
      }}>
      <View style={Styles.modal}>
        <ActivityIndicator
          size="large"
          animating={load}
          style={Default.center}
          color={'#88CD0C'}
        />
        <Gap height={30} />
        <Text style={[Styles.text15bold, {color: '#88CD0C'}]}>
          Loading ......
        </Text>
      </View>
    </Modal>
  );

  return (
    <View style={Styles.container}>
      <Header
        // disable
        title="Masuk"
        onPress={() => navigation.goBack(1)}
      />
      <View>{loading}</View>
      <Gap height={height * 0.1} />
      <View>
        <View style={Default.center}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Selamat Datang</Text>
          <Text style={{fontSize: 16, color: 'grey'}}>
            Courtri | We Take Care Of Your Health
          </Text>
        </View>
        <Gap height={height * 0.1} />
        <Text style={{fontSize: 14, marginLeft: 25, color: 'grey'}}>
          Silahkan lengkapi nomor handphone :
        </Text>
        <Gap height={height * 0.015} />
        <View style={Default.center}>
          <View style={[Default.row, Default.spaceBetween]}>
            <View
              style={[
                Default.center,
                {
                  borderWidth: 1,
                  padding: 3,
                  borderRadius: 5,
                  width: width * 0.2,
                  marginRight: 5,
                  height: height * 0.06,
                },
              ]}>
              <Text style={[Default.center, {textAlign: 'center', padding: 5}]}>
                🇮🇩 (+62){' '}
              </Text>
            </View>
            <View
              style={{
                borderWidth: 1,
                padding: 3,
                borderRadius: 5,
                width: width * 0.7,
              }}>
              <TextInput
                onChangeText={e => setPhone(e)}
                keyboardType={'number-pad'}
                style={{
                  width: width * 0.69,
                  height: height * 0.05,
                  paddingLeft: 10,
                }}
                placeholder={'Nomor Phone'}
              />
            </View>
          </View>
        </View>
      </View>
      <Gap height={height * 0.3} />
      <View style={[Default.center, {flex: 1, justifyContent: 'flex-end'}]}>
        <TouchableOpacity
          style={[
            Styles.btnAct,
            {backgroundColor: btncol === true ? buttonActive : buttonInActive},
          ]}
          onPress={() => onLogin()}>
          <Text
            style={[
              Styles.textWhite,
              {fontWeight: 'bold', fontSize: 18, textAlign: 'center'},
            ]}>
            Masuk
          </Text>
        </TouchableOpacity>
        <Gap height={15} />
      </View>
    </View>
  );
};

export default SignIn;
