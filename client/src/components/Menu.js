import { Item } from '../components/Item'

import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = (props) => {
    return <div className={`card`} >
        <ul className={`list-group list-group-flush`}>
            {props.items.map(item => <li className={`list-group-item`}>
                    <Item data={item}/>
                    <div class="d-flex justify-content-end mb-1">
                        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-light border">Customize</button>
                            </div>
                            <div class="btn-group" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-primary">Add to order</button>
                            </div>
                        </div>       
                    </div>  
                </li>
            )}
        </ul>
    </div>
}