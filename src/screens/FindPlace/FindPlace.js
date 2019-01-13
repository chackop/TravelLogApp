import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PlaceList from '../../components/PlaceList/PlaceList';
import { connect } from 'react-redux';
import { Navigation } from "react-native-navigation";
import { selectPlace } from '../../store/actions/places';

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });

    Navigation.push(this.props.componentId, {
      component: {
        name: "travellogapp.PlaceDetailScreen",
        passProps: {
          selectedPlace: selPlace
        },
        options: {
          topBar: {
            title: {
              text: selPlace.name
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps, null)(FindPlaceScreen);