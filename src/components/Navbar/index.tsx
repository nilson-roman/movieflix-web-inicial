import { Link, NavLink } from 'react-router-dom';

import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
    return (
        <nav className="navbar bg-navcolor main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>
      </div>
    </nav>
    )
}

export default Navbar