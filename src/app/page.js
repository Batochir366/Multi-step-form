import Image from "next/image";
import { Header, Footer } from "../components";

export default function Home() {
  return (
    <div className="w-fit h-fit flex flex-col bg-white rounded-[8px] p-8">
      <div className="w-[416px] h-fit bg-white">
        <Header />
      </div>
      <div className="bg-green-600 w-[416px] h-[300px]"></div>
      <Footer />
    </div>
  );
}
