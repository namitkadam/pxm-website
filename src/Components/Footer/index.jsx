import log from "../../Img/pxmLog.png";

function Footer(params) {
  return (
    <>
      <footer className="w-[93.7%] m-auto bg-[#121244] rounded-[20px_20px_0px_0px] pt-2">
        <div className="flex justify-between items-stretch w-[88%] m-auto py-[1.6vw] flex-col md:flex-row gap-4 md:gap-0">
          <div className="md:w-[33%] w-full">
            <div className="flex items-center gap-2 mb-2">
              <img src={log} className="h-10" />
              <div className="font-semibold text-xl text-white">Pxm</div>
            </div>
            <div className=" text-white mt-[0.6vw]">
              La perfección lleva tiempo. Estamos trabajando para ofrecerte un
              Xchange más real que tu pasión por la fórmula 1.
            </div>
          </div>
          <div className="md:w-[35%] md:border-l-[1.5px] md:border-r-[1.5px] border-white text-white md:pl-[3.2vw]">
            <div>
              <p className="md:mb-[0.6vw]">INQUIRIES</p>
              <h6 className="md:text-[2.15vw] font-medium">info@thepxm.org</h6>
            </div>
            <div className="mt-[1vw]">
              <p className="md:mb-[0.6vw]">CAREERS</p>
              <h6 className="md:text-[2.15vw] font-medium">
                careers@thepxm.org
              </h6>
            </div>
          </div>
          <div className="md:w-[27%]">
            <ul className=" md:text-[0.95vw] text-[3.5vw] text-white">
              <li>
                <a href="" className="hover:underline">
                  PONTEM ECOSYSTEM
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  PRODUCTS
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-[1.5px] border-white">
          <div className="w-[88%] py-[0.55vw] flex m-auto justify-between items-center flex-col md:flex-row text-white">
            <h5>
              <a href="" className="mr-[5px] hover:underline">
                Terms & Conditions
              </a>
              <span>|</span>
              <a href="" className="ml-[5px] hover:underline">
                Privacy Policy
              </a>
            </h5>
            <h5>©2024 PXM | All rights reserved</h5>
            <h5>Power by @nk</h5>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
