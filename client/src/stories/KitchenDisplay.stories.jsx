import { KitchenDisplay } from '../components/KitchenDisplay'

export default {
    component: KitchenDisplay,
}

const data = [
    {
        number: 26,
        name: '#4 Pops Italian',
        description: 'Marbel rye bread, provolone cheese, havarti cheese, mayo, cajun mayo, honey mustard, pesto, ham, salami, peperonni, capicola, bacon romatoes, cucumbers, pickes, lettuce, spinach, red onions, bell peppers, banana peppers, avocado, olive tapenade.',
        stage: 1
    }
]


export const Default = () => <KitchenDisplay foodItems={data}/>
export const InProgress = () => <KitchenDisplay foodItems={data}/>
export const Completed = () => <KitchenDisplay foodItems={data}/>
export const Discarded = () => <KitchenDisplay foodItems={data}/>
