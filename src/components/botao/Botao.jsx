function Botao({ color, text, onClick }) {
  return (  
    <button style={ {color: color} } onClick={onClick}>{text}</button>
  )
}

export default Botao
