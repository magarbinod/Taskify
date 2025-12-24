import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components"

const TodoForm = ({handleInputTodoChange, handleAddTodoChange, inputText }) => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-8">
          <Form.Control className="mute py-3"
            size="lg"
            type="text"
            value={inputText}
            placeholder="What needs to be done?"
            onChange={handleInputTodoChange}
          />
        </div>
        <div className="col-lg-4">
          <AddButton variant="primary w-100 h-100" onClick={handleAddTodoChange}>
            Add Task
          </AddButton>
        </div>
      </div>
    </>
  );
};

const AddButton = styled(Button)`
    background-color:#C084FC; 
    border: none;
`

export default TodoForm;
