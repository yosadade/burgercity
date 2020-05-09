import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, Text, StatusBar } from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Header from '../../components/global/Header'
import OrderMethodContent from '../../components/scope/OurBurgerComponents/OrderMethodContent'
import DeliveryAddressContent from '../../components/scope/OurBurgerComponents/DeliveryAddressContent'
import PickupDateTimeContent from '../../components/scope/OurBurgerComponents/PickupDateTimeContent'
import MenuContent from '../../components/scope/OurBurgerComponents/MenuContent'
import DishContent from '../../components/scope/OurBurgerComponents/DishContent'
import SelectedDishContent from '../../components/scope/OurBurgerComponents/SelectedDishContent'
import ChoicesDishContent from '../../components/scope/OurBurgerComponents/ChoicesDishContent'
import CartContent from '../../components/scope/OurBurgerComponents/CartContent'
import CartSubTotal from '../../components/scope/OurBurgerComponents/CartSubTotal'

class OurBurgerScreen extends Component {
  constructor () {
    super()
    this.state = {
      slideActive: 0
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderStatusBar()}
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
    )
  }

  renderHeader = () => {
    const { slideActive } = this.state
    const withBack = slideActive > 0
    return (
      <Header
        withBack={withBack}
        onPressLeftButton={() => this.content.snapToPrev()}
      />
    )
  }

  renderContent = () => {
    const { height, width } = Dimensions.get('window')
    return (
      // <OrderMethodComponent />
      <Carousel
        ref={ ref => { this.content = ref }}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={this.renderSection}
        sliderHeight={height}
        sliderWidth={width}
        itemHeight={height}
        itemWidth={width}
        inactiveSlideScale={1}
        scrollEnabled={false}
        onSnapToItem={this.onSnap}
      />
    )
  }

  onSnap = (slideActive) => {
    this.setState({ slideActive })
  }

  renderSection = ({ item, index }) => {
    switch (index) {
      case 0:
        return (
          <OrderMethodContent
            onProceed = {() => this.content.snapToNext()}
          />
        )
      case 1:
        return (
          <DeliveryAddressContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 2 :
        return (
          <PickupDateTimeContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 3 :
        return (
          <MenuContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 4 :
        return (
          <DishContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 5 :
        return (
          <SelectedDishContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 6 :
        return (
          <ChoicesDishContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 7 :
        return (
          <CartContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 8 :
        return (
          <CartSubTotal
            onProceed={() => this.content.snapToNext()}
          />
        )
      default :
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> 404 Not Found </Text>
          </View>
        )
    }
  }
}

export default OurBurgerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F7'
  },
  content: {
    flex: 1
  },
  'order-method': {
    paddingHorizontal: 20,
    paddingTop: 25
  },
  'order-method__list': {
    paddingHorizontal: 20
  },
  'order-method__button': {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  proceed__button: {
    marginTop: 'auto',
    marginHorizontal: 20,
    marginBottom: 30
  },

  text: {
    includeFontPadding: false
  },
  'text--black': {
    color: '#1D2126'
  },
  'text--bold': {
    fontFamily: 'Nunito-Bold'
  },
  'text--semibold': {
    fontFamily: 'Nunito-SemiBold'
  },
  'text--small': {
    fontSize: 10
  },
  'text-medium': {
    fontSize: 12
  },
  'text--large': {
    fontSize: 14
  },
  'text--xl': {
    fontSize: 16
  },
  'text--xxl': {
    fontSize: 18
  },
  'text--3xl': {
    fontSize: 20
  }
})
