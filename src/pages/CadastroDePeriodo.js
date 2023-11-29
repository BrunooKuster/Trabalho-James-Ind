import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState} from 'react';

function CadastroDePeriodo() { 
    const [abrirPaginaDePeriodo, setabrirPaginaDePeriodo] = useState(false);
    const [dadosFormulario, setDadosFormulario] = useState({
      numeroDoPeriodo: '',
      semestre: '',
      dataInicio: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      dataFim: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate() + 1}`,
      turno:'',
      curso:''
    });
    const handleClose = () => setabrirPaginaDePeriodo(false);
    const handleShow = () => setabrirPaginaDePeriodo(true);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setDadosFormulario({ ...dadosFormulario, [name]: value });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (localStorage.getItem('periodos') != null) {
        let valorFinal = localStorage.getItem('periodos') + JSON.stringify(dadosFormulario);
        localStorage.setItem('periodos', valorFinal)
      } else {
        localStorage.setItem('periodos', JSON.stringify(dadosFormulario))
      }
      setDadosFormulario({
        numeroDoPeriodo: '',
        semestre: '',
        dataInicio: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
        dataFim: `${new Date().getYear()}-${new Date().getMonth()}-${new Date().getDate() + 1}`,
        turno:'',
        curso:''
      });
    }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cadastro de período
      </Button>
      
      <Modal show={abrirPaginaDePeriodo} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pagina de Período</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="CadastroDePeriodo"> 
            <Form.Group controlId="numeroDoPeriodo">
              <Form.Label>Número do período</Form.Label>
              <Form.Control onChange={handleInputChange} name="numeroDoPeriodo" value={dadosFormulario.numeroDoPeriodo} type="number"/>
            </Form.Group>
            <Form.Group controlId="semestre">
              <Form.Label>Semestre/ano do período</Form.Label>
              <Form.Control onChange={handleInputChange} name="semestre" value={dadosFormulario.semestre} type= "number"/>
            </Form.Group>
            <Form.Group controlId= "dataInicio">
              <Form.Label>Data início</Form.Label>
              <Form.Control onChange={handleInputChange} name="dataInicio" value={dadosFormulario.dataInicio} type="date"/>
            </Form.Group>
            <Form.Group controlId= "dataFim">
              <Form.Label>Data fim</Form.Label>
              <Form.Control onChange={handleInputChange} name="dataFim" value={dadosFormulario.dataFim} type="date"/>
            </Form.Group>
            <Form.Group controlId= "turno">
              <Form.Label>Turnos</Form.Label>
              <Form.Select onChange={handleInputChange} name="turno">
                <option>Matutino</option>
                <option>Vespertino</option>
                <option>Noturno</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId= "cursos">
              <Form.Label>Cursos</Form.Label>
              <Form.Select onChange={handleInputChange} name="cursos">
                {
                  localStorage.getItem("curso") != null &&
                    JSON.parse(localStorage.getItem("curso")).map(
                      curso => (
                        <option>{curso.nomeCurso}</option>
                      )
                    )
                }
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" >enviar</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
        
export default CadastroDePeriodo;