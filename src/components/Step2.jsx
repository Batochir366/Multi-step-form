import React from "react";
import { TextField } from ".";
import { Footer } from ".";
export const Step2 = () => {
  return (
    <div className="flex flex-col gap-3">
      <TextField TextField={"Email"} isCorrect={true} inputType={"email"} />
      <TextField TextField={"Phone numbder"} inputType={"number"} />
      <TextField TextField={"Password"} inputType={"password"} />
      <TextField TextField={"Confirm password"} inputType={"password"} />
    </div>
  );
};
