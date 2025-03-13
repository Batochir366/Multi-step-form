"use client";
import React from "react";
import { TextField } from ".";
import { Footer } from ".";
export const Step1 = ({ handleOnChange }) => {
  return (
    <div className="flex flex-col gap-3">
      <TextField
        handleOnChange={handleOnChange}
        TextField={"First name"}
        isCorrect={true}
        inputType={"text"}
        name="Firstname"
      />
      <TextField
        handleOnChange={handleOnChange}
        TextField={"Last name"}
        inputType={"text"}
        name="Lastname"
      />
      <TextField
        handleOnChange={handleOnChange}
        TextField={"Username"}
        inputType={"text"}
        name="Username"
      />
    </div>
  );
};
