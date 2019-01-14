import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import { startTabs } from "../MainTabs/startMainTabs";
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
// import backgroundImage from '../../assets/background.png'
import ButtonWithBG from '../../components/UI/ButtonWithBG/ButtonWithBG';

class AuthScreen extends Component {

    loginHandler = () => {
        startTabs();
    }

    render() {
        return (
            // <ImageBackground source={backgroundImage} style={styles.imgBack}>
            <View style={styles.container}>
                <MainText>
                    <HeadingText>
                        Please Log in
                    </HeadingText>
                </MainText>
                <ButtonWithBG color="#29aaf4" onPress={() => { }}>
                    Switch to Login
                </ButtonWithBG>
                <View style={styles.inputContain}>
                    <DefaultInput placeholder="Your Email Address" style={styles.input} />
                    <DefaultInput placeholder="Password" style={styles.input} />
                    <DefaultInput placeholder="Submit" style={styles.input} />
                </View>
                <ButtonWithBG color="#29aaf4" onPress={this.loginHandler}>
                    Submit
                </ButtonWithBG>
            </View>
            // </ImageBackground>
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
    imgBack: {
        width: "100%",
        flex: 1
    },
    button: {
        backgroundColor: "transparent"
    }
});


export default AuthScreen;
