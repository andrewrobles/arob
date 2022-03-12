import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = (props) => {
    return <div className={`card`} >
        <div className={`card-body`}>
            <div className={`form-check`}>
                <input className={`form-check-input`} type="checkbox"/>
                <h5 className={`card-title`}>{props.data.name}</h5>
                <p className={`card-text`}>{props.data.ingredients}</p>
            </div>
        </div>
    </div>
}