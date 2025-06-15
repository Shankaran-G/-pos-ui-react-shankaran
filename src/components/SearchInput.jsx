import { FaSearch } from "react-icons/fa";

const SearchInput = ({ value, onChange, placeholder }) => (
  <div className="relative flex-grow min-w-[180px]">
    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2ac97b] text-sm md:text-base" />
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full pl-10 pr-4 py-1 md:py-2 border rounded text-xs md:text-sm text-gray-600"
    />
  </div>
);

export default SearchInput;
