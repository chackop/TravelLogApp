import { Navigation } from "react-native-navigation";
import AuthScreen from './src/screens/Auth/Auth';
import SharedPlaceScreen from './src/screens/SharedPlace/SharedPlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

Navigation.registerComponent("travellogapp.AuthScreen", () => AuthScreen);
Navigation.registerComponent("travellogapp.SharedPlaceScreen", () => SharedPlaceScreen);
Navigation.registerComponent("travellogapp.FindPlaceScreen", () => FindPlaceScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      // component: {
      //   name: 'travellogapp.AuthScreen',
      //   title: 'Login'
      // }
      stack: {
        children: [{
          component: {
            name: 'travellogapp.AuthScreen'
          }
        }]
      }
    }
  });
});