const INITIAL_STATE = {
  salads: [
    {
      iconUri: 'https://live.staticflickr.com/1859/44622903591_4da9457b19_z.jpg',
      name: 'Sicilian Salad',
      price: 200,
      isNewMenu: true
    },
    {
      iconUri: 'https://live.staticflickr.com/4802/38756866260_93c750868c_z.jpg',
      name: 'Vietnamese Beef Salad',
      price: 200,
      isNewMenu: true
    },
    {
      iconUri: 'https://live.staticflickr.com/4531/39001030602_c43e112998_z.jpg',
      name: 'Grilled Mango Salad',
      price: 200,
      isNewMenu: false
    },
    {
      iconUri: 'https://live.staticflickr.com/2827/33385729433_7998139ee2_z.jpg',
      name: 'Tuna Salad',
      price: 200,
      isNewMenu: true
    },
    {
      iconUri: 'https://live.staticflickr.com/934/42791857865_86abef8be3_z.jpgs',
      name: '3 Bean Salad',
      price: 200,
      isNewMenu: true
    }
  ],
  desserts: [
    {
      iconUri: 'https://live.staticflickr.com/4663/39563129085_51a86f490c_w.jpg',
      name: 'Blueberry Cake',
      price: 180,
      isNewMenu: true
    },
    {
      iconUri: 'https://live.staticflickr.com/7912/32245035057_45d25d15aa_z.jpg',
      name: 'Dessert donuts doughnuts',
      price: 150,
      isNewMenu: false
    },
    {
      iconUri: 'https://live.staticflickr.com/8799/16539931693_fa7d395eeb_w.jpg',
      name: 'Dessert with strawberries',
      price: 180,
      isNewMenu: true
    },
    {
      iconUri: 'https://live.staticflickr.com/955/41185047895_ae660c3018_w.jpg',
      name: 'Dessert Chocolate',
      price: 180,
      isNewMenu: true
    }
  ],
  baverages: [
    {
      iconUri: 'https://live.staticflickr.com/5734/22454764066_c25c86286a_w.jpg',
      name: 'Coca Cola',
      price: 120,
      isNewMenu: false
    },
    {
      iconUri: 'https://live.staticflickr.com/65535/46762585735_91e4dda9c5_m.jpg',
      name: 'Sprite',
      price: 120,
      isNewMenu: false
    },
    {
      iconUri: 'https://live.staticflickr.com/5734/22454764066_c25c86286a_w.jpg',
      name: 'Pepsi',
      price: 120,
      isNewMenu: false
    },
    {
      iconUri: 'https://live.staticflickr.com/7713/17228322916_de4c224658_w.jpg',
      name: 'Teh Botol Sosro',
      price: 120,
      isNewMenu: true
    }
  ]
}

const ourBurgers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default ourBurgers
