import Image from "next/image";
import Link from "next/link";
import webDesign from "@/public/images/services/webdesign.png";
import graphicDesign from "@/public/images/services/graphicdesign.png";
import uiuxDesign from "@/public/images/services/uiuxdesign.png";

const services = [
  {
    title: "Web Design",
    image: webDesign,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia? Reiciendis ducimus amet tenetur perspiciatis non sit porro neque nisi?",
  },
  {
    title: "Graphic Design",
    image: graphicDesign,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum corrupti cumque, id eius voluptate!",
  },
  {
    title: "UI/UX Design",
    image: uiuxDesign,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor in fugit modi eaque quia. Voluptatem.",
  },
];

export default function Services() {
  return (
    <div className="py-12 px-8 mb-20 max-w-[1260px] sm:mt-10">
      <div className="flex justify-center sm:justify-start">
        <h1 className="text-5xl sm:text-6xl text-center sm:text-left font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
          Services
        </h1>
      </div>
      <div className="flex flex-col gap-16 mt-20">
        {services.map((service) => (
          <div
            className={`flex flex-col-reverse  items-center gap-8 sm:gap-16 ${
              service.title === "Graphic Design"
                ? "sm:flex-row-reverse"
                : "sm:flex-row"
            }`}
            key={service.title}
          >
            <div className="sm:w-1/2">
              <h2 className="text-4xl sm:text-5xl pb-2 font-bold mb-2 leading-snug bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
                {service.title}
              </h2>
              <p className="w-[40ch] mb-6 text-lg">{service.description}</p>
              <Link
                href="/contact"
                className="font-semibold text-lg text-white py-2 px-3  mr-2 rounded-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500"
              >
                Get in Touch
              </Link>
            </div>
            <div className="sm:w-1/2">
              <Image src={service.image} alt={service.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
