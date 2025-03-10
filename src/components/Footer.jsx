export const Footer = () => {
  return (
    <button className="w-[416px] bg-[#121316] h-fit px-3 py-[10px] rounded-md cursor-pointer">
      <div className="flex justify-center items-center gap-2">
        <p className="text-white text-[16px] font-[500]">Continue</p>
        <div className="flex">
          <p className="text-white text-[16px] font-[500]">1</p>
          <p className="text-white text-[16px] font-[500]">/3</p>
        </div>
        <img src="/nextbutton.png" alt="next" />
      </div>
    </button>
  );
};
