import { useState } from "react";
import { FaPlus, FaSyncAlt } from "react-icons/fa";
import mockData from "../assets/mockdata.js";
import Button from "./Button.jsx";
import DropdownInput from "./DropdownInput.jsx";
import SearchInput from "./SearchInput.jsx";
import FilterInput from "./FilterInput.jsx";

const Searchbar = ({ onAddProductClick }) => {
  const [filters, setFilters] = useState({
    search: "",
    searchBy: "",
    category: "",
    product: "",
    sortBy: "",
    color: "",
    thickness: "",
    diameter: "",
  });
  const [openDropdown, setOpenDropdown] = useState(null);

  const columnTitles = Object.keys(mockData[0] || {}).filter((key) =>
    [
      "name",
      "category",
      "code",
      "price",
      "store",
      "warehouse",
      "status",
      "tax",
    ].includes(key)
  );

  const uniqueCategories = [...new Set(mockData.map((item) => item.category))];

  const allProductNames = mockData.map((item) => item.name);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleSelect = (field, value) => {
    setFilters({ ...filters, [field]: value });
    setOpenDropdown(null);
  };

  const handleRefresh = () => {
    setFilters({
      search: "",
      searchBy: "",
      category: "",
      product: "",
      sortBy: "",
      color: "",
      thickness: "",
      diameter: "",
    });
  };

  return (
    <div className="w-full px-6 pt-0 space-y-6">
      <div className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full">
        <h2 className="text-sm md:text-lg font-bold text-gray-800 min-w-max">
          Products
        </h2>

        <SearchInput
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          placeholder="Search products by name or id..."
        />

        <DropdownInput
          label="Search By"
          value={filters.searchBy}
          options={columnTitles}
          isOpen={openDropdown === "searchBy"}
          onToggle={() => toggleDropdown("searchBy")}
          onSelect={(val) => handleSelect("searchBy", val)}
          readOnly={false}
        />

        <Button
          onClick={onAddProductClick}
          className="bg-gradient-to-r from-[#39e28e] to-[#12a55e] text-white  cursor-pointer"
        >
          <FaPlus /> Add Products
        </Button>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-4 items-end w-full">
        <DropdownInput
          label="Category"
          value={filters.category}
          options={uniqueCategories}
          isOpen={openDropdown === "category"}
          onToggle={() => toggleDropdown("category")}
          onSelect={(val) => handleSelect("category", val)}
        />

        <DropdownInput
          label="Select Product"
          value={filters.product}
          options={allProductNames}
          isOpen={openDropdown === "product"}
          onToggle={() => toggleDropdown("product")}
          onSelect={(val) => handleSelect("product", val)}
        />

        <div className="flex flex-col md:flex-row items-start md:items-end gap-1 flex-grow min-w-[160px]">
          <label className="text-xs md:text-sm font-semibold text-gray-500 whitespace-nowrap mb-1 md:mb-2">
            Sort By
          </label>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Sort by..."
              className="w-full pr-10 pl-3 py-1 md:py-2 border rounded text-xs md:text-sm text-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full items-start md:items-end mx-auto">
        <div className="flex border border-gray-500 rounded-lg p-4 gap-4 min-w-0 w-full">
          {["Color", "Thickness", "Diameter"].map((label) => (
            <FilterInput
              key={label}
              label={label}
              value={filters[label.toLowerCase()]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  [label.toLowerCase()]: e.target.value,
                })
              }
            />
          ))}
        </div>

        <div className="flex justify-end w-auto flex-shrink-0">
          <Button
            onClick={handleRefresh}
            className="h-[40px] border-2 border-[#2ac97b] text-gray-700 mb-4 px-2 py-2 rounded-md cursor-pointer"
          >
            <FaSyncAlt className="text-green-500" /> Refresh
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
