import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { startTabs, goHome } from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    //   }

    loginHandler = () => {
        // goHome();
        startTabs();
    }

    render() {
        return (
            <View>
                <Text> In Auth Screen </Text>
                <Button title="login" onPress={this.loginHandler} />
            </View>
        );
    }
}

export default AuthScreen;
