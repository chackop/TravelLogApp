import { Navigation } from "react-native-navigation";
import AuthScreen from './src/screens/Auth/Auth';

Navigation.registerComponent("travellogapp.AuthScreen", () => AuthScreen);

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'travellogapp.AuthScreen',
//     title: "Login"
//   }
// });

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