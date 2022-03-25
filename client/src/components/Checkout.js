import { List } from './List';

import "bootstrap";

export const Checkout = (props) => {
    return <div>
        <div className='card rounded-0 border-0 fixed-bottom'>
            <button type="button" className="btn btn-lg btn-warning btn-block rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Checkout now
            </button>
        </div>
        
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"><strong>Your Order</strong></h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <List items={props.items} buttonText={props.listButtonText} buttonAction={props.listButtonAction}/>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-lg btn-light border" data-bs-dismiss="modal">Order More</button>
                <button onClick={props.buttonAction} type="button" className="btn btn-lg btn-warning">Choose Payment</button>
            </div>
            </div>
        </div>
        </div>
    </div>
}