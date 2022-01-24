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
import { useRecoilState } from "recoil";
import counterAtom, { Harga, Jumlah, Logic, List } from "../../recoil/counter/atoms";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  const [value, setValue] = useRecoilState(counterAtom);
  const [harga] = useRecoilState(Harga);
  const [jumlah] = useRecoilState(Jumlah);
  const [logic] = useRecoilState(Logic);
  const [list, setLish] = useRecoilState(List);

  const clearProduct = () => {
    document.querySelector("#product").textContent = "";
  };

  return (
    <div className=" items-center mt-4 mb-2 leading-normal  ">
      <MobileNav />
      <div className="container md:flex hidden  items-center  items-center py-2 border-b-2">
        <div className="items-center -mt-2 ">
          <img className="object-cover  " src={logo} width={250} height={250} alt="" />
        </div>
        <div className="flex ml-7 items-center ">
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
            <Menu>
              <Menu.Button>
                <img className="h-6 w-6" src={iconcart} alt="" />
              </Menu.Button>
              <Menu.Items className="absolute container right-24  bg-white shadow-2xl w-60 h-60 rounded-md">
                <Menu.Item>{<h1 className="font-bold p-2 border-b-2">Cart</h1>}</Menu.Item>
                <Menu.Item>
                  {logic ? (
                    <div id="product">
                      <div className="flex space-x-2 items-center">
                        <div>
                          <img className="rounded-md h-11 w-11" src={process.env.PUBLIC_URL + "/Imgs/img1.jpg"} />
                        </div>
                        <span className="text-xs text-gray-400">
                          <div>{list.title}</div>
                          {value} * {harga} = <span className="text-black font-bold">$ {jumlah}</span>
                        </span>
                        <div>
                          <button onClick={clearProduct}>
                            <img src={process.env.PUBLIC_URL + "/Imgs/delete.svg"} />
                          </button>
                        </div>
                      </div>
                      <div className="mt-5 w-full text-center">
                        <button className="bg-orange-500 px-16 py-2 rounded-xl text-white">Checkout</button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h1 className="container flex mx-auto h-auto mt-16 justify-center   text-gray-500">Your cart is empty</h1>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <p className="absolute -mt-10 bg-orange-500 text-white rounded-full px-2">{value}</p>
          </div>
          <div>
            <img className="h-6 w-6 hover:ring-orange-500 hover:ring-2 rounded-full " src={imageavatar} alt="" />
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
