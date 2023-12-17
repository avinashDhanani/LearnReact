import { Fragment } from "react";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!authStatus && <Auth />}
      {authStatus && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
