import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text, StatusBar } from 'react-native'

import Header from '../../components/global/Header'
import { BaseStyle } from '../../constant'

class FavouritesScreen extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle='dark-content'
        backgroundColor='#FFFFFF'
      />
    )
  }

  renderHeader = () => {
    return (
      <Header onPressRightButton={() => this.props.navigation.navigate('TrolleyScreen')}/>
    )
  }

  renderContent = () => {
    return (
      <View style={styles['content']}>
        <Text style={[
          BaseStyle['text'],
          BaseStyle['text--3xl'],
          BaseStyle['text--black'],
          BaseStyle['text--bold']
        ]}>Lets find your favourite Burger!</Text>
        <Text style={[
          BaseStyle['text'],
          BaseStyle['text--large'],
          BaseStyle['text--black'],
          { marginTop: 10 }
        ]}>Order and choose as your favourite!</Text>
      </View>
    )
  }
}

export default FavouritesScreen

FavouritesScreen.propTypes = {
  onProceed: PropTypes.func,
  navigation: PropTypes.object
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
