import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

import {searchProductCreator} from '../../redux/actions/action';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        <View style={{position: 'relative', flex: 1, marginLeft: 10}}>
          <TextInput
            placeholder="I want ..."
            style={{
              borderWidth: 1,
              borderColor: '#e8e8e8',
              borderRadius: 25,
              fontSize: 16,
              paddingLeft: 50,
              paddingRight: 25,
            }}
            onChangeText={(Text) =>
              dispatch(searchProductCreator(Text, 'name_product'))
            }
          />
          <Image
            source={require('../../assets/icons/search.png')}
            style={{
              width: 25,
              height: 25,
              position: 'absolute',
              left: 15,
              top: 12,
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Search;
