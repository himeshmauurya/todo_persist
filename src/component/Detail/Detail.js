import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './DetailStyle';
import IMAGES from '../../ASSETS/Index';
import Item from './Item';
import {useNavigation} from '@react-navigation/native';
import {NAV_PAGE} from '../../CONSTANT/String';
import {useSelector, useDispatch} from 'react-redux';
import {adddata} from '../redux/Myslice';

const Detail = () => {
  const dataArray = useSelector(state => {
    return state.alldata;
  });
  const navigation = useNavigation();
  const [search, setsearch] = useState('');
  const [mydata1, setmydata1] = useState(dataArray.data1);
  useEffect(() => {
    setmydata1(dataArray.data1);
  }, [dataArray]);
  function goBackPage() {
    navigation.navigate(NAV_PAGE.HOME);
  }

  function handleSearch(text) {
    const p = dataArray.data1.filter(val => {
      return val.textItem.includes(text);
    });

    setmydata1(p);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.navback}>
          <TouchableOpacity onPress={goBackPage}>
            <Image source={IMAGES.BACK} style={styles.backimg} />
          </TouchableOpacity>
        </View>

        <View style={styles.navsearch}>
          <View style={styles.searchbox1}>
            <TouchableOpacity
            //onPress={}
            >
              <Image source={IMAGES.SEARCH} style={styles.searchimg} />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.textinput}
            placeholder="Enter Search Data"
            autoCapitalize="none"
            value={search}
            spellCheck={false}
            onChangeText={text => {
              setsearch(text);
              handleSearch(text);
            }}
          />

          <View style={styles.searchbox3}>
            <Image source={IMAGES.MICROPHONE} style={styles.micro} />
          </View>
        </View>
      </View>
      {/* part2 */}
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
        <View style={styles.hei}>
          {mydata1.map(val => {
            return <Item key={val.id} value={val} />;
          })}
        </View>
      </ScrollView>
    </>
  );
};

export default Detail;
