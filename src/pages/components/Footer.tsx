import Image from "next/image";
import { Inconsolata } from "next/font/google";
import Link from "next/link";

const inter = Inconsolata({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className={`z-40 fixed bottom-10 left-0 px-20 flex justify-between w-full ${inter.className}`}>
      <div className="flex gap-6 text-[#272727]">
        <Link href={'/projects'}>PROJECTS</Link>
        <p className="font-bold">|</p>
        <Link href={'/design'}>DESIGN</Link>
        <p className="font-bold">|</p>
        <Link href={'/about'}>ABOUT</Link>
      </div>
    </div>
  );
}
