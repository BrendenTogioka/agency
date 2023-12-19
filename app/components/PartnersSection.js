import Image from "next/image";

import psIcon from "@/public/images/photoshop.png";
import aeIcon from "@/public/images/after-effects.png";
import ppIcon from "@/public/images/premiere-pro.png";
import lrIcon from "@/public/images/lightroom.png";
import xdIcon from "@/public/images/xd.png";

export default function PartnersSection() {
  return (
    <section className="py-12 px-8 max-w-[1260px] ">
      <h2 className="text-4xl font-bold mb-4 leading-snug bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
        Our Partners
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-xs uppercase font-medium">
        <div className="bg-gray-200 p-3 rounded-lg flex flex-col items-center  gap-4 w-full">
          <Image src={psIcon} alt="photoshop" width="60" />
          <h4>Photoshop</h4>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg flex flex-col items-center gap-4 w-full">
          <Image src={aeIcon} alt="after effects" width="60" />
          <h4>AfterEffects</h4>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg flex flex-col items-center gap-4 w-full">
          <Image src={ppIcon} alt="premiere pro" width="60" />
          <h4>Premiere </h4>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg flex flex-col items-center gap-4 w-full">
          <Image src={lrIcon} alt="lightroom" width="60" />
          <h4>Lightroom</h4>
        </div>
        <div className="bg-gray-200 p-3 rounded-lg flex flex-col items-center gap-4 w-full">
          <Image src={xdIcon} alt="xd" width="60" />
          <h4>Adobe Xd</h4>
        </div>
      </div>
    </section>
  );
}
