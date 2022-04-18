/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap} from '../../components';
import {news} from '../../asset';
import {Default, Styles} from '../styles';

const News = () => {
  return (
    <View style={Styles.container}>
      <Gap height={15} />
      <TouchableOpacity
        style={[
          Default.padding20,
          Default.row,
          {
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderBottomColor: '#bdc3c7',
            borderTopColor: '#bdc3c7',
          },
        ]}>
        <Image source={news} />
        <View style={{marginLeft: 20, marginRight: 30, width: '60%'}}>
          <Text>Pembukaan Hall - Badminton</Text>
          <Text>Jakarta, 12 Januari 2021</Text>
          <Text style={{textAlign: 'justify', fontSize: 12}}>
            Lapangan Gideon Badminton Hall telah dibuka sebnayak 200, orang
            Mengikuti pembukaan yang di adakan oleh Gideon.{' '}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default News;
