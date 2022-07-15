import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Task } from "./components/Task";
import { useState } from "react";
import { Input } from "./components/Input";

import { v4 as uuidv4 } from "uuid";

import clipboardImg from "../src/assets/clipboard.svg";

interface ITask {
  id: string;
  title: string;
  isComplete: boolean;
}

function App() {
  const [task, setTask] = useState("");

  const [todoList, setTodoList] = useState<ITask[]>([]);

  function CreateNewTask(taskTitle: string) {
    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      isComplete: true,
    };
    setTodoList([...todoList, newTask]);
  }

  function deleteTask(DeleteTaskById: string) {
    const taskWithoutDeletedOne = todoList.filter((task) => {
      return task.id !== DeleteTaskById;
    });
    setTodoList(taskWithoutDeletedOne);
  }

  function ChangeTaskStatus(id: string) {
    const newTasksArray = todoList.map((task) => {
      if (task.id === id) {
        if (task.isComplete) task.isComplete = false;
        else task.isComplete = true;
      }
      return task;
    });

    setTodoList(newTasksArray);
  }

  const AllIsCompletedTask = todoList.filter(
    (task) => task.isComplete === false
  );

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Input CreateNewTask={CreateNewTask} />

        <div className={styles.ListTask}>
          <header className={styles.HeaderListTasks}>
            <div>
              <strong>Tâches créées</strong>

              <span>{todoList.length}</span>
            </div>
            <div>
              <strong>Accomplies</strong>
              <span>
                {" "}
                {AllIsCompletedTask.length} de {todoList.length}
              </span>
            </div>
          </header>
          <div className={styles.tasks}>
            {todoList.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  isComplete={task.isComplete}
                  title={task.title}
                  deleteTask={deleteTask}
                  ChangeTaskStatus={ChangeTaskStatus}
                />
              );
            })}
          </div>

          {todoList.length < 1 ? (
            <div className={styles.enterTasks}>
              <img src={clipboardImg} width="56" alt="clipboard icon" />
              <strong>Vous n’avez pas encore de tâches enregistrées</strong>
              <span>Créez des tâches et organisez vos tâches</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
