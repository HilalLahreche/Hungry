import BurgerMenu from "../atoms/BurgerMenu";
import Logo from "../atoms/Logo";

const Navbar = () => {
  return (
    <>
    <nav className="bg-teal-600 p-4 relative">
      <div className="flex justify-between items-center">
           <Logo />
           <BurgerMenu />
      </div>
      </nav>

      </>
  );
};

export default Navbar;
