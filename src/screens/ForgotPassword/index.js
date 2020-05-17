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
import fontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import bgImage from '../../assets/images/background-image.png'
import bcLogo from '../../assets/icons/burger-city-logo.png'

import InputBox from '../../components/global/InputBox'
import { StandardButton } from '../../components/global/CustomButton'

class ForgotPasswordScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      data: {
        email: '',
        newPassword: '',
        confirmPassword: '',
        phone: '',
        otp: ''
      },
      identifier: 'create-new-password'
    }
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  }

  onHandleInput = (key, value) => {
    this.setState(prevStage => ({
      data: {
        ...prevStage.data,
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
    const { identifier } = this.state
    const sublead = identifier === 'create-new-password'
      ? 'Please enter a new password and confirm the password'
      : identifier === 'insert-otp'
        ? 'for your security, a one time passwod has been sent to your email address. Please enter it below to continue.'
        : 'Custom Subtitle'
    return (
      <View style={styles['onboarding__lead']}>
        <Text style={styles['onboarding__lead--h1']}>
            Forget Password
        </Text>
        <Text style={styles['onboarding__lead--p']}>
          {sublead}
        </Text>
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
    const { identifier } = this.state
    const formInputNewPassword = [
      {
        name: 'email',
        placeholder: 'Email Address',
        icon: {
          type: EvilIcons,
          name: 'envelope',
          color: '727c8e',
          size: 22,
          style: styles['onboarding__input__icon']
        },
        containerStyle: {}
      },
      {
        name: 'newPassword',
        placeholder: 'New Password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '727c8e',
          size: 22,
          style: styles['onboarding__input__icon']
        },
        containerStyle: {}
      },
      {
        name: 'confirmPassword',
        placeholder: 'Confirm Password',
        icon: {
          type: EvilIcons,
          name: 'lock',
          color: '727c8e',
          size: 25,
          style: [
            styles['onboarding__input__icon'],
            { marginLeft: 17 }
          ]
        },
        containerStyle: { marginTop: 17 }
      }
    ]
    const formInputOTP = [
      {
        name: 'otp',
        placeholder: 'OTP',
        icon: {
          type: fontAwesome5,
          name: 'clipboard-check',
          color: '#727cbe',
          size: 18,
          style: [
            styles['onboarding__input__icon'],
            { marginTop: -2 }
          ]
        },
        containerStyle: {}
      }
    ]

    const inputBox = identifier === 'create-new-password'
      ? formInputNewPassword
      : identifier === 'insert-otp'
        ? formInputOTP
        : []

    return (
      <FlatList
        data={inputBox}
        keyExtractor={(item, index) => item + index.toString() }
        renderItem={({ item, index }) =>
          <InputBox
            password={ index > 0}
            onHandleInput={this.onHandleInput}
            {...item}
          />}
      />
    )
  }

  onSubmit = () => {
    const { identifier } = this.state
    if (identifier === 'create-new-password') {
      this.setState({ identifier: 'insert-otp' })
    }
  }

  renderSubmitButton = () => {
    const { data, identifier } = this.state
    const disabled = !data.email || !data.newPassword || !data.confirmPassword
    const titleButton = identifier === 'create-new-password'
      ? 'Submit'
      : identifier === 'insert-otp'
        ? 'Proceed'
        : ''

    return (
      <StandardButton
        disabled={disabled}
        titleButton={titleButton}
        onPress={this.onSubmit}
        buttonStyle={{ marginTop: 50 }}
      />
    )
  };
}

ForgotPasswordScreen.propTypes = {

}

export default ForgotPasswordScreen

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
    fontSize: '13rem',
    color: '#ffffff',
    includeFontPadding: false,
    marginTop: '2rem',
    marginBottom: '33rem',
    textAlign: 'center',
    width: '210rem'
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
  onboarding__button: {
    borderRadius: '6rem',
    alignItems: 'center',
    backgroundColor: '#ff9f1c',
    paddingVertical: '12rem',
    marginTop: '12rem'
  },
  'onboarding__button--active': {
    backgroundColor: '#ff9f1c'
  },
  'onboarding__button--inactive': {
    borderWidth: 1,
    borderColor: '#ff9f1c',
    backgroundColor: 'transparent'
  },
  onboarding__button__text: {
    fontFamily: 'Nunito-Black',
    fontSize: '13rem',
    color: '#ffffff',
    includeFontPadding: false
  },
  'onboarding__button__text--active': {
    color: '#ffffff'
  },
  'onboarding__button__text--inactive': {
    color: '#ff9f1c'
  }
})
