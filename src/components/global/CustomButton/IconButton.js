import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyle } from '../../../constant'

const IconButton = (props) => {
  const { onPress, titleButton, IconButton, buttonStyle, subtitleButton, avatarButton } = props
  const wrapperStyle = buttonStyle
    ? [styles['button'], buttonStyle]
    : styles['button']
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={wrapperStyle}>
        <LeftSection
          avatarButton={avatarButton}
        />
        <MiddleSection
          titleButton={titleButton}
          subtitleButton={subtitleButton}
        />
        <RightSection
          IconButton={IconButton}
        />
      </View>
    </TouchableOpacity>
  )
}

const LeftSection = ({ avatarButton }) => {
  return (
    <View style={styles['section--left']}>
      {avatarButton}
    </View>
  )
}

const MiddleSection = ({ titleButton, subtitleButton }) => {
  return (
    <View style={{ marginLeft: 20 }}>
      <Title titleButton={titleButton}/>
      <Subtitle subtitleButton={subtitleButton}/>
    </View>
  )
}

const Title = ({ titleButton }) => {
  return (
    <Text
      style={[
        BaseStyle['text'],
        BaseStyle['text--large'],
        BaseStyle['text--semibold'],
        BaseStyle['text--black']
      ]}
    >
      {titleButton}
    </Text>
  )
}

const Subtitle = ({ subtitleButton }) => {
  if (subtitleButton) {
    return (
      <Text
        style={[
          BaseStyle['text'],
          BaseStyle['text--medium'],
          BaseStyle['text--semibold'],
          BaseStyle['text--orange'],
          { marginTop: 3 }
        ]}
      >
        {subtitleButton}
      </Text>
    )
  }
  return null
}

const RightSection = ({ IconButton }) => {
  return (
    <View style={{ marginLeft: 'auto' }}>
      {IconButton}
    </View>
  )
}

IconButton.propTypes = {
  avatarButton: PropTypes.object,
  titleButton: PropTypes.string,
  subtitleButton: PropTypes.string,
  IconButton: PropTypes.element,
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onPress: PropTypes.func
}

LeftSection.propTypes = {
  avatarButton: PropTypes.object
}

MiddleSection.propTypes = {
  titleButton: PropTypes.string,
  subtitleButton: PropTypes.string
}

RightSection.propTypes = {
  IconButton: PropTypes.element
}

Title.propTypes = {
  titleButton: PropTypes.string
}

Subtitle.propTypes = {
  subtitleButton: PropTypes.string
}

IconButton.defaultProps = {
  onPress: () => {},
  titleButton: 'Icon Button',
  IconButton: (
    <MaterialCommunityIcons
      name='xml'
      size={18}
      color='#FF9F1C'
    />
  ),
  buttonStyle: {}
}

export default IconButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  'section--left': {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 60,
    maxWidth: 60
  }
})
