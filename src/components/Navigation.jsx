import { Link, NavLink } from "react-router-dom";
export default function Navigation() {
   return (
      <nav className="gap-8 font-medium hidden md:flex">
         <NavLink className={`${({ isActive }) => isActive ? 'underline' : ''} hover:underline`} to="/">Acceuil</NavLink>
         <NavLink className={`${({ isActive }) => isActive ? 'underline' : ''} hover:underline`} to="/location">Achat</NavLink>
         <NavLink className={`${({ isActive }) => isActive ? 'underline' : ''} hover:underline`} to="/location">Location</NavLink>
         <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </nav>
   );
}