module.exports = {
  people: getPeople(),
  categories: getCategories(),
  products: getProducts()
};

function getPeople() {
  return [
    { id: 1, firstName: 'John', lastName: 'Papa', age: 25, location: 'Florida' },
    { id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California' },
    { id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York' },
    { id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
    { id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
    { id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
    { id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' },
    { id: 8, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah' }
  ];
}

function getCategories() {
  return [
    {
      categori_id: 1,
      name: 'drinks'
    },
    {
      categori_id: 2,
      name: 'lunch'
    },
    {
      categori_id: 3,
      name: 'food'
    },
    {
      categori_id: 4,
      name: 'sea'
    }
  ]
}

function getProducts() {
  return [
    {
      id: 1,
      name: 'Lorem',
      price: '60.000',
      available: true,
      best_seller: true,
      categories: [
        1,
        4
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 2,
      name: 'ipsum',
      price: '20.000',
      available: false,
      best_seller: false,
      categories: [
        4
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 3,
      name: 'dolor',
      price: '10.000',
      available: true,
      best_seller: true,
      categories: [
        4
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 4,
      name: 'sit',
      price: '35.000',
      available: false,
      best_seller: false,
      categories: [
        1,
        2
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 5,
      name: 'amet',
      price: '12.000',
      available: true,
      best_seller: true,
      categories: [
        1,
        4
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 6,
      name: 'consectetur',
      price: '120.000',
      available: true,
      best_seller: false,
      categories: [
        1,
        4
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 7,
      name: 'adipiscing',
      price: '50.000',
      available: false,
      best_seller: false,
      categories: [
        1,
        3
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 8,
      name: 'elit',
      price: '2000',
      available: true,
      best_seller: false,
      categories: [
        1,
        3
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 9,
      name: 'Maecenas',
      price: '150.000',
      available: true,
      best_seller: true,
      categories: [
        2,
        4
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    },
    {
      id: 10,
      name: 'eu',
      price: '200.000',
      available: false,
      best_seller: true,
      categories: [
        2,
        3
      ],
      img: 'http://lorempixel.com/200/100/food/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu.'
    }
  ];
}
