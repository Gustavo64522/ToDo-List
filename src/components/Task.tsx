import { PlusCircle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";
// import { TodoEmpty } from "./TodoEmpty";

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
      {/* <TodoEmpty /> */}
      <div className={styles.containerTodo}>
        <label>
          <input type="checkbox" name="" id="" />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
          <span className={styles.checkmark}></span>
        </label>
        <Trash size={24} />
      </div>
    </>
  );
}
