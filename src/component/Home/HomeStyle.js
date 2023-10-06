import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
 export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#181046',
        width: wp('100%'),
        height: hp('100%'),
      },
      outerbox: {
        backgroundColor: 'white',
        alignItems: 'center',
        width: wp('80%'),
        height: hp('30%'),
        borderRadius: 15,
        justifyContent:'center'
      },
      profileImage: {
        width: wp('60%'),
        height: hp('10%'),
        marginBottom: hp('8%'),
        objectFit: 'contain',
      },
    input: {
        height: hp('6%'),
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        paddingLeft: 10,
        color: 'black',
        backgroundColor: 'white',
        marginBottom:9
      },
      signupouter: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        marginBottom:9
      },
      signuptext: {
        color: 'white',
        textAlign: 'center',
      },
 })