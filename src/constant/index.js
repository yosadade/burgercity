import { StyleSheet } from 'react-native'

export const BaseStyle = StyleSheet.create({
  text: {
    includeFontPadding: false,
    fontFamily: 'Nonito-Regular'
  },
  'text--grey': {
    color: '#727C8E'
  },
  'text--orange': {
    color: '#FF9F1C'
  },
  'text--white': {
    color: '#FFFFFF'
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
  'text--extraSmall': {
    fontSize: 8
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
  },
  'text--left': {
    textAlign: 'left'
  },
  'text--center': {
    textAlign: 'center'
  },
  'text--right': {
    textAlign: 'right'
  }
})
