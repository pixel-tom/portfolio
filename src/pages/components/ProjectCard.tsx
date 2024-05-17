import Image from "next/image";
import Link from "next/link";
import { Project } from "../constants/projects";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="h-[435px] w-[330px] bg-[#272727] rounded-[10px] transition-transform duration-300 ease-in-out hover:-translate-y-1">
      <div className="h-[435px] w-[330px] -translate-y-[8px] -translate-x-[8px] transition-transform duration-300 ease-in-out hover:-translate-y-[10px] hover:-translate-x-[10px] mb-1 flex flex-col bg-[#C4BEB1] border-2 border-[#272727] rounded-[10px]">
        <div className="w-full h-[214px]">
          <Image
            src={project.image}
            alt={project.title}
            height={180}
            width={420}
          />
        </div>
        <div className="flex flex-col justify-between h-full py-3">
          <div className="flex justify-between px-4 mb-3">
            <div className="font-bold text-xl">{project.title}</div>
            <div className="flex gap-1 my-auto">
              <Link href={project.githubLink}>
                <Image
                  src="/github.png"
                  alt="GitHub"
                  height={30}
                  width={30}
                  className="my-auto"
                />
              </Link>
              <Link href={project.liveLink}>
                <Image
                  src="/link.png"
                  alt="Live Link"
                  height={30}
                  width={30}
                  className="my-auto"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex px-4 text-gray-600 text-sm h-16 line-clamp-1">
              {project.description}
            </div>
            <div className="px-4 bottom-0 text-xs text-gray-500">
              <p>Built with</p>
              <div className="flex gap-2">
                {project.builtWith.map(
                  (
                    tech: string | StaticImport,
                    index: Key | null | undefined
                  ) => (
                    <Image
                      key={index}
                      src={tech}
                      alt=""
                      height={30}
                      width={30}
                      className="my-auto"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
