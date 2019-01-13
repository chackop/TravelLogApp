import { Navigation } from 'react-native-navigation';
// import { Icon } from 'react-native-vector-icons/Ionicons';

const bottomTabs = {
    children: [
        {
            component: {
                name: 'travellogapp.SharedPlaceScreen',
                options: {
                    bottomTab: {
                        text: 'Shared Place',
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
                    }
                }
            }
        }
    ]
    // options: {
    //     topBar: {
    //         title: {
    //             text: 'Home'
    //         }
    //     }
    // }
}



export const startTabs = () =>
    Navigation.setRoot({
        root: {
            bottomTabs
        }
    });


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


