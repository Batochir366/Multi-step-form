import React from "react";
import { TextField } from ".";
import { Footer } from ".";
export const Step2 = ({ handleOnChange, isCorrect }) => {
  return (
    <div className="flex flex-col gap-3">
      <TextField
        handleOnChange={handleOnChange}
        TextField={"Email"}
        inputType={"email"}
        name={"Email"}
      />
      <TextField
        handleOnChange={handleOnChange}
        TextField={"Phone numbder"}
        inputType={"number"}
        name={"Phonenumber"}
      />
      <TextField
        handleOnChange={handleOnChange}
        TextField={"Password"}
        inputType={"password"}
        name={"Password"}
      />
      <TextField
        handleOnChange={handleOnChange}
        TextField={"Confirm password"}
        inputType={"password"}
        name={"Confirmpassword"}
      />
    </div>
  );
};
