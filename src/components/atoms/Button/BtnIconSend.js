import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
// import {IconSendDark, IconSendLight} from '../../../assets';
import {COLORS} from '../../../utils';

const BtnIconSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        {/* <IconSendDark /> */}
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      {/* <IconSendLight /> */}
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? COLORS.disable : COLORS.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
