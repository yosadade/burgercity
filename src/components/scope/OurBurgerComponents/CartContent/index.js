import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Image, ScrollView, FlatList } from 'react-native'
import { BaseStyle } from '../../../../constant'

import { StandardButton } from '../../../global/CustomButton'
import Stepper from '../../../global/Stepper'

import menuMeals from '../../../../assets/images/menu-meals.png'
import cheeseBurger from '../../../../assets/images/chicken-spicy-burger.png'
import cocaCola from '../../../../assets/images/coca-cola.png'
import frenchFries from '../../../../assets/images/french-fries.png'

class CartContent extends Component {
  constructor () {
    super()
    this.state = {
      countItem: 1,
      meals: [
        {
          icon: cheeseBurger,
          name: 'Cheese Burger',
          editable: false
        },
        {
          icon: cocaCola,
          name: 'Coca cola (250ml)',
          editable: true
        },
        {
          icon: frenchFries,
          name: 'Fries Pack',
          editable: true
        }
      ]
    }
  }

  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles['container']}
      >
        {this.renderLead()}
        {this.renderButton()}
        {this.renderMeals()}
      </ScrollView>
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
              Cheese Burger Meal
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
              Please costumize your meal
        </Text>

        <Image
          source={menuMeals}
          style={styles['lead__hero']}
        />
      </View>
    )
  }

  renderButton = () => {
    const { countItem } = this.state
    const { onProceed } = this.props
    return (
      <View style={styles['button__wrapper']}>
        <Stepper
          counter={(countNumber) => {
            this.setState({ countItem: countNumber })
          }}
        />
        <StandardButton
          titleButton={`Add to Cart (${countItem})`}
          buttonStyle={{ flex: 1, marginLeft: 10 }}
          onPress={onProceed}
        />
      </View>
    )
  }

  renderMeals = () => {
    const { meals } = this.state
    return (
      <View style={styles['meals__wrapper']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
             Include
        </Text>

        <FlatList
          data={meals}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={this.renderMealsItem}
        />
      </View>
    )
  }

  renderMealsItem = ({ item, index }) => {
    const resizeMode = index === 0
      ? 'cover'
      : 'contain'
    const iconStyle = index === 0
      ? [styles['meals__item__icon'], { height: 30, width: 30, marginTop: -10 }]
      : styles['meals__item__icon']

    return (
      <View style={styles['meals__item']}>
        <Image
          source={item.icon}
          resizeMode={resizeMode}
          style={iconStyle}
        />
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black'],
            BaseStyle['text--semibold']
          ]}
        >
          {item.name}
        </Text>

        {item.editable ? (
          <StandardButton
            titleButton='Change'
            buttonStyle={styles['meals__item__button']}
            titleStyle={{ fontSize: 12 }}
          />
        )
          : null
        }
      </View>
    )
  }
}

CartContent.propTypes = {
  onProceed: PropTypes.func
}

export default CartContent

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  lead__hero: {
    height: 180,
    width: 230,
    alignSelf: 'center'
  },
  button__wrapper: {
    flexDirection: 'row',
    marginTop: 40
  },
  meals__wrapper: {
    marginTop: 20
  },
  meals__item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 15,
    minHeight: 50
  },
  meals__item__icon: {
    width: 30,
    height: 30,
    marginRight: 20
  },
  meals__item__button: {
    marginLeft: 'auto',
    padding: 0,
    paddingVertical: 5,
    paddingHorizontal: 10
  }
})
