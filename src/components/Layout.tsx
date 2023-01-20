import { Link } from "gatsby";
import React from "react";

interface Ilayout {
  children?: any;
  title: string;
}

export default function Layout({ children, title }: Ilayout) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        <section>{children}</section>
      </main>
    </div>
  );
}
