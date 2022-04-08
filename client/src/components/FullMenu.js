import { MenuItems } from '../components/MenuItems'
import 'bootstrap/dist/css/bootstrap.min.css'


export const FullMenu = (props) => {
    return <div style={{
        color: '#B7142D',
        fontSize: '18px',
        fontWeight: '350'
    }}>
    <div class="row">
        <div class="col d-flex justify-content-center text-center" style={{
            color: '#DCDCDC', 
            fontFamily: 'LucidaHandwriting',
            fontSize: '30px'
            }}>
        YOWAY SIGNATURES
        </div>
    </div>
    <div className="row">
      <div className="col-8" style={{fontFamily: 'LucidaHandwriting', fontSize: '25px',}} >
        SANDWHICHES
        {/* <ColoredLine color="#DCDCDC" /> */}
      </div>
      <div className="col" style={{fontFamily: 'LucidaHandwriting', fontSize: '25px'}}>
        SALADS
        {/* <ColoredLine color="#DCDCDC" /> */}
      </div>
    </div>
    <div className="row">
      <div className="col">
        <MenuItems data={props.data.slice(0, 7)} />
      </div>
      <div className="col">
        <MenuItems data={props.data.slice(7, 15)} />
      </div>
      <div className="col">
        <MenuItems data={props.data.slice(7, 15)} />
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
 