import { MenuItems } from '../components/MenuItems'
import 'bootstrap/dist/css/bootstrap.min.css'


export const FullMenu = (props) => {
    return <div style={{
        color: '#B7142D',
        fontSize: '18px',
        fontWeight: '350',
        paddingLeft: '50px',
        paddingRight: '50px',
        paddingTop: '20px'
    }}>
    <div class="row">
        <div class="col d-flex justify-content-center text-center" style={{
            color: '#DCDCDC', 
            fontFamily: 'LucidaHandwriting',
            fontSize: '40px'
            }}>
        YOWAY SIGNATURES
        </div>
    </div>
    <div className="row">
      <div className="col-8" style={{fontFamily: 'LucidaHandwriting', fontSize: '25px'}} >
        SANDWHICHES
        <ColoredLine color="#B7B7B7"/>
      </div>
      <div className="col" style={{fontFamily: 'LucidaHandwriting', fontSize: '25px'}}>
        SALADS
        <ColoredLine color="#B7B7B7"/>
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
        <MenuItems data={props.data.slice(15, 19)} />
        
      <div style={{
          border: '1px solid #B7B7B7',
          marginTop: '20px',
          paddingTop: '5px',
          paddingLeft: '10px',
          marginRight: '200px'
        }}>
            <div style={{
                marginRight: '50px'
            }}>
                <div style={{fontFamily: 'LucidaHandwriting', fontSize: '25px'}}>
        Add-Ons
      </div>
                <MenuItems data={props.data.slice(19, 23)} />
            </div>
      </div>
      </div>
    </div>
  </div>
}

const ColoredLine = ({ color }) => (
    <div
      style={{
        color,
        backgroundColor: color,
        height: 1,
        marginRight: '20px'
      }}
    />
  );
 