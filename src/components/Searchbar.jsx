import { FaSearch, FaAngleRight, FaPlus, FaSyncAlt } from "react-icons/fa";

const Searchbar = ({ onRefresh }) => {
  return (
    <div className="w-full px-6 pt-0 space-y-6">
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full">
        <h2 className="text-lg font-bold text-gray-800 min-w-max">Products</h2>

        <div className="relative flex-grow min-w-[200px]">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2ac97b]" />
          <input
            type="text"
            placeholder="Search products by name or id..."
            className="w-full pl-10 pr-4 py-2 border rounded text-sm text-gray-400"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow min-w-[180px]">
          <label className="text-sm font-semibold text-gray-500 whitespace-nowrap mb-2">
            Search By
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-700"
            />
            <FaAngleRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-[#39e28e] to-[#12a55e] text-white px-4 py-2 rounded-2xl whitespace-nowrap">
          <FaPlus /> Add Products
        </button>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow min-w-[180px]">
          <label className="text-sm font-semibold text-gray-500 whitespace-nowrap mb-2">
            Category
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
            />
            <FaAngleRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow min-w-[240px]">
          <label className="text-sm font-semibold text-gray-500 whitespace-nowrap mb-2">
            Select Product
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products by name or id..."
              className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
            />
            <FaAngleRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow min-w-[180px]">
          <label className="text-sm font-semibold text-gray-500 whitespace-nowrap mb-2">
            Sort By
          </label>
          <div className="relative w-full">
            <input
              type="text"
              className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
            />
            <FaAngleRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full items-start lg:items-end">
        <div className="flex flex-col lg:flex-row gap-4 border border-gray-500 rounded-lg p-4 w-full items-start lg:items-end">
          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-1 flex-grow min-w-[180px]">
            <label className="text-sm font-semibold text-gray-500 whitespace-nowrap mb-2">
              Color
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
              />
              <FaAngleRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-1 flex-grow min-w-[180px]">
            <label className="text-sm font-semibold text-gray-500 whitespace-nowrap mb-2">
              Thickness
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
              />
              <FaAngleRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-end gap-1 flex-grow min-w-[180px]">
            <label className="text-sm font-semibold text-gray-500 whitespace-nowrap mb-2">
              Diameter
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="w-full pr-10 pl-3 py-2 border rounded text-sm text-gray-500"
              />
              <FaAngleRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full lg:w-auto">
          <button
            onClick={onRefresh}
            className="h-[40px] flex items-center gap-2 border-2 border-[#2ac97b] text-gray-700 mb-4 px-2 py-2 text-sm rounded-md"
          >
            <FaSyncAlt /> Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
