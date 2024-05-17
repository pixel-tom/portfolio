import Image from "next/image";
import { Inconsolata } from "next/font/google";
import Link from "next/link";

const inter = Inconsolata({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className={`z-40 fixed bottom-10 left-0 px-20 flex justify-between w-full ${inter.className}`}>
      <div className="flex gap-6 text-[#272727]">
        <Link href={'/projects'} className="hover:font-semibold">PROJECTS</Link>
        <p className="font-bold">|</p>
        <Link href={'/design'} className="hover:font-semibold">DESIGN</Link>
        <p className="font-bold">|</p>
        <Link href={'/about'} className="hover:font-semibold">ABOUT</Link>
      </div>
    </div>
  );
}
