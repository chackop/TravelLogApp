import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => (
    <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.input, props.style]}
    />
);

const styles = StyleSheet.create({
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
        margin: 8,
    }
});

export default DefaultInput;
