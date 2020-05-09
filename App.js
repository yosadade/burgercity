/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import PropTypes from 'prop-types'
import { YellowBox } from 'react-native'
import OnBoardingScreen from './src/screens/OnBoardingScreen'
import LoginScreen from './src/screens/LoginScreen'
import ForgotPasswordScreen from './src/screens/ForgotPassword'
import SignupScreen from './src/screens/SignupScreen'

import HomeScreen from './src/screens/HomeScreen'
import FavouritesScreen from './src/screens/FavouritesScreen'
import OurBurgerScreen from './src/screens/OurBurgerScreen'
import TrackOrdersScreen from './src/screens/TrackOrdersScreen'
import WalletScreen from './src/screens/WalletScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeIconInactive from './src/assets/icons/home-icon.svg'
import HomeIconActive from './src/assets/icons/home-icon-active.svg'
import OurBurgersIconInactive from './src/assets/icons/our-burger-icon.svg'
import OurBurgersIconActive from './src/assets/icons/our-burger-icon-active.svg'
import FavouritesIconInactive from './src/assets/icons/star-icon.svg'
import FavouritesIconActive from './src/assets/icons/star-icon-active.svg'
import TrackOrdersIconInactive from './src/assets/icons/track-icon.svg'
import TrackOrdersIconActive from './src/assets/icons/track-icon-active.svg'
import WalletIconInactive from './src/assets/icons/wallet-icon.svg'
import WalletIconActive from './src/assets/icons/wallet-icon-active.svg'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  YellowBox.ignoreWarnings(['FlatList: Calling `getNode()`'])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTab'
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}>
        <Stack.Screen
          name='OnBoardingScreen'
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name='LoginScreen'
          component={LoginScreen}
        />
        <Stack.Screen
          name='ForgotPasswordScreen'
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name='SignupScreen'
          component={SignupScreen}
        />
        <Stack.Screen
          name='HomeTab'
          component={HomeTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const allTab = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    label: 'Home',
    icon: {
      active: HomeIconActive,
      inactive: HomeIconInactive
    }
  },
  {
    name: 'OurBurgerScreen',
    component: OurBurgerScreen,
    label: 'Our Burgers',
    icon: {
      active: OurBurgersIconActive,
      inactive: OurBurgersIconInactive
    }
  },
  {
    name: 'FavouritesScreen',
    component: FavouritesScreen,
    label: 'Favourites',
    icon: {
      active: FavouritesIconActive,
      inactive: FavouritesIconInactive
    }
  },
  {
    name: 'TrackOrdersScreen',
    component: TrackOrdersScreen,
    label: 'Track Orders',
    icon: {
      active: TrackOrdersIconActive,
      inactive: TrackOrdersIconInactive
    }
  },
  {
    name: 'WalletScreen',
    component: WalletScreen,
    label: 'Wallet',
    icon: {
      active: WalletIconActive,
      inactive: WalletIconInactive
    }
  }
]

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF9F1C',
        style: {
          height: 70
        },
        labelStyle: {
          fontFamily: 'Nunito-SemiBold',
          fontSize: 12,
          marginBottom: 10
        },
        tabStyle: {
          marginTop: 10
        },
        keyboardHidesTabBar: true
      }}
    >
      {allTab.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            // eslint-disable-next-line react/display-name
            tabBarIcon: ({ focused }) => {
              const Icon = focused ? item.icon.active : item.icon.inactive
              const Size = index === 3 ? 28 : 22
              return (
                <Icon
                  width={Size}
                  height={Size}
                />
              )
            }
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

HomeTab.propTypes = {
  focused: PropTypes.object
}

export default App
