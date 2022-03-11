import { Menu } from '../components/Menu'

export default {
    title: 'Menu',
    component: Menu,
}

const menuItems = [
    {
        name: 'Poppin Pastrami',
        ingredients: 'French Roll Bread, White American Cheese, BBQ Sauce, Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, Red Onions, and Banana Peppers'
    },
    {
        name: 'Blazin Cajun',
        ingredients: 'Squaw with Oat Bread, Pepper Jack Cheese, Cajun Mayo, Honey Mustard, Cajun Turkey, Tomatoes, Cucumbers, Pickles, Spinach, Red Onions, and Banana Peppers'
    }
]

export const Default = () => <Menu items={menuItems}/>