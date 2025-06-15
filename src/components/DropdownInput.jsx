import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const DropdownInput = ({
  label,
  value,
  placeholder,
  options = [],
  onSelect,
  isOpen,
  onToggle,
  readOnly = true,
}) => (
  <div className="flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow min-w-[160px] relative">
    <label className="text-xs md:text-sm font-semibold text-gray-500 whitespace-nowrap mb-1 md:mb-2">
      {label}
    </label>
    <div className="relative w-full cursor-pointer" onClick={onToggle}>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        className="w-full pr-10 pl-3 py-1 md:py-2 border rounded text-xs md:text-sm text-gray-700 cursor-pointer"
      />
      {isOpen ? (
        <FaAngleDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
      ) : (
        <FaAngleRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
      )}

      {isOpen && (
        <div className="absolute z-20 bg-white border rounded shadow-md mt-1 w-full max-h-40 overflow-auto text-sm">
          {options.map((opt) => (
            <div
              key={opt}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => onSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default DropdownInput;
