import Image from "next/image";
import project1 from "@/public/images/project1.webp";
import project2 from "@/public/images/project2.webp";

const projects = [
  {
    brand: "Avadain",
    blurb: "graphene technology",
    tags: ["Web Design", "UI/UX Design"],
    img: project1,
  },
  {
    brand: "AtomBeam",
    blurb: "IoT software",
    tags: ["Graphic Design", "UI/UX Design"],
    img: project2,
  },
];

export default function SelectedProjectsSection() {
  return (
    <section className="py-12 px-8">
      <div className="w-full sm:w-2/3 mb-8">
        <h2 className="text-4xl font-bold mb-2 leading-snug bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
          Selected Projects
        </h2>
        <p>
          Explore our curated showcase of transformative campaigns, showcasing
          our commitment to creativity, strategy, and delivering exceptional
          results.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <div className="w-full h-full relative " key={project.brand}>
            <Image
              src={project.img}
              alt="project 1"
              className="aspect-square sm:aspect-video object-cover rounded-lg relative z-0 w-full"
            />
            <div className="h-full  absolute bottom-4 left-4 sm:-top-8 sm:left-8 z-10 text-gray-50 flex flex-col justify-end">
              <h3 className="text-3xl font-bold">{project.brand}</h3>
              <h4 className="text-md font-semibold uppercase mb-2">
                {project.blurb}
              </h4>
              <div>
                {project.tags.map((tag) => (
                  <button
                    key={tag}
                    className="py-2 px-3 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className="opacity-0 hover:opacity-100 duration-300 h-full w-full absolute top-0 left-0 z-20 bg-black/[0.6] rounded-lg flex justify-center items-center">
              <div className="w-[160px] h-[160px] rounded-full flex justify-center items-center bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 p-3 cursor-pointer scale-100 hover:scale-110 duration-300 ease-out">
                <h3 className="text-xl font-bold uppercase text-white text-center">
                  View Case Study
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
