import React from 'react'
import { View, TextInput } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'

const InputBox = (props) => {
  const inputStyle = [
    styles['input-box'],
    props.icon === null &&
    { paddingLeft: 20 }
  ]

  const onChangeText = (value) => {
    if (props.onHandleInput) {
      props.onHandleInput(props.name, value)
    }
  }
  return (
    <View
      style={[
        props.containerStyle,
        styles['container']
      ]}
    >
      <IconInput icon={props.icon} />
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor='#727c8e'
        secureTextEntry={props.password}
        style={inputStyle}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const IconInput = ({ icon }) => {
  if (icon) {
    return (
      <icon.type
        name={icon.name}
        color='#727c8e'
        size={icon.size}
        style={icon.style}
      />
    )
  } return null
}

InputBox.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  placeholder: PropTypes.string,
  password: PropTypes.bool,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  onHandleInput: PropTypes.func,
  value: PropTypes.string
}

IconInput.propTypes = {
  icon: PropTypes.object
}

InputBox.defaultProps = {
  icon: null,
  containerStyle: {},
  placeholder: 'costum input box',
  password: false,
  value: '',
  onHandleInput: null
}

export default InputBox

const styles = EStyleSheet.create({
  container: {
    borderRadius: '7rem',
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: '16rem'
  },
  icon: {
    marginRight: '8rem',
    marginLeft: '16rem'
  },
  'input-box': {
    flex: 1,
    height: '36rem',
    fontFamily: 'Nunito-Regular',
    fontSize: '11rem',
    color: '#727cbe',
    // includeFontPadding: false,
    paddingLeft: '24rem'
  }
})
