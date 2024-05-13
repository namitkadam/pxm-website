import Title from "../Title";
import "../HubCard/index.css";
import otc from "../../Img/otc.png";
function HubCard({ title, src, paragraph }) {
  return (
    <>
      <div className="w-[50%]">
        <div className="w-full rounded-[20px] container px-[3.8vw] py-[1.8vw]">
          <div className="text-center mb-[2.5vw] text-[2.1vw] font-semibold text-slate-100">
            {title}
          </div>
          <div className="flex justify-center">
            <div className="w-[60%] mb-[2.4vw]">
              <img src={src} alt="" className="w-full" />
            </div>
          </div>
          <p className="text-[1.12vw] font-medium text-white">{paragraph}</p>
        </div>
      </div>
    </>
  );
}

export default HubCard;
