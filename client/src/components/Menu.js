import {useState} from 'react'

import { Item } from '../components/Item'
import { Navbar } from '../components/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = (props) => {
    const [pageIndex, setPageIndex] = useState(0)

    const buttons = [
        {
            label: props.pages[0].title,
            action: () => setPageIndex(0)
        },
        {
            label: props.pages[1].title,
            action: () => setPageIndex(1)
        }
    ]

    return <div>
        <Navbar text={props.pages[pageIndex].title}/>
        <div className={`card mt-5`} >
            <ul className={`list-group list-group-flush`}>
                {props.pages[pageIndex].items.map(item => <li className={`list-group-item`}>
                        <Item data={item}/>
                        <div class="d-flex justify-content-end mb-1">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="Second group">
                                    <button type="button" class="btn btn-light border">Add to order</button>
                                </div>
                            </div>       
                        </div>  
                    </li>
                )}
            </ul>
        </div>
        <Navbar bottom buttons={buttons}/>
    </div>
}