import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Image, FlatList } from 'react-native'
import { BaseStyle } from '../../../../constant'
import Ionicons from 'react-native-vector-icons/Ionicons'

import fullBurger from '../../../../assets/images/full-burger.png'
import { IconButton } from '../../../global/CustomButton'

class SelectedDishContent extends Component {
  constructor () {
    super()
    this.state = {
      menus: [
        {
          name: 'Chicken Big Burger',
          category: 'Ala Carte'
        },
        {
          name: 'Chicken Spicy Burger',
          category: 'Ala Carte'
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderLead()}
        {this.renderMenu()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['lead']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
              Chicken Burgers
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--l'],
            BaseStyle['text-black'],
            BaseStyle['text-semibold'],
            { marginTop: 5 }
          ]}
        >
              Please Select your burger type
        </Text>

        <Image
          source={fullBurger}
          style={styles['lead__hero']}
        />
      </View>
    )
  }

  renderMenu = () => {
    const { menus } = this.state
    return (
      <FlatList
        data={menus}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderMenuItem}
        contentContainerStyle={{ marginTop: 15 }}
      />
    )
  }

  renderMenuItem = ({ item }) => {
    const { onProceed } = this.props
    return (
      <IconButton
        titleButton={item.name}
        subtitleButton={item.category}
        buttonStyle={{ marginTop: 15 }}
        subtitleStyle={{ color: '#727C8E' }}
        subtitleRight='340 LKR'
        iconRight={
          <Ionicons
            name='ios-arrow-dropright-circle'
            size={20}
            color='#E3E5E8'
          />
        }
        onPress={onProceed}
      />
    )
  }
}

SelectedDishContent.propTypes = {
  onProceed: PropTypes.func
}

export default SelectedDishContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  lead: {
    paddingHorizontal: 20,
    paddingTop: 25
  },
  lead__hero: {
    marginTop: 50
  }
})
