import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { BaseStyle } from '../../../constant'

const IconButton = (props) => {
  const {
    onPress,
    titleButton,
    iconRight,
    buttonStyle,
    subtitleButton,
    avatarButton,
    subtitleStyle,
    subtitleRight
  } = props
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
          subtitleStyle={subtitleStyle}
        />
        <RightSection
          iconRight={iconRight}
          subtitleRight={subtitleRight}
        />
      </View>
    </TouchableOpacity>
  )
}

const LeftSection = ({ avatarButton }) => {
  if (avatarButton) {
    return (
      <View style={styles['section--left']}>
        {avatarButton}
      </View>
    )
  } return null
}

const MiddleSection = ({ titleButton, subtitleButton, subtitleStyle }) => {
  return (
    <View>
      <Title titleButton={titleButton}/>
      <Subtitle subtitleButton={subtitleButton} subtitleStyle={subtitleStyle} />
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

const Subtitle = ({ subtitleButton, subtitleStyle }) => {
  if (subtitleButton) {
    return (
      <Text
        style={[
          BaseStyle['text'],
          BaseStyle['text--medium'],
          BaseStyle['text--semibold'],
          BaseStyle['text--orange'],
          subtitleStyle,
          { marginTop: 3 }
        ]}
      >
        {subtitleButton}
      </Text>
    )
  }
  return null
}

const RightSection = ({ iconRight, subtitleRight }) => {
  return (
    <View style={styles['section--right']}>
      <View>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--medium'],
            BaseStyle['text--orange'],
            BaseStyle['text--bold'],
            { marginRight: 10 }
          ]}
        > {subtitleRight} </Text>
      </View>
      {iconRight}
    </View>
  )
}

IconButton.propTypes = {
  subtitleRight: PropTypes.string,
  subtitleStyle: PropTypes.object,
  avatarButton: PropTypes.object,
  titleButton: PropTypes.string,
  subtitleButton: PropTypes.string,
  iconRight: PropTypes.element,
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
  subtitleButton: PropTypes.string,
  subtitleStyle: PropTypes.object
}

RightSection.propTypes = {
  iconRight: PropTypes.element,
  subtitleRight: PropTypes.string
}

Title.propTypes = {
  titleButton: PropTypes.string
}

Subtitle.propTypes = {
  subtitleButton: PropTypes.string,
  subtitleStyle: PropTypes.object
}

IconButton.defaultProps = {
  onPress: () => {},
  titleButton: 'Icon Button',
  iconRight: (
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
    maxWidth: 60,
    marginRight: 20
  },
  'section--right': {
    flexDirection: 'row',
    marginLeft: 'auto'
  }
})