"use client";
import React from "react";
import { TextField } from ".";
import { Footer } from ".";
export const Step1 = () => {
  return (
    <div className="flex flex-col gap-3">
      <TextField TextField={"First name"} isCorrect={true} inputType={"text"} />
      <TextField TextField={"Last name"} inputType={"text"} />
      <TextField TextField={"Username"} inputType={"text"} />
    </div>
  );
};
