import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> SideMenu </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: 'white',
        flex: 1
    }
})

export default SideMenu;