import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { startTabs, goHome } from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
    
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
