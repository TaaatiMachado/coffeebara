import expresso from '../assets/coffees/expresso.png'
import aulait from '../assets/coffees/aulait.png'
import cappuccino from '../assets/coffees/cappuccino.png'
import frappe from '../assets/coffees/frappe.png'
import Irish from '../assets/coffees/irish.png'
import affogatto from '../assets/coffees/affogatto.png'
import Macchiatto from '../assets/coffees/macchiatto.png'

import strcupcake from '../assets/sides/1.png'
import redcupcake from '../assets/sides/4.png'
import icecream from '../assets/sides/6.png'
import cookie from '../assets/sides/8.png'
import croissaint from '../assets/sides/9.png'
import donut from '../assets/sides/11.png'
import chococake from '../assets/sides/2.png'
import cheese from '../assets/sides/15.png'
import sandwich from '../assets/sides/14.png'


import refresher from '../assets/non-coffee/1.png'
import icedtea from '../assets/non-coffee/2.png'
import juice from '../assets/non-coffee/4.png'
import tealatte from '../assets/non-coffee/3.png'
import chocolate from '../assets/non-coffee/5.png'
import frappu from '../assets/non-coffee/6.png'
import chai from '../assets/non-coffee/7.png'






const priceGenerator = (min, max) => {
    return (
        Math.floor(Math.random() * (max * 100 - min * 100) + 1 * 100) / (1*100)
    )
}
const ratingGenerator = (min, max) => {
    return (
        Math.floor(Math.random() * (max * 10 - min * 10) + min * 10) / (1*10)
    )
}

const Products = {
    title: "Products",
    coffee_drinks: [
        {
            id: 1,
            name: "Expresso",
            image_url: expresso,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1, 5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 2,
            name: "Affogatto",
            image_url: affogatto,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 3,
            name: "Au Lait",
            image_url: aulait,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 4,
            name: "Cappuccino",
            image_url: cappuccino,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 5,
            name: "Irish Coffee",
            image_url: Irish,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 6,
            name: "Macchiatto",
            image_url: Macchiatto,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 7,
            name: "Frappé",
            image_url: frappe,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        
    ],
    noncoffee_drinks: [
        {
            id: 1,
            name: "Iced Tea",
            image_url: icedtea,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 2,
            name: "Chai",
            image_url: chai,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 3,
            name: "Tea Latte",
            image_url: tealatte,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 4,
            name: "Refresher",
            image_url: refresher,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 5,
            name: "Crème Frappuccinos",
            image_url: frappu,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 6,
            name: "Hot Chocolate",
            image_url: chocolate,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 7,
            name: "Smooth",
            image_url: juice,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
    ],
    sides: [
        {
            id: 1,
            name: "Strawberry Cupcake",
            image_url: strcupcake,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 2,
            name: "Red Velvet Cupcake",
            image_url: redcupcake,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 3,
            name: "Icecream Sandwitch",
            image_url: icecream,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 4,
            name: "Cookie",
            image_url: cookie,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 5,
            name: "Croissaint",
            image_url: croissaint,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 6,
            name: "Classic Donut",
            image_url: donut,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 7,
            name: "Chocolate Cake",
            image_url: chococake,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 8,
            name: "Cheese Bread",
            image_url: cheese,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
        {
            id: 9,
            name: "Sandwich",
            image_url: sandwich,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
            price: `$${priceGenerator(1,5)}`,
            rating: ratingGenerator(3, 5)
        },
    ],
  
};

export default Products