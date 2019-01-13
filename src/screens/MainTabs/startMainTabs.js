import { Navigation } from 'react-native-navigation';
import { Icon } from 'react-native-vector-icons/Ionicons';



export const startTabs = () => {
    Promise.all([
        Icon.getImageSource("map", 30),
        Icon.getImageSource("share", 30)
    ])
        .then(
            sources => {
                Navigation.setRoot({
                    root: {
                        bottomTabs: {
                            children: [
                                {
                                    component: {
                                        name: 'travellogapp.SharedPlaceScreen',
                                        options: {
                                            bottomTab: {
                                                text: 'Shared Place',
                                                icon: sources[0]
                                            }
                                        }
                                    }
                                },
                                {
                                    component: {
                                        name: 'travellogapp.FindPlaceScreen',
                                        options: {
                                            bottomTab: {
                                                text: 'Find Place',
                                                icon: sources[1]
                                            }
                                        }
                                    }
                                }
                            ],
                            options: {}
                        }
                    }
                });
            }
        );
}

// export const goHome = () => Navigation.setRoot({
//     root: {
//         stack: {
//             id: 'App',
//             children: [
//                 {
//                     component: {
//                         name: 'travellogapp.SharedPlaceScreen',
//                         options: {
//                             bottomTab: {
//                                 text: 'Shared Place',
//                             }
//                         }
//                     },
//                 }
//             ],
//         }
//     }
// });


// export default startTabs;


