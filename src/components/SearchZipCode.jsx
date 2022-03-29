import Button from "react-bootstrap/Button";
import { Card, Form, FormGroup } from "react-bootstrap/";
import React from "react";

export default function SearchZipCode(props) {
  const { onSearch } = props;

  let zipCode = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(zipCode);
  };

  const handleChange = (event) => {
    zipCode = event.target.value;
  };

  return (
    <Card style={{ width: "100%" }} className="mb-3">
      <Form action="#" onSubmit={handleSubmit} className="p-3">
        <FormGroup className="mb-3 mt-1">
          <Form.Control
            placeholder="Introduce el código postal"
            type="text"
            name="zip-code"
            id="zip-code"
            onChange={handleChange}
            size="lg"
            maxLength="5"
          />
        </FormGroup>

        <div className="d-grid gap-2">
          <Button as="input" type="submit" value="Obtener" variant="primary" />
        </div>
      </Form>
    </Card>
  );
}
