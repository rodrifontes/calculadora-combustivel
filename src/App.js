import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [precoAlcool, setPrecoAlcool] = useState();
  const [precoGasolina, setPrecoGasolina] = useState();

  function calcular() {
    if (precoAlcool && precoGasolina) {
      if (precoAlcool / precoGasolina < 0.7) {
        alert(`Vale mais a pena abastecer com ÁLCOOL`);
      } else {
        alert(`Vale mais a pena abastecer com GASOLINA`);
      }
    } else {
      alert('Preencha o preço do Álcool e da Gasolina!');
    }
  }

  return (

    <div className="Container">

      <header>
        <img src={logo} className="Logo" alt="logo" />
      </header>

      <main>
        <h1>
          Qual a melhor opção?
        </h1>

        <label>Álcool (preço por litro): </label>
        <input
          type="text"
          name="Name"
          value={precoAlcool}
          onChange={e => setPrecoAlcool(e.target.value)}
        />

        <label>Gasolina (preço por litro): </label>
        <input
          type="text"
          name="Name"
          value={precoGasolina}
          onChange={e => setPrecoGasolina(e.target.value)}
        />

        <button onClick={calcular}>Calcular</button>
      </main>

    </div>
  );
}

export default App;
