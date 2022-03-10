import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Field = (props) => {
  const isInvalid = props.invalid ? 'is-invalid' : ''

  return <div className={`form-group`}>
    <label>
      { props.label }
    </label>
    <input 
      className={`form-control ${isInvalid}`} type="text" placeholder={`${ props.placeholder }`}
    />
    <div className={`invalid-feedback`}>
      {props.feedback}
    </div>
  </div>
}