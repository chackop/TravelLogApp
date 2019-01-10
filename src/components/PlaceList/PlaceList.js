import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem'

const PlaceList = (props) => {


    return (
        <FlatList style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (<ListItem placeName={info.item.name} onItemsPress={() => props.onItemSelected(info.item.key)} placeImage={info.item.image} />)}
        />

    )
};

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlaceList;
