import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, Image, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import Ionicons from 'react-native-vector-icons/Ionicons'

import beefBurger from '../../../../assets/images/beef-burger.png'
import cheesyBurger from '../../../../assets/images/cheesy-burger.png'
import chickenBigBurger from '../../../../assets/images/chicken-big-burger.png'
import chickenSpicyBurger from '../../../../assets/images/chicken-spicy-burger.png'

import { IconButton } from '../../../global/CustomButton'
import { BaseStyle } from '../../../../constant'

class DishContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      burgers: [
        {
          icon: chickenBigBurger,
          name: 'Chicken Big Burger',
          price: 380,
          isNewMenu: true
        },
        {
          icon: chickenSpicyBurger,
          name: 'Chicken Spicy Burger',
          price: 320,
          isNewMenu: true
        },
        {
          icon: beefBurger,
          name: 'Beef Burger',
          price: 420,
          isNewMenu: false
        },
        {
          icon: cheesyBurger,
          name: 'Cheesy Burger',
          price: 290,
          isNewMenu: true
        }
      ]
    }
  }

  render () {
    const { burgers } = this.state
    return (
      <View style={styles['container']}>
        <FlatList
          data={burgers}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={this.renderBurgerItem}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10
          }}
        />
      </View>
    )
  }

  renderBurgerItem = ({ item }) => {
    return (
      <View>
        {this.renderBurgerButton(item)}
        {this.renderBurgerBadge(item.isNewMenu)}
      </View>
    )
  }

  renderBurgerButton = (item) => {
    const { onProceed } = this.props
    return (
      <IconButton
        avatarButton={
          <Image
            source={item.icon}
            style={{
              height: 40,
              width: 50,
              marginLeft: -3
            }}
          />
        }
        titleButton={item.name}
        subtitleButton={`${item.price} LKR`}
        buttonStyle={{ marginTop: 15 }}
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

  renderBurgerBadge = (status) => {
    if (status) {
      return (
        <View style={styles['badge']}>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--extraSmall'],
              BaseStyle['text--white'],
              BaseStyle['text--bold']
            ]}>
                NEW
          </Text>
        </View>
      )
    }
    return null
  }
}

DishContent.propTypes = {
  onProceed: PropTypes.func
}

export default DishContent

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  badge: {
    borderRadius: '20rem',
    position: 'absolute',
    top: '20rem',
    left: '40rem',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20rem',
    width: '20rem',
    backgroundColor: '#C40304'
  }
})
