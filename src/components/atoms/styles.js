import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../utils';

const {width, height} = Dimensions.get('window');

export const fontBold = {
  fontWeight: 'bold',
};

export const center = {
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonActive = COLORS.button.primary.background;
const buttonInActive = COLORS.button.secondary.background;

const Def = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  spaceBetween: {
    justifyContent: 'space-between',
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
  paddingIcn: {
    // paddingLeft: 20,
    // paddingRight: 20,
    paddingTop: 10,
  },
});

const Sty = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  // ============================================ COMMON STYLE ========================================
  headerHome: {
    backgroundColor: COLORS.primary,
    width,
    height: height * 0.25,
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  coatIcon: {
    ...center,
    borderRadius: 100,
    width: 70,
    height: 70,
    // borderColor: COLORS.primary,
    // borderRadius: 30,
    // borderWidth: 1,
    // backgroundColor: COLORS.inactive,
  },
  textIconhome: {
    marginBottom: 10,
    paddingTop: 125,
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
  },
  viewIcon: {
    // ...center,
    // borderColor: COLORS.inactive,
    // borderRadius: 30,
    // borderWidth: 1,
    width: width * 0.24,
    height: height * 0.16,
    // padding: 10,
  },
  viewLogo: {
    width: 50,
    height: 50,
  },
});

export {Def, Sty, buttonActive, buttonInActive};
