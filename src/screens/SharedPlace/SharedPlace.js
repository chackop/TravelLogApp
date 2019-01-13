import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';

class SharedPlaceScreen extends Component {
  static options(passProps) {
    return {
      topBar: {
        leftButtons: {
          id: 'SideMenuToggle',
          // icon: require('../../assets/menu.png')
        }
      }
    };
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ SideMenuToggle }) {

    if (SideMenuToggle) {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
      
        }
      });
    }

  }

  placeAddedhandler = placeName => {
    this.props.onAddPlace(placeName)
  }
  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedhandler} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}



export default connect(null, mapDispatchToProps)(SharedPlaceScreen);