export default function Navbar({ children }: { children: any }) {
  return (
    <div className="w-[100%] bg-blue-100 sticky top-0 z-50 mb-2 p-5 flex flex-row justify-between items-center px-10">
      {children}
    </div>
  );
}
