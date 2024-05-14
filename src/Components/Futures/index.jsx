import SingleCard from "../SingleCard";
import Title from "../Title";
import token from "../../Img/token.png";
import wallet from "../../Img/wallet.png";
import p2p from "../../Img/p2p.png";

function Futures(params) {
  return (
    <>
      <div className="mt-[6vw] pb-[7vw]">
        <Title
          title="HAVING A VISION FOR THE FUTURE"
          subTitle="WE ARE DEVELOPING MORE SOLUTIONS THAT WILL FACILITATE YOUR TRANSACTIONS WITHOUT BORDERS"
        />
        <div className="m-auto w-[83.5%] pt-[2vw] flex justify-between flex-col md:flex-row gap-4 md:gap-0">
          <SingleCard
            src={token}
            alt="PXM Token"
            title="PXM Token"
            paragraph="Our Digital Asset will serve as a vehicle to solidify our community through our own crypto-fund."
          />
          <SingleCard
            src={wallet}
            title="PXM Wallet"
            alt="PXM Wallet"
            paragraph="A secure, non-custodial digital wallet that will allow users to have their own private keys for the autonomous management and storage of their crypto-assets in an optimal way."
          />
          <SingleCard
            src={p2p}
            title="PXM P2P"
            alt="PXM Wallet"
            paragraph="A space to transact with other users with the best offer and demand on the market."
          />
        </div>
      </div>
    </>
  );
}

export default Futures;
