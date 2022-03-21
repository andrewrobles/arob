import {useState} from 'react'
import { List } from '../components/List'
import { Navbar } from '../components/Navbar'

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

    const pages = [
        {
            title: 'FULL MENU',
            items: props.items,
            orderButton: {
                text: 'Add to order',
                action: addItem
            },
            navButton: {
                text: 'FULL MENU',
                action: () => setPageIndex(0)
            }
        },
        {
            title: 'MY ORDER',
            items: state.order,
            orderButton: {
                text: 'Remove',
                action: removeItem
            },
            navButton: {
                text: 'MY ORDER',
                action: () => setPageIndex(1)
            }
        }
    ]
    const activePage = pages[state.pageIndex]
    return <div>
        <Navbar text={activePage.title}/>
        <List items={activePage.items} buttonText={activePage.orderButton.text} buttonAction={activePage.orderButton.action}/>
        <Navbar bottom buttons={[pages[0].navButton, pages[1].navButton]}/>
    </div>
}