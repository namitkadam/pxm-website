import "../SingleCard/index.css";

function SingleCard({ src, title, paragraph, alt }) {
  return (
    <>
      <div className="md:w-[31.7%] w-full md:min-h-[23vw] mb-[2.7vw] text-white">
        <div className="card-container p-8 pb-11 md:p-[2.5vw] md:pb-[1.7vw]">
          <div className="md:h-[9vw] md:w-[7.6vw] h-14 w-14">
            <img src={src} alt={alt} className=" h-full block" />
          </div>
          <div className="md:h-[4vw] h-auto pb-[0.8vw] mt-1 md:text-[1.5vw] text-[3vw] font-semibold">
            <p>{title}</p>
          </div>
          <div className="md:h-[5.5vw] h-auto text-tiny md:leading-5 leading-4">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCard;
