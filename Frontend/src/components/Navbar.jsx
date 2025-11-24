import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-pink-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold"><Link to="/">Edith corner of the internet</Link></div>
        <div>
            <Link to="/" className="mx-4 hover:underline px-2 rose-600 duration-200">Home</Link>
            <Link to="/projects" className="mx-4 hover:underline px-2 rose-600 duration-200">Projects</Link>
            <Link to="/blog" className="mx-4 hover:underline px-2 rose-600 duration-200">Blog</Link>
            <Link to="/about" className="mx-4 hover:underline px-2 rose-600 duration-200">About Me</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;