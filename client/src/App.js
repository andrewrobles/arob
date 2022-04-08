import { useState, useEffect } from 'react'

import { Menu } from './components/Menu'
import {FullMenu} from './components/FullMenu'

function App() {
  return <FullMenu data={[
    {
        "name": "#1 Hamming It up", 
        "description": "Wheat Bread, Cheddar, Cheese, Cajun Mayo, Yello Mustard, Ham, Tomatoes, Cucumbers, Pickles, Lettuce, Red Onions"
    },
    {
        "name": "#2 Turkey Tussle", 
        "description": "Squaw With Oats, Bread, Swiss Cheese, Mayo, Mustard, Tomatoes, Cucumbers, Pickles, Lettuce, Red Onions"
    },
    {
        "name": "#3 Italian Slammer", 
        "description": "French Roll Bread, Provolone, Cheese, Mayo, Ham, Salami, Pepperoni, Tomatoes, Cucumbers, Lettuce, Red Onions, Banana Peppers, Bell Peppers, Oil & Vinegar"
    },
    {
        "name": "#4 Pops Italian", 
        "description": "Marbel Rye Bread, Provolone Cheese, Havarti Cheese, Mayo, Cajun Mayo, Honey Mustard, Pesto, Ham, Salami, Peperonni, Capicola, Bacon Romatoes, Cucumbers, Pickes, Lettuce, Spinach, Red Onions, Bell Peppers, Banana Peppers, Avocado, Olive Tapenade"
    },
    {
        "name": "#5 Roast Beef Savory", 
        "description": "Sourdough Bread, Swiss Cheese, Mayo, Spicy Mustard, Roast Beef, Tomatoes, Cucumbers, Spinach, Red Onions, Bell Peppers"
    },
    {
        "name": "#6 Vegging It Out", 
        "description": "Wheat Bread, Provolone Cheese, Honey Mustard, Tomatoes, Cucumbers, Pickles, Lettuce, Spinach, Red Onions, Bell Peppers, Banana Peppers, Olives, Avocado"
    },
    {
        "name": "#7 Club Stacker", 
        "description": "Sweet French Bread, Provolone Cheese, Mayo, Yellow Mustard, Ham, Roast Beef, Turkey, Tomatoes, Cucumbers, Pickles, Lettuce, Red Onions, Bell Peppers, Banana Peppers"
    },
    {
      "name": "#8 Tuna Delight",
      "description": "Wheat Bread, Tuna Salad, Mayo, Honey Mustard, Tomatoes, Cucumbers, Pickles, Spinach, Lettuce, Red Onions, Sprouts"
  },
  {
      "name": "#9 Blazin Cajun",
      "description": "Squaw with Oats Bread, Pepper Jack Cheese, Cajun Mayo, Honey Mustard, Cajun Turkey, Tomatoes, Cucumbers, Pickles, Spinach, Red Onions, Banana Peppers"
  },
  {
      "name": "#10 Classic Pastrami",
      "description": "French Roll Bread, White American Cheese, Yellow Mustard, Pastrami, Pickles"
  },
  {
      "name": "#11 Poppin Pastrami",
      "description": "French Roll Bread, White American Cheese, BBQ Sauce, Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, Red Onions, Banana Peppers"
  },
  {
      "name": "#12 Western Chicken",
      "description": "Sweet French Bread, White American Cheese, Ranch, Honey Mustard, Chicken, Bacon, Tomatoes, Lettuce, Avocado"
  },
  {
      "name": "#13 Chicken Salad Sandwhich",
      "description": "Sweet French Bread, Provolone, Honey Mustard, Chicken Salad, Tomatoes, Cucumbers, Spinach, Red Onions, Banana Peppers"
  },
  {
      "name": "#14 Half & Half",
      "description": "French Roll Bread, Sweet Chili, Honey Mustard, 1/2 Chicken Salad, 1/2 Tuna, Tomatoes, Cucumbers, Spinach, Red Onions, Banana Peppers"
  },
  {
      "name": "#15 The Reuben",
      "description": "Marble Rye Bread, Swiss Cheese, House Sauce, Sauerkraut, Corn Beef, Toasted to Perfection"
  },
  {
    "name": "The Works",
    "description": "Turkey, Spring Mix, Bacon, Avocado, Cranberries, Walnuts, Apples, Cherry Tomatoes"
  },
  {
    "name": "Tuna Salad",
    "description": "Spring Mix, House Tuna, Cherry Tomatoes, Cucumbers, Red Onions"
  },
  {
    "name": "Chicken Bacon Ranch",
    "description": "Spring Mix, Chicken, Bacon, Cherry Tomatoes, Cucumbers, Bell Peppers, Red Onions"
  },
  {
    "name": "Garden Salad",
    "description": "Spring Mix, Avocado, Cherry Tomatoes, Cucumbers, Pickles, Red Onions, Bell Peppers, Sprouts, Banana Peppers"
  },
  {
    "description": "Pesto, Olive Tapenade, Artichoke, Zucchini, Egg Plant, Habenero Peppers"
  },
  {
    "description": "Avocado, Double Cheese"
  },
  {
    "description": "Bacon, Double Meat"
  }
    ]}/>
}

export default App;