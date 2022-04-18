/* eslint-disable no-undef */
import {number} from 'prop-types';
import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../utils';

const {width, height} = Dimensions.get('window');

export const fontBold = {
  fontWeight: 'bold',
};

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonActive = COLORS.primary;
const buttonInActive = COLORS.button.secondary.background;

const Default = StyleSheet.create({
  active: {
    backgroundColor: COLORS.active,
  },
  inactive: {
    backgroundColor: COLORS.inactive,
  },
  row: {
    flexDirection: 'row',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flex2: {
    flex: 2,
  },
  width: {
    width: width * 0.8,
  },
  width2: {
    width: width * 0.45,
  },
  center: {
    ...center,
  },
  marginBottom_: {
    marginBottom: height * 0.1,
  },
  marginRight: {
    marginRight: width * 0.12,
  },
  marginRight2: {
    marginRight: width * 0.1,
  },
  color: {
    backgroundColor: 'red',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  flexend: {
    alignSelf: 'flex-end',
  },
  end: {
    alignSelf: 'flex-end',
  },
  left: {
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
  },
  padding10: {
    padding: 10,
  },
  padding20: {
    padding: 20,
  },
  paddingIcon: {
    paddingTop: 10,
    paddingHorizontal: 10,
    // paddingLeft: 10,
    // paddingRight: 20,
  },
  paddingTitle: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  paddinghor: {
    paddingHorizontal: 10,
  },
  paddingleft: {
    paddingLeft: 20,
  },
});

const Styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  container2: {
    backgroundColor: COLORS.greyLight2,
    // backgroundColor: 'red',
    flex: 1,
    // padding: 10,
  },
  // ============================================ COMMON STYLE ========================================
  modal: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: width * 0.4,
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_flatList: {
    height: height * 0.5,
  },
  view_flatList2: {
    height: height * 0.9,
    marginBottom: 1000,
    // paddingBottom: height * 0.9,
  },
  headerHome: {
    position: 'absolute',
    // backgroundColor: '#2ECC71',
    backgroundColor: COLORS.primary,
    width,
    height: height * 0.22,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    // transform: [{scaleX: -0.66}, {skewY: '40deg'}],
    // transform: matrix(-0.66, -0.6, 0.97, -0.63, 0, 0),
  },
  // array of objects: {matrix: number[]},
  headerHome2: {
    position: 'absolute',
    marginTop: height * 0.21,
    // borderBottomColor: '#2ECC71',
    // borderBottomColor: '#F3A945',
    // borderBottomColor: 'red',
    borderBottomColor: COLORS.primary,
    width,
    height: height * 0.05,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 300,
    borderRightWidth: 300,
    borderBottomWidth: 50,
    borderTopLeftRadius: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },
  headerHome3: {
    position: 'absolute',
    marginTop: height * 0.22,
    // borderBottomColor: '#2ECC71',
    // borderBottomColor: '#F3A945',
    borderBottomColor: '#F3A945',
    // borderBottomColor: COLORS.primary,
    width,
    height: height * 0.1,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 300,
    borderRightWidth: 300,
    borderBottomWidth: 50,
    borderTopLeftRadius: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },
  headerHome4: {
    position: 'absolute',
    marginTop: height * 0.22,
    borderBottomColor: '#F3A945',
    // borderBottomColor: COLORS.greyLight,
    // borderBottomColor: COLORS.primary,
    width,
    height: height * 0.1,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 300,
    borderRightWidth: 500,
    borderBottomWidth: 50,
    borderTopLeftRadius: 50,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '180deg'}],
  },
  headerHome5: {
    position: 'absolute',
    // marginRight: 350,
    // marginTop: height * 0.07,
    // borderBottomColor: '#2ECC71',
    // borderBottomColor: '#F3A945',
    borderBottomColor: '#2ECC71',
    // borderBottomColor: COLORS.primary,
    width,
    height: height * 0.1,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 100,
    borderRightWidth: 100,
    borderBottomWidth: 100,
    // borderTopLeftRadius: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{rotate: '115deg'}],
  },
  // fontStatus{},
  btnStatus: {
    ...center,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: width * 0.47,
    // borderRadius: 7,
  },
  btnStatus2: {
    ...center,
    padding: 9,
    borderWidth: 1,
    width: width * 0.4,
    borderRadius: 7,
  },
  btnFull: {
    ...center,
    padding: 9,
    borderWidth: 1,
    width: width * 0.95,
    borderRadius: 7,
  },
  coatIcon: {
    ...center,
    borderRadius: 100,
    width: 70,
    height: 70,
    backgroundColor: COLORS.inactive,
  },
  modalBody: {
    backgroundColor: '#fff',
    width: width * 0.7,
    height: height * 0.35,
    borderRadius: 10,
    ...center,
  },
  actions: {
    marginTop: 10,
    width: 100,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    ...center,
  },
  dateView: {
    width: width * 0.8,
    borderColor: COLORS.border,
    ...center,
  },
  dateViewMe: {
    width: width * 0.6,
    borderColor: COLORS.border,
    ...center,
  },
  viewIcon: {
    ...center,
    borderColor: COLORS.inactive,
    borderRadius: 30,
    borderWidth: 1,
    width: width * 0.23,
    // padding: 10,
  },
  viewLogo: {
    width: 50,
    height: 50,
  },
  inputHome: {
    fontSize: 16,
    width: width * 0.75,
    height: height * 0.05,
    // backgroundColor: COLORS.white,
    textAlign: 'center',
  },
  inputSearch: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: width * 0.95,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    padding: 5,
    paddingHorizontal: 10,
  },
  textWhite: {
    color: COLORS.white,
  },
  scroll: {
    marginBottom: height * 0.1,
    // width: width * 0.95,
  },
  btnAct: {
    width: width * 0.9,
    paddingVertical: 15,
    borderRadius: 15,
  },
  // modal: {
  //   backgroundColor: 'rgba(52, 52, 52, 0.8)',
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  logo: {
    // width: 50,
    // height: 50,
    marginRight: 15,
  },
  headerMe: {
    // borderWidth: 1,
    borderRadius: 10,
    // padding: 20,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    height: height * 0.2,
    width: width * 0.95,
  },
  headerMe2: {
    // borderWidth: 1,
    borderRadius: 10,
    height: height * 0.08,
    width: width * 0.95,
  },
  // ============================================ HOME ========================================
  promoView: {
    ...center,
    padding: 10,
    width: width * 0.4,
    borderWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // borderRadius: 10,
  },
  promoImg: {
    width: width * 0.4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textData: {
    fontSize: 16,
  },
  scroolView_listvanue: {
    flex: 1,
    width,
    height,
  },
  accordion: {
    width,
  },
  cardview: {
    // borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  // ============================================ BOOKING ========================================
  btnBorder: {
    ...center,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    width: width * 0.29,
  },
  bookingView: {
    width,
    marginTop: 10,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 1.5,
    borderTopColor: COLORS.greyLight2,
  },
  bodyDetailbooking: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height,
  },
  bookingViewbottom: {
    ...center,
    alignSelf: 'center',
    width: width * 0.9,
    marginTop: 5,
    // padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.greyLight2,
  },
  lineBottom: {
    alignSelf: 'center',
    width: width * 0.9,
    padding: 10,
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.greyLight2,
  },
  txtBold: {
    fontWeight: 'bold',
  },
  txtTitlebo: {
    textAlign: 'center',
    width,
    fontSize: 20,
  },
  textLong: {
    textAlign: 'justify',
    width: '90%',
    alignSelf: 'center',
  },
  viewHeaderbo: {
    height: height * 0.225,
    width: width * 0.95,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10
  },
  // =================================================== ME =============================================
  cardView: {
    borderRadius: 10,
    height: height * 0.13,
    width: width * 0.95,
  },
  cardViewcamera: {
    borderRadius: 10,
    height: height * 0.28,
    width: width * 0.95,
    backgroundColor: COLORS.greyLight2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleEditVanue: {
    padding: 10,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  fieldTable: {
    padding: 10,
    textAlign: 'center',
    color: 'black',
  }
});

export {Default, Styles, buttonActive, buttonInActive};
