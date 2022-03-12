import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = (props) => {
    return <div>
        <strong>{props.data.name.toUpperCase()}</strong>
        <div>
        {props.data.ingredients.join(', ').toUpperCase()}
        </div>
        {props.extras ? <Extras data={props.extras}/>: <></>}
    </div>
}

const Extras = (props) => {
    return <div>
        <strong>EXTRAS</strong>
        {props.data.map(extra => <div>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            {" " + extra + " "}
            </div>
            )}
    </div>
}