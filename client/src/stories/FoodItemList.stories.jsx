import { FoodItemList } from "../components/FoodItemList";

export default {
    component: FoodItemList
}

const menuOrderItems = [
    {
        name: "#1 Hamming It up", 
        description: "Wheat bread, cheddar, cheese, cajun mayo, yellow mustard, ham, tomatoes, cucumbers, pickles, lettuce, red onions."
    }
]

const checkbox = <div class="form-check">
    <input class="form-check-input" style={{width: '30px', height: '30px'}} type="checkbox" value="" id="flexCheckDefault"/>
</div>

const menuOrderControls = checkbox

const kitchenDisplayItems = [
    {
        name: "#1 Hamming It up", 
        description: "Wheat bread, cheddar, cheese, cajun mayo, yellow mustard, ham, tomatoes, cucumbers, pickles, lettuce, red onions.",
        number: 26
    }
]

// Default
export const Default = () => <FoodItemList items={menuOrderItems}/>

// Menu Order
export const MenuOrder = () => <FoodItemList items={menuOrderItems} controls={menuOrderControls}/>

// Kitchen Display Todo
const kitchenDisplayControlsTodo = <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-lg btn-danger">Discard</button>
    <button type="button" class="btn btn-lg btn-success">InProgress</button>
</div>
export const KitchenDisplayTodo = () => <FoodItemList items={kitchenDisplayItems} controls={kitchenDisplayControlsTodo}/>

// Kitchen Display In Progress
const kitchenDisplayControlsInProgress = <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-lg btn-danger">Todo</button>
    <button type="button" class="btn btn-lg btn-success">Completed</button>
</div>
export const KitchenDisplayInProgress = () => <FoodItemList items={kitchenDisplayItems} controls={kitchenDisplayControlsInProgress}/>

// Kitchen Display Completed
const kitchenDisplayControlsCompleted = <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-lg btn-danger">InProgress</button>
</div>
export const KitchenDisplayCompleted = () => <FoodItemList items={kitchenDisplayItems} controls={kitchenDisplayControlsCompleted}/>

// Kitchen Display Todo
const kitchenDisplayControlsDiscarded= <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-lg btn-danger">Todo</button>
</div>
export const KitchenDisplayDiscarded= () => <FoodItemList items={kitchenDisplayItems} controls={kitchenDisplayControlsDiscarded}/>