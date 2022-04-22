import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu = (props) => {
    return <div>
        <List items={props.items}/>
        <div class="container">
            <nav class="navbar fixed-bottom navbar-light bg-light">       
                <div class="mx-auto" style={{width: "97%"}}>
                <button style={{width: "100%"}} type="button" class="btn btn-success btn-lg btn-block">SEND TO KITCHEN</button>
                </div>
            </nav>
        </div>
    </div>
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
        <div className='d-flex justify-content-between'>
            <div>
                {props.data.description}
            </div>
            <div class="form-check">
                <input class="form-check-input" style={{width: '30px', height: '30px'}} type="checkbox" value="" id="flexCheckDefault"/>
            </div>
        </div>
    </div>
}