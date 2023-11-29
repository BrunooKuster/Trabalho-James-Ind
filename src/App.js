import CadastroCurso from "./pages/CadastroCurso.js";
import CadastroDePeriodo from "./pages/CadastroDePeriodo.js";
import CadastroProfessor from "./pages/CadastroProfessor.js";
import CadastroDeSalas from "./pages/CadastroDeSalas.js";
import CadastroDeDesafio from "./pages/CadastroDeDesafio.js";
import CalendarioDeHorarios from "./pages/CalendarioDeHorarios.js";
import Button from 'react-bootstrap/Button';

function App() {
  const clicado = e => {
    console.log("curso: " + localStorage.getItem("curso"))
    console.log("salas: " + localStorage.getItem("salas"))
  }

  return (
    <div className="App">
      <CadastroCurso/>
      <CadastroDeSalas/>
      <CadastroDePeriodo/>
      <Button variant="primary" onClick={clicado}>Mostra Dados</Button>
    </div>
  );
}

export default App;
