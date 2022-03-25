import { Item } from './Item'

export const List = (props) => {    
    return <div style={{minHeight: '100vh'}}>
            <div className={`card`}>
            <ul className={`list-group list-group-flush`}>
                {props.items.map((item, index) => <li key={index} className={`list-group-item`}>
                        <Item data={item}/>
                        <div className="d-flex justify-content-end mb-1">
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group" role="group" aria-label="Second group">
                                    <button onClick={() => props.buttonAction(index)} type="button" className="btn btn-light border">{props.buttonText}</button>
                                </div>
                            </div>       
                        </div>  
                    </li>
                )}
            </ul>
        </div>
    </div>
}