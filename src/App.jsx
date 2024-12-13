import "./App.css";

import Botao from "./components/botao/Botao";
import TextArea from "./components/TextArea/TextArea";

function App() {
  return (
    <>
      <main>
        <header>
          config
        </header>
        <TextArea
          numroUm={0}
          numroDois={0}
          simbolo={"+"}
        ></TextArea>

        <div className="buttonsBox">
          
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="C"
            onClick={() => console.log("Adicionado")}
          />
        </div>
      </main>
    </>
  );
}

export default App
