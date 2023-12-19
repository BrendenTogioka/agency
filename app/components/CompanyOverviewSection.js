import Image from "next/image";

import brand1 from "@/public/images/twoscreens.webp";
import brand2 from "@/public/images/iphone.webp";
import brand3 from "@/public/images/laptop.webp";
import brand4 from "@/public/images/ipad.webp";

export default function CompanyOverviewSection() {
  return (
    <section className="py-12 px-8">
      <div className="flex flex-col sm:flex-row justify-center items-center text-center sm:text-left">
        <div className="w-full sm:w-1/2">
          <h3 className="text-md font-semibold uppercase">
            Test. Optimize. Scale.
          </h3>
          <h2 className="text-4xl font-bold mb-2 leading-snug bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
            Creative UI/
            <br />
            UX Designer
          </h2>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-3 mb-5">
          <h3 className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            obcaecati dolorum.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            deleniti!
          </p>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col items-center gap-1">
              <h5 className="text-xs font-medium uppercase bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
                Projects
              </h5>
              <span className="text-2xl font-bold">100+</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h5 className="text-xs font-medium uppercase bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
                Experience
              </h5>
              <span className="text-2xl font-bold">20+ Yrs</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h5 className="text-xs font-medium uppercase bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
                Funds Raised
              </h5>
              <span className="text-2xl font-bold">$10M+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:gap-6 gap-y-4 grid-cols-1 sm:grid-cols-4">
        <Image
          src={brand1}
          alt="brand1"
          className="col-span-1 rounded-lg sm:h-full w-full aspect-square object-cover"
        />
        <Image src={brand2} alt="brand2" className="col-span-2 rounded-lg" />
        <div className="col-span-1 flex flex-col gap-6">
          <Image src={brand3} alt="brand3" className=" rounded-lg" />
          <Image src={brand4} alt="brand4" className=" rounded-lg" />
        </div>
      </div>
    </section>
  );
}
