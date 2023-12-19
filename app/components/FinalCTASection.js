import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section className="py-12 px-8 text-4xl font-semibold">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start text-start">
          <h2>
            See the impact of good,
            <br />
            conversion-oriented
            <br />
            design on your business.
          </h2>
          <Link
            href="/"
            className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 inline-block text-transparent bg-clip-text underline underline-offset-2 mt-6"
          >
            Let&#x27;s Work Together &#x27AB;
            <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 h-1 w-full mt-1"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
