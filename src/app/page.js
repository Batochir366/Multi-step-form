import Image from "next/image";
import { Header, Footer, Step1, Step2, Step3 } from "../components";

export default function Home() {
  return (
    <div className="w-fit h-fit flex flex-col bg-white rounded-[8px] p-8">
      <div className="w-[416px] h-fit bg-white">
        <Header isEnd={false} />
      </div>
      {/* <Step1 /> */}
      {/* <Step2 /> */}
      <Step3 />
      <div className="pt-[90px]">
        <Footer />
      </div>
    </div>
  );
}
