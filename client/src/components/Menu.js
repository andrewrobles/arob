import {useState} from 'react'
import { List } from '../components/List'
import { Checkout } from '../components/Checkout'

import 'bootstrap/dist/css/bootstrap.min.css'

export const Menu = (props) => {
    const [state, setState] = useState({
        pageIndex: 0,
        order: []
    })

    const addItem = (index) => {
        const item = props.items[index]
        setState({
            ...state,
            order: state.order.concat(item)
        })
    }

    const removeItem = (index) => {
        state.order.splice(index, 1)
        setState({
            ...state,
            order: state.order
        })
    }

    return <div>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-light bg-light`}>
            <div className="mx-3">
                <h2><strong>Order</strong></h2>
            </div>
        </nav>
        <div className={`mt-5`} >
            <List items={props.items} buttonText={"Add to order"} buttonAction={addItem}/>
        </div>
        {state.order.length > 0 &&  <Checkout items={state.order} buttonAction={() => alert('Button press')}
        listButtonText={'Remove'} listButtonAction={removeItem}
        />}
       
    </div>
}