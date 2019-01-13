import React, { Component } from 'react';
import { Text, View, Modal, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions/index'

class PlaceDetailScreen extends Component {
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        // Navigation.pop(this.props.componentId);
        Navigation.pop("bottomTabsID");
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={this.props.selectedPlace.image} style={styles.imageContain} />
                    <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
                    <TouchableOpacity onPress={this.placeDeletedHandler}>
                        <View style={styles.delicon}>
                            <Icon name="ios-trash" size={30} color="red" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
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

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);
