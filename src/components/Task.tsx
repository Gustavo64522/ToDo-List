import { PlusCircle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { useState } from "react";
import { TodoEmpty } from "./TodoEmpty";

import { v4 as uuidv4 } from "uuid";

interface TaskState {
  id: string;
  content: string[];
  isCompleted: boolean;
}

export function Task() {
  const [tasks, setTasks] = useState<TaskState>({
    id: uuidv4(),
    content: [] as string[],
    isCompleted: false,
  });

  const [newTaskContent, setNewTaskContent] = useState<string>("");

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();
    setTasks({
      ...tasks,
      id: uuidv4(),
      content: [...tasks.content, newTaskContent],
    });
    setNewTaskContent("");
    console.log(tasks);
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);
  }

  return (
    <>
      <form className={styles.containerInput} onSubmit={handleCreateNewTask}>
        <input
          placeholder="Adicione uma nova tarefa..."
          type="text"
          onChange={handleNewTaskChange}
          value={newTaskContent}
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <header>
        <div>
          <p className={styles.taskCreated}>Tarefas criadas</p>
          <span className={styles.taskCounter}>{tasks.content.length}</span>
        </div>
        <div>
          <p className={styles.taskCompleted}>Concluídas</p>
          <span className={styles.taskCounter}>0</span>
        </div>
      </header>

      {tasks.content.length !== 0 ? (
        tasks.content.map((content) => {
          return (
            <div className={styles.containerTodo}>
              <label>
                <input type="checkbox" />
                {content}
                <span className={styles.checkmark}></span>
              </label>
              <Trash size={24} />
            </div>
          );
        })
      ) : (
        <TodoEmpty />
      )}
    </>
  );
}
