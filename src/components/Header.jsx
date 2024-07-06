import Menu from "./Menu";
import Logo from "./Logo";
import Button from "./Button";
import Navigation from "./Navigation";


export default function Header() {
   return (
      <header className="bg-black sticky top-0 text-gray-200">
         <div className='container flex items-center justify-between px-2 py-3'>
            <Logo />
            <Navigation />
            <Menu />
            <Button title={'Se connecter'} className={'hidden md:block'} />
         </div>
      </header>
   );
}