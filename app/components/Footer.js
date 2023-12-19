import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-screen z-10">
      <div className="py-16 mx-8 border-t-2">
        <div className="flex justify-between mb-10">
          <h3 className="text-2xl font-black">
            <Link href="/">decap.</Link>
          </h3>
          <ul className="flex gap-3">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex">
          <p>Designs by Kartik Bansal</p>
        </div>
      </div>
    </footer>
  );
}
