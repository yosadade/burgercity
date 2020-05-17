import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TextInput, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EStyleSheet from 'react-native-extended-stylesheet'

import { BaseStyle } from '../../../../constant'
import { IconButton, StandardButton } from '../../../global/CustomButton'

import CardOrder from '../../../global/CardOrder'

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
      <CardOrder
        mealPackage='1 Cheese Burger meal'
        listPackage={[
          'Cheese Burger',
          'Fries pack',
          'Coca Cola (250l)',
          'No Add on'
        ]}
        price={250}
      />
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

const styles = EStyleSheet.create({
  container: {
  },
  lead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D2126',
    padding: '16rem',
    paddingVertical: '20rem',
    paddingHorizontal: '16rem'
  },
  content: {
    padding: '16rem'
  },
  'promote-code': {
    marginTop: '16rem'
  },
  'promote-code__input': {
    backgroundColor: '#FFFFFF',
    borderRadius: '8rem',
    height: 'auto',
    paddingVertical: '8rem',
    paddingHorizontal: '16rem',
    fontFamily: 'Nunito-Regular',
    marginTop: '8rem'
  },
  condiments: {
    marginTop: '16rem'
  }
})
