import { FiSearch } from "react-icons/fi";
import "./style.css";
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep.." />
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
      <main className="main">
        <h2>CEP: 21910110</h2>
        <span>Rua Doutor Claudio Luis</span>
        <span>Complemento: apto 302</span>
        <span>Bancarios</span>
        <span>Rio de Janeiro - RJ</span>
      </main>
    </div>
  );
}

export default App;
