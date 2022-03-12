import { Menu } from '../components/Menu'

export default {
    title: 'Menu',
    component: Menu,
}

const menuItems = [
    {
        name: 'Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    },
    {
        name: 'Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    },
    {
        name: 'Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    }
]

export const Default = () => <Menu items={menuItems}/>