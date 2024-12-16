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
    if (numroTres !== "") {
      setNumroUm(numroTres);
      setNumroDois("");
      setNumroTres("");
      setSimbolo(s);
    } else if (numroUm !== "" && numroDois !== "") {
      if (simbolo === "+") {
        setNumroTres(parseFloat(numroDois) + parseFloat(numroUm));
      } else if (simbolo === "-") {
        setNumroTres(parseFloat(numroDois) - parseFloat(numroUm));
      } else if (simbolo === "X") {
        setNumroTres(parseFloat(numroDois) * parseFloat(numroUm));
      } else if (simbolo === "/") {
        setNumroTres(parseFloat(numroDois) / parseFloat(numroUm));
      }
      setSimbolo(s);
    } else {
      setSimbolo(s);
    }
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
    }

    setNumroTres(result);
  }

  function mostrarResultado() {
    if (numroTres !== "") {
      return numroTres;
    } else {
      let equacao = numroUm + " " + simbolo + " " + numroDois;
      return equacao;
    }
  }

  function mostrarEquacao() {
    if (numroTres !== "") {
      let equacao = numroUm + " " + simbolo + " " + numroDois;
      return equacao;
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
          <Botao color="#2E2E2E" text="±" onClick />
          <Botao color="#2E2E2E" text="0" onClick={() => adcNumero("0")} />
          <Botao color="#2E2E2E" text="," onClick={() => adcNumero(",")} />
          <Botao color="#2E2E2E" text="=" onClick={() => resultado()} />
        </div>
      </main>
    </>
  );
}

export default App;
