import { Navigation } from 'react-native-navigation';
// import { Icon } from 'react-native-vector-icons/Ionicons';
import SideMenu from '../SideMenu/SideMenu';


export const startTabs = () =>
    Navigation.setRoot({
        root: {
            bottomTabs: {
                id: "bottomTabsID",
                children: [
                    {
                        component: {
                            id: 'travellogapp.SharedPlaceScreen',
                            name: 'travellogapp.SharedPlaceScreen',
                            options: {
                                topBar: {
                                    leftButtons: [
                                        {
                                            id: 'SideMenuToggle',
                                            // icon: require('../../assets/home.png'),
                                            title: "Menu"
                                        }
                                    ]
                                },
                                bottomTab: {
                                    text: 'Shared Place',
                                }
                            }
                        }
                    },
                    {
                        component: {
                            id: 'travellogapp.FindPlaceScreen',
                            name: 'travellogapp.FindPlaceScreen',
                            options: {
                                topBar: {
                                    leftButtons: [
                                        {
                                            id: 'SideMenuToggle',
                                            // icon: require('../../assets/map.png'),
                                            title: "Menu"
                                        }
                                    ]
                                },
                                bottomTab: {
                                    text: 'Find Place',
                                }
                            }
                        }
                    }
                ],
                options: {
                    sideMenu: {
                        id: "sideMenuID",
                        left: {
                            component: {
                                id: "travellogapp.SideMenu",
                                name: "travellogapp.SideMenu",
                            }
                        }
                    }
                }
            }
        }
    });


