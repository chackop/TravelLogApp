import React from 'react';
import { Text, View, Modal, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image} style={styles.imageContain} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <TouchableOpacity onPress={props.onItemDeleted}>
                        <View style={styles.delicon}>
                            <Icon name="ios-trash" size={30} color="red" />
                        </View>
                    </TouchableOpacity>
                    {/* <Button title="Close" onPress={props.onModalClosed} /> */}
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
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

export default placeDetail;
