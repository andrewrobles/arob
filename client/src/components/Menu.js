import {useState} from 'react'

import { Item } from '../components/Item'
import { Navbar } from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = (props) => {
    const [pageIndex, setPageIndex] = useState(0)
    const [order, setOrder] = useState([])
    const [items, setItems] = useState(props.items)

    const pages = [
        {
            title: 'FULL MENU',
            items: props.items,
            buttonText: 'Add to order',
            action: (item) => addItem(item)
        },
        {
            title: "MY ORDER",
            items: order,
            buttonText: 'Remove',
            action: (item) => removeItem(item)
        }
    ]
    
    const addItem = (item) => {
        setOrder(order.concat(item))
    }

    const removeItem = (item) => {
        order.pop(item)
        setOrder(order)
        setItems(order)
        console.log(items)
    }

    const showMenu = () => {
        setPageIndex(0)
        setItems(props.items)
    }

    const showOrder = () => {
        setPageIndex(1)
        setItems(order)
        console.log(items)
    }

    return <div>
        <Navbar text={pages[pageIndex].title}/>
        <div className={`card mt-5`} >
            <ul className={`list-group list-group-flush`}>
                {items.map(item => <li className={`list-group-item`}>
                        <Item data={item}/>
                        <div class="d-flex justify-content-end mb-1">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="Second group">
                                    <button onClick={() => pages[pageIndex].action(item)} type="button" class="btn btn-light border">{pages[pageIndex].buttonText}</button>
                                </div>
                            </div>       
                        </div>  
                    </li>
                )}
            </ul>
        </div>
        <Navbar bottom buttons={[
        {
            label: pages[0].title,
            action: () => showMenu()
        },
        {
            label: pages[1].title,
            action: () => showOrder()
        }
        ]}/>
    </div>
}