import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Link from "../Link/Link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Player List", path: "/players" },
    { id: 5, name: "Donate", path: "/donate" },
  ];

  return (
    <nav className="py-8 md:bg-slate-800 text-white md:shadow-lg">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`ml-3 md:ml-0 md:flex gap-8 items-center justify-center absolute md:static  p-4 rounded-md
          ${open ? "block bg-slate-600 " : "hidden"}
          `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
}
