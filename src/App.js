// import React, {useEffect} from 'react';
import React from 'react';
// import {BackHandler, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Loading} from './components';
import {Provider, useSelector} from 'react-redux';
// ---- Store -----
import {PersistGate} from 'redux-persist/integration/react';
// import store from './redux/store';
//---------------- Router -----------------
import configureStore from './redux/store';
import Router from './router';

const {store, persistor} = configureStore();

// const MainApp = () => {
// const stateGlobal = useSelector(state => state);
// useEffect(() => {
//   const backAction = () => {
//     Alert.alert(
//       'Hold on!',
//       'Are you sure you want to quit the application??',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => null,
//           style: 'cancel',
//         },
//         {text: 'YES', onPress: () => BackHandler.exitApp()},
//       ],
//     );
//     return true;
//   };

//   const backHandler = BackHandler.addEventListener(
//     'hardwareBackPress',
//     backAction,
//   );

//   return () => backHandler.remove();
// }, []);

//   return (
//     <>
//       <NavigationContainer>
//         <SafeAreaProvider>
//           <Provider store={store}>
//             <PersistGate loading={null} persistor={persistor}>
//               <Router />
//             </PersistGate>
//           </Provider>
//         </SafeAreaProvider>
//       </NavigationContainer>
//       {stateGlobal.loading && <Loading />}
//     </>
//   );
// };

// export default MainApp;

const MainApp = () => {
  const stateGlobal = useSelector(state => state);
  // YellowBox.ignoreWarnings(['Setting a timer']);
  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <PersistGate loading={null} persistor={persistor}>
            <Router />
          </PersistGate>
        </SafeAreaProvider>
      </NavigationContainer>
      {stateGlobal.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
