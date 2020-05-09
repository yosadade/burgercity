import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Image, TextInput, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BaseStyle } from '../../../../constant'
import { IconButton, StandardButton } from '../../../global/CustomButton'

import menuMeals from '../../../../assets/images/menu-meals.png'

class CartSubTotal extends Component {
  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles['container']}>
        {this.renderLead()}
        {this.renderContent()}
      </ScrollView>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['lead']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--xl'],
            BaseStyle['text--white'],
            BaseStyle['text--bold']
          ]}
        >
            Sub Total ( 1 item )
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--xl'],
            BaseStyle['text--orange'],
            BaseStyle['text--bold']
          ]}
        >
            520LR
        </Text>
      </View>
    )
  }

  renderContent = () => {
    return (
      <View style={styles['content']}>
        {this.renderReceipt()}
        {this.renderPromoteCode()}
        {this.renderCondiments()}
        {this.renderCheckoutButton()}
      </View>
    )
  }

  renderReceipt = () => {
    return (
      <View style={styles['receipt']}>
        <Image
          source={menuMeals}
          style={styles['receipt__icon']}
        />

        <View style={styles['receipt__info']}>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--black'],
              BaseStyle['text--semibold']
            ]}
          >
             1. Cheese Burger meal
          </Text>

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--grey'],
              { marginTop: 10 }
            ]
            }
          >
             Cheese Burger
          </Text>

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--grey']
            ]}
          >
             Fries Pack
          </Text>

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--grey']
            ]}
          >
             Coca cola (250 ml)
          </Text>

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--grey']
            ]}
          >
            No Add On
          </Text>

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--orange'],
              BaseStyle['text--bold'],
              {
                marginTop: 30,
                marginRight: 20,
                marginLeft: 'auto'
              }
            ]}
          >
            520 LKR
          </Text>
        </View>
      </View>
    )
  }

  renderPromoteCode = () => {
    return (
      <View style={styles['promote-code']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
            Promo Code
        </Text>

        <TextInput
          placeholder='Enter Your Promote Code'
          style= {styles['promote-code__input']}
        />
      </View>
    )
  }

  renderCondiments = () => {
    return (
      <View style={styles['condiments']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
            Condiments
        </Text>

        <IconButton
          titleButton='Sekect Your Condiments'
          iconRight={
            <Ionicons
              name='ios-arrow-dropright-circle'
              size={20}
              color='#E3E5E8'
            />
          }
          buttonStyle={{ marginTop: 10 }}
        />
      </View>
    )
  }

  renderCheckoutButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Check Out'
        buttonStyle={{ marginTop: 50 }}
        onPress={onProceed}
      />
    )
  }
}

CartSubTotal.propTypes = {
  onProceed: PropTypes.func
}

export default CartSubTotal

const styles = StyleSheet.create({
  container: {
  },
  lead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D2126',
    padding: 20,
    paddingVertical: 25,
    paddingHorizontal: 20
  },
  content: {
    padding: 20
  },
  receipt: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    paddingVertical: 20
  },
  receipt__icon: {
    height: 130,
    width: 155,
    marginTop: -20,
    marginLeft: -40
  },
  receipt__info: {
    flex: 1,
    marginLeft: 20
  },
  'promote-code': {
    marginTop: 20
  },
  'promote-code__input': {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: 'Nunito-Regular',
    marginTop: 10
  },
  condiments: {
    marginTop: 20
  }
})
