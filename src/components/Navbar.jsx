import logo from '../assets/logo.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between bg-transparent">
        {/* Logo */}
        <img
          src={logo}
          alt="Chillz Logo"
          className="h-8 md:h-8 object-contain"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-16 font-semibold text-white">
          <a href="#" className="hover:text-yellow-300 transition">Home</a>
          <a href="#" className="hover:text-yellow-300 transition">Shop</a>
          <a href="#" className="hover:text-yellow-300 transition">Delivery</a>
          <a href="#" className="hover:text-yellow-300 transition">Contact</a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block border border-white text-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-pink-500 transition">
          Order Your Ice-cream
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-xl">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-md px-6 py-6 text-white flex flex-col space-y-6 items-center">
          <a href="#" onClick={() => setMenuOpen(false)} className="text-lg font-medium">Home</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="text-lg font-medium">Shop</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="text-lg font-medium">Delivery</a>
          <a href="#" onClick={() => setMenuOpen(false)} className="text-lg font-medium">Contact</a>
          <button
            onClick={() => setMenuOpen(false)}
            className="border border-white text-white px-4 py-2 rounded-lg bg-transparent hover:bg-white hover:text-pink-500 transition"
          >
            Order Your Ice-cream
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
