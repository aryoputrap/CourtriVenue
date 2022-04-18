import React from 'react';
import {Text, View} from 'react-native';
import {Header} from '../../../components';
import {Default, Styles} from '../../styles';

const Syarat = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <View style={Default.padding10}>
        <Header title={'Syarat'} onPress={() => navigation.goBack()} />
      </View>
      <Text>Ini Explore</Text>
    </View>
  );
};

export default Syarat;
