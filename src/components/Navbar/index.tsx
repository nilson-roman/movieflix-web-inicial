import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "AuthContext";
import { getTokenData, isAuthenticated } from "util/auth";
import { removeAuthData } from "util/storage";
import history from "util/history";


import "./styles.css";
import "bootstrap/js/src/collapse.js";
const Navbar = () => {

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar bg-navcolor main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
          {authContextData.authenticated ? (
            <div className="nav-login-logout">
              <a href="#logout" onClick={handleLogoutClick}>
                Sair
              </a>
            </div>
          ) : (
            <Link to="/"></Link>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
