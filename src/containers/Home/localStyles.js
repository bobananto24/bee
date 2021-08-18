import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const localStyles = StyleSheet.create({
  logout: {position: 'absolute', bottom: RFValue(5), width: '100%'},
  textbar: {
    height: RFValue(50),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: RFValue(5),
  },
  shadowWithoutElevation: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
