import log from "../../Img/pxmLog.png";

function Navbar(params) {
  return (
    <>
      <div className="">
        <div className=" fixed top-[3vw] w-[86%] left-1/2 -translate-x-1/2 bg-[#c7c7c74d] rounded-2xl px-5 py-2 flex items-center justify-between shadow-[0px_4px_20px_0px_rgba(255,255,255,0.25)_inset,0px_4px_10px_0px_rgba(0,0,0,0.25)]">
          <div className="flex items-center gap-2">
            <img src={log} className="h-10" />
            <div className="font-semibold text-xl">Pxm</div>
          </div>
          <div className="text-black uppercase">
            <ul className="flex gap-4 items-center text-[0.95vw] ">
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
        </div>
      </div>
    </>
  );
}
export default Navbar;
