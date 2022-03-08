export const Button = (props) => {
    const styles = {
        primary: "bg-blue-500 hover:bg-blue-700 text-white rounded",
        light: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 rounded shadow"
    }

    return <button onClick={props.action} class={`font-['Inter'] ${styles[props.style]} font-bold py-2 px-4`} type="button">
        {props.text}
    </button>
}