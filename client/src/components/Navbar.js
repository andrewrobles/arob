import 'bootstrap/dist/css/bootstrap.min.css';


export const Navbar = () => {
    return <nav class="navbar fixed-bottom navbar-expand-lg navbar-light bg-light">
        <div class="mx-auto">
            <div class="d-flex justify-content-end mb-1">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    
                    <div class="btn-group me-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-lg btn-light border"><strong>FULL MENU</strong></button>
                    </div>
                    <div class="btn-group" role="group" aria-label="Second group">
                        <button type="button" class="btn btn-lg btn-light border"><strong>MY ORDER</strong></button>
                    </div>
                </div>       
            </div>  
        </div>
    </nav>
}