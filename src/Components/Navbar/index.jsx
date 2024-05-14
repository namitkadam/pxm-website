import { useState } from "react";
import log from "../../Img/pxmLog.png";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="fixed top-[3vw] w-[86%] left-1/2 -translate-x-1/2 bg-[#c7c7c74d] rounded-2xl px-5 py-2 flex items-center justify-between shadow-[0px_4px_20px_0px_rgba(255,255,255,0.25)_inset,0px_4px_10px_0px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-2">
            <img src={log} className="h-10" />
            <div className="font-semibold text-xl">Pxm</div>
          </div>
          <div className="text-black uppercase md:block hidden relative">
            <ul className="flex gap-4 items-center text-[0.95vw] uppercase">
              <li>
                <a href="" className="hover:text-[#0068ff]">
                  PONTEM ECOSYSTEM
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#0068ff]">
                  PRODUCTS
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#0068ff]">
                  contact
                </a>
              </li>
              <li>
                <button className="bg-[#0068ff] px-[0.8vw] py-1.5 rounded-2xl text-white hover:text-[#0068ff] hover:bg-transparent border border-[#0068ff]">
                  Register me
                </button>
              </li>
            </ul>
          </div>
          <SideBarMenuXs isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <MobileNavbar isNavOpen={isNavOpen} />
        </div>
      </div>
    </>
  );
}

const genericHamburgerLine = `h-0.5 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

function SideBarMenuXs({ isNavOpen, setIsNavOpen }) {
  return (
    <>
      <button
        className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isNavOpen
              ? "rotate-45 translate-y-[10px] opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isNavOpen
              ? "-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </>
  );
}

export default Navbar;

function MobileNavbar({ isNavOpen }) {
  return (
    <>
      <div
        className={`absolute left-0 -bottom-20 rounded-lg bg-blue-500 w-full text-white px-3 py-3.5  ${
          !isNavOpen ? "hidden" : "block"
        }`}
      >
        <ul className="text-[2.5vw] uppercase">
          <li>
            <a href="" className="hover:text-[#0068ff]">
              PONTEM ECOSYSTEM
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#0068ff]">
              PRODUCTS
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#0068ff]">
              contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
