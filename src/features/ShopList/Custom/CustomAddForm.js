import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const CustomAddForm = props => {
  const {isShown} = props;
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    setName("");
    setUnit("");
    setAmount("");
  }, [setName, setUnit, setAmount, isShown]);

  const submitHandler = event => {
    event.preventDefault();
    props.onAdd({ name, unit, amount });
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={event => {
            setName(event.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Amount</Label>
        <Input
          type="text"
          name="amount"
          value={amount}
          onChange={event => {
            setAmount(event.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for="name">Unit</Label>
        <Input
          type="text"
          name="unit"
          value={unit}
          onChange={event => {
            setUnit(event.target.value);
          }}
        />
      </FormGroup>
      <Button color="success" type="submit">
        Add
      </Button>
      <Button color="danger" onClick={props.onClose} className="ml-2">
        Cancel
      </Button>
    </Form>
  );
};

export default CustomAddForm;
