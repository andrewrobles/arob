import { FoodItemList } from "./FoodItemList"

export const KitchenDisplay = (props) => {
    return <div>
        <div className='text-center pb-3'>
            <div class="btn-group">
                <input type="checkbox" class="btn-check" name="options" id="check1" autocomplete="off" checked/>
                <label class="btn btn-lg btn-outline-primary" for="check1">TODO</label>
                
                <input type="checkbox" class="btn-check" name="options" id="check2" autocomplete="off"/>
                <label class="btn btn-lg btn-outline-primary" for="check2">IN PROGRESS</label>
                
                <input type="checkbox" class="btn-check" name="options" id="check3" autocomplete="off"/>
                <label class="btn btn-lg btn-outline-primary" for="check3">COMPLETED</label>

                <input type="checkbox" class="btn-check" name="options" id="check3" autocomplete="off"/>
                <label class="btn btn-lg btn-outline-primary" for="check3">DISCARDED</label>
            </div>
        </div>
        <FoodItemList items={props.foodItems} controls={kitchenDisplayControls}/>
    </div>
}

const kitchenDisplayControls = <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-lg btn-success">START</button>
    <button type="button" class="btn btn-lg btn-danger">DISCARD</button>
</div>