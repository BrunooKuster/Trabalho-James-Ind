import CadastroCurso from "./pages/CadastroCurso.js";
import CadastroDePeriodo from "./pages/CadastroDePeriodo.js";
import CadastroProfessor from "./pages/CadastroProfessor.js";
import CadastroDeSalas from "./pages/CadastroDeSalas.js";
import CadastroDeDesafio from "./pages/CadastroDeDesafio.js";
import CalendarioDeHorarios from "./pages/CalendarioDeHorarios.js";

function App() {

  return (
    <div className="App">
      <CadastroCurso/>
      <CadastroDePeriodo/>
      <CadastroProfessor/>
      <CadastroDeSalas/>
      <CadastroDeDesafio/>
    </div>
  );
}

export default App;
