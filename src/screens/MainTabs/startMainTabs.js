import { Navigation } from 'react-native-navigation';

const startTabs = () => {

    Navigation.setRoot({
        root: {
            bottomTabs: {
                children: [
                    {
                        component: {
                            name: 'travellogapp.SharedPlaceScreen',
                            //   passProps: {
                            //     text: 'This is tab 1',
                            //     myFunction: () => 'Hello from a function!',
                            //   },
                            options: {
                                bottomTab: {
                                    text: 'Shared Place',
                                }
                            }
                        },
                    },
                    {
                        component: {
                            name: 'travellogapp.FindPlaceScreen',
                            //   passProps: {
                            //     text: 'This is tab 2',
                            //   },
                            options: {
                                bottomTab: {
                                    text: 'Find Place',
                                }
                            }
                        },
                    },
                ],
            },
        }
    });

};

export default startTabs;


