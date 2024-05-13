import Navbar from "../Navbar";
import "./header.css";
import log from "../../Img/pxmLog.png";

function Header(params) {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex items-center flex-col gap-10">
            <div className="w-[18vw]">
              <img src={log} alt="pxm" className="w-full h-full block" />
            </div>
            <div className="text-white text-center text-[2.6vw] font-semibold">
              <div className="leading-none">FINANCIAL FREEDOM</div>
              <div>We are your bridge to the economy of the future.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
