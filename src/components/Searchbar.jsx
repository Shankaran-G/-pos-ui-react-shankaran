import { FaSearch, FaAngleRight, FaPlus, FaSyncAlt } from "react-icons/fa";

const Searchbar = ({ onRefresh }) => {
  return (
    <div className="w-full px-6 pt-0 space-y-6">
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full">
        <h2 className="text-sm md:text-lg font-bold text-gray-800 min-w-max">
          Products
        </h2>

        <div className="relative flex-grow min-w-[180px]">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2ac97b] text-sm md:text-base" />
          <input
            type="text"
            placeholder="Search products by name or id..."
            className="w-full pl-10 pr-4 py-1 md:py-2 border rounded text-xs md:text-sm text-gray-400"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow min-w-[160px]">
          <label className="text-xs md:text-sm font-semibold text-gray-500 whitespace-nowrap mb-1 md:mb-2">
            Search By
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pr-10 pl-3 py-1 md:py-2 border rounded text-xs md:text-sm text-gray-700"
            />
            <FaAngleRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm md:text-base" />
          </div>
        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-[#39e28e] to-[#12a55e] text-white px-3 md:px-4 py-1 md:py-2 rounded-xl text-xs md:text-sm whitespace-nowrap">
          <FaPlus /> Add Products
        </button>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full">
        {[
          { label: "Category", minW: "min-w-[160px]" },
          {
            label: "Select Product",
            placeholder: "Search products by name or id...",
            minW: "min-w-[220px]",
          },
          { label: "Sort By", minW: "min-w-[160px]" },
        ].map(({ label, placeholder, minW }) => (
          <div
            key={label}
            className={`flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow ${minW}`}
          >
            <label className="text-xs md:text-sm font-semibold text-gray-500 whitespace-nowrap mb-1 md:mb-2">
              {label}
            </label>
            <div className="relative w-full">
              <input
                type="text"
                placeholder={placeholder}
                className="w-full pr-10 pl-3 py-1 md:py-2 border rounded text-xs md:text-sm text-gray-500"
              />
              <FaAngleRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm md:text-base" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full items-start md:items-end mx-auto">
        <div className="flex border border-gray-500 rounded-lg p-4 gap-4 min-w-0 w-full">
          {["Color", "Thickness", "Diameter"].map((label) => (
            <div
              key={label}
              className="flex flex-row items-start gap-1 flex-grow min-w-0"
            >
              <label className="text-sm font-semibold mt-2 text-gray-500 whitespace-nowrap mb-2">
                {label}
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
                />
                <FaAngleRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end w-auto flex-shrink-0">
          <button
            onClick={onRefresh}
            className="h-[40px] flex items-center gap-2 border-2 border-[#2ac97b] text-gray-700 mb-4 px-2 py-2 text-sm rounded-md whitespace-nowrap"
          >
            <FaSyncAlt className="text-green-500" /> Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
