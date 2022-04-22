export const OrderNumber = (props) => {
    return <div className='container-fluid vh-100 bg-success text-white text-center'>
        <div style={{paddingTop: '20%'}}><strong></strong></div>
        <div ><strong>YOUR ORDER NUMBER</strong></div>
        <div style={{fontSize: '200px'}}>{props.value}</div>
    </div>
}