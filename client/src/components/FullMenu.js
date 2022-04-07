import { MenuItems } from '../components/MenuItems'

import 'bootstrap/dist/css/bootstrap.min.css';


export const FullMenu = (props) => {
    return <div style={{
        color: '#B7142D',
        fontSize: '18px',
        fontWeight: '350'
    }}>
    <div class="row">
      <div class="col-8">
        SANDWHICHES
      </div>
      <div class="col">
        SALADS
      </div>
    </div>
    <div class="row">
      <div class="col">
        <MenuItems data={props.data} />
      </div>
      <div class="col">
        <MenuItems data={props.data} />
      </div>
      <div class="col">
        <MenuItems data={props.data} />
      </div>
    </div>
  </div>
}