import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PlaceList from '../../components/PlaceList/PlaceList';
import { connect } from 'react-redux';

class FindPlaceScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PlaceList places={this.props.places} />
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