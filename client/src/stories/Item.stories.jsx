import { Item } from '../components/Item'

export default {
    title: 'Item',
    component: Item,
}

export const Default = () => <Item 
    data={{
        name: 'Poppin Pastrami',
        ingredients: 'French Roll Bread, White American Cheese, BBQ Sauce, '
        + 'Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, '
        + 'Red Onions, and Banana Peppers'
    }}
/>