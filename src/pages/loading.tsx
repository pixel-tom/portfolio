import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Inconsolata } from "next/font/google";

const redHat = Inconsolata({ subsets: ["latin"] });

export default function Loading() {
  const [percentage, setPercentage] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);
  const messagesInitialized = useRef(false);

  useEffect(() => {
    const totalDuration = 3000; // 3 seconds
    const maxPercentage = 100;
    const lagTimeOptions = [200, 300, 400]; // Possible lag times in ms
    const updateCount = 30; // How many times the counter should update
    const terminalMessages = [
      "Initializing build...",
      "Loading modules...",
      "Compiling components...",
      "Optimizing assets...",
      "Finalizing...",
      "Build complete.",
    ];
    const messageInterval = totalDuration / terminalMessages.length;

    let count = 0;
    let updates = 0;

    const updateInterval = totalDuration / updateCount; // Time between each update
    const startTime = Date.now();

    const updatePercentage = () => {
      updates++;
      const timeElapsed = Date.now() - startTime;
      const percentagePerUpdate = maxPercentage / updateCount;

      count += Math.floor(Math.random() * 5) + 1; // Increase by a random amount between 1 and 5

      if (count >= maxPercentage || updates >= updateCount) {
        setPercentage(maxPercentage);
        return;
      }

      if (Math.random() < 0.1) {
        // 10% chance of lag
        const lagTime =
          lagTimeOptions[Math.floor(Math.random() * lagTimeOptions.length)];
        setTimeout(updatePercentage, lagTime);
      } else {
        setPercentage(Math.min(count, maxPercentage));
        setTimeout(updatePercentage, updateInterval);
      }
    };

    const initialTimeoutId = setTimeout(updatePercentage, updateInterval);

    const updateMessages = (index = 0) => {
      if (index < terminalMessages.length) {
        setMessages((prev) => [...prev, terminalMessages[index]]);
        setTimeout(() => updateMessages(index + 1), messageInterval);
      }
    };

    if (!messagesInitialized.current) {
      setTimeout(() => updateMessages(), messageInterval);
      messagesInitialized.current = true;
    }

    return () => clearTimeout(initialTimeoutId);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 min-w-screen min-h-screen flex flex-col justify-center items-center bg-[#AEA799] z-50 ${redHat.className}`}
    >
      <div className="flex justify-center w-full items-center text-[#272727] text-lg font-bold px-16">
        <div className="terminal text-sm w-1/3">
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
          <p>
            Loading<span className="flashing-underscore">_</span>
          </p>
        </div>
        <div className="flex justify-center items-center mt-4 w-1/3">
          <Image
            src={"/loading.svg"}
            alt="Loading"
            width={100}
            height={100}
            className="heartbeat-animation"
          />
        </div>
        <div className="loading w-1/3">
          <p className=" ml-auto w-8 text-right">{percentage}%</p>
        </div>
      </div>
    </div>
  );
}
