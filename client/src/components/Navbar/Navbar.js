import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { signOut } from "../../actions/auth";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  /*
  const logout = () => {
    dispatch(signOut(history));
    // history.push("/");

    setUser(null);
  };
*/
  const logout = useCallback(() => {
    dispatch(signOut(history));
    // history.push("/");

    setUser(null);
  }, [history, dispatch]);

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token, logout]);

  return (
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <button className="ui button negative" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
