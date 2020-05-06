import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { BaseStyle } from '../../../../constant'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { StandardButton, IconButton } from '../../../global/CustomButton'

class DeiveryAddressContent extends Component {
  constructor () {
    super()
    this.state = {
      isOrderNow: false,
      isOrderInAdvance: true
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderLead()}
        {this.renderSettingOrder()}
        {this.renderSettingContent()}
      </View>
    )
  }

  renderLead = () => {
    return (
      <Text
        style={[
          BaseStyle['text-bold'],
          BaseStyle['text--large'],
          BaseStyle['text--black']]}
      >
        To Proceed , please confirm your delivery details
      </Text>
    )
  }

  renderSettingOrder = () => {
    const { isOrderNow, isOrderInAdvance } = this.state
    const orderNowButton = isOrderNow
      ? [
        styles['setting__button'],
        styles['setting__button--active']
      ]
      : [
        styles['setting__button'],
        styles['setting__button--inactive']
      ]

    const orderInAdvanceButton = isOrderInAdvance
      ? [
        styles['setting__button'],
        styles['setting__button--active']
      ]
      : [
        styles['setting__button'],
        styles['setting__button--inactive']
      ]

    const titleOrderInAdvanceButton = isOrderInAdvance
      ? BaseStyle['text--white']
      : BaseStyle['text--black']

    const titleOrderNowButton = isOrderNow
      ? BaseStyle['text--white']
      : BaseStyle['text--black']

    return (
      <View style={styles['setting']}>
        <TouchableOpacity
          onPress={this.onSetting}
          style={orderNowButton}
        >
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--white'],
              BaseStyle['text--bold'],
              BaseStyle['text--xl'],
              titleOrderNowButton
            ]}
          >
            Order Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onSetting}
          style={orderInAdvanceButton}
        >
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--bold'],
              BaseStyle['text--xl'],
              titleOrderInAdvanceButton
            ]}
          >
            Order in Advance
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  onSetting = () => {
    const { isOrderNow, isOrderInAdvance } = this.state
    if (isOrderNow) {
      this.setState({
        isOrderNow: false,
        isOrderInAdvance: true
      })
    } else if (isOrderInAdvance) {
      this.setState({
        isOrderNow: true,
        isOrderInAdvance: false
      })
    }
  }

  renderSettingContent = () => {
    const { isOrderNow, isOrderInAdvance } = this.state
    if (isOrderNow) {
      return this.renderOrderNow()
    } else if (isOrderInAdvance) {
      return this.renderOrderInAdvance()
    }
    return null
  }

  renderOrderNow = () => {
    return (
      <View style={styles['setting__content']}>
        {this.renderEditAddress()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderOrderInAdvance = () => {
    return (
      <View style={styles['setting__content']}>
        {this.renderEditAddress()}
        {this.renderEditSchedule()}
        {this.renderProceedButton()}
      </View>
    )
  }

  renderEditAddress = () => {
    return (
      <View>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
            Delivery Address
        </Text>

        <IconButton
          titleButton=' No. 02, 6th Lane, Colombo 03'
          IconButton={
            <EvilIcons
              name='pencil'
              size={20}
              color='#FF9F1C'
            />
          }
          buttonStyle={{
            paddingRight: 15,
            marginTop: 18
          }}
        />

      </View>
    )
  }

  renderEditSchedule = () => {
    return (
      <View style={styles['schedule']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
                  Delivery Date & Time
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black']
          ]}
        >
                  Please select delivery date & time
        </Text>

        <IconButton
          titleButton=' Delivery Date & Time'
          IconButton={
            <EvilIcons
              name='pencil'
              size={20}
              color='#FF9F1C'
            />
          }
          buttonStyle={{
            paddingRight: 15,
            marginTop: 18
          }}
        />

      </View>
    )
  }

  renderProceedButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Proceed to order'
        onPress={onProceed}
        buttonStyle={styles['proceed-order__button']}
      />
    )
  }
}

export default DeiveryAddressContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  setting: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden'
  },
  setting__button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12
  },
  'setting__button--active': {
    backgroundColor: '#FF9F1C'
  },
  'setting__button--inactive': {
    backgroundColor: '#FFFFFF'
  },
  setting__content: {
    marginTop: 20,
    flex: 1
  },
  edit__button: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 10,
    marginTop: 18
  },
  schedule: {
    marginTop: 30
  },
  'proceed-order__button': {
    marginTop: 'auto',
    marginBottom: 30
  }
})
