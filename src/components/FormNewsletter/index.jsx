import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "./style.css";

var dataFormValues = {
  nomeCompleto: "",
  email: "",
};

export function FormNewsletter() {
  const [dataForm, setDataForm] = useState(dataFormValues);

  function handleSetDataForm(key, value) {
    setDataForm({
      ...dataForm,
      [key]: value,
    });
    return;
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    alert(
      `Assinatura registrada com sucesso. Obrigado ${dataForm.nomeCompleto}.`
    );

    return clearForm();
  }

  function clearForm() {
    setDataForm(dataFormValues);
  }

  return (
    <Container
      id="bg_form_newsletter"
      fluid
      className="p-4 newsletter-container"
    >
      <Container>
        <Row>
          <Col lg={6}>
            <Form
              id="newsletter"
              onSubmit={(e) => handleSubmitForm(e)}
              className="m-auto m-lg-0"
            >
              <legend>Informações pessoais</legend>
              <Form.Group className="mb-3">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira seu nome completo"
                  value={dataForm?.nomeCompleto}
                  onChange={(e) =>
                    handleSetDataForm("nomeCompleto", e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Seu melhor e-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Insira seu melhor e-mail"
                  value={dataForm?.email}
                  onChange={(e) => handleSetDataForm("email", e.target.value)}
                />
              </Form.Group>
              <div
                className="btn-form-newletter btn-form"
                type="submit"             
              >
                Assinar
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
