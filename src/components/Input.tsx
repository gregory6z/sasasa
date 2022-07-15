import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";
import styles from "./Input.module.css";

interface InputProps {
  CreateNewTask: (event: string) => void;
}

export function Input({ CreateNewTask }: InputProps) {
  const [taskText, setTaskText] = useState("");

  const [newTaskText, setNewTaskText] = useState("");

  // function handleCreateNewTask(event: FormEvent) {
  //   event.preventDefault();

  //   setTaskText([...taskText, newTaskText]);

  //   setNewTaskText("");
  // }

  function handleCreateNewTask() {
    CreateNewTask(newTaskText);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleNewTaskChangeInput(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.code === "Enter") {
      if (newTaskText.length > 0) {
        CreateNewTask(newTaskText);
        setNewTaskText("");
      }
    }
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div className={styles.InputCreateTodo}>
      <input
        onKeyPress={handleNewTaskChangeInput}
        type="text"
        placeholder="Ajouter une nouvelle tâche
        "
        onChange={handleNewTaskChange}
        value={newTaskText}
        required
      />
      <button
        className={styles.buttonTodo}
        type="submit"
        disabled={isNewTaskEmpty}
        onClick={handleCreateNewTask}
      >
        Créer <PlusCircle size={20} weight="bold" />{" "}
      </button>
    </div>
  );
}
