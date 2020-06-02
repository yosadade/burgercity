import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Header from '../../components/global/Header'
import { BaseStyle } from '../../constant'

const TrolleyScreen = ({ navigation }) => {
  return (
    <View style={styles['page']}>
      <StatusBar
        translucent
        barStyle='dark-content'
        backgroundColor='#FFFFFF'
      />
      <Header withBack onPressLeftButton={() => navigation.goBack()}/>
      <View style={styles['content']}>
        <Text style={[
          BaseStyle['text'],
          BaseStyle['text--3xl'],
          BaseStyle['text--black'],
          BaseStyle['text--bold']
        ]}>Lets Order Burger</Text>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black'],
            { marginTop: 10 }
          ]}>Made your happy day with our burger.</Text>

      </View>
    </View>
  )
}

TrolleyScreen.propTypes = {
  navigation: PropTypes.object
}

export default TrolleyScreen

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
