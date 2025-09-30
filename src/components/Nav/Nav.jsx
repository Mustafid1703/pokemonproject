
import logo from "../../assets/pokemon.png"; // bukan ../src/assets
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Pokemon Logo" className="nav-logo" />
    </nav>
  );
}
