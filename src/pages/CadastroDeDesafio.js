import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

function CadastroDeDesafio() { 
  return (
    <div className="CadastroDeDesafio">
      <div>
        <Form.Label htmlFor="inputText">Nome do desafio</Form.Label>
        <Form.Control id="inputText" placeholder="Nome do desafio" type="text"/>
      </div>
      <div>
        <Form.Label>Períodos</Form.Label>
        <Form.Control placeholder="rever" type="text"/>
      </div>
      <div>
        <Form.Label>Professor</Form.Label>
        <Form.Control placeholder="rever" type="text"/>
      </div>
      <div>
        <Form.Label>Data início</Form.Label>
        <Form.Control value="2023-11-25" type="date"/>
      </div>
      <div>
        <Form.Label>Data fim</Form.Label>
        <Form.Control value="2023-11-25" type="date"/>
      </div>
      <div>
        <Form.Label>Dia da semana</Form.Label>
        <Form.Control placeholder="rever" type="text"/>
      </div>
      <div>
        <Form.Label>Horário</Form.Label>
        <Form.Control placeholder="rever" type="text"/>
      </div>
      <div>
        <Form.Label>Sala</Form.Label>
        <Form.Control placeholder="rever" type="text"/>
      </div>
    </div>
  );
}

export default CadastroDeDesafio;