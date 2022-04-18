/* eslint-disable radix */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  // Image,
  Modal,
  ActivityIndicator,
} from 'react-native';
// import axios from 'axios';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Button, Gap, Header} from '../../../components';
import API from '../../../service';
// import {Styles} from '../../../components/atoms/styles';
import {Styles, Default} from '../../styles';

const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 60;

const App = ({navigation, route}) => {
  const [value, setValue] = useState('');
  const [load, setLoad] = useState(false);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  let resendOtpTimerInterval;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );

  const Send = async () => {
    const data = {
      phone: route.params.hp,
      otp: value,
    };
    setLoad(true);
    await API.create('AUTH').otp(data)
    .then((res) => {
        console.log('[RES OTP]' , res.data.data);
        let data = res.data.data
        const name = data.userName
        const token = data.accessToken
        // console.log(name, token);
        setLoad(false);
        if (res.status == 200) {
          AsyncStorage.setItem('username', name)
          AsyncStorage.setItem('token', token)
          navigation.navigate('MainApp');
        }
      }
    ).catch(error => {
        // console.log(error.messages);
        setLoad(false);
        Alert.alert('Error', error);
    })
  };

  //to start resent otp option
  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  //on click of resend button
  const onResendOtpButtonPress = () => {
    //clear input field
    setValue('');
    setLoad(true);
    const data = {
      phone: route.params.hp,
    };
    console.log('ini dataa', data);
    const url = 'http://156.67.216.146:8000/v1/auth/verify-otp';
    axios({
      method: 'POST',
      url: url,
      data: data,
    })
      .then(response => {
        console.log('[RES]', response );
        setLoad(false);
        // if (response.status == 200) {
        //   navigation.replace('MainApp');
        // }
      })
      .catch(error => {
        setLoad(false);
        Alert.alert('Error', error);
      });
  };

  useEffect(() => {
    // Send();
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

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
    <SafeAreaView style={styles.root}>
      <View>{loading}</View>
      <Header
        // disable
        title="OTP"
        onPress={() => navigation.goBack(1)}
      />
      <View style={{padding: 40}}>
        <View style={styles.posisi}>
          <Text style={styles.title}>Verifikasi Nomor</Text>
          <Text style={styles.title2}>
            OTP telah dikirim ke nomor {route.params.hp}
          </Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[styles.cellRoot, isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          {resendButtonDisabledTime > 0 ? (
            <Text style={styles.resendCodeText}>
              Resend Authorisation Code in {resendButtonDisabledTime} sec
            </Text>
          ) : (
            <TouchableOpacity onPress={onResendOtpButtonPress}>
              <View style={styles.resendCodeContainer}>
                <Text style={styles.resendCode}> Resend Verification Code</Text>
                <Text style={{marginTop: 40}}>
                  {' '}
                  in {resendButtonDisabledTime} sec
                </Text>
              </View>
            </TouchableOpacity>
          )}
          <View style={styles.button}>
            {value === '' ? (
              <Button type="secondary" title="Add OTP" />
            ) : (
              <Button title="Verify" onPress={() =>Send()} />
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  // root: {flex: 1, padding: 20},
  // title: {textAlign: 'center', fontSize: 30},
  // codeFieldRoot: {marginTop: 20},
  posisi: {
    justifyContent: 'center',
    marginTop: '30%',
  },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  root: {
    flex: 1,
    // padding: 40,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    marginStart: 20,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'center',
    fontSize: 13.5,
    marginStart: 20,
    // fontWeight: 'bold',
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 16,
    marginStart: 20,
    marginTop: 10,
  },
  codeFieldRoot: {
    marginTop: 40,
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 28,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },

  button: {
    marginTop: 20,
    marginLeft: 15,
    justifyContent: 'center',
    alignContent: 'center',
    width: '95%',
  },
  resendCode: {
    color: 'blue',
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeText: {
    marginStart: 20,
    marginTop: 40,
  },
  resendCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
