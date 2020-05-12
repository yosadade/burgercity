import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'
import Modal from 'react-native-modal'

import { BaseStyle } from '../../../../constant'
import { StandardButton } from '../../../global/CustomButton'

import cocaCola from '../../../../assets/images/coca-cola.png'

class OrderConfirmedContent extends Component {
  constructor () {
    super()
    this.state = {
      isModalVisible: false
    }
  }

  componentDidUpdate (prevState) {
    if (this.state.isModalVisible !== prevState.isModalVisible) {
      if (this.state.isModalVisible) {
        setTimeout(() => {
          StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.7)', true)
        }, 10)
      } else {
        setTimeout(() => {
          StatusBar.setBackgroundColor('transparent', true)
        }, 10)
      }
    }
  }

  render () {
    return (
      <View style={styles['container']}>
        {this.renderDetailConfirmation()}
        {this.renderAddress()}
        {this.renderMassage()}
        {this.renderButton()}
        {this.renderBonusModal()}
      </View>
    )
  }

  renderDetailConfirmation = () => {
    return (
      <View style={styles['detail--confirmation']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--white'],
            BaseStyle['text--bold']
          ]}
        >
          Order Confirmed
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--orange'],
            { marginTop: 10 }
          ]}
        >
          Pay by M Wallet
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--white'],
            { marginTop: 5 }
          ]}
        >
          33701 - 18 / 19 / 2018 - 429
        </Text>
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

  renderMassage = () => {
    return (
      <Text
        style={[
          BaseStyle['text'],
          BaseStyle['text--xl'],
          BaseStyle['text--black'],
          { padding: 20 }
        ]}
      >
        We have sent you an email confirmation of
        your order
      </Text>
    )
  }

  renderButton = () => {
    return (
      <View style={styles['wrapper__button']}>
        {this.renderTrackButton()}
        {this.renderFavouriteButton()}
      </View>
    )
  }

  renderTrackButton = () => {
    return (
      <StandardButton
        titleButton='Track Your Button'
        buttonStyle={{ flex: 1 }}
        onPress={this.onTrack}
      />
    )
  }

  onTrack = () => {
    this.props.navigation.navigate('FavouritesScreen')
  }

  renderFavouriteButton = () => {
    return (
      <StandardButton
        titleButton='Favourite This Order'
        underlayColor='rgba(0, 0, 0, 0.75)'
        buttonStyle={{
          flex: 1, marginLeft: 10, backgroundColor: '#1F2126'
        }}
        onPress={this.onToggleModal}
      />
    )
  }

  onToggleModal = () => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible
    }))
  }

  renderBonusModal = () => {
    const { isModalVisible } = this.state
    return (
      <Modal
        isVisible={isModalVisible}
        useNativeDriver
        onBackdropPress={this.onToggleModal}
      >
        <View style={styles['bonus__modal']}>
          <View style={styles['bonus__image__wrapper']}>
            {/* <Svg height="100" width="100">
              <Circle cx="50" cy="50" r="50" fill="pink" />
            </Svg> */}
            <Image
              source={cocaCola}
              style={styles['bonus__image']}
            />
          </View>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text-xl'],
              BaseStyle['text--bold'],
              BaseStyle['text--center']
            ]}
          >
            Congratulations!
          </Text>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text-large'],
              BaseStyle['text--bold'],
              BaseStyle['text--center'],
              {
                paddingHorizontal: 20,
                marginTop: 15
              }
            ]}
          >
            Thanks for your payment! You have won a FREE Coca-cola
          </Text>
          <StandardButton
            titleButton='OK'
            buttonStyle={{
              marginTop: 20,
              width: 150,
              alignSelf: 'center'

            }}
            onPress={this.onToggleModal}
          />
        </View>
      </Modal>
    )
  }
}

OrderConfirmedContent.propTypes = {
  navigation: PropTypes.object
}

export default OrderConfirmedContent

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  'detail--confirmation': {
    backgroundColor: '#1D2126',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 20
  },
  address: {
    backgroundColor: '#1D2126',
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 20
  },
  wrapper__button: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 'auto'
  },
  bonus__modal: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    padding: 20
  },
  bonus__image__wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 130,
    height: 130,
    width: 130,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: -50,
    marginBottom: 10
  },
  bonus__image: {
    height: 100,
    width: 60,
    marginBottom: -25
  }
})
