/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
// import PropTypes from 'prop-types';
import {Sty, Def} from '../styles';

const BtnCoat = props => {
  return (
    <View>
      <TouchableOpacity style={Sty.viewIcon} onPress={props.onPress}>
        <View style={[Def.paddingIcn, Def.center]}>
          <View
            style={[Sty.coatIcon, {backgroundColor: props.backgroundColor}]}>
            {props.children}
          </View>
          <Text style={[Sty.textIconhome, {fontSize: 13}]}>{props.txt}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BtnCoat;
