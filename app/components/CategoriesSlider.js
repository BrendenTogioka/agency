export default function CategoriesSlider() {
  return (
    <section className="overflow-hidden py-6">
      <div className="relative h-[40px] w-screen bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 ">
        <ul className="absolute left-0 flex justify-center items-center gap-4 h-[40px] w-[110%] text-white bg-gray-900 -rotate-[3deg] -translate-x-2 overflow-hidden">
          <li>Design</li>
          <li className="text-slate-400">&#9670;</li>
          <li>Discover</li>
          <li>&#9670;</li>
          <li>Develop</li>
          <li>&#9670;</li>
          <li>Design</li>
          <li className="text-slate-400">&#9670;</li>
          <li>Discover</li>
          <li>&#9670;</li>
          <li>Develop</li>
          <li>&#9670;</li>
          <li>Design</li>
          <li className="text-slate-400">&#9670;</li>
          <li>Discover</li>
          <li>&#9670;</li>
          <li>Develop</li>
          <li>&#9670;</li>
        </ul>
      </div>
    </section>
  );
}
