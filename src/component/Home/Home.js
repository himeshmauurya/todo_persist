import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './HomeStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import IMAGES from '../../ASSETS/Index';
import { useNavigation } from '@react-navigation/native';
import { NAV_PAGE } from '../../CONSTANT/String';
import { useSelector,useDispatch } from 'react-redux';
import { adddata } from '../redux/Myslice';

const Home = () => {
  const [inputdata, setinputdata] = useState('');
    const navigation=useNavigation()

    const dataArray=useSelector((state)=>{
      return state.alldata
    })
   
    const dispatch=useDispatch()
  const additem = () => {
    dispatch(adddata(inputdata))
    setinputdata("")
  };
  
  const inputtobox = text => {
    setinputdata(text)
  };
  function goDetailpage(){
    navigation.navigate(NAV_PAGE.DETAILPAGE)
      }
  return (
    <>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Image source={IMAGES.TODO_ICON} style={styles.profileImage} />

        <View style={styles.outerbox}>
          <TextInput
            style={styles.input}
            placeholder="ADD YOUR ITEM"
            spellCheck={false}
            autoCapitalize="none"
             value={inputdata}
            onChangeText={inputtobox}
          />
          <TouchableOpacity
            onPress={additem}
            activeOpacity={0.7}
            style={styles.signupouter}>
            <Text style={styles.signuptext}>ADD ITEM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goDetailpage}
            activeOpacity={0.7}
            style={styles.signupouter}>
            <Text style={styles.signuptext}>GET ALL DETAILS</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Home;
