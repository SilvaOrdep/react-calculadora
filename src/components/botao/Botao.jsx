import "./Botao.css";
import PropTypes from "prop-types";

function Botao({ color, text, onClick }) {
  return (
    <button
      className="
        botao
        dark:bg-lightGray dark:bg-opacity-50
        dark:border-darkGray dark:border-opacity-70
        "
      style={{ color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Botao.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Botao;
