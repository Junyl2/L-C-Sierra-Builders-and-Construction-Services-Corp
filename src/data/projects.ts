import project1 from "@/assets/projects/project-1.jpg";
import project2 from "@/assets/projects/project-2.jpg";
import project3 from "@/assets/projects/project-3.jpg";
import project4 from "@/assets/projects/project-4.jpg";
import project5 from "@/assets/projects/project-5.jpg";
import project6 from "@/assets/projects/project-6.jpg";
import project7 from "@/assets/projects/project-7.jpg";
import project8 from "@/assets/projects/project-8.jpg";
import project9 from "@/assets/projects/project-9.jpg";
import project10 from "@/assets/projects/project-10.jpg";

export interface ProjectImage {
  id: string;
  src: string;
  title: string;
  meta: string;
}

export const projectImages: ProjectImage[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
].map((src, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    id: `project-${number}`,
    src,
    title: `Gallery Image ${number}`,
    meta: "Construction reference image",
  };
});
