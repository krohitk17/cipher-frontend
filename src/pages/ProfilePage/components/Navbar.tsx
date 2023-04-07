export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 px-10 py-2 flex items-center gap-2 bg-gray-100">
      <img
        className="w-10 h-10"
        src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
        alt=""
      />
      <a
        className=" font-sans font-bold"
        href="https://www.cipherschools.com/courses"
      >
        CipherSchools
      </a>
    </div>
  );
}
