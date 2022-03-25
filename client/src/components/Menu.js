import {useState} from 'react'
import { List } from '../components/List'
import { Navbar } from '../components/Navbar'
import { Checkout } from '../components/Checkout'

import 'bootstrap/dist/css/bootstrap.min.css'

export const Menu = (props) => {
    const [state, setState] = useState({
        pageIndex: 0,
        order: []
    })

    const setPageIndex = (index) => {
        setState({
            ...state,
            pageIndex: index
        })
    }

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

    const firstPageTitle = 'Order'
    const secondPageTitle = 'CHECKOUT'
    const pages = [
        {
            title: firstPageTitle,
            items: props.items,
            orderButton: {
                text: 'Add to order',
                action: addItem
            },
            navButton: {
                text: firstPageTitle,
                action: () => setPageIndex(0)
            }
        },
        {
            title: secondPageTitle,
            items: state.order,
            orderButton: {
                text: 'Remove',
                action: removeItem
            },
            navButton: {
                text: secondPageTitle,
                action: () => setPageIndex(1)
            }
        }
    ]
    const activePage = pages[state.pageIndex]
    return <div>
        <Navbar text={activePage.title}/>
        <div className={`mt-5`} >
            <List items={activePage.items} buttonText={activePage.orderButton.text} buttonAction={activePage.orderButton.action}/>
        </div>
        {state.order.length > 0 &&  <Checkout items={state.order} buttonAction={() => alert('Button press')}
        listButtonText={'Remove'} listButtonAction={removeItem}
        />}
       
    </div>
}