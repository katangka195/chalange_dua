import logo from "./logo.svg";
import iconcart from "./iconcart.svg";
import imageavatar from "./imageavatar.png";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import counterAtom, { Harga, Jumlah, Logic, List } from "../../recoil/counter/atoms";
export default function MobileNav() {
  const [value] = useRecoilState(counterAtom);
  const [harga] = useRecoilState(Harga);
  const [jumlah] = useRecoilState(Jumlah);
  const [logic] = useRecoilState(Logic);
  const [list, setLish] = useRecoilState(List);
  const clearProduct = () => {
    document.querySelector("#product").textContent = "";
  };

  return (
    <div className="container mx-auto md:hidden leading-normal absolute h-full  ">
      <div className="items-center">
        <div className="flex items-center  ">
          <Menu>
            <Menu.Button>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Menu.Button>

            <Menu.Items className="bg-white h-full  z-40 absolute  shadow h-full block   md:bg-transparent w-1/2  left-0 right-0 top-0 bottom-0">
              <Menu.Item>
                {
                  <a href="#">
                    <span className="text-black pt-10 block ml-4  ">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </a>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-10 ml-4">
                {
                  <Link className="links" to="/">
                    Collectios
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2 ml-4">
                {
                  <Link className="links" to="Men">
                    Men
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2 ml-4">
                {
                  <Link className="links" to="Women">
                    Women
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2 ml-4">
                {
                  <Link className="links" to="About">
                    About
                  </Link>
                }
              </Menu.Item>
              <Menu.Item className="block font-semibold mt-2 ml-4">
                {({ active }) => (
                  <Link className="links" to="Contact">
                    Contact
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-x-4 h-6 justify-end w-screen mr-10">
            <Menu>
              <Menu.Button>
                <img className="h-6 w-6" src={iconcart} alt="" />
              </Menu.Button>
              <Menu.Items className="absolute container mx-auto z-50 bg-white shadow-2xl left-3 top-16 right-0  w-96 h-80 rounded-md">
                <Menu.Item>{<h1 className="font-bold p-2 border-b-2">Cart</h1>}</Menu.Item>
                <Menu.Item>
                  {logic ? (
                    <div id="product">
                      <div className="flex space-x-2 items-center">
                        <div>
                          <img className="rounded-md h-16 w-15 mt-3" src={process.env.PUBLIC_URL + "/Imgs/img1.jpg"} />
                        </div>
                        <span className="text-md text-gray-400">
                          <div>{list.title}</div>
                          {harga} * {value} = <span className="text-black font-bold ">$ {jumlah}</span>
                        </span>
                        <div>
                          <button onClick={clearProduct} className="ml-7">
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

            <div className="space-x-3">
              <div className="bg-orange-500 px-2  rounded-full py-0.5 text-center text-sm absolute z-30 -top-4 right-20">{value}</div>
              <img className="object-cover h-8 w-8 -mt-1  hover:ring-2 hover:ring-orange-500 rounded-full" src={imageavatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
