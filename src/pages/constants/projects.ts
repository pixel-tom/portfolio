// projects.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    githubLink: string;
    liveLink: string;
    builtWith: string[];
  }
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Scoop.io",
      description: "Front End built on top of ShadowDrive, a decentralized storage protocol by GenesysGo. File management, transfer & sharing, immutable storage and more.",
      image: "/scoop-graphic.png",
      githubLink: "https://github.com/pixel-tom/scoop",
      liveLink: "https://ohmies-gules.vercel.app/",
      builtWith: ["/next.png", "/typescript.png", "/solana.png"],
    },
    {
      id: 2,
      title: "Ohmies.io",
      description: "Front End built on top of ShadowDrive, a decentralized storage protocol by GenesysGo. File management, transfer & sharing, immutable storage and more.",
      image: "/ohmies-concept.png",
      githubLink: "https://github.com/pixel-tom/scoop",
      liveLink: "https://ohmies-gules.vercel.app/",
      builtWith: ["/next.png", "/typescript.png", "/solana.png"],
    },
    {
      id: 3,
      title: "Fetch - xNFT dAPP",
      description: "Front End built on top of ShadowDrive, a decentralized storage protocol by GenesysGo. File management, transfer & sharing, immutable storage and more.",
      image: "/fetch-graphic.png",
      githubLink: "https://github.com/pixel-tom/scoop",
      liveLink: "https://ohmies-gules.vercel.app/",
      builtWith: ["/next.png", "/typescript.png", "/solana.png"],
    },
  ];
  
  export default projects;
  