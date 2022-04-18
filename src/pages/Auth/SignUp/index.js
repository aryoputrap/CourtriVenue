/* eslint-disable eqeqeq */
/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
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
import Axios from 'axios';
// import Axios from 'axios';
import API from '../../../service';
import {Gap, Header} from '../../../components';
import {Styles, Default, buttonActive} from '../../styles';

const {width, height} = Dimensions.get('window');

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [load, setLoad] = useState(false);

  const onRegis = async () => {
    const cekphone = '+62' + phone;
    setLoad(true);
    let data = {
      name: name,
      phone: cekphone,
      role: 'Vanue',
      email: "user@example.com"
    }
    await API.create('AUTH').signup(data)
    .then((res) => {
        // console.log('[RES LOGIN]' , res);
        setLoad(false);
        if (response.status == 200) {
            navigation.navigate('OTP', {
              hp: '+62' + phone,
            });
          }
      }
    ).catch(error => {
        // console.log(error.messages);
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
      <View>{loading}</View>
      <Header
        // disable
        title="Register"
        onPress={() => navigation.goBack(1)}
      />
      <Gap height={height * 0.05} />
      <View style={Default.padding20}>
        <Text>Name</Text>
        <Gap height={5} />
        <TextInput
          style={{borderWidth: 1, width: width * 0.9, borderRadius: 5, paddingLeft: 10}}
          placeholder={' Enter Your Name'}
          onChangeText={e => setName(e)}
        />
        <Gap height={15} />
        <Text>Phone Number</Text>
        <Gap height={5} />
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
                width: width * 0.68,
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
        <Gap height={15} />
        <Text>Email</Text>
        <Gap height={5} />
        <TextInput
          style={{borderWidth: 1, width: width * 0.9, borderRadius: 5, paddingLeft: 10}}
          placeholder={'Enter Your Phone Email'}
        />
      </View>
      <Gap height={height * 0.3} />
      <View style={[Default.center, {width: width * 0.85, alignSelf: 'center'}]}>
        <Gap height={15} />
        <TouchableOpacity
          style={[
            Styles.btnAct,
            // {backgroundColor: btncol === true ? buttonInActive : buttonActive},
            {backgroundColor: buttonActive},
          ]}
          onPress={() => onRegis()}>
          <Text
            style={[
              Styles.textWhite,
              {fontWeight: 'bold', fontSize: 18, textAlign: 'center'},
            ]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
