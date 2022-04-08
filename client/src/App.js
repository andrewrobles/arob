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
      "description": "Whear bread, tuna salad, mayo, honey mustard, tomatoes, cucumbers, pickles, spinach, lettuce, red onions, sprouts."
  },
  {
      "name": "#9 Blazin Cajun",
      "description": "Squaw with oats bread, pepper jack cheese, cajun mayo, honey mustard, cajun turkey, tomatoes, cucumbers, pickles, spinach, red onions, banana peppers."
  },
  {
      "name": "#10 Classic Pastrami",
      "description": "French roll bread, white american cheese, yellow mustard, pastrami, pickles."
  },
  {
      "name": "#11 Poppin Pastrami",
      "description": "French roll bread, white american cheese, BBQ sauce, honey mustard, spicy mustard, pastrami, tomatoes, pickles, spinach, red onions, banana peppers."
  },
  {
      "name": "#12 Western Chicken",
      "description": "Sweet french bread, white american cheese, ranch, honey mustard, chicken, bacon, tomatoes, lettuce, avocado."
  },
  {
      "name": "#13 Chicken Salad Sandwhich",
      "description": "Sweet french bread, provolone, honey mustard, chicken salad, tomatoes, cucumbers, spinach, red onions, banana peppers."
  },
  {
      "name": "#14 Half & Half",
      "description": "French roll bread, sweet chili, honey mustard, 1/2 chicken salad, 1/2 tuna, tomatoes, cucumbers, spinach, red onions, banana peppers."
  },
  {
      "name": "The Reuben",
      "description": "Marble rye bread, swiss cheese, house sauce, sauerkraut, corn beef, toasted to perfection."
  }
    ]}/>
}

export default App;