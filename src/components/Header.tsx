import styles from "./Header.module.css";

import logo from "../assets/logo-todo.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo ToDo List" />
    </div>
  );
}
