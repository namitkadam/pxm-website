import HubCard from "../HubCard";
import Title from "../Title";
import otc from "../../Img/otc.png";
import card from "../../Img/card.png";

function Hub(params) {
  return (
    <>
      <div className="m-auto w-[83.5%] pt-[2vw]">
        <Title
          title="WE HAVE A HUB"
          subTitle="To take our services to the next level."
        />
        <div className="flex md:gap-[1.5vw] flex-col md:flex-row gap-[4vw]">
          <HubCard
            title="PXM OTC"
            src={otc}
            paragraph="Security, trust and support are basic needs included in our purchase and sale service for transactions greater than 5K"
          />
          <HubCard
            title="PXM CARD"
            src={card}
            paragraph="A secured credit card, backed by crypto-assets, that will allow users to access FIAT credit for use in everyday operations. With the support of MasterCard we focus on providing global acceptance."
          />
        </div>
      </div>
    </>
  );
}

export default Hub;
