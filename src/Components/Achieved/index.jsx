import AchievedSingleCard from "../AchievedSingleCard";
import Title from "../Title";
import achievedLogo from "../../Img/achievedLogo.png";

function Achieved(params) {
  return (
    <>
      <div className=" w-[83%] m-auto pb-[7vw]">
        <Title title="WHAT WE HAVE ACHIEVED" />
        <div className="flex justify-between flex-col md:flex-row md:gap-0 gap-6">
          <AchievedSingleCard
            src={achievedLogo}
            paragraph="Servicio de ON-RAMP & OFF-RAMP en México"
          />
          <AchievedSingleCard
            src={achievedLogo}
            paragraph="Liquidez profunda en los 5 cripto-activos más utilizados en el mercado"
          />{" "}
          <AchievedSingleCard
            src={achievedLogo}
            paragraph="Servicio internacional B2B | ON RAMP - OFF RAMP & OTC"
          />
        </div>
      </div>
    </>
  );
}

export default Achieved;
