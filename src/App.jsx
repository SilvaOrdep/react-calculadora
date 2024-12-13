import './App.css'

import Botao from './components/botao/Botao'


function App() {

  return (
    <>
      <Botao color='#2E2E2E' text='C' onClick={() => console.log('Adicionado')} />
    </>
  )
}

export default App