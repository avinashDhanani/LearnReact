import classes from "./Header.module.css";
import { authActions } from "../store/auth";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
  };

  const login = () => {
    dispatch(authActions.login());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authStatus && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li onClick={logout}>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
