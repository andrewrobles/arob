import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = (props) => {
    const fixedPosition = props.bottom ? "fixed-bottom" : "fixed-top"
    return <nav className={`navbar ${fixedPosition} navbar-expand-lg navbar-light bg-light`}>
        <div className="">
            <div className="mx-3">
                <h2><strong>{props.text}</strong></h2>
            </div>
            <Buttons buttons={props.buttons}/>
        </div>
    </nav>
}

const Buttons = (props) => {
    if (props.buttons === undefined) return <></> 

    return <div className="d-flex justify-content-end mb-1">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        {
            props.buttons.map((button, index) => 
                <div key={index} className="btn-group me-2" role="group" aria-label="First group">
                    <button onClick={button.action} type="button" className="btn btn-lg btn-light border">
                        <strong>{button.text}</strong>
                    </button>
                </div>
            )
        }
    </div>       
</div>  
}