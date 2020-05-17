import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import { IconButton, StandardButton } from '../../../global/CustomButton'
import { BaseStyle } from '../../../../constant'
import Stepper from '../../../global/Stepper'

class CondimentsContent extends Component {
  render () {
    return (
      <View style={styles.container}>
        {this.renderLead()}
        {this.renderButton()}
      </View>
    )
  }

  renderLead = () => {
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
          disabled
          titleButton='Select Ketchup'
          subtitleButton='10 LKR'
          buttonStyle={{ marginTop: 15, paddingVertical: 13 }}
          iconRight={
            <Stepper containerStyle={{ minWidth: 90 }} />
          }
        />

        <IconButton
          disabled
          titleButton='Fries Pack'
          subtitleButton='30 LKR'
          buttonStyle={{ marginTop: 10, paddingVertical: 13 }}
          iconRight={
            <Stepper containerStyle={{ minWidth: 90 }} />
          }
        />
      </View>
    )
  }

  renderButton = () => {
    return (
      <View style={styles['wrapper__button']}>
        {this.renderResetButton()}
        {this.renderAddToCartButton()}
      </View>
    )
  }

  renderResetButton = () => {
    return (
      <StandardButton
        underlayColor='rgba(0, 0, 0, 0.75'
        titleButton='Reset'
        buttonStyle={{
          backgroundColor: '#1F2126'
        }}
        onPress={() => {}}
      />
    )
  }

  renderAddToCartButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Add to Cart'
        buttonStyle={{ marginTop: 15 }}
        onPress={onProceed}
      />
    )
  }
}

CondimentsContent.propTypes = {
  onProceed: PropTypes.func
}

export default CondimentsContent

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: '16rem'
  },
  wrapper__button: {
    marginTop: 'auto'
  }
})
