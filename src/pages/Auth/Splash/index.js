import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logo} from '../../../asset';

const Splash = ({navigation}) => {
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.replace('Started');
    // }, 3000);
    getUser();
  }, []);

  const getUser = async() => {
    let data = await AsyncStorage.getItem('token');
    console.log('[TOKEN]',data);
    setTimeout(() => {
      {data? navigation.replace('MainApp'):navigation.replace('Started')}
    }, 3000);
   }

  return (
    <View style={styles.page}>
      <Image source={Logo} resizeMode={'contain'} style={styles.logo} />
    </View>
  );
};



export default Splash;

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: '50%',
    position: 'absolute',
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
  textCountry: {
    fontSize: 10,
    color: 'white',
  },
  textsc: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '80%',
  },
});
