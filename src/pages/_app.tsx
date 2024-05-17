import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Loading from "./loading"; // Adjust the import path as necessary
import { CSSTransition } from "react-transition-group";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 6000 milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <CSSTransition
        in={isLoading}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Loading />
      </CSSTransition>
      <Header />
      <Footer />
      <div className="relative h-full">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
