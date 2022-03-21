import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = (props) => {
    const fixedPosition = props.bottom ? "fixed-bottom" : "fixed-top"
    return <nav class={`navbar ${fixedPosition} navbar-expand-lg navbar-light bg-light`}>
        <div class="mx-auto">
            <h4><strong>{props.text}</strong></h4>
            <Buttons buttons={props.buttons}/>
        </div>
    </nav>
}

const Buttons = (props) => {
    if (props.buttons === undefined) return <></> 

    return <div class="d-flex justify-content-end mb-1">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        {
            props.buttons.map(button => 
                <div class="btn-group me-2" role="group" aria-label="First group">
                    <button onClick={button.action} type="button" class="btn btn-lg btn-light border">
                        <strong>{button.text}</strong>
                    </button>
                </div>
            )
        }
    </div>       
</div>  
}