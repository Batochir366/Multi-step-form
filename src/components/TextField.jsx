import React from "react";

export const TextField = ({
  isCorrect,
  TextField,
  HelperText,
  inputType,
  className,
  handleOnChange,
  name,
}) => {
  return (
    <div className="w-fit h-fit bg-white gap-2 flex flex-col">
      <div className="flex">
        <h1 className="text-[#334155] text-[14px] font-[600]">{TextField}</h1>
        <h1 className="text-[#e14942] text-[14px] font-[600]">*</h1>
      </div>
      <input
        onChange={handleOnChange}
        name={name}
        type={inputType}
        className={
          `w-[392px]  ${
            isCorrect ? "text-[#121316]" : "text-[#e14942]"
          } p-3 border bg-white border-solid ${
            isCorrect ? "border-[#cbd5e1]" : "border-[#e14942]"
          }  rounded-[8px] text-[16px] font-[400]  ${
            isCorrect
              ? "focus-visible:outline-[#0CA5E9]"
              : "focus-visible:outline-none "
          }  
         ` + className
        }
      />
      {isCorrect ? (
        ""
      ) : (
        <p className="text-[#e14942] text-[14px] font-[400] ">test</p>
      )}
    </div>
  );
};
