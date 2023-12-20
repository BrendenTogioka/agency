import Image from "next/image";
import Link from "next/link";
import webDesign from "@/public/images/services/webdesign.png";
import graphicDesign from "@/public/images/services/graphicdesign.png";
import uiuxDesign from "@/public/images/services/uiuxdesign.png";
import project1 from "@/public/images/projects/1.png";
import project2 from "@/public/images/projects/2.png";
import project3 from "@/public/images/projects/3.png";
import project4 from "@/public/images/projects/4.png";
import project5 from "@/public/images/projects/5.png";
import project6 from "@/public/images/projects/6.png";
import CategoriesSlider from "../components/CategoriesSlider";

const blogs = [
  {
    title: "Mastering the Art of Targeted Advertising",
    author: "Brenden Togioka",
    slug: "mastering-the-art-of-targeted-advertising",
    image: project1,
    tags: ["advertising"],
  },
  {
    title: "Unlocking the Potential of Influencer Partnerships",
    author: "Demeris Morse",
    slug: "unlocking-the-potential-of-influencer-partnerships",
    image: project2,
    tags: ["influencers", "partnerships"],
  },
  {
    title: "The Rise of AI in Marketing",
    author: "Brenden Togioka",
    slug: "the-rise-of-ai-in-marketing",
    image: project3,
    tags: ["content"],
  },
  {
    title: "Crafting Compelling Stories for Brand Success",
    author: "Brenden Togioka",
    slug: "crafting-compelling-stories-for-brand-success",
    image: project4,
    tags: ["content", "branding"],
  },
  {
    title: "Effective Strategies for Online Marketing",
    author: "Demeris Morse",
    slug: "effective-strategies-for-online-marketing",
    image: project5,
    tags: ["strategy"],
  },
  {
    title: "Leveraging Analytics for Strategic Growth",
    author: "Demeris Morse",
    slug: "leveraging-analytics-for-strategic-growth",
    image: project6,
    tags: ["strategy", "bizdev"],
  },
];

export default function Projects() {
  return (
    <div className="mb-20 sm:mt-10  py-12 relative">
      <div className="flex justify-center sm:justify-start max-w-[1260px] mx-auto px-8 ">
        <h1 className="text-5xl sm:text-6xl text-center sm:text-left font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text pb-2">
          Projects & Case Studies
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 max-w-[1260px] mx-auto py-12 px-8 ">
        <div className="p-4 flex flex-col bg-white rounded-lg">
          <div>
            <Image
              src={project1}
              alt="Mastering the Art of Targeted Advertising"
            />
          </div>
          <div className="flex gap-2 text-xs font-semibold mb-2 mt-4">
            <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
              UI/UX
            </span>
            <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
              Web Design
            </span>
          </div>
          <h2 className="font-bold text-xl sm:text-3xl mb-2">
            Mastering the Art of Targeted Advertising
          </h2>
          <h4 className="text-xs text-slate-600  sm:text-base">
            By Brenden Togioka
          </h4>
        </div>
        <div className="p-4 flex flex-col bg-white rounded-lg">
          <div>
            <Image
              src={project2}
              alt="Unlocking the Potential of Influencer Partnerships"
            />
          </div>
          <div className="flex gap-2 text-xs font-semibold mb-2 mt-4">
            <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
              UI/UX
            </span>
            <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
              Web Design
            </span>
          </div>
          <h2 className="font-bold text-xl sm:text-3xl mb-2 ">
            Unlocking the Potential of Influencer Partnerships
          </h2>
          <h4 className="text-xs text-slate-600 sm:text-base">
            By Demeris Morse
          </h4>
        </div>
      </div>

      <CategoriesSlider />

      <div className="pt-12 px-8 max-w-[1260px] mx-auto">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text py-2 mb-6">
          Recent Insights
        </h2>
        <div className="text-sm font-semibold flex gap-2 justify-center">
          <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
            UI/UX
          </span>
          <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
            Web Design
          </span>
          <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
            UI/UX
          </span>
          <span className="bg-slate-800 py-1 px-3 text-white rounded-full">
            Web Design
          </span>
        </div>
      </div>

      <div className="py-12 px-8 flex flex-col gap-8 max-w-[1260px] mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="p-4 flex flex-col sm:flex-row sm:gap-6 sm:items-center bg-white rounded-lg"
          >
            <div className="w-full sm:w-1/2">
              <Image src={blog.image} alt={blog.title} className="rounded-md" />
            </div>
            <div className="w-full sm:w-1/2">
              <div className="text-sm font-semibold flex gap-2 mt-4 mb-2 sm:mb-3">
                {blog.tags.map((tag) => (
                  <span
                    className="bg-slate-800 py-1 px-3 text-white rounded-full uppercase"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-xl mb-2 sm:text-3xl">
                {blog.title}
              </h3>
              <h4 className="text-xs text-slate-600 sm:text-base">
                By {blog.author}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
