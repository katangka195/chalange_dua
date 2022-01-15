import { Link } from "react-router-dom";
import logo from "./logo.svg";
import iconcart from "./iconcart.svg";
import imageavatar from "./imageavatar.png";
import MobileNav from "./MobileNav";
import { Route, Routes } from "react-router-dom";
import Collections from "../page/Collections";
import Men from "../page/Men";
import Women from "../page/Women";
import About from "../page/About";
import Contact from "../page/Contact";

export default function Navbar() {
  return (
    <div className=" items-center mt-4 mb-2 leading-normal  ">
      <MobileNav />
      <div className="container md:flex hidden  items-center  items-center py-2 border-b-2">
        <div className="items-center">
          <img className="h-6" w-6 src={logo} alt="" />
        </div>
        <div className="flex ml-7 ">
          <Link className="links" to="/">
            Collectios
          </Link>
          <Link className="links" to="Men">
            Men
          </Link>
          <Link className="links" to="Women">
            Women
          </Link>
          <Link className="links" to="About">
            About
          </Link>
          <Link className="links" to="Contact">
            Contact
          </Link>
        </div>
        <div className="flex items-center h-6 justify-end w-full mr-10 gap-x-4">
          <div>
            <img className="h-6 w-6" src={iconcart} alt="" />
            <p className="absolute -mt-10 bg-orange-500 text-white rounded-full px-2">1</p>
          </div>
          <div>
            <img className="h-6 w-6" src={imageavatar} alt="" />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Collections />} />
        <Route path="Men" element={<Men />} />
        <Route path="Women" element={<Women />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
