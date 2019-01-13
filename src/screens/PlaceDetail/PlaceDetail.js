import React from 'react';
import { Text, View, Modal, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const PlaceDetailScreen = props => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={props.selectedPlace.image} style={styles.imageContain} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
            <View>
                <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                <TouchableOpacity onPress={props.onItemDeleted}>
                    <View style={styles.delicon}>
                        <Icon name="ios-trash" size={30} color="red" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 22,
    },
    imageContain: {
        height: 200,
        width: '100%'
    },
    placeName: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28,
    },
    delicon: {
        alignItems: 'center',
    }
});

export default PlaceDetailScreen;
