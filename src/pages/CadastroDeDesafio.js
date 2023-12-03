import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';

function CadastroDeDesafio() { 
  const [abrirPaginaDoDesafio, setAbrirPaginaDeDesafio] = useState(false);
  const [dadosFormulario, setDadosFormulario] = useState({
    nomeDoDesafio:'',
    periodos:'',
    professor:'',
    dataInicio: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    dataFim: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate() + 1}`,
    diaDaSemana:'',
    horario:'',
    sala:''
  });
  
  const handleClose = () => setAbrirPaginaDeDesafio(false);
  const handleShow = () => setAbrirPaginaDeDesafio(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDadosFormulario({ ...dadosFormulario, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (localStorage.getItem('desafio') != null) {
      let valorFinal = JSON.parse(localStorage.getItem('desafio'))
      valorFinal.push(dadosFormulario)
      localStorage.setItem('desafio', JSON.stringify(valorFinal))
    } else {
      localStorage.setItem('desafio', JSON.stringify([dadosFormulario]))
    }

    let listaDeProfessor = JSON.parse(localStorage.getItem('professor'))
    listaDeProfessor
      .filter(professor => professor.nomeDoProfessor == dadosFormulario.professor)
      .forEach(professor => professor.desafioAssociado = dadosFormulario.nomeDoDesafio)

    let listaDePeriodos = JSON.parse(localStorage.getItem('periodos'))
    listaDePeriodos
      .filter(periodos => periodos.numeroDoPeriodo == dadosFormulario.periodos)
      .forEach(periodos => periodos.desafioAssociado.push(dadosFormulario))

    setDadosFormulario({
      nomeDoDesafio:'',
      periodos:'',
      professor:'',
      dataInicio: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      dataFim: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate() + 1}`,
      diaDaSemana:'',
      horario:'',
      sala:''
    });
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cadastro de Desafio
      </Button>

      <Modal show={abrirPaginaDoDesafio} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro de Desafio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="cadastroDeDesafio"> 
            <Form.Group controlId="nomeDoDesafio">
              <Form.Label>Nome do Desafio</Form.Label>
              <Form.Control onChange={handleInputChange} name="nomeDoDesafio" value={dadosFormulario.nomeDoDesafio} type="text"/>
            </Form.Group>
            <Form.Group controlId="periodos">
              <Form.Label>Periodos</Form.Label>
              <Form.Select onChange={handleInputChange} name="periodos">
                {
                  localStorage.getItem("periodos") != null &&
                    JSON.parse(localStorage.getItem("periodos"))
                      .map((periodos) => (
                        <option value={periodos.numeroDoPeriodo}>{periodos.numeroDoPeriodo}</option>
                      ))
                }
              </Form.Select>
            </Form.Group>
            <Form.Group controlId= "professor">
              <Form.Label>Professor</Form.Label>
              <Form.Select onChange={handleInputChange} name="professor">
                {
                  localStorage.getItem("professor") != null &&
                    JSON.parse(localStorage.getItem("professor"))
                      .filter((professor) => professor.desafioAssociado == null)
                      .map((professor) => (
                        <option value={professor.nomeDoProfessor}>{professor.nomeDoProfessor}</option>
                      ))
                }
              </Form.Select>
            </Form.Group>
            <Form.Group controlId= "dataInicio">
              <Form.Label>Data Início</Form.Label>
              <Form.Control onChange={handleInputChange} name="dataInicio" value={dadosFormulario.dataInicio} type="date"/>
            </Form.Group>
            <Form.Group controlId= "dataFim">
              <Form.Label>Data Fim</Form.Label>
              <Form.Control onChange={handleInputChange} name="dataFim" value={dadosFormulario.dataFim} type="date"/>
              </Form.Group>
            <Form.Group controlId="diaDaSemana">
              <Form.Label>Dia da semana</Form.Label>
              <Form.Select onChange={handleInputChange} name="diaDaSemana">
                <option value="segunda">Segunda-feira</option>
                <option value="terca">Terça-feira</option>
                <option value="quarta">Quarta-feira</option>
                <option value="quinta">Quinta-feira</option>
                <option value="sexta">Sexta-feira</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId= "horario">
              <Form.Label>Horário</Form.Label>
              <Form.Control onChange={handleInputChange} name="horario" value={dadosFormulario.horario} type="text"/>       
            </Form.Group>  
            <Form.Group controlId= "sala">
              <Form.Label>Salas</Form.Label>
              <Form.Select onChange={handleInputChange} name="sala">
                {
                  localStorage.getItem("salas") != null &&
                    JSON.parse(localStorage.getItem("salas")).map(
                      salas => (
                        <option value={salas.andar}>Andar:{salas.andar} Número:{salas.numero}</option>
                      )
                    )
                }
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">enviar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CadastroDeDesafio;