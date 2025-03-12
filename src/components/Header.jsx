import React from "react";

export const Header = ({ isEnd }) => {
  return (
    <div className={`h-fit w-[416px] gap-2`}>
      <img src="/Logo.png" alt="pinecone logo" />
      {isEnd ? (
        <h3 className="text-[#202124] text-[26px] font-[600]">Join Us! 😎</h3>
      ) : (
        <h3 className="text-[#202124] text-[26px] font-[600]">
          You're All Set 🔥
        </h3>
      )}
      {isEnd ? (
        <p className="text-[#8E8E8E] text-[18px] font-[400]">
          Please provide all current information accurately.
        </p>
      ) : (
        <p className="text-[#8E8E8E] text-[18px] font-[400]">
          We have received your submission. Thank you!
        </p>
      )}
    </div>
  );
};
