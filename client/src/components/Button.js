export const Button = (props) => {
    const styles = {
        primary: "btn btn-primary",
        light: "btn btn-light"
    }

    return <button onClick={props.onClick} class={`btn btn-primary`} type="button">
        {props.children}
    </button>
}