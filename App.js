import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import AuthScreen from './src/screens/Auth/Auth';
import SharedPlaceScreen from './src/screens/SharedPlace/SharedPlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideMenu from './src/screens/SideMenu/SideMenu';


const store = configureStore()

Navigation.registerComponentWithRedux("travellogapp.AuthScreen", () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux("travellogapp.SharedPlaceScreen", () => SharedPlaceScreen, Provider, store);
Navigation.registerComponentWithRedux("travellogapp.FindPlaceScreen", () => FindPlaceScreen, Provider, store);
// Navigation.registerComponent("travellogapp.PlaceDetailScreen", () => PlaceDetailScreen);
Navigation.registerComponentWithRedux("travellogapp.PlaceDetailScreen", () => PlaceDetailScreen, Provider, store);
Navigation.registerComponentWithRedux("travellogapp.SideMenu", () => SideMenu, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: "stackID",
        children: [{
          component: {
            id: "travellogapp.PlaceDetailScreen",
            name: "travellogapp.PlaceDetailScreen",
          },
          component: {
            id: 'travellogapp.AuthScreen',
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