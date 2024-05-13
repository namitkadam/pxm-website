function Title({ title, subTitle }) {
  return (
    <div className="text-center pb-[5.5vw] mt-[1.2vw] text-slate-100 ">
      <h6 className="text-[2.6vw] font-bold uppercase leading-10">{title}</h6>
      <div className="text-[1.5vw] font-semibold ">{subTitle}</div>
    </div>
  );
}

export default Title;
