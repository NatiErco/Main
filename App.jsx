import { React, useState} from "react";
import { Container } from "./Components/Container";
import { TaskList } from "./Components/TaskList";
import { Form } from "./Components/Form";

export function App() {
  const [tarea, setTarea] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    setTarea(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();
    if (tarea.trim() !== "") {
      setTasks([...tasks, tarea]);
      setTarea("");
    }
  }

  return (
    <div>
      <h2> To do List</h2>
      <Form />
    </div>
  );
}
