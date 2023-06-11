import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-secondary text-neutral fixed top-0 right-0 z-50 left-0 shadow-lg">
        <div className="flex items-center font-medium justify-between md:mx-16">
          {/*------ Logo ------*/}
          <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
            <Link to="/">
              <img
                className="md:cursor-pointer w-36"
                src="https://deshcareer.com/logo/short-logo.png"
                alt="logo"
              />
            </Link>
            <div
              className={`text-3xl md:hidden`}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <MdClose className="text-neutral" />
              ) : (
                <RiMenu3Fill className="text-neutral" />
              )}
            </div>
          </div>
          <ul className="md:flex hidden Capitalize items-center gap-3 text-xl ">
            <NavLink />
          </ul>
          {/* Mobile nav */}
          <ul
            className={`md:hidden bg-secondary absolute w-full md:w-80 top-0 left-0 py-20 pl-4 duration-700 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <NavLink />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
