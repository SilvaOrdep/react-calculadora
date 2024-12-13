import "./Botao.css";

import PropTypes from 'prop-types';

function Botao({ color, text, onClick }) {
  return (  
    <button className='botao' style={{ color: color }} onClick={onClick}>{text}</button>
  );
}

Botao.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Botao;