import { Link } from "react-router-dom";
export default function Navigation() {
   return (
      <nav className="gap-8 font-medium hidden md:flex">
         <Link to="/">Acceuil</Link>
         <Link to="/buy">Achat</Link>
         <Link to="/location">Location</Link>
      </nav>
   );
}