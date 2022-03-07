export const Button = (props) => {
    return <button onClick={props.action} class="font-['Inter'] bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button">
        Log Out
    </button>
}