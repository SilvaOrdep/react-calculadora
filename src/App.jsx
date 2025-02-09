import { useState } from "react";

import "./App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Botao from "./components/botao/Botao";
// import TextArea from "./components/TextArea/TextArea";

function App() {
  const [numroUm, setNumroUm] = useState("");
  const [numroDois, setNumroDois] = useState("");
  const [numroTres, setNumroTres] = useState("");
  const [simbolo, setSimbolo] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

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

  function removeTrailingDot(num) {
    const numStr = num.toString();
    if (numStr.includes(".") && numStr.split(".")[1] === "") {
      return numStr.split(".")[0];
    }
    return num;
  }

  function conta(s) {
    if (numroUm === "") return;
    setNumroUm(removeTrailingDot(numroUm));

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
    if (numroDois === "") {
      // Se for porcentagem, calcula numroUm/100
      if (simbolo === "%") {
        result = parseFloat(numroUm) / 100;
      } else {
        // Se não houver numroDois, retorna numroUm sem alterar
        return numroUm;
      }
    } else {
      // Remove ponto flutuante redundante antes de calcular
      setNumroDois(removeTrailingDot(numroDois));
      if (simbolo === "+") {
        result = parseFloat(numroUm) + parseFloat(numroDois);
      } else if (simbolo === "-") {
        result = parseFloat(numroUm) - parseFloat(numroDois);
      } else if (simbolo === "x") {
        result = parseFloat(numroUm) * parseFloat(numroDois);
      } else if (simbolo === "/") {
        result = parseFloat(numroUm) / parseFloat(numroDois);
        if (result.toString().split(".")[1]?.length >= 10) {
          return result.toExponential();
        }
      } else if (simbolo === "%" && numroDois !== "") {
        result = (parseFloat(numroUm) / 100) * parseFloat(numroDois);
      }
    }

    result = parseFloat(result.toFixed(10));

    return result >= 1000000000 || result <= -1000000000
      ? result.toExponential()
      : result;
  }

  function positivoNegativo() {
    const flipSign = (n) => {
      let str = n.toString();
      // Se já estiver em notação científica, apenas adiciona ou remove o sinal
      if (str.includes("e")) {
        return str.startsWith("-") ? str.slice(1) : "-" + str;
      }
      let num = parseFloat(n);
      if (isNaN(num)) return n;
      num *= -1;
      // Se o número excede os limites, formata para notação científica
      if (
        Math.abs(num) >= 1000000000 ||
        (Math.abs(num) < 0.0001 && num !== 0)
      ) {
        return num.toExponential();
      }
      return num.toString();
    };

    if (numroTres !== "") {
      setNumroTres(flipSign(numroTres));
    } else if (simbolo === "") {
      if (numroUm !== "") {
        setNumroUm(flipSign(numroUm));
      }
    } else {
      if (numroDois !== "") {
        setNumroDois(flipSign(numroDois));
      }
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
    if (numroTres !== "" && !numroTres.toString().includes(".")) {
      limparDoisTres();
      setSimbolo("");
      setNumroUm(numroTres + ".");
    } else if (numroUm === "" && numroDois === "" && simbolo === "") {
      setNumroUm("0.");
    } else if (
      !numroUm.toString().includes(".") &&
      numroDois === "" &&
      simbolo === ""
    ) {
      setNumroUm(numroUm + ".");
    } else if (numroUm !== "" && simbolo !== "" && numroDois === "") {
      setNumroDois("0.");
    } else if (!numroDois.toString().includes(".") && simbolo !== "") {
      setNumroDois(numroDois + ".");
    }
  }

  return (
    <>
      <main className={`${darkMode ? "dark" : ""}`}>
        <header>
          <button
            className="botaoDark w-16 bottom-16 right-16 m-2 p-2 bg-cinza dark:bg-lightGray rounded-full text-black dark:text-black"
            onClick={toggleDarkMode}
          >
            {darkMode ? <i className="bi bi-lightbulb-fill"></i> : <i className="bi bi-lightbulb"></i> }
            
          </button>
        </header>

        <div className="displayBox">
          <p className="equacao text-base text-end text-gray dark:text-lightGray">
            {mostrarEquacao()}
          </p>
          <p className="solucao text-5xl text-end text-darkGray dark:text-white">
            <span className="clip-left">
              <span>{mostrarResultado()}</span>
            </span>
          </p>
        </div>
        <div className={`${darkMode ? "dark" : ""}`}>
          <div className="buttonsBox flex flex-wrap gap-1.5">
            <Botao color="#2E2E2E" text="C" onClick={() => limpar()} />
            <Botao color="#2E2E2E" text="⌫" onClick={() => apagarUltimo()} />
            <Botao color="#2E2E2E" text="%" onClick={() => conta("%")} />
            <Botao color="#2E2E2E" text="/" onClick={() => conta("/")} />
            <Botao color="#2E2E2E" text="7" onClick={() => adcNumero("7")} />
            <Botao color="#2E2E2E" text="8" onClick={() => adcNumero("8")} />
            <Botao color="#2E2E2E" text="9" onClick={() => adcNumero("9")} />
            <Botao color="#2E2E2E" text="X" onClick={() => conta("x")} />
            <Botao color="#2E2E2E" text="4" onClick={() => adcNumero("4")} />
            <Botao color="#2E2E2E" text="5" onClick={() => adcNumero("5")} />
            <Botao color="#2E2E2E" text="6" onClick={() => adcNumero("6")} />
            <Botao color="#2E2E2E" text="-" onClick={() => conta("-")} />
            <Botao color="#2E2E2E" text="1" onClick={() => adcNumero("1")} />
            <Botao color="#2E2E2E" text="2" onClick={() => adcNumero("2")} />
            <Botao color="#2E2E2E" text="3" onClick={() => adcNumero("3")} />
            <Botao color="#2E2E2E" text="+" onClick={() => conta("+")} />
            <Botao
              color="#2E2E2E"
              text="±"
              onClick={() => positivoNegativo()}
            />
            <Botao color="#2E2E2E" text="0" onClick={() => adcNumero("0")} />
            <Botao color="#2E2E2E" text="." onClick={() => adicionarPonto()} />
            <Botao
              color="#2E2E2E"
              text="="
              onClick={() => setNumroTres(resultado())}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
