import { useEffect } from 'react';
import Image from "next/image";
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({ subsets: ["latin"] });

export default function Header() {
  useEffect(() => {
    const createConfetti = () => {
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'confetti-container';
      document.body.appendChild(confettiContainer);

      for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = 'gm';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confettiContainer.appendChild(confetti);
      }

      setTimeout(() => {
        confettiContainer.remove();
      }, 12000); // Match the duration of the animation
    };

    const gmButton = document.getElementById('gm-button');
    if (gmButton) {
      gmButton.addEventListener('click', createConfetti);
    }

    return () => {
      if (gmButton) {
        gmButton.removeEventListener('click', createConfetti);
      }
    };
  }, []);

  return (
    <div className={`z-40 fixed top-10 left-0 px-16 flex justify-between w-full ${inter.className}`}>
      <div>
        <Image src={"/loading.svg"} alt="" height={90} width={90} />
      </div>
      <div className="flex gap-4 font-semibold text-[16px] my-auto">
        <button id="gm-button" className="border-2 border-[#272727] text-[#272727] py-[10px] px-[36px] rounded-full">
          GM
        </button>
        <button className="bg-[#272727] text-[#C4BEB1] py-[10px] px-[20px] rounded-full">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
}
