import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, Image, FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
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

const styles = EStyleSheet.create({
  receipt: {
    flexDirection: 'row',
    borderRadius: '10rem',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    paddingVertical: '16rem'
  },
  receipt__icon: {
    height: '104rem',
    width: '124rem',
    marginTop: '-16rem',
    marginLeft: '-32rem'
  },
  receipt__info: {
    flex: 1,
    marginLeft: '16rem'
  }
})
