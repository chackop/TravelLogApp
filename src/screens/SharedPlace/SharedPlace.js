import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';

class SharedPlaceScreen extends Component {
  placeAddedhandler = placeName => {
    this.props.onAddPlace(placeName)
  }
  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedhandler} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharedPlaceScreen);