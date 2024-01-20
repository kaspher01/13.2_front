import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/add?x=2&y=3">Add</Link>
        </li>
        <li>
          <Link to="/sub?x=5&y=2">Subtract</Link>
        </li>
        <li>
          <Link to="/mul?x=4&y=3">Multiply</Link>
        </li>
        <li>
          <Link to="/div?x=6&y=2">Divide</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
