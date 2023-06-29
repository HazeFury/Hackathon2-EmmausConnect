import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar_container}>
      <h1>NavBar</h1>
      <nav>
        <ul>
          <NavLink to="/user/smartphone">
            <p>smartphone</p>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
