import styles from "./Task.module.css";

import { Trash, Circle, CheckCircle, Check } from "phosphor-react";
import { ButtonHTMLAttributes, useState } from "react";

interface ITaskProps {
  id: string;
  isComplete: boolean;
  title: string;
  deleteTask: (id: string) => void;
  ChangeTaskStatus: (id: string) => void;
}

export function Task({
  isComplete,
  title,
  deleteTask,
  id,
  ChangeTaskStatus,
}: ITaskProps) {
  function handleDeleteTask() {
    deleteTask(id);
  }



  function handleToggleTaskCompleat() {
    ChangeTaskStatus(id);
    
  }

  return (
    <div className={styles.task}>
      <button
        className={isComplete ? styles.radio : styles.checkbox}
        type="button"
      >
        {isComplete ? (
          <Circle onClick={handleToggleTaskCompleat} size={24} weight="bold" />
        ) : (
          <Check onClick={handleToggleTaskCompleat} size={12} weight="bold" />
        )}
      </button>

      {isComplete ? (
        <p className={styles.pRadio}>{title}</p>
      ) : (
        <p className={styles.pCheckbox}>{title}</p>
      )}

      <button
        type="button"
        onClick={handleDeleteTask}
        className={styles.trashButton}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
function ChangeTaskStatus() {
  throw new Error("Function not implemented.");
}
