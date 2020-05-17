import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  YellowBox,
  FlatList
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import EvilIcons from 'react-native-vector-icons/EvilIcons'

import bgImage from '../../assets/images/background-image.png'
import bcLogo from '../../assets/icons/burger-city-logo.png'
import InputBox from '../../components/global/InputBox'
import { StandardButton } from '../../components/global/CustomButton'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  onHandleInput = (key, value) => {
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [key]: value
      }
    }))
  }

  render () {
    return (
      <View>
        {this.renderStatusBar()}
        {this.renderBackground()}
      </View>
    )
  }

  renderStatusBar = () => {
    return (
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    )
  }

  renderBackground = () => {
    return (
      <ImageBackground style={styles.onboarding__bg} source={bgImage}>
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderLead()}
        {this.renderForm()}
      </ImageBackground>
    )
  }

  renderOverlay = () => {
    return <View style={styles.onboarding__overlay} />
  }

  renderLogo = () => {
    return (
      <View style={styles.onboarding__logo}>
        <Image source={bcLogo} />
      </View>
    )
  }

  renderLead = () => {
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>Welcome to Burget City!</Text>
        <Text style={styles['onboarding__lead--p']}>Sign Up to continue Burget City</Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['onboarding__form']}>
        {this.renderInputBox()}
        {this.renderSubmitButton()}
      </View>
    )
  }

  renderInputBox = () => {
    const inputBoxArr = [
      {
        name: 'email',
        placeholder: 'Email Address',
        icon: {
          type: EvilIcons,
          name: 'envelope',
          color: '#727c8e',
          size: 22,
          style: styles['onboarding__input__icon']
        },
        containerStyle: {}
      },
      {
        name: 'password',
        placeholder: 'Password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '#727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 17 }
          ]
        },
        containerStyle: { marginTop: 17 }
      },
      {
        name: 'confirmPassword',
        placeholder: 'Confirm Password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '#727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 17 }
          ]
        },
        containerStyle: { marginTop: 17 }
      }
    ]
    return (
      <FlatList
        data={inputBoxArr}
        renderItem={({ item, index }) => {
          return (
            <InputBox
              password={index === 1}
              {...item}
              onHandleInput={this.onHandleInput}
            />
          )
        }}
        keyExtractor = {(item, index) => item + index.toString()}
      />
    )
  }

  renderSubmitButton = () => {
    const { data } = this.state
    const disabled = !data.email || !data.password || !data.confirmPassword
    return (
      <StandardButton
        titleButton='Sign up'
        disabled={disabled}
        onPress={() => {}}
        buttonStyle={{ marginTop: 50 }}
      />
    )
  };
}

export default LoginScreen

const styles = EStyleSheet.create({
  onboarding__bg: {
    width: '100%',
    height: '100%'
  },
  onboarding__overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  onboarding__logo: {
    alignItems: 'center',
    marginTop: '57rem'
  },
  onboarding__lead: {
    alignItems: 'center',
    marginTop: '33rem'
  },
  'onboarding__lead--h1': {
    fontFamily: 'Nunito-Bold',
    fontSize: '21rem',
    color: '#ffffff',
    includeFontPadding: false
  },
  'onboarding__lead--p': {
    fontFamily: 'Nunito-SemiBold',
    fontSize: '14rem',
    color: '#ffffff',
    includeFontPadding: false,
    marginTop: '2rem',
    marginBottom: '33rem'
  },
  onboarding__form: {
    paddingHorizontal: '20rem',
    marginTop: '28rem'
  },
  onboarding__input__icon: {
    marginRight: '8rem',
    marginLeft: '16rem'
  },
  onboarding__option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12rem'
  },
  onboarding__option__text: {
    fontSize: '10rem',
    color: '#ffffff',
    includeFontPadding: false,
    marginLeft: '4rem'
  },
  'onboarding__sign-up': {
    alignItems: 'center',
    marginTop: '16rem'
  },
  'onboarding__sign-up__text': {
    fontFamily: 'Nunito-Semibold',
    fontSize: '10rem',
    color: '#ff9f1c',
    includeFontPadding: false
  }
})
