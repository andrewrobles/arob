import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = (props) => {
    return <div className={`card`} >
        <ul className={`list-group list-group-flush`}>
            {props.items.map(item => <li className={`list-group-item`}>
                    <h5 className={`card-title`}>{item.name}</h5>
                    <p className={`card-text`}>{item.ingredients}</p>
                </li>
            )}
        </ul>
    </div>
}