import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  detailbox1: {
    height: hp('6%'),
    width: wp('90%'),
    borderWidth: 1,
    backgroundColor: '#251966',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 7,
    borderColor: 'white',
    margin:5
  },
  micro: {
    height: hp('2.8%'),
    width: wp('5%'),
    objectFit:'contain'
  },
  box1: {
    height: hp('5%'),
    width: wp('40%'),
    
  },
  textit3:{
    color: 'white', fontSize: 20
  },
  box2: {
    height: hp('5%'),
    width: wp('30%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mytext:{
    color:'white',fontSize:20
  }
});
