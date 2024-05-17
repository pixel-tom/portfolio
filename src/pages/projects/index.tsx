// Projects.tsx
import projects from "../../constants/projects";
import ProjectCard from "../components/ProjectCard";
import { Inconsolata } from "next/font/google";

const inter = Inconsolata({ subsets: ["latin"] });

export default function Projects() {
  return (
    <div className={`text-[#272727] ${inter.className}`}>
      <div className="h-screen w-full flex gap-6 items-center px-24">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
