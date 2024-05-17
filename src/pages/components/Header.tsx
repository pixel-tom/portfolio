import Image from "next/image";
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({ subsets: ["latin"] });

export default function Header() {
  return (
    <div className={`fixed top-10 left-0 px-16 flex justify-between w-full ${inter.className}`}>
      <div>
        <Image src={"/loading.svg"} alt="" height={90} width={90} />
      </div>
      <div className="flex gap-4 font-semibold text-[16px] my-auto">
        <button className="border-2 border-[#272727] text-[#272727] py-[10px] px-[36px] rounded-full">
          GM
        </button>
        <button className="bg-[#272727] text-[#C4BEB1] py-[10px] px-[20px] rounded-full">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
}
