import React from "react";
import { TextField } from ".";
export const Step3 = () => {
  return (
    <div className="flex flex-col gap-3">
      <TextField
        isCorrect={true}
        TextField={"Date of birth"}
        inputType={"date"}
      />
      <TextField
        className={"h-[180px]"}
        isCorrect={true}
        TextField={"Image"}
        inputType={"file"}
      />
    </div>
  );
};
