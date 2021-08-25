import { Link } from 'react-router-dom';
import './Pages.css';

function Nav() {
  return (
    <nav className="nav">
      <h1>Math magician</h1>
      <ul className="links">
        <Link to="/home">
          <li title="home">Home |</li>
        </Link>
        <Link to="/calculator">
          <li title="calculator">Calculator |</li>
        </Link>
        <Link to="/quote">
          <li>Quote</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
