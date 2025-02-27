import { PlusCircle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
import { useState } from "react";
import { TodoEmpty } from "./TodoEmpty";

export function Task() {
  const [tasks, setTasks] = useState<string[]>([]);

  const [newTaskContent, setNewTaskContent] = useState("");

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTaskContent]);
    setNewTaskContent("");
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
          <span className={styles.taskCounter}>0</span>
        </div>
        <div>
          <p className={styles.taskCompleted}>Concluídas</p>
          <span className={styles.taskCounter}>0</span>
        </div>
      </header>

      {tasks.length !== 0 ? (
        tasks.map((task) => {
          return (
            <div className={styles.containerTodo}>
              <label>
                <input type="checkbox" />
                {task}
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
