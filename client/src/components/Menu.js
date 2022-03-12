import { Item } from '../components/Item'

import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = (props) => {
    return <div className={`card`} >
        <ul className={`list-group list-group-flush`}>
            {props.items.map(item => <li className={`list-group-item`}>
                    <Item data={item}/>
                </li>
            )}
        </ul>
    </div>
}