"use client";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";

export const Footer = ({
  isBack,
  handleNextStep,
  handlePreviousStep,
  stepCount,
  isHidden,
}) => {
  return (
    <div className={`w-[416px] ${stepCount === 4 ? "hidden" : "flex"} gap-2`}>
      {isBack ? (
        <button
          onClick={handleNextStep}
          className="w-full bg-[#121316] h-fit px-3 py-[10px] rounded-md cursor-pointer"
        >
          <div className="flex justify-center items-center gap-2">
            <p className="text-white text-[16px] font-[500]">Continue</p>
            <div className="flex justify-center items-center">
              <p className="text-white text-[16px] font-[500]">{stepCount}</p>
              <p className="text-white text-[16px] font-[500]">/3</p>
            </div>
            <img src="/nextbutton.png" alt="next" />
          </div>
        </button>
      ) : (
        <div className="w-[416px] justify-center items-center flex gap-2">
          <button
            onClick={handlePreviousStep}
            className="flex w-[104px] items-center justify-center bg-white h-fit border border-solid border-[#cbd5e1] text-black px-3 py-[10px] rounded-md cursor-pointer active:bg-[#D6D8DB] active:border-[#CBD5E1]"
          >
            <img src="/moveleft.png" alt="previous" />
            Back
          </button>
          <button
            onClick={handleNextStep}
            className="w-full border border-black bg-[#121316] h-fit px-3 py-[10px] rounded-md cursor-pointer"
          >
            <div className="flex justify-center items-center gap-2">
              <p className="text-white text-[16px] font-[500]">Continue</p>
              <div className="flex">
                <p className="text-white text-[16px] font-[500]">{stepCount}</p>
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
