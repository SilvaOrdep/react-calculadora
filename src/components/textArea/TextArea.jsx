import './textAreaStyle.css';
import PropTypes from 'prop-types';

function TextArea(  {numroUm, numroDois, simbolo}  ) {
  return (
    <div className="maintext">
      <p className="concatenador">
        {numroDois}	
      </p>
      <p className="numPrincipal">
        {simbolo} {numroUm}
      </p>
    </div>
  )
}

TextArea.propTypes = {
  numroUm: PropTypes.number.isRequired,
  numroDois: PropTypes.number.isRequired,
  simbolo: PropTypes.string.isRequired,
};

export default TextArea;

