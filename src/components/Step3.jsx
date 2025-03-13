"use client";
import React from "react";
import { TextField } from ".";
import { Footer } from ".";
export const Step3 = ({ handleOnChange }) => {
  return (
    <div className="flex flex-col gap-3">
      <TextField
        handleOnChange={handleOnChange}
        isCorrect={true}
        TextField={"Date of birth"}
        inputType={"date"}
        name={"Dateofbirth"}
      />
      <div className="w-fit h-fit bg-white gap-2 flex flex-col">
        <div className="flex">
          <h1 className="text-[#334155] text-[14px] font-[600]">
            Profile image
          </h1>
          <h1 className="text-[#e14942] text-[14px] font-[600]">*</h1>
        </div>
        <p className="text-[#e14942] text-[14px] font-[400] ">test</p>
      </div>
    </div>
  );
};
