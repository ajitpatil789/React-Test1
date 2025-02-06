import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos((prevTodo) => [
        ...prevTodo,
        { id: crypto.randomUUID(), text: newTodo },
      ]);
      setNewTodo("");
    }
  };
  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id !== id)
    );
  };
  const upperCaseAll = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          text: todo.text.toUpperCase(),
        };
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add your task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ listStyle: "none" }}>
            <span>{todo.text}</span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}

export default TodoList;
