import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const InputBox = (props) => {
  return (
    <View
      style={[
        props.containerStyle,
        styles['container']
      ]}
    >
      <props.icon.type
        name={props.icon.name}
        color='#727c8e'
        size={props.icon.size}
        style={props.icon.style}
      />
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor='#727c8e'
        secureTextEntry={props.password}
        styles={styles['input-box']}
        onChangeText={(value) => props.onHandleInput(props.name, value)}
      />
    </View>
  )
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

export default InputBox

const styles = StyleSheet.create({
  container: {
    borderRadius: 7,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 20
  },
  icon: {
    marginRight: 10,
    marginLeft: 20
  },
  'input-box': {
    flex: 1,
    height: 45,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#727cbe',
    // includeFontPadding: false,
    paddingLeft: 30
  }
})
