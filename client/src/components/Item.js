import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = (props) => {
    return <div>
        <strong>{props.data.name}</strong>
        <div>
        {props.data.ingredients.join(', ')}
        </div>
    </div>
}