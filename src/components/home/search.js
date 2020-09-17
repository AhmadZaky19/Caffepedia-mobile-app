import React, {useState} from 'react';
import {View, Image, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {searchProductCreator} from '../../redux/actions/action';

const Search = () => {
  const dispatch = useDispatch();
  const [product, setproduct] = useState(null);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          backgroundColor: '#90ee90',
        }}>
        <View style={{position: 'relative', flex: 1, marginLeft: 10}}>
          <TextInput
            placeholder="I want ..."
            style={{
              borderWidth: 1,
              borderColor: '#003333',
              borderRadius: 25,
              fontSize: 16,
              paddingLeft: 50,
              paddingRight: 25,
            }}
            onChangeText={(Text) => setproduct(Text)}
            onSubmitEditing={() => {
              dispatch(searchProductCreator(product, 'name_product'));
              setproduct(null);
            }}
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
