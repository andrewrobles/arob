import { Item } from '../components/Item'

export default {
    title: 'Item',
    component: Item,
}

export const Default = () => <Item 
    data={{
        name: 'Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    }}
/>

export const Customize = () => <Item
    data={{
        name: 'Poppin Pastrami',
        ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
        'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
        'Red Onions', 'Banana Peppers']
    }}
    extras={['Avocado', 'Bacon', 'Double Cheese', 'Double Meat', 
    'Pesto', 'Olive Tapenade', 'Artichoke', 'Zucchini', 'Egg Plant',
    'Habenero Peppers']}
/>