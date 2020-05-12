import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Dimensions, StatusBar } from 'react-native'

import Header from '../../components/global/Header'
import Carousel from 'react-native-snap-carousel'
import OrderPaymentContent from '../../components/scope/WalletComponents/OrderPaymentContent'
import OrderConfirmedContent from '../../components/scope/WalletComponents/OrderConfirmedContent'

class WalletScreen extends Component {
  constructor () {
    super()
    this.state = {
      slideActive: 1
    }
  }

  render () {
    return (
      <View style={styles['contaniner']}>
        {this.renderStatusBar()}
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        animated
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
        data={[0, 1]}
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
          <OrderPaymentContent
            onProceed={() => this.content.snapToNext()}
          />
        )
      case 1:
        return (
          <OrderConfirmedContent
            navigation={this.props.navigation}
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

WalletScreen.propTypes = {
  navigation: PropTypes.object
}

export default WalletScreen

const styles = StyleSheet.create({
  contaniner: {
    flex: 1
  }
})
