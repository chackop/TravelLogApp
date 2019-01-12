import { Navigation } from 'react-native-navigation';

export const startTabs = () =>

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

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
        id: 'App',
        children: [
                {
                    component: {
                        name: 'travellogapp.SharedPlaceScreen',
                        options: {
                            bottomTab: {
                                text: 'Shared Place',
                            }
                        }
                    },
                }
            ],
        }
    }
});


// export default startTabs;


