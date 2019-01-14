import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import { Navigation } from 'react-native-navigation';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
// import imagePlaceholder from "../../assets/beauty-place.jpg"

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
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>
              Share the text
            </HeadingText>
          </MainText>
          <View style={styles.placeholder}>
            {/* <Image source={imagePlaceholder} style={styles.preview} /> */}
          </View>
          <View>
            <View style={styles.button}>
              <Button title="Pick Image" />
            </View>
            <View style={styles.placeholder}>
              <Text>
                Map
              </Text>
            </View>
            <Button title="Locate Me" />
            <DefaultInput placeholder="Place Name" />
            <View style={styles.button}>
              <Button title="Share the Place" />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  preview: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  }
}



export default connect(null, mapDispatchToProps)(SharedPlaceScreen);