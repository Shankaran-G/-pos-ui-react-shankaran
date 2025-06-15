import { FaAngleRight } from "react-icons/fa";

const FilterInput = ({ label, value, onChange }) => (
  <div className="flex flex-row items-start gap-1 flex-grow min-w-0">
    <label className="text-sm font-semibold mt-2 text-gray-500 whitespace-nowrap mb-2">
      {label}
    </label>
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
      />
      <FaAngleRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
    </div>
  </div>
);

export default FilterInput;
