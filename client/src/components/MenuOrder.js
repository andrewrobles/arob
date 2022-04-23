import 'bootstrap/dist/css/bootstrap.min.css';
import { FoodItemList } from './FoodItemList';

export const MenuOrder = (props) => {
    
    return <div>
        <FoodItemList items={props.items} controls={<Checkbox/>}/>
        <div class="container">
            <nav class="navbar fixed-bottom navbar-light bg-light">       
                <div class="mx-auto" style={{width: "97%"}}>
                <button style={{width: "100%"}} type="button" class="btn btn-success btn-lg btn-block">SEND TO KITCHEN</button>
                </div>
            </nav>
        </div>
    </div>
}

const Checkbox = (props) => {
    return <div class="form-check">
    <input class="form-check-input" style={{width: '30px', height: '30px'}} type="checkbox" value="" id="flexCheckDefault"/>
</div>
}