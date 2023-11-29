import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

function CadastroProfessor() {
  return (
    <div className="CadastroDeProfessor">
      <div>
        <Form.Label htmlFor="inputText">Nome de professor</Form.Label>
        <Form.Control id="inputText" placeholder="Nome do professor" type="text"/>
      </div>
      <div>
        <Form.Label htmlFor="inputNumber">Matrícula</Form.Label>
        <Form.Control id="inputNumber" type="number"/>
      </div>
      <div>
        <Form.Label htmlFor="inputNumber">Telefone celular</Form.Label>
        <Form.Control id="inputNumber" type="number"/>
      </div>
    </div>
  )  
}

export default CadastroProfessor;