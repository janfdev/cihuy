import { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto py-5 md:px-0 px-7">
      <nav className="flex items-center justify-between relative">

        <div className="flex items-center gap-2">
          <img className="w-10" src="/assets/logo.png" alt="Logo" />
          <h1 className="text-xl font-semibold dark:text-white">Himasantika</h1>
        </div>

        <div
          className={`md:flex md:static absolute top-16 left-0 w-full md:w-auto 
            bg-gray-100 dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent 
            px-5 md:px-0 py-5 
            transition-all duration-300 ease-in-out transform 
            ${
              isOpen
                ? "opacity-100 scale-100 flex flex-col items-center gap-5"
                : "opacity-0 scale-95 hidden"
            }`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-10 w-full text-center">
            <li className="dark:hover:bg-white py-3 duration-150 transition-all group w-full md:w-auto rounded-md">
              <a
                href="#about"
                className="block dark:text-gray-200 group-hover:text-gray-600 text-gray-800 "
              >
                Tentang Kami
              </a>
            </li>
            <li className="dark:hover:bg-white py-3 duration-150 transition-all group w-full md:w-auto rounded-md">
              <a
                href="#divisi"
                className="dark:text-gray-200 group-hover:text-gray-600 text-gray-800 "
              >
                Divisi
              </a>
            </li>
            <li className="dark:hover:bg-white py-3 duration-150 transition-all group w-full md:w-auto rounded-md">
              <a
                href="#galeri"
                className="dark:text-gray-200 group-hover:text-gray-600 text-gray-800 "
              >
                Galeri
              </a>
            </li>
            <li className="dark:hover:bg-white  py-3 duration-150 transition-all group w-full md:w-auto rounded-md">
              <a
                href="#contact"
                className="dark:text-gray-200 group-hover:text-gray-600 text-gray-800 "
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <div
            className="text-3xl dark:text-white md:hidden cursor-pointer transition-transform duration-300"
            onClick={toggleMenu}
          >
            {isOpen ? <IoClose /> : <TbMenu2 />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
