import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { BaseStyle } from '../../../../constant'
import { StandardButton, IconButton } from '../../../global/CustomButton'

class PickupDateTimeContent extends Component {
  render () {
    return (
      <View style={styles['container']}>
        {this.renderEditDate()}
        {this.renderEditTime()}
        {this.renderNote()}
        {this.renderSelectButton()}
      </View>
    )
  }

  renderEditDate = () => {
    return (
      <View style={styles['date']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
            Pickup Date
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black']
          ]}
        >
            Please select date
        </Text>

        <IconButton
          titleButton=' 30 / 08 / 2018'
          iconRight={
            <MaterialComunityIcons
              name='calendar-star'
              size={18}
              color='#717B8E'
            />
          }
          buttonStyle={{
            paddingRight: 15,
            marginTop: 18
          }}
          onPress={ () => {}}
        />
      </View>
    )
  }

  renderEditTime = () => {
    return (
      <View style={styles['time']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--black'],
            BaseStyle['text--bold']
          ]}
        >
            Pickup Time
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--large'],
            BaseStyle['text--black']
          ]}
        >
            Please select time
        </Text>

        <View style={styles['time__picker']}>
          <TouchableOpacity
            style={styles['time__picker__button']}
            onPress={() => {}}
          >
            <Text
              style={[
                BaseStyle['text'],
                BaseStyle['text--large'],
                BaseStyle['text--black']
              ]}>
                 06
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles['time__picker__button']}
            onPress={() => {}}
          >
            <Text
              style={[
                BaseStyle['text'],
                BaseStyle['text--large'],
                BaseStyle['text--black']
              ]}>
                        50
            </Text>
          </TouchableOpacity>

          <IconButton
            titleButton='PM'
            iconRight={
              <Ionicons
                name='ios-arrow-dropdown-circle'
                size={18}
                color='#E3E5E8'
                style={{ marginLeft: 10 }}
              />
            }
            buttonStyle={{
              height: 45,
              marginHorizontal: 7
            }}
            onPress={() => {} }
          />
        </View>
      </View>
    )
  }

  renderNote = () => {
    return (
      <View
        style={[
          BaseStyle['text'],
          BaseStyle['text--large'],
          BaseStyle['text--black'],
          { marginTop: 30 }
        ]}
      >
        <Text>
        Minimum of 90 Minutes before Pickup time
        </Text>
      </View>
    )
  }

  renderSelectButton = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Select'
        onPress={onProceed}
        buttonStyle={styles['proceed-order__button']}
      />
    )
  }
}

PickupDateTimeContent.propTypes = {
  onProceed: PropTypes.func
}

export default PickupDateTimeContent

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '16rem',
    paddingTop: '24rem'
  },
  date: {

  },
  time: {
    marginTop: '24rem'
  },
  time__picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -7,
    marginTop: '15rem'
  },
  time__picker__button: {
    borderRadius: '4rem',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '36rem',
    backgroundColor: '#FFFFFF',
    marginHorizontal: '6rem'
  },
  edit__button: {
    borderRadius: '4rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    paddingVertical: '12rem',
    paddingLeft: '16rem',
    paddingRight: '12rem',
    marginTop: '15rem'
  },
  'proceed-order__button': {
    marginTop: 'auto',
    marginBottom: '24rem'
  }
})
