import { Item } from '../components/Item'

export default {
    component: Item
}

export const Default = () => <Item 
    data={{
        name: 'Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    }}
/>