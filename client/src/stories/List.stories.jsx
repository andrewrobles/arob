import { useState } from 'react'
import { List } from '../components/List'

export default {
    component: List
}

export const Remove = () => {
    const [state, setState] = useState({
        items: [{
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
        }]
    })
    
    const removeItem = (index) => {
        state.items.splice(index, 1)
        setState({
            items: state.items
        })
    }

return <List 
    items={state.items}
    buttonText={'Remove'}
    buttonAction={removeItem}
/>}

export const Add = () => {
    const [state, setState] = useState({
        items: [{
            name: 'Poppin Pastrami',
            ingredients: ['French Roll Bread', 'White American Cheese', 'BBQ Sauce',
            'Honey Mustard', 'Spicy Mustard', 'Pastrami', 'Tomatoes', 'Pickles', 'Spinach',
            'Red Onions', 'Banana Peppers']
        }]
    })
    
    const addItem = (item) => {
        alert('Adding item')
    }

return <List 
    items={state.items}
    buttonText={'Add'}
    buttonAction={addItem}
/>}