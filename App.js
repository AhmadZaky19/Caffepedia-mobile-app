import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/store';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import HomeStack from './src/components/HomeStack';
const {persistor, store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HomeStack />
      </PersistGate>
    </Provider>
  );
};

export default App;