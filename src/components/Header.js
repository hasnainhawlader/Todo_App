import { HiDocumentText } from "react-icons/hi";
const Header = () => {
  return (
    <header className="header bg-gray-900 p-10 container mx-auto mt-10 rounded-tl-xl rounderd-tr-xl border-b border-dashed border-teal-700">
      <h2 className=" uppercase font-semibold text-teal-500 -tracking-wider flex gap-2 items-center">
        <span>
          <HiDocumentText />
        </span>
        <span>todo app</span>
      </h2>
    </header>
  );
};

export default Header;