import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];


  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex h-16 max-w-[1180px] items-center px-5">
        <div className="hidden w-full items-center justify-between md:flex">
          <a href="#home">
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
              className="h-8 w-auto"
            />
          </a>


          <div className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition ${
                  index === 0
                    ? "text-pink-500"
                    : "text-slate-500 hover:text-pink-500"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>


          <div className="flex items-center gap-5">
            <button
              type="button"
              className="text-sm font-medium text-slate-600"
            >
              Sign In
            </button>


            <button
              type="button"
              className="brand-gradient-bg rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </div>


        <div className="relative flex w-full items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-slate-700"
            aria-label="Open navigation menu"
          >
            ☰
          </button>


          <a href="#home" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack"
              className="h-7 w-auto"
            />
          </a>


          <div className="flex items-center gap-2">
            <button
              type="button"
              className="text-xs font-medium text-slate-600"
            >
              Sign In
            </button>


            <button
              type="button"
              className="brand-gradient-bg rounded-full px-3 py-2 text-xs font-semibold text-white"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>


      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-600 hover:text-pink-500"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};


export default Navbar;

