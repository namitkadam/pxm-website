import mobile from "../../Img/image.png";
import Title from "../Title";

function ProductCard(params) {
  return (
    <>
      <Title title="Products" />
      <div className="w-[82.7%] m-auto pb-[7vw]">
        <div className="flex justify-between flex-col items-start md:flex-row">
          <div className="max-w-[70%] md:w-[30%] m-auto">
            <img src={mobile} alt="" />
          </div>
          <div className="md:w-[60%] w-full text-white">
            <div className="flex flex-col md:leading-[3vw] leading-[4vw] md:text-[3.6vw] text-[4.5vw] font-bold">
              <h2 className="text-black">PXM</h2>
              <span>Xchange</span>
            </div>
            <h6 className="md:text-[1.12vw] text-[2vw] font-bold leading-none my-[1.3vw]">
              Buy and sell crypto like making a sandwich.
            </h6>
            <p className="mb-[1.3vw]">
              Perfection takes time. We are working to offer you an Xchange that
              is more real than your passion for Formula 1.
            </p>
            <p className="mb-[1.3vw]">
              Register to learn more details and stay tuned for its launch.
            </p>
            <button className="bg-transparent text-white px-[0.8vw] py-1.5 rounded-2xl  hover:text-[#0068ff] hover:bg-white border border-white">
              Register me
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
