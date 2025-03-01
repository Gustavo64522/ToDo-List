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
  const [tasks, setTasks] = useState<TaskState[]>([]);

  const [newTaskContent, setNewTaskContent] = useState("");

  const completedTasksCount = tasks.filter((task) => task.isCompleted).length;

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    const newTask: TaskState = {
      id: uuidv4(),
      content: [newTaskContent],
      isCompleted: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskContent("");
  }

  function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);
  }

  function handleTaskCompleted(
    taskId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: event.target.checked } // Atualiza o estado de isCompleted
          : task
      )
    );
  }

  function handleDeleteTask(taskId: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
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
          <span className={styles.taskCounter}>{tasks.length}</span>
        </div>
        <div>
          <p className={styles.taskCompleted}>Concluídas</p>
          <span className={styles.taskCounter}>{completedTasksCount}</span>
        </div>
      </header>

      {tasks.some((task) => task.content.length > 0) ? (
        tasks.map((task) =>
          task.content.map((content) => (
            <div className={styles.containerTodo}>
              <label>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={(event) => handleTaskCompleted(task.id, event)}
                />
                {content}
                <span className={styles.checkmark}></span>
              </label>
              <Trash size={24} onClick={() => handleDeleteTask(task.id)} />
            </div>
          ))
        )
      ) : (
        <TodoEmpty />
      )}
    </>
  );
}
