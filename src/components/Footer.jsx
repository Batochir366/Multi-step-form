export const Footer = ({ isBack }) => {
  return (
    <div className="w-[416px] flex gap-2">
      {isBack ? (
        <button className="w-full bg-[#121316] h-fit px-3 py-[10px] rounded-md cursor-pointer">
          <div className="flex gap-2">
            <p className="text-white text-[16px] font-[500]">Continue</p>
            <div className="flex justify-center items-center">
              <p className="text-white text-[16px] font-[500]">1</p>
              <p className="text-white text-[16px] font-[500]">/3</p>
            </div>
            <img src="/nextbutton.png" alt="next" />
          </div>
        </button>
      ) : (
        <div className="w-[416px] justify-center items-center flex gap-2">
          <button className="flex w-[104px] items-center justify-center bg-white h-fit border border-solid border-[#cbd5e1] text-black px-3 py-[10px] rounded-md cursor-pointer">
            <img src="/moveleft.png" alt="previous" />
            Back
          </button>
          <button className="w-full border border-black bg-[#121316] h-fit px-3 py-[10px] rounded-md cursor-pointer">
            <div className="flex justify-center items-center gap-2">
              <p className="text-white text-[16px] font-[500]">Continue</p>
              <div className="flex">
                <p className="text-white text-[16px] font-[500]">1</p>
                <p className="text-white text-[16px] font-[500]">/3</p>
              </div>
              <img src="/nextbutton.png" alt="next" />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
