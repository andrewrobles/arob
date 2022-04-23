export const FoodItemList = (props) => {    
    return <div>
            <div className={`card`} style={{marginBottom: '100px'}}>
            <ul className={`list-group list-group-flush`}>
                {props.items.map((item, index) => <li key={index} className={`list-group-item`}>
                        <Item data={item} controls={props.controls}/>
                    </li>
                )}
            </ul>
        </div>
    </div>
}

const Item = (props) => {
    return <div>
        <h2>{props.data.name} {props.data.number ? <span class="badge bg-primary">Order {props.data.number}</span> : null}</h2>
        <div className='d-flex justify-content-between'>
            <div>
                {props.data.description}
            </div>
            <div className='mb-4'>
                {props.controls}
            </div>
        </div>
    </div>
}

