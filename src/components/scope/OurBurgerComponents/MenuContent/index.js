import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { BaseStyle } from '../../../../constant'

import MenuMeals from '../../../../assets/images/menu-meals.png'
import menuSalads from '../../../../assets/images/menu-salads.png'
import menuDesert from '../../../../assets/images/menu-desserts.png'
import menuBeverages from '../../../../assets/images/menu-beverages.png'
import { StandardButton } from '../../../global/CustomButton'

class MenuContent extends Component {
  render () {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
      >
        {this.renderInfo()}
        {this.renderMenuWrap()}
        {this.renderSecretMenu()}
      </ScrollView>
    )
  }

  renderInfo = () => {
    const data = [
      {
        title: 'Delivery Address',
        address: 'No. 02, 6th lane, Colombo 03'
      },
      {
        title: 'Delivery Date & Time',
        address: '19 / 09/ 2019 06:50:00 PM'
      }
    ]
    return (
      <FlatList
        data={data}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderDeckInfo}
      />
    )
  }

  renderDeckInfo = ({ item }) => {
    return (
      <View style={styles['deck-info']}>
        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--white'],
            BaseStyle['text--bold']
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            BaseStyle['text'],
            BaseStyle['text--3xl'],
            BaseStyle['text--orange'],
            BaseStyle['text--bold']
          ]}
        >
          {item.address}
        </Text>
      </View>
    )
  }

  renderMenuWrap = () => {
    const data = [
      {
        icon: MenuMeals,
        name: 'Ala cater & Value meals'
      },
      {
        icon: menuSalads,
        name: 'Salads/sides'
      },
      {
        icon: menuDesert,
        name: 'Desserts'
      },
      {
        icon: menuBeverages,
        name: 'Beverages'
      }
    ]
    return (
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={this.renderMenuItem}
        columnWrapperStyle={{ justifyContent: 'center' }}
        contentContainerStyle={{ padding: 10 }}
      />
    )
  }

  renderMenuItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={styles['menu__button']}
      >
        <View style={styles['menu']}>
          <Image
            source={item.icon}
            resizeMode='cover'
            height={82}
            width={111}
          />

          <Text
            style={[
              BaseStyle['text'],
              BaseStyle['text--large'],
              BaseStyle['text--black'],
              BaseStyle['text--bold'],
              { marginTop: 15, width: 100, textAlign: 'center' }
            ]}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSecretMenu = () => {
    const { onProceed } = this.props
    return (
      <StandardButton
        titleButton='Secret Menu'
        buttonStyle={{
          marginHorinzontal: 20,
          margin: 20
        }}
        onPress={onProceed}
      />
    )
  }
}

MenuContent.propTypes = {
  onProceed: PropTypes.func
}

export default MenuContent

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  'deck-info': {
    backgroundColor: '#1c272e',
    padding: '16rem'
  },
  menu__button: {
    borderRadius: '4rem',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    margin: '8rem',
    paddingTop: '8rem',
    paddingBottom: '12rem'
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
