import { useState } from "react";

import "./App.css";

import Botao from "./components/botao/Botao";
// import TextArea from "./components/TextArea/TextArea";

function App() {
  const [numroUm, setNumroUm] = useState("");
  const [numroDois, setNumroDois] = useState("");
  const [numroTres, setNumroTres] = useState("");
  const [simbolo, setSimbolo] = useState("");

  function adcNumero(n) {
    if (numroTres !== "") {
      setNumroUm(n);
      setNumroDois("");
      setSimbolo("");
      setNumroTres("");
    } else if (simbolo === "") {
      let num = numroUm + n;
      setNumroUm(num);
    } else {
      let num = numroDois + n;
      setNumroDois(num);
    }
  }

  function conta(s) {
    if (numroUm !== "" && numroDois !== "" && s !== simbolo) {
      setNumroUm(resultado());
      limparDoisTres();
      setSimbolo(s);
    } else if (numroTres !== "") {
      setNumroUm(numroTres);
      limparDoisTres();
      setSimbolo(s);
    } else if (numroUm !== "" && numroDois !== "" && simbolo === s) {
      setNumroUm(resultado());
      limparDoisTres();
      setSimbolo(s);
    } else {
      setSimbolo(s);
    }
  }

  function limparDoisTres() { 
    setNumroDois("");
    setNumroTres("");
  }
  function limpar() {
    setNumroUm("");
    setNumroDois("");
    setSimbolo("");
    setNumroTres("");
  }

  function apagarUltimo() {
    if (simbolo === "") {
      let num = numroUm.slice(0, -1);
      setNumroUm(num);
    } else if (simbolo !== "" && numroDois === "") {
      setSimbolo("");
    } else {
      let num = numroDois.slice(0, -1);
      setNumroDois(num);
    }
  }

  function resultado() {
    let result;
    if (simbolo === "+") {
      result = parseFloat(numroUm) + parseFloat(numroDois);
    } else if (simbolo === "-") {
      result = parseFloat(numroUm) - parseFloat(numroDois);
    } else if (simbolo === "X") {
      result = parseFloat(numroUm) * parseFloat(numroDois);
    } else if (simbolo === "/") {
      result = parseFloat(numroUm) / parseFloat(numroDois);
    } else if (simbolo === "%" && numroDois === "") {
      result = parseFloat(numroUm) / 100;
    } else if (simbolo === "%") {
      result = (parseFloat(numroUm) / 100) * parseFloat(numroDois);
    }
    return result;
  }

  function positivoNegativo() {
    if (numroTres !== "") {
      let result = parseFloat(numroTres) * -1;
      setNumroTres(result);
    } else if (simbolo === "") {
      let result = parseFloat(numroUm) * -1;
      setNumroUm(result);
    } else {
      let result = parseFloat(numroDois) * -1;
      setNumroDois(result);
    }
  }

  function mostrarResultado() {
    if (numroTres !== "") {
      // Formata o número três para exibir entre parênteses, se negativo
      return formatarNumero(numroTres);
    } else {
      // Retorna a equação formatada
      let equacao = `${formatarNumero(numroUm)} ${simbolo} ${formatarNumero(
        numroDois
      )}`;
      return equacao;
    }
  }

  function mostrarEquacao() {
    if (numroTres !== "") {
      // Mostra a equação completa com valores formatados
      let equacao = `${formatarNumero(numroUm)} ${simbolo} ${formatarNumero(
        numroDois
      )}`;
      return equacao;
    }
  }

  function formatarNumero(numero) {
    // Adiciona parênteses apenas para números negativos
    return numero < 0 ? `(${numero})` : numero;
  }

  function adicionarPonto() {
    if (numroUm === "" && numroDois === "" && simbolo === "") {
      setNumroUm("0.");
    } else if (!numroUm.includes(".") && numroDois === "" && simbolo === "") {
      let num = numroUm + ".";
      setNumroUm(num);
    } else if (numroUm !== "" && simbolo !== "" && numroDois === ""  && numroTres === "") {
      setNumroDois("0.");
    } else if (!numroDois.includes(".") && simbolo !== "" && numroTres === "") {
      let num = numroDois + ".";
      setNumroDois(num);
    }
  }

  return (
    <>
      <main>
        <header>config</header>

        <div className="displayBox">
          <p className="equacao">{mostrarEquacao()}</p>
          <p className="solucao">{mostrarResultado()}</p>
        </div>

        <div className="buttonsBox flex flex-wrap gap-1.5">
          <Botao color="#2E2E2E" text="C" onClick={() => limpar()} />
          <Botao color="#2E2E2E" text="⌫" onClick={() => apagarUltimo()} />
          <Botao color="#2E2E2E" text="%" onClick={() => conta("%")} />
          <Botao color="#2E2E2E" text="/" onClick={() => conta("/")} />
          <Botao color="#2E2E2E" text="7" onClick={() => adcNumero("7")} />
          <Botao color="#2E2E2E" text="8" onClick={() => adcNumero("8")} />
          <Botao color="#2E2E2E" text="9" onClick={() => adcNumero("9")} />
          <Botao color="#2E2E2E" text="X" onClick={() => conta("X")} />
          <Botao color="#2E2E2E" text="4" onClick={() => adcNumero("4")} />
          <Botao color="#2E2E2E" text="5" onClick={() => adcNumero("5")} />
          <Botao color="#2E2E2E" text="6" onClick={() => adcNumero("6")} />
          <Botao color="#2E2E2E" text="-" onClick={() => conta("-")} />
          <Botao color="#2E2E2E" text="1" onClick={() => adcNumero("1")} />
          <Botao color="#2E2E2E" text="2" onClick={() => adcNumero("2")} />
          <Botao color="#2E2E2E" text="3" onClick={() => adcNumero("3")} />
          <Botao color="#2E2E2E" text="+" onClick={() => conta("+")} />
          <Botao color="#2E2E2E" text="±" onClick={() => positivoNegativo()} />
          <Botao color="#2E2E2E" text="0" onClick={() => adcNumero("0")} />
          <Botao color="#2E2E2E" text="." onClick={() => adicionarPonto()} />
          <Botao
            color="#2E2E2E"
            text="="
            onClick={() => setNumroTres(resultado())}
          />
        </div>
      </main>
    </>
  );
}

export default App;
