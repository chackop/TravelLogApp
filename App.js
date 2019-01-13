import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import AuthScreen from './src/screens/Auth/Auth';
import SharedPlaceScreen from './src/screens/SharedPlace/SharedPlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';


const store = configureStore()

Navigation.registerComponentWithRedux("travellogapp.AuthScreen", () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux("travellogapp.SharedPlaceScreen", () => SharedPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux("travellogapp.FindPlaceScreen", () => FindPlaceScreen, Provider, store);
Navigation.registerComponent("travellogapp.PlaceDetailScreen", () => PlaceDetailScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'travellogapp.AuthScreen'
          }
        }]
        // options: {
        //   topBar: {
        //     title: {
        //       text: 'Login'
        //     }
        //   }
        // }
      }
    }
  });
});