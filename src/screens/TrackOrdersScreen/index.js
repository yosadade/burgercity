import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar, StyleSheet } from 'react-native'
import Header from '../../components/global/Header'

class TrackOrdersScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderHeader()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        animated
        translucent
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
    )
  }

  renderHeader = () => {
    return (
      <Header
        onPressRightButton={() => this.props.navigation.navigate('TrolleyScreen')}
      />
    )
  }
}

TrackOrdersScreen.propTypes = {
  navigation: PropTypes.object
}

export default TrackOrdersScreen

const styles = StyleSheet.create({
  flex: 1
})
