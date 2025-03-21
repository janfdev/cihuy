import DarkModeToggle from "../components/DarkModeToggle";

const Header = () => {
  return (
    <div className="container mx-auto py-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-10" src="/public/assets/logo.png" alt="" />
          <h1 className="text-xl font-semibold dark:text-white">Himasantika</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <a href="#about" className="dark:text-white">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#divisi" className="dark:text-white">
                Divisi
              </a>
            </li>
            <li>
              <a href="#galeri" className="dark:text-white">
                Galeri
              </a>
            </li>
            <li>
              <a href="#contact" className="dark:text-white">
                Kontak
              </a>
            </li>
            <DarkModeToggle />
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
