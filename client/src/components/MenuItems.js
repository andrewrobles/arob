import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

export const MenuItems = (props) => {
    return <div>
        {props.data.map(x => <MenuItem data={x}/>)}

    </div>
}

const MenuItem = (props) => {
    useEffect(() => { document.body.style.backgroundColor = 'black' }, [])
    return <div style={{
        backgroundColor: 'black',
        color: '#B49859',
        fontWeight: '500'
    }} className={`mb-1 ${props.data.name ? "mb-1": "mb-3"}`}>
        <div style={{fontSize: '18px'}}>{props.data.name ? props.data.name.toUpperCase(): ""}</div>
        <div style={{
            color: '#DCDCDC',
            lineHeight: '1.2',
            fontSize: '14px',
            fontWeight: '250'
        }}>{props.data.description}</div>
    </div>
}