import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Header from '../../components/global/Header'
import { IconButton } from '../../components/global/CustomButton'

import beefBurger from '../../assets/images/beef-burger.png'
import cheesyBurger from '../../assets/images/cheesy-burger.png'
import chickenBigBurger from '../../assets/images/chicken-big-burger.png'
import chickenSpicyBurger from '../../assets/images/chicken-spicy-burger.png'

class FavouritesScreen extends Component {
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
        <Header />
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
}

export default FavouritesScreen

FavouritesScreen.propTypes = {
  onProceed: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
