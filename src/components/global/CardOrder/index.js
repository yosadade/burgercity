import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Image, FlatList } from 'react-native'
import { BaseStyle } from '../../../constant'

import menuMeals from '../../../assets/images/menu-meals.png'

class CardOrder extends Component {
  render () {
    const { containerStyle } = this.props

    const wrapperStyle = [
      styles['receipt'],
      containerStyle
    ]
    return (
      <View style={wrapperStyle}>
        {this.renderIcon()}
        {this.renderInfo()}
      </View>
    )
  }

  renderIcon = () => {
    return (
      <Image
        source={menuMeals}
        style={styles['receipt__icon']}
      />
    )
  }

  renderInfo = () => {
    return (
      <View style={styles['receipt__info']}>
        {this.renderInfoPackage()}
        {this.renderInfoPackageList()}
        {this.renderInfoPrice()}
      </View>
    )
  }

  renderInfoPackage = () => {
    const { mealsPackage } = this.props
    return (
      <Text
        style={[
          BaseStyle['text'],
          BaseStyle['text--large'],
          BaseStyle['text--black'],
          BaseStyle['text--semibold']
        ]}
      >
        {mealsPackage}
      </Text>
    )
  }

  renderInfoPackageList = () => {
    const { listPackage } = this.props
    return (
      <FlatList
        data={listPackage}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderPackageListItem}
      />
    )
  }

  renderPackageListItem = ({ item }) => {
    return (
      <Text
        style={[
          BaseStyle['text'],
          BaseStyle['text--large'],
          BaseStyle['text--grey'],
          { marginTop: 10 }
        ]
        }
      >
        {item}
      </Text>
    )
  }

  renderInfoPrice = () => {
    const { price } = this.props
    return (
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
        {price}
      </Text>
    )
  }
}

CardOrder.propTypes = {
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  mealsPackage: PropTypes.string,
  listPackage: PropTypes.array,
  price: PropTypes.number
}

export default CardOrder

const styles = StyleSheet.create({
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
  }
})
