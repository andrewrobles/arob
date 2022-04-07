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
        {/* <ColoredLine color="#DCDCDC" /> */}
      </div>
      <div class="col">
        SALADS
        {/* <ColoredLine color="#DCDCDC" /> */}
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

const ColoredLine = ({ color }) => (
    <div
      style={{
        color,
        backgroundColor: color,
        height: 1
      }}
    />
  );
 