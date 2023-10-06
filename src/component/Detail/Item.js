import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './ItemStyle';
import IMAGES from '../../ASSETS/Index';
import {useSelector, useDispatch} from 'react-redux';
import {adddata, removedata,updatedata} from '../redux/Myslice';

const Item = props => {
  // console.log("props",props)
  const [mytext, setmytext] = useState(props.value.textItem);
  const [edi, setedi] = useState(false);
 
  const dispatch = useDispatch();

  function deleteItem() {
    dispatch(removedata(props.value.id));
  }
  function updateItemtolist() {
    setedi(true);
  
  }
  function saveitem(){
    setedi(false);
   
    dispatch(updatedata({val:mytext,id:props.value.id}))
  }
  function inputtobox(text) {
    setmytext(text)
  }
  
  return (
    <View style={styles.detailbox1}>
      <View style={styles.box1}>
        <TextInput
          style={styles.textit3}
         
          spellCheck={false}
          autoCapitalize="none"
          value={mytext}
       
           onChangeText={inputtobox}
          editable={edi}
        />
       
      </View>
      <View style={styles.box2}>
        <TouchableOpacity onPress={deleteItem}>
          <Image source={IMAGES.DELETE} style={styles.micro} />
        </TouchableOpacity>

        <View>
          {edi ? (
            <TouchableOpacity onPress={saveitem}>
              
              <Image source={IMAGES.CHECK} style={styles.micro} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={updateItemtolist}>
              <Image source={IMAGES.UPDATE} style={styles.micro} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Item;
