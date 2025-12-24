import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap-icons/font/bootstrap-icons.css";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import styled from "styled-components";

const TodoList = () => {
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState("");

  // For updates

  //Function that handle the inputText
  const handleInputTodoChange = (e) => {
    setInputText(e.target.value);
  };

  //Function to add inputText data to listTodo
  const handleAddTodoChange = () => {
    if (inputText.length > 0) {
      const newTodoitem = {
        id: uuidv4(),
        data: inputText,
        date: new Date().toLocaleString(),
        isComplete: false,
      };
      setListTodo((prevTodo) => [...prevTodo, newTodoitem]);

      setInputText("");
      setError("");
    } else {
      setError("Input Is Empty");
    }
  };

  //Delete the item using filter
  const handleDeleteTodoChange = (id) => {
    const newTodoList = listTodo.filter((todoitem) => todoitem.id !== id);
    setListTodo(newTodoList);
  };

  //Toggle
  const handleToggleComplete = (id) => {
    setListTodo((prev) =>
      prev.map((currTodo) => {
        if (currTodo.id === id) {
          return { ...currTodo, isComplete: !currTodo.isComplete };
        } else {
          return currTodo;
        }
      })
    );
  };

  // Updates
  const handleUpdateTodo = (id, newText) => {
    setListTodo((prevTodo) =>
      prevTodo.map((currTodo) =>
        currTodo.id === id ? { ...currTodo, data: newText } : currTodo
      )
    );
  };

  // Total task
  const totalTask = listTodo.length;
  const completedTasks = listTodo.filter((todo) => todo.isComplete).length;

  return (
    <>
      <Wrapper className="tk-wrapper">
        <Header />

        {/* Todo Form html ================== */}

        <TodoForm
          inputText={inputText}
          handleInputTodoChange={handleInputTodoChange}
          handleAddTodoChange={handleAddTodoChange}
        />

        {/* TodoItem list Display================= */}
        <div className="row mt-4">
          {listTodo.map((currTodo) => {
            return (
              <>
                <TodoItem
                  key={currTodo.id}
                  todo={currTodo}
                  handleDeleteTodoChange={handleDeleteTodoChange}
                  handleToggleComplete={handleToggleComplete}
                  totalTask={totalTask}
                  completedTasks={completedTasks}
                  handleUpdateTodo = {handleUpdateTodo}
                />
              </>
            );
          })}

          {error && <h4>{error}</h4>}
        </div>

        <div className="row border-top mt-4 pt-4">
          <div className="col-lg-12 d-flex justify-content-between">
            <p>Total Task: {totalTask}</p>
            <p>Task Completed: {completedTasks}</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #fef3c7;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export default TodoList;
