import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { Link } from "react-router-dom";

const NavLink = () => {
  const [heading, setHeading] = useState("");

  const links = [
    {
      name: "About Anjir",
      submenu: true,
      subLink: [
        {
          mySubLink: [
            { name: "Biography", link: "/biography" },
            { name: "Achievement", link: "/Achievement" },
          ],
        },
      ],
    },
    { name: "Events", link: "/events" },
    { name: "News", link: "/news" },
    {
      name: "Media",
      submenu: true,
      subLink: [
        {
          mySubLink: [
            { name: "Process", link: "/process" },
            { name: "Quotes", link: "/quotes" },
            { name: "Speeches", link: "/speeches" },
            { name: "Interview", link: "/interview" },
          ],
        },
      ],
    },
    {
      name: "Gallery",
      submenu: true,
      subLink: [
        {
          mySubLink: [
            { name: "Photo Gallery", link: "/photo-gallery" },
            { name: "Video Gallery", link: "/video-gallery" },
          ],
        },
      ],
    },
    { name: "Publication", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="md:cursor-pointer group">
          <h1
            className={`flex items-center justify-between ${
              index === 6 ? "px-0" : "px-4"
            } my-6 md:pr-0 pr-5 group hover:text-primary ${
              index === 6 &&
              "border-2 border-neutral hover:bg-neutral duration-300 hover:text-black w-20 md:pl-0.5 pl-2 text-center m:ml-0 ml-4"
            }`}
            onClick={() => {
              heading !== link.name ? setHeading(link.name) : setHeading("");
            }}
          >
            {link.name}
            {link?.submenu === true ? (
              <>
                <span className="text-xl md:hidden inline">
                  {heading === link?.name ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )}
                </span>
                <span className="text-xl md:ml-2 md:block hidden group-hover:rotate-180 mt-2">
                  <IoIosArrowDown />
                </span>
              </>
            ) : null}
          </h1>
          {link.submenu && (
            <div>
              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                <div className="bg-gray-700 px-6 py-2 rounded-md">
                  {link.subLink?.map((mysublink, index) => (
                    <div key={index}>
                      {mysublink.mySubLink?.map((slink, index) => (
                        <li key={index} className={`text-base py-1`}>
                          <Link to={link.link} className="hover:text-primary">
                            {slink?.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              {/*--------- Mobile menus ---------*/}
              <div
                className={`
                ${heading === link.name ? "md:hidden" : "hidden"}
                `}
              >
                {link.subLink?.map((slink, i) => (
                  <div key={i}>
                    {slink.mySubLink?.map((slink, i) => (
                      <li key={i} className="py-2 pl-4">
                        <Link to={slink.link} className="hover:text-primary">
                          {slink?.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLink;
