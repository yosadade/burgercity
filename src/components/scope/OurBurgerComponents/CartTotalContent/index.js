import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, FlatList, ScrollView, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BaseStyle } from '../../../../constant'
import InputBox from '../../../global/InputBox'

import ketchup from '../../../../assets/images/ketchup.png'
import { StandardButton } from '../../../global/CustomButton'
import CardOrder from '../../../global/CardOrder'

class CartTotalContent extends Component {
  constructor () {
    super()
    this.state = {
      reviews: [
        {
          title: 'Subtotal',
          desc: '520 LR'
        },
        {
          title: 'Delivery Charge',
          desc: '520 LR'
        },
        {
          title: 'Promo Code Discount (10%)',
          desc: '57 LR'
        }
      ]
    }
  }

  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {this.renderReviewConfirm()}
        {this.renderTotalCost()}
        {this.renderAddress()}
        {this.renderSummary()}
      </ScrollView>
    )
  }

  renderReviewConfirm = () => {
    const { reviews } = this.state
    return (
      <View style={styles['review-confirm']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--white'],
            BaseStyle['text--bold']
          ]}
        >
            Review & Confirm
        </Text>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--orange'],
            BaseStyle['text--right']
          ]}
        >
            Summary
        </Text>

        <FlatList
          data={reviews}
          keyExtractor={(item, index) => item + index.toString()}
          contentContainerStyle={{ marginTop: 5 }}
          renderItem={this.renderReviewConfirmItem}
        />
      </View>
    )
  }

  renderReviewConfirmItem = ({ item }) => {
    return (
      <View style={styles['review-confirm__item']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--orange']
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--white']
          ]}
        >
          {item.desc}
        </Text>

      </View>
    )
  }

  renderTotalCost = () => {
    return (
      <View style={styles['total-cost']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--orange']
          ]}>
              Total
        </Text>

        <View>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--3xl'],
              BaseStyle['text--white'],
              BaseStyle['text--bold'],
              BaseStyle['text--right']
            ]}
          >
             513 LKR
          </Text>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--white']
            ]}
          >
             513 LKR Total ( includes VAT )
          </Text>
        </View>

      </View>
    )
  }

  renderAddress = () => {
    return (
      <View style={styles['address']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--white'],
            BaseStyle['text--bold']
          ]}
        >
                  Delivering By
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--orange'],
            { marginTop: 10 }
          ]}
        >
                  19 / 09 / 2018  06:50:00 PM
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--white'],
            { marginTop: 5 }
          ]}
        >
                 No. 02, 6th Lane, Colombo 03
        </Text>
      </View>
    )
  }

  renderSummary = () => {
    return (
      <View style={styles['summary']}>
        {this.renderRemarks()}
        {this.renderCardOrder()}
        {this.renderBaverages()}
        {this.renderConfirmButton()}
      </View>
    )
  }

  renderRemarks = () => {
    return (
      <View style={styles['remarks']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
            Remarks
        </Text>

        <InputBox
          placeholder='E.g More ketchup: more drinking straws'
          containerStyle={{ marginTop: 10 }}
        />
      </View>
    )
  }

  renderCardOrder = () => {
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
        containerStyle={{ marginTop: 15 }}
      />
    )
  }

  renderBaverages = () => {
    return (
      <View style={styles['beverages']}>
        <Image
          source={ketchup}
        />
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black'],
            { marginLeft: 15 }
          ]}>
                  2 Ketchup packets
        </Text>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--orange'],
            { marginLeft: 'auto' }
          ]}>
                 20 LKR
        </Text>
      </View>
    )
  }

  renderConfirmButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Confirm'
        buttonStyle={{ marginTop: 30 }}
        onPress={onProceed}
      />
    )
  }
}

CartTotalContent.propTypes = {
  onProceed: PropTypes.func
}

export default CartTotalContent

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  'review-confirm': {
    backgroundColor: '#1F2126',
    padding: '16rem'
  },
  'review-confirm__item': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '7rem'
  },
  'total-cost': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#11191E',
    paddingVertical: '8rem',
    paddingHorizontal: '16rem'
  },
  address: {
    backgroundColor: '#1C272E',
    paddingTop: '8rem',
    paddingBottom: '10rem',
    paddingHorizontal: '16rem',
    marginTop: '12rem'
  },
  summary: {
    padding: '16rem'
  },
  beverages: {
    borderRadius: '8rem',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: '4rem',
    paddingHorizontal: '16rem',
    marginTop: '12rem'
  }
})
