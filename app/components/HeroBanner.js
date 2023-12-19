import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/heroimage.webp";

export default function HeroBanner() {
  return (
    <section className="py-12 px-8 flex items-center flex-col sm:flex-row">
      <div className="w-full md:w-1/2 text-center md:text-left mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-2 leading-snug">
            Where Innovation
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text">
              Meets IMPACT
            </span>
          </h1>
          <h2 className="text-xl mb-4">
            Elevate your brand & captivate your audience with IMPACT Solutions!
          </h2>
        </div>
        <div>
          <Link
            href="/contact"
            className="font-semibold py-2 px-3 mr-2 rounded-lg bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500"
          >
            Get in Touch
          </Link>
          <Link
            href="/projects"
            className="font-semibold py-2 px-3 rounded-lg border-2 border-indigo-500 "
          >
            View All Work
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image src={heroImage} alt="hero image" />
      </div>
    </section>
  );
}
