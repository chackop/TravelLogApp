import { Navigation } from 'react-native-navigation';

const bottomTabs = {
    children: [
        {
            component: {
                name: 'travellogapp.SharedPlaceScreen',
                options: {
                    bottomTab: {
                        text: 'Shared Place'
                    }
                }
            }
        },
        {
            component: {
                name: 'travellogapp.FindPlaceScreen',
                options: {
                    bottomTab: {
                        text: 'Find Place'
                    }
                }
            }
        }
    ],
    options: {}
}

export const startTabs = () => Navigation.setRoot({
    root: {
        bottomTabs
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


