import { Menu } from '../components/Menu'

export default {
    component: Menu,
}

const Items = [
    {
        name: '#1 Poppin Pastrami',
        description: ['French Roll, Bread White, American Cheese, BBQ Sauce, Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, Red Onions, Banana Peppers, French Roll, Bread White, American Cheese, BBQ Sauce']
    },
    {
        name: '#2 Poppin Pastrami',
        description: ['French Roll, Bread White, American Cheese, BBQ Sauce, Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, Red Onions, Banana Peppers, French Roll, Bread White, American Cheese, BBQ Sauce']
    },
    {
        name: '#3 Poppin Pastrami',
        description: ['French Roll, Bread White, American Cheese, BBQ Sauce, Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, Red Onions, Banana Peppers, French Roll, Bread White, American Cheese, BBQ Sauce']
    },
    {
        name: '#4 Poppin Pastrami',
        description: ['French Roll, Bread White, American Cheese, BBQ Sauce, Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, Red Onions, Banana Peppers, French Roll, Bread White, American Cheese, BBQ Sauce']
    },
    {
        name: '#5 Poppin Pastrami',
        description: ['French Roll, Bread White, American Cheese, BBQ Sauce, Honey Mustard, Spicy Mustard, Pastrami, Tomatoes, Pickles, Spinach, Red Onions, Banana Peppers, French Roll, Bread White, American Cheese, BBQ Sauce']
    }
]


export const Default = () => <Menu 
    items={Items}
/>