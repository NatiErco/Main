import React, { useState } from "react";

export function Form() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskLevel, setTaskLevel] = useState("Normal");
  const [taskDescription, setTaskDescription] = useState("");
  const [todoTaskArray, setTodoTaskArray] = useState(
    JSON.parse(localStorage.getItem("todotask")) || []
  );
  // const [todoTaskArray, setTodoTaskArray] = useState(
  //   JSON.parse(localStorage.getItem("todotask"))
  //     ? JSON.parse(localStorage.getItem("todotask"))
  //     : []

  function handleChangeTitle(event) {
    setTaskTitle(event.target.value);
  }

  function handleChangeLevel(event) {
    setTaskLevel(event.target.value);
  }

  function handleChangeDescription(event) {
    setTaskDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      title: taskTitle,
      level: taskLevel,
      description: taskDescription,
    };
    

    const updatedTaskArray = [...todoTaskArray, data];
    setTodoTaskArray(updatedTaskArray);
    localStorage.setItem("todotask", JSON.stringify(updatedTaskArray));

    setTaskTitle("");
    setTaskLevel("Normal");
    setTaskDescription("");
  
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskTitle} onChange={handleChangeTitle} placeholder="Title" />
      <br />
      <select value={taskLevel} onChange={handleChangeLevel}>
        <option value="Normal"> Normal</option>
        <option value="Medio"> Medio</option>
        <option value="Urgente"> Urgente</option>
      </select>
      <br />
      <textarea value={taskDescription}
        onChange={handleChangeDescription}
        placeholder="Description Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
