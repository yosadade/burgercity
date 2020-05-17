import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, FlatList, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyle } from '../../../../constant'
import { IconButton, StandardButton } from '../../../global/CustomButton'
import InputBox from '../../../global/InputBox'

class OrderPaymentContent extends Component {
  constructor () {
    super()
    this.state = {
      wallets: [
        {
          name: 'M Wallet',
          isActive: false
        },
        {
          name: 'Cash on Delivery',
          isActive: true
        },
        {
          name: 'Apple Pay',
          isActive: false
        },
        {
          name: 'Samsung Pay',
          isActive: false
        }
      ]
    }
  }

  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles['container']}>
        {this.renderPayment()}
        {this.renderSecurityCheck()}
      </ScrollView>
    )
  }

  renderPayment = () => {
    return (
      <View style={styles['payment']}>
        {this.renderLead()}
        {this.renderOption()}
      </View>
    )
  }

  renderLead = () => {
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
            Order Payment
        </Text>
      </View>
    )
  }

  renderOption = () => {
    const { wallets } = this.state
    return (
      <FlatList
        data={wallets}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderOptionItem}
      />
    )
  }

  renderOptionItem = ({ item }) => {
    const checkColor = item.isActive ? '#FF9F1C' : '#E3E5E8'
    return (
      <IconButton
        titleButton={item.name}
        iconRight={
          <MaterialCommunityIcons
            name='check-circle'
            color={checkColor}
            size={18}
          />
        }
        buttonStyle={{ marginTop: 20 }}
      />
    )
  }

    renderSecurityCheck = () => {
      const { onProceed } = this.props
      return (
        <View style={styles['security-check']}>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--xl'],
              BaseStyle['text--black'],
              BaseStyle['text--semibold']
            ]}
          >
                Security Check
          </Text>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--giant'],
              BaseStyle['text--black'],
              BaseStyle['text--extrabold']
            ]}
          >
                5478
          </Text>
          <InputBox
            placeholder='Security Code'
            containerStyle={{
              marginTop: 10
            }}
          />
          <StandardButton
            titleButton='Confirm'
            buttonStyle={{ marginTop: 15 }}
            onPress={onProceed}
          />
        </View>
      )
    }
}

OrderPaymentContent.propTypes = {
  onProceed: PropTypes.func
}

export default OrderPaymentContent

const styles = EStyleSheet.create({
  payment: {
    padding: '16rem'
  },
  'security-check': {
    borderTopWidth: 1,
    borderTopColor: '#E2E3E7',
    padding: '16rem',
    marginTop: '8rem'
  }
})
