import React, { useState } from "react";
import Konzortia from "../assets/images/svg/Konzortia.svg"


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <nav className="w-full  shadow flex align-center justify-center ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center flex align-items-center place-content-center justify-content-center text-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <img
                src={Konzortia}
                alt="user-profile"
                className=" mr-1 logo-position "
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
