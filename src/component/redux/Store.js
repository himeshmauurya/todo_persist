
import { configureStore } from '@reduxjs/toolkit';
import crudReducer from './Myslice'; 
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from '@reduxjs/toolkit';

 const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
   
  };
  const reducer=combineReducers({
     alldata: crudReducer,
  })
  const persistedReducer = persistReducer(persistConfig, reducer);
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
  });
   export const persistor = persistStore(store);


