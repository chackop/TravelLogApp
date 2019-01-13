import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MainText = props => (
    <Text style={styles.mainText}>{props.children}</Text>
);

const styles = StyleSheet.create({
    mainText: {
        color: "#bbb"
    }
});

export default MainText;
