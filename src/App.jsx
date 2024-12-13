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
            text="⌫"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="%"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="/"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="7"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="8"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="9"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="X"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="4"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="5"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="6"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="-"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="1"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="2"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="3"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="+"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="±"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="0"
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text=","
            onClick={() => console.log("Adicionado")}
          />
          <Botao
            color="#2E2E2E"
            text="="
            onClick={() => console.log("Adicionado")}
          />
        </div>
      </main>
    </>
  );
}

export default App
