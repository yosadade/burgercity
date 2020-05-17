import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  ImageBackground,
  StatusBar,
  YellowBox,
  FlatList,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import EStyleSheet from 'react-native-extended-stylesheet'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CheckBox from 'react-native-check-box'

import bgImage from '../../assets/images/background-image.png'
import bcLogo from '../../assets/icons/burger-city-logo.png'
import InputBox from '../../components/global/InputBox'
import { StandardButton } from '../../components/global/CustomButton'

class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      data: {
        email: '',
        password: ''
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
        {this.renderFooter()}
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
        <Text style={styles['onboarding__lead--h1']}>Welcome Back!</Text>
        <Text style={styles['onboarding__lead--p']}>Login to continue Burget City</Text>
      </View>
    )
  }

  renderForm = () => {
    return (
      <View style={styles['onboarding__form']}>
        {this.renderInputBox()}
        {this.renderOption()}
        {this.renderSubmitButton()}
        {this.renderSignUp()}
      </View>
    )
  }

  renderInputBox = () => {
    const { data } = this.state
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
      }
    ]
    return (
      <FlatList
        data={inputBoxArr}
        renderItem={({ item, index }) => {
          return (
            <InputBox
              password={index === 1}
              value={data[item.name]}
              {...item}
              onHandleInput={this.onHandleInput}
            />
          )
        }}
        keyExtractor = {(item, index) => item + index.toString()}
      />
    )
  }

  renderOption = () => {
    return (
      <View style={styles['onboarding__option']}>
        {this.renderOptRememberMe()}
        {this.renderOptForgotPassword()}
      </View>
    )
  }

  renderOptRememberMe = () => {
    const { isChecked } = this.state
    return (
      <CheckBox
        style={{ flex: 1 }}
        isChecked={isChecked}
        rightText='Remember Me'
        rightTextStyle={styles['onboarding__option__text']}
        checkBoxColor='#ffffff'
        unCheckedImage={
          <MaterialIcons
            name='radio-button-unchecked'
            color= '#ffffff'
            size={20}
          />
        }
        checkedImage={
          <MaterialIcons
            name='check-circle'
            color= '#ffffff'
            size={22}
          />
        }
        onClick={this.onRemember}
      />
    )
  }

  onRemember = () => {
    this.setState(prevStage => ({
      isChecked: !prevStage.isChecked
    }))
  }

  renderOptForgotPassword = () => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={styles['onboarding__option__text']}
          onPress={this.onForgotPassword}
        >
          Forgot Password?
        </Text>
      </TouchableOpacity>
    )
  }

  onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordScreen')
  }

  renderSubmitButton = () => {
    const { data } = this.state
    const disabled = !data.email || !data.password
    return (
      <StandardButton
        titleButton='Log in'
        disabled={disabled}
        buttonStyle={{
          marginTop: 15
        }}
        onPress={this.onLogin}
      />
    )
  };

  onLogin = () => {
    this.setState({
      data: {
        email: '',
        password: ''
      }
    })
  }

  renderSignUp = () => {
    return (
      <TouchableOpacity
        style={styles['onboarding__sign-up']}
        onPress={this.onSignup}
      >
        <Text style={styles['onboarding__sign-up__text']}>
          New User? Sign up
        </Text>
      </TouchableOpacity>
    )
  }

  onSignup = () => {
    this.props.navigation.navigate('SignupScreen')
  }

  renderFooter = () => {
    return (
      <View style={styles['onboarding__footer']}>
        <Text style={styles['onboarding__footer__text']}>
          By signing up you indicate that you have read and agreed to the Patch &nbsp;
          <Text style={styles['onboarding__footer__text--underline']}>
            Term Of Service
          </Text>
        </Text>
      </View>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object
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
    marginTop: '60rem'
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
    fontSize: '15rem',
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
  onboarding__button: {
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#ff9f1c',
    paddingVertical: '12rem',
    marginTop: '12rem'
  },
  onboarding__button__text: {
    fontFamily: 'Nunito-Black',
    fontSize: '13rem',
    color: '#ffffff',
    includeFontPadding: false
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
  },
  onboarding__footer: {
    marginTop: '29rem',
    alignItems: 'center'
  },
  onboarding__footer__text: {
    fontFamily: 'Nunito-Regular',
    fontSize: '10rem',
    color: '#ffffff',
    includeFontPadding: false,
    width: '210rem',
    textAlign: 'center'
  },
  'onboarding__footer__text--underline': {
    textDecorationLine: 'underline'
  }
})
