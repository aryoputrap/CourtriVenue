/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Front} from '../../../asset';
import {Gap} from '../../../components';
import {Styles, Default, buttonActive, buttonInActive} from '../../styles';

const {width, height} = Dimensions.get('window');

const Started = ({navigation}) => {
  const [btncol, setBcl] = useState(true);

  // const onPress = () => {
  //   setBcl(true);
  //   switch (method) {
  //     case 'Bank Transfer':
  //       navigation.navigate('PaymentInfo',{
  //         id: id,
  //       });
  //       break;
  //     case 'Pre Purchase':
  //       navigation.navigate('PaymentPrepur',{
  //         id: id,
  //       });
  //       break;
  //     case 'Online Banking & Cards':
  //       navigation.navigate('PaymentGateway');
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <View style={Styles.container}>
      {/* <Gap height={height * 0.1}/> */}
      <View style={Default.padding20}>
        <Text style={{fontWeight: 'bold', fontSize: 22}}>
          Courtri with a convenient
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 22}}>
          digital transaction innovation
        </Text>
      </View>
      <View style={Default.center}>
        {/* <Front width={350}/> */}
        <Image
          source={Front}
          resizeMode={'contain'}
          style={{width, height: height * 0.65}}
        />
      </View>
      <View
        style={[Default.center, {width: width * 0.85, alignSelf: 'center'}]}>
        <TouchableOpacity
          style={[
            Styles.btnAct,
            {backgroundColor: btncol === true ? buttonActive : buttonInActive},
          ]}
          onPress={() => navigation.navigate('SignIn')}>
          <Text
            style={[
              Styles.textWhite,
              {fontWeight: 'bold', fontSize: 18, textAlign: 'center'},
            ]}>
            Masuk
          </Text>
        </TouchableOpacity>
        <Gap height={15} />
        <TouchableOpacity
          style={[
            Styles.btnAct,
            {backgroundColor: btncol === true ? buttonInActive : buttonActive},
          ]}
          onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={[
              Styles.textWhite,
              {fontWeight: 'bold', fontSize: 18, textAlign: 'center'},
            ]}>
            Daftar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Started;
