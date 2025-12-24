import React, { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";

const TodoItem = ({
  todo,
  handleDeleteTodoChange,
  handleToggleComplete,
  handleUpdateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.data);

  const handleSave = () => {
    handleUpdateTodo(todo.id, editText);
    setIsEditing(false);
  };
  return (
    <div className="col-12 mb-3">
      <ItemContainer>
        <TodoText className="d-flex align-items-center justify-content-between w-100">
          <i
            className={
              todo.isComplete
                ? "cw-icon bi bi-check-circle-fill text-success me-2 bi-3x"
                : "cw-icon bi bi-circle me-2 bi-lg bi-3x"
            }
            onClick={() => handleToggleComplete(todo.id)}
          ></i>

          {!isEditing ? (
            <span
              className="tk-todotext d-flex align-items-center justify-content-between flex-grow-1"
              onClick={() => setIsEditing(true)}
            >
              <span>{todo.data}</span>
              <i className="bi bi-pencil-square ms-2"></i>{" "}
              {/* icon on the right */}
            </span>
          ) : (
            <Form.Control
              className="mute py-3"
              size="lg"
              type="text"
              value={editText}
              placeholder="update Text"
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleSave}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />
          )}
        </TodoText>

        <DeleteButton
          variant="danger p-2 rounded"
          size="sm"
          type="button"
          onClick={(e) => handleDeleteTodoChange(todo.id)}
        >
          Delete <i className="bi bi-trash3 me-1"></i>
        </DeleteButton>
      </ItemContainer>
    </div>
  );
};

const ItemContainer = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .tk-todotext {
    font-size: 18px;
    color: #030303ff;
    flex: 1; /* let it grow if needed */
    word-break: break-word; /* handle long text */
  }
`;

const TodoText = styled.p`
  margin: 0;
  flex: 1;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.5;

  i {
    color: #cccccc;
    flex-shrink: 0;
    font-size: 24px;
  }

  span {
    display: inline;
  }
`;

const DeleteButton = styled(Button)`
  flex-shrink: 0;
  white-space: nowrap;
  background-color: #f88181ff;
`;

export default TodoItem;
