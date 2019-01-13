import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import { startTabs } from "../MainTabs/startMainTabs";
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

class AuthScreen extends Component {

    loginHandler = () => {
        startTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <MainText>
                    <HeadingText>
                        Please Log in
                    </HeadingText>
                </MainText>
                <Button title="Switch to Login" />
                <View style={styles.inputContain}>
                    <DefaultInput placeholder="Your Email Address" style={styles.input} />
                    <DefaultInput placeholder="Password" style={styles.input} />
                    <DefaultInput placeholder="Submit" style={styles.input} />
                </View>
                <Button title="Submit" onPress={this.loginHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: "red",
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContain: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    textHeading: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});


export default AuthScreen;
