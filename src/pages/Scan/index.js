import React, { PureComponent } from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Dimensions,Alert, Image} from 'react-native';
import {RNCamera } from 'react-native-camera';
// import {Button, Icon} from 'native-base';
import * as Animatable from "react-native-animatable";
// import style from '../../../../Assets/styles/styles';
// import {FlashOn, FlashOff} from '../../../../Assets';
// import AsyncStorage from '@react-native-community/async-storage';
// import {Newbaselink, Newbaselink_dev} from '../../../Components';

const { height, width } = Dimensions.get('window');
const maskRowHeight = Math.round((height - 300) / 20);
const maskColWidth = width * 0.1;
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default class Scan extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      Search: false,
      isLoading: true,
      dataSource: [],
      text: '',
      flash: false,
    };
    this.arrayholder = [];
  }

  makeSlideOutTranslation(translationType) {
    return {
      from: {
            [translationType]: width * 0.72
          },
      to: {
            [translationType]: 10
        }
    };
  }

  onBarCodeRead = (e) => {
    this.props.navigation.navigate('Checkvehicle', {
      datalv: e.data,
      page: 'Check Light Vehicle',
    });
    this.setState({flash: false})
  }

  goBackCallAPI = async () => {
    this.props.navigation.navigate('DashPrestartLV');
    // this.props.navigation.navigate('Checkvehicle', {
    //   datalv: 'LV-37',
    //   page: 'Check Light Vehicle',
    // });
  };

  onLight = () => {
    this.setState({flash: !this.state.flash})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('ListLV',{
              page: 'List Vehicle'
            })}
            style={{
              height: 35,
              borderRadius: 10,
              marginTop: 10,
              marginHorizontal: 10,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#16a085'}}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#fff',
              }}>Check</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity 
              onPress={() => this.onLight()}
              style={{
                width: 35,
                height: 35,
                borderRadius: 10,
                marginTop: 10,
                marginHorizontal: 5,
                paddingHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.state.flash? '#E7E7E7' : '#16a085'}}
            >
              <Image source={this.state.flash? FlashOn : FlashOff} style={{width: 25, height: 25}}/>
            </TouchableOpacity> */}
          </View>
          </View>
        </View>
        <RNCamera
          style={styles.cameraView}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={this.onBarCodeRead}
          captureAudio={false}
          flashMode={this.state.flash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({status}) => {
            if (status !== 'READY') return <PendingView />;
            return (
            <View style={styles.container}>
                <View style={styles.maskOutter}>
                    <View style={[{ flex: maskRowHeight  }, styles.maskRow, styles.maskFrame]} />
                    <View style={[{ flex: 30 }, styles.maskCenter]}>
                    <View style={[{ width: maskColWidth}, styles.maskFrame]} />
                    <Animatable.View
                        style={styles.scanBar}
                        direction="alternate-reverse"
                        iterationCount="infinite"
                        duration={1500}
                        easing="linear"
                        animation={this.makeSlideOutTranslation("translateY",width * 0.054)}
                      />
                      <View style={[{ width: maskColWidth}, styles.maskFrame]} />
                        <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                        <View style={styles.maskInner}/>
                        <View style={[{ width: maskColWidth }, styles.maskFrame]} /> 
                    </View>
                    <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
                </View>
            </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    this.props.navigation.navigate('MainApp',{
        data: data.base64,
    })
  };
}

const scanBarWidth = width * 0.8;
const scanBarHeight = width * 0.0025;
const scanBarColor = "#22ff00";

const styles = StyleSheet.create({
  maskOutter: {
    flex: 1,
    // width: '100%',
    flexDirection: 'column',
    backgroundColor: 'rgba(1,1,1,0.6)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  scanBar: {
    width: scanBarWidth,
    height: scanBarHeight,
    backgroundColor: scanBarColor
  },
  maskInner: {
    width: scanBarWidth,
    height: 303,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    marginLeft: 40,
    backgroundColor: 'transparent',
    borderColor: 'white',
    position: 'absolute',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    // flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});