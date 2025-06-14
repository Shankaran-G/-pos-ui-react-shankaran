import { FaBell, FaSearch, FaAngleRight } from "react-icons/fa";
import profileImg from "../assets/women.png";
const Topbar = () => (
  <div className="flex items-center justify-between px-8 py-6 bg-white">
    <div className="flex items-center gap-8 w-full">
      <div className="w-1/2 relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2ac97b] text-xl" />
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-[#2ac97b]"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <FaBell className="text-gray-600 text-2xl" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full" />
        </div>

        <div className="w-10 h-10 border-2 border-[#2ac97b] overflow-hidden">
          <img
            src={profileImg}
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>

        <FaAngleRight className="text-gray-500 text-2xl mb-3" />

        <h2 className="text-3xl font-bold text-gray-800 mb-3">Bill</h2>
      </div>
    </div>
  </div>
);

export default Topbar;
