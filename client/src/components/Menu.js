import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = (props) => {
    return <List items={props.items}/>
}

const List = (props) => {    
    return <div>
            <div className={`card`}>
            <ul className={`list-group list-group-flush`}>
                {props.items.map((item, index) => <li key={index} className={`list-group-item`}>
                        <Item data={item}/>
                    </li>
                )}
            </ul>
        </div>
    </div>
}

const Item = (props) => {
    return <div>
        <strong>{props.data.name}</strong>
        <div>
        {props.data.description}
        </div>
    </div>
}