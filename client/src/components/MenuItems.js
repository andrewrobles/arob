import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

export const MenuItems = (props) => {
    return <div>
        <MenuItem data={props.data[0]}/>
        <MenuItem data={props.data[1]}/>
        <MenuItem data={props.data[2]}/>
        <MenuItem data={props.data[3]}/>
        <MenuItem data={props.data[4]}/>
        <MenuItem data={props.data[5]}/>
        <MenuItem data={props.data[6]}/>
    </div>
}

const MenuItem = (props) => {
    useEffect(() => { document.body.style.backgroundColor = 'black' }, [])
    return <div style={{
        backgroundColor: 'black',
        color: '#B49859',
        fontWeight: '500'
    }} className={`mb-1`}>
        <div style={{fontSize: '18px'}}>{props.data.name.toUpperCase()}</div>
        <div style={{
            color: '#DCDCDC',
            lineHeight: '1.2',
            fontSize: '14px',
            fontWeight: '250'
        }}>{props.data.description}</div>
    </div>
}