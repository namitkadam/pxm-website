import "../AchievedSingleCard/index.css";

function AchievedSingleCard({ src, alt, paragraph }) {
  return (
    <>
      <div className="md:w-[30.7%] md:min-h-[23vw] min-h-[50vw] mb-[2.7vw] text-white">
        <div className="flex flex-col justify-center items-center achieved-Card-container">
          <div className="md:h-[12vw] md:w-[7.6vw] w-[20vw] mb-[2.5vw] font-medium">
            <img src={src} alt={alt} className="w-full h-full block" />
          </div>
          <div className="text-center font-medium">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default AchievedSingleCard;
