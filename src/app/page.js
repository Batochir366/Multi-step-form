"use client";
import Image from "next/image";
import { Header, Footer, Step1, Step2, Step3, Step4 } from "../components";
import { useState } from "react";
import { Cuprum } from "next/font/google";

export default function Home() {
  const [count, setCount] = useState(0);
  const Steps = [Step1, Step2, Step3, Step4][count];

  return (
    <div className="w-fit h-fit flex flex-col bg-white rounded-[8px] p-8 ">
      <div className="w-[416px] h-fit  bg-white">
        {count < 3 ? <Header isEnd={true} /> : ""}
        <Steps stepCount={count + 1} />
        <div className="pt-[90px]">
          {count > 0 ? (
            <Footer
              isHidden={false}
              isBack={false}
              stepCount={count + 1}
              handleNextStep={() => setCount(count + 1)}
              handlePreviousStep={() => setCount(count - 1)}
            />
          ) : (
            <Footer
              isHidden={false}
              isBack={true}
              stepCount={count + 1}
              handleNextStep={() => setCount(count + 1)}
              handlePreviousStep={() => setCount(count - 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
