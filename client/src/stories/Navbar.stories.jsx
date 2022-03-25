import { Navbar } from '../components/Navbar'

export default {
    component: Navbar
}

const items = [
    {
        name: '#1 Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    },
    {
        name: '#2 Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    },
    {
        name: '#3 Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    }
]


export const Default = () => <Navbar items={items} buttonAction={() => alert('Button press')}
listButtonText={'Remove'} listButtonAction={() => alert('Button press')}/>