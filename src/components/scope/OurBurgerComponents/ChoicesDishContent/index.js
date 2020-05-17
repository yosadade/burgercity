import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyle } from '../../../../constant'
import { StandardButton, IconButton } from '../../../global/CustomButton'

class ChoicesDishContent extends Component {
  constructor () {
    super()
    this.state = {
      choices: [
        {
          name: 'Homestyle Fries',
          isActive: false
        },
        {
          name: 'Medium Fries',
          isActive: true
        }
      ]
    }
  }

  render () {
    return (
      <View style={styles['content']}>
        {this.renderOrderMethod()}
        {this.renderMethodList()}
        {this.renderProceedButton()}
      </View>
    )
  }

    renderOrderMethod = () => {
      return (
        <View style={styles['order-method']}>
          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--3xl'],
              BaseStyle['text--black'],
              BaseStyle['text--bold']
            ]}
          >
              Choices
          </Text>

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--l'],
              BaseStyle['text-black'],
              BaseStyle['text-semibold'],
              { marginTop: 5 }
            ]}
          >
              Please select your Choices
          </Text>
        </View>
      )
    }

    renderMethodList = () => {
      const { choices } = this.state
      return (
        <FlatList
          data={choices}
          keyExtractor={(item, index) => item + index.toString()}
          style={styles['order-method__list']}
          renderItem={({ item, index }) => {
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
                onPress={() => this.onPressMethod(index)}
              />
            )
          }}
        />
      )
    }

    onPressMethod = (index) => {
      const { choices } = this.state
      const newchoices = []

      choices.map((item, i) => {
        newchoices.push(item)

        if (index === i) {
          newchoices[index].isActive = true
        } else {
          newchoices[i].isActive = false
        }
      })
      this.setState({ choices: newchoices })
    }

    renderProceedButton = () => {
      const { onProceed } = this.props
      return (
        <StandardButton
          titleButton='Proceed to Order'
          buttonStyle={styles['proceed__button']}
          onPress={onProceed}
        />
      )
    }
}

ChoicesDishContent.propTypes = {
  onProceed: PropTypes.func
}

export default ChoicesDishContent

const styles = EStyleSheet.create({
  content: {
    flex: 1
  },
  'order-method': {
    paddingHorizontal: '16rem',
    paddingTop: '20rem'
  },
  'order-method__list': {
    paddingHorizontal: '16rem'
  },
  'order-method__button': {
    borderRadius: '6rem',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: '12rem',
    paddingHorizontal: '16rem'
  },
  proceed__button: {
    marginTop: 'auto',
    marginHorizontal: '16rem',
    marginBottom: '24rem'
  }
})
