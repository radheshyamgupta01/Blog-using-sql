import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-gray-50 sticky top-0 border-b border-b-2 border-green-500  ">
        <nav className="dark_bg flex items-center justify-between p-4">
          <div className="">
            <a href="" className=" font-bold text-black" >
              Blog
            </a>
          </div>
          <div className="flex items-center justify-center gap-4">
            <ul className="flex gap-8">
              <li>
                <a href="" className="  font-bold text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="  font-bold text-black">
                  About us
                </a>
              </li>
              <li>
                <a href="" className=" font-bold text-black">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
