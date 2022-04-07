import { Menu } from '../components/Menu'

export default {
    component: Menu,
}

const Items = [
    {
        "name": "#1 Hamming It up", 
        "description": "Wheat bread, cheddar, cheese, cajun mayo, yellow mustard, ham, tomatoes, cucumbers, pickles, lettuce, red onions."
    },
    {
        "name": "#2 Turkey Tussle",
        "description": "Squaw with oats bread, swiss cheese, mayo, mustard, tomatoes, cucumbers, pickles, lettuce, red onions."
    },
    {
        "name": "#3 Italian Slammer", 
        "description": "French roll bread, provolone, cheese, mayo, ham, salami, pepperoni, tomatoes, cucumbers, lettuce, red onions, banana peppers, bell peppers, oil & vinegar."
    },
    {
        "name": "#4 Pops Italian", 
        "description": "Marbel rye bread, provolone cheese, havarti cheese, mayo, cajun mayo, honey mustard, pesto, ham, salami, peperonni, capicola, bacon romatoes, cucumbers, pickes, lettuce, spinach, red onions, bell peppers, banana peppers, avocado, olive tapenade."
    },
    {
        "name": "#5 Roast Beef Savory",   
        "description": "Sourdough bread, swiss cheese, mayo, spicy mustard, roast beef, tomatoes, cucumbers, spinach, red onions, bell peppers."
    },
    {
        "name": "#6 Vegging It Out",
        "description": "Wheat bread, provolone cheese, honey mustard, tomatoes, cucumbers, pickles, lettuce, spinach, red onions, bell peppers, banana pappers, olives, avocado."
    },
    {
        "name": "#7 Club Stacker",
        "description": "Sweet french bread, provolone cheese, mayo, yellow mustard, ham, roast beef, turkey, tomatoes, cucumbers, pickles, lettuce, red onions, bell peppers, banana peppers."
    }
]


export const Default = () => <Menu 
    items={Items}
/>