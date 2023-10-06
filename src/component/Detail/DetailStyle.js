import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
 export const styles = StyleSheet.create({
  container:{
    backgroundColor: 'black', padding: 10
  },
  scrollcontainer:{
    alignItems: 'center',
    backgroundColor: '#181046',
  },
    navsearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: hp('6%'),
        width: wp('96%'),
        backgroundColor: 'white',
        borderRadius: 6,
      },
      navback: {
        height: hp('4%'),
        width: '100%',
      },
      backimg: {
        height: hp('4%'),
        width: wp('8%'),
        objectFit: 'contain',
      },
      searchbox1: {
        width: wp('9%'),
        padding: wp('1%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 6,
      },
      searchimg: {
        height: hp('2.8%'),
        width: wp('5%'),
        objectFit: 'contain',
      },
      textinput: {
        flex: 1,
        backgroundColor: 'white',
      },
      searchbox3: {
        width: wp('7%'),
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 6,
      },
      micro: {
        height: hp('2.8%'),
        width: wp('5%'),
      },
      hei:{
        height: 900
      }


      
 })