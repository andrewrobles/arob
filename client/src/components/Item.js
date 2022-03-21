import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = (props) => {
    return <div>
        <strong>{props.data.name}</strong>
        <div>
        {props.data.ingredients.join(', ')}
        </div>
        {props.extras ? <Extras data={props.extras}/>: <></>}
    </div>
}

const Extras = (props) => {
    return <div>
        <strong>EXTRAS</strong>
        {props.data.map((extra, index) => <div key={index}>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            {" " + extra + " "}
            </div>
            )}
    </div>
}