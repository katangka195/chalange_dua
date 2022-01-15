import { useState } from "react";
import logo from "./logo.svg";
import iconcart from "./iconcart.svg";
import imageavatar from "./imageavatar.png";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
export default function MobileNav() {
  const [active, setActive] = useState(false);
  return (
    <div className="container mx-auto md:hidden leading-normal  ">
      <div className="items-center">
        <div className="flex items-center ">
          <Menu>
            <Menu.Button>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Menu.Button>

            <Menu.Items className="bg-gray-300 shadow block absolute  md:bg-transparent w-1/2  left-0 right-0 top-0 bottom-0">
              <Menu.Item>
                {
                  <a href="#">
                    <span className="text-black pt-10 block  ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </a>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-10">
                {
                  <Link className="links" to="/">
                    Collectios
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2">
                {
                  <Link className="links" to="Men">
                    Men
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2">
                {
                  <Link className="links" to="Women">
                    Women
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2">
                {
                  <Link className="links" to="About">
                    About
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2">
                {({ active }) => (
                  <Link className="links" to="Contact">
                    Contact
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
          {/* <button className="mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}

          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-x-4 h-6 justify-end w-screen mr-10">
            <img src={iconcart} alt="" />
            <img src={imageavatar} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
