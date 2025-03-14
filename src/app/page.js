"use client";
import Image from "next/image";
import { Header, Footer, Step1, Step2, Step3, Step4 } from "../components";
import { useState } from "react";
import { Cuprum } from "next/font/google";
const initialValues = {
  Firstname: "",
  Lastname: "",
  Username: "",
  Email: "",
  Phonenumbder: "",
  Password: "",
  Confirmpassword: "",
  Dateofbirth: "",
};
export default function Home() {
  //step count start
  const [count, setCount] = useState(0);
  const Steps = [Step1, Step2, Step3, Step4][count];
  //step count end

  //set input value start
  const [inputValues, setInputValues] = useState(initialValues);
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(inputValues);
  };
  //set input value end
  const handleNextStep = () => {
    validationCheck();
    setCount(count + 1);
  };

  const handlePreviousStep = () => {
    setCount(count - 1);
  };
  //Validation check function
  const validationCheck = () => {
    if (inputValues.Firstname.length < 8) {
      <Steps isCorrect={false} />;
    } else {
      <Steps isCorrect={true} />;
    }
  };
  return (
    <div className="w-fit h-fit flex flex-col bg-white rounded-[8px] p-8 ">
      <div className="w-[416px] h-fit  bg-white">
        {count < 3 ? <Header isEnd={true} /> : ""}
        <Steps handleOnChange={handleInputChange} stepCount={count + 1} />
        <div className="pt-[90px]">
          {count === 0 ? (
            <Footer
              isBack={true}
              stepCount={count + 1}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          ) : (
            <Footer
              isBack={false}
              stepCount={count + 1}
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
        </div>
      </div>
    </div>
  );
}
