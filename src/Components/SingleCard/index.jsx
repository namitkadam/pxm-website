import log from "../../Img/pxmLog.png";
import "../SingleCard/index.css";

function SingleCard({ src, title, paragraph, alt }) {
  return (
    <>
      <div className="w-[31.7%] min-h-[23vw] mb-[2.7vw] text-white">
        <div className="card-container">
          <div className="h-[9vw] w-[7.6vw]">
            <img src={src} alt={alt} className="w-full h-full block" />
          </div>
          <div className="h-[4vw] pb-[0.8vw] text-[1.5vw] font-normal">
            <p>{title}</p>
          </div>
          <div className="h-[5.5vw]">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
