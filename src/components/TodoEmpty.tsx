import Clipboard from "../assets/clipboard.svg";

import styles from "./TodoEmpty.module.css";

export function TodoEmpty() {
  return (
    <div className={styles.containerTodoEmpty}>
      <img src={Clipboard} alt="Lista de Tarefas" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
