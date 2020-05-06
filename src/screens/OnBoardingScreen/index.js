import React, { Component } from 'react'
import {
  Text,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  YellowBox
} from 'react-native'
import PropTypes from 'prop-types'

import bgImage from '../../assets/images/background-image.png'
import bcLogo from '../../assets/icons/burger-city-logo.png'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { StandardButton } from '../../components/global/CustomButton'

class OnBoardingScreen extends Component {
  constructor () {
    super()
    this.state = {
      hero: [
        "World's\nGreatest\nBurger",
        'World\nDelicious\nBurger',
        'World\nGreates\nBurger 3'
      ],
      activeSlide: 0
    }
    YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
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
  };

  renderBackground = () => {
    return (
      <ImageBackground style={styles.onboarding__bg} source={bgImage}>
        {this.renderOverlay()}
        {this.renderLogo()}
        {this.renderHero()}
        {this.renderStartButton()}
      </ImageBackground>
    )
  };

  renderOverlay = () => {
    return <View style={styles.onboarding__overlay} />
  };

  renderLogo = () => {
    return (
      <View style={styles.onboarding__logo}>
        <Image source={bcLogo} />
      </View>
    )
  };

  renderHero = () => {
    return (
      <View style={styles.onboarding__hero__container}>
        {this.renderCarousel()}
        {this.renderCarouselPagination()}
      </View>
    )
  };

  renderStartButton = () => {
    return (
      <StandardButton
        titleButton='Get Start here'
        buttonStyle={styles['onboarding__button']}
        onPress={this.onStartHere}
      />
    )
  };

  onStartHere = () => {
    this.props.navigation.navigate('LoginScreen')
  }

  renderCarousel = () => {
    const { width } = Dimensions.get('window')
    return (
      <Carousel
        data={this.state.hero}
        renderItem={this.renderCarouselItem}
        decelerationRate="fast"
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => this.setState({ activeSlide: index })}
      />
    )
  };

  renderCarouselItem = ({ item }) => {
    return (
      <View style={styles.onboarding__hero__wrapper}>
        <Text style={styles.onboarding__hero}>{item}</Text>
      </View>
    )
  };

  renderCarouselPagination = () => {
    const { hero, activeSlide } = this.state
    return (
      <Pagination
        dotsLength={hero.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.onboarding__pagination__dot}
        dotContainerStyle={styles.onboarding__pagination__dot__container}
        inactiveDotOpacity={0.5}
        inactiveDotScale={1}
        containerStyle={styles.onboarding__pagination__container}
      />
    )
  };
}

OnBoardingScreen.propTypes = {
  navigation: PropTypes.object
}

export default OnBoardingScreen

const styles = StyleSheet.create({
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
    marginTop: 70
  },
  onboarding__hero__container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 150,
    left: 0
  },
  onboarding__hero__wrapper: {
    paddingHorizontal: 30,
    marginTop: 'auto'
  },
  onboarding__hero: {
    fontSize: 31,
    color: '#ffffff',
    fontFamily: 'Nunito-Bold'
  },
  onboarding__pagination__dot__container: {
    marginHorizontal: 2
  },
  onboarding__pagination__dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  onboarding__pagination__container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  onboarding__button: {
    marginHorizontal: 30,
    marginTop: 'auto',
    marginBottom: 50
  }
})
