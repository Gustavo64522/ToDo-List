import { PlusCircle } from "@phosphor-icons/react";
import Clipboard from "../assets/clipboard.svg";
import styles from "./Task.module.css";

export function Task() {
  return (
    <>
      <div className={styles.containerInput}>
        <input placeholder="Adicione uma nova tarefa" type="text" />

        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </div>
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
      <div className={styles.containerTodoEmpty}>
        <img src={Clipboard} alt="Lista de Tarefas" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </>
  );
}
