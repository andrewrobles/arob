import { useState } from 'react' 
import { Item } from './Item'

export const List = (props) => {    
    return <div className={`card mt-5`} >
    <ul className={`list-group list-group-flush`}>
        {props.items.map((item, index) => <li className={`list-group-item`}>
                <Item data={item}/>
                <div class="d-flex justify-content-end mb-1">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div class="btn-group" role="group" aria-label="Second group">
                            <button onClick={() => props.buttonAction(index)} type="button" class="btn btn-light border">{props.buttonText}</button>
                        </div>
                    </div>       
                </div>  
            </li>
        )}
    </ul>
</div>
}