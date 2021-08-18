import {Platform, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, SCREEN} from '../constants';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    height: '100%',
  },
  subContainer: {
    flex: 1,
    width: '100%',
    padding: RFValue(10),
  },
  header: {
    width: SCREEN.WIDTH,
    height: RFValue(40),
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
  },
  headerText: {
    color: COLORS.BLACK,
    fontWeight: '500',
    fontSize: RFValue(18),
    textAlign: 'center',
  },
  headerLeftIcon: {
    width: RFValue(17),
    height: RFValue(17),
    resizeMode: 'contain',
  },
  headerRightIcon: {
    width: RFValue(20),
    height: RFValue(20),
    resizeMode: 'contain',
  },
  Icon: {
    width: RFValue(25),
    height: RFValue(25),
    resizeMode: 'contain',
    margin: RFValue(10),
  },
  headerLeftIconView: {
    position: 'absolute',
    left: 0,
    padding: RFValue(12),
  },
  headerRightIconView: {
    position: 'absolute',
    right: 0,
    padding: RFValue(12),
  },
  drawer: {
    width: '99.8%',
    height: '100%',
    backgroundColor: COLORS.WHITE,
    zIndex: 0,
  },
  drawerLabelView: {
    margin: RFValue(5),
  },
  drawerLabelText: {fontSize: RFValue(15), padding: RFValue(10)},
  drawerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY,
  },
  button: {
    width: '100%',
    height: RFValue(30),
    backgroundColor: COLORS.PRIMARY,
    padding: RFValue(5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(5),
    marginVertical: RFValue(10),
  },
  buttonText: {
    color: COLORS.BLACK,
    fontSize: RFValue(12),
    fontWeight: '500',
  },
  TextInput: {
    fontSize: RFValue(15),
    paddingLeft: RFValue(10),
    width: '100%',
    height: '100%',
    borderWidth: RFValue(1),
    borderRadius: RFValue(5),
    backgroundColor: COLORS.WHITE,
  },
  errorTextInput: {
    paddingLeft: RFValue(10),
    width: '100%',
    height: '100%',
    borderWidth: RFValue(2),
    borderRadius: RFValue(5),
    backgroundColor: COLORS.WHITE,
    color: COLORS.RED,
    borderColor: COLORS.RED,
  },
  TextInputHeader: {
    fontSize: RFValue(15),
    fontWeight: '500',
  },
  TextInputView: {
    width: '100%',
    height: RFValue(40),
    marginVertical: RFValue(10),
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  text: {fontSize: RFValue(15), padding: RFValue(5), color: COLORS.BLACK},
  date: {
    fontSize: RFValue(12),
    padding: RFValue(3),
    textAlign: 'right',
    color: COLORS.BLACK,
  },
  horizontalCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(10),
    marginBottom: RFValue(10),
  },

  itemSeparatorComponent: {
    height: RFValue(1),
    backgroundColor: 'black',
  },
  centre: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
