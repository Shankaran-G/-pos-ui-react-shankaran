import { FaUpload, FaSyncAlt, FaAngleRight } from "react-icons/fa";
import Button from "./Button";

const AddProduct = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-10 bg-white border-4 border-green-500 rounded-lg p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Add New Product
          </h2>
          <button className="text-sm bg-gradient-to-r from-[#f54a3b] to-[#f48c55] text-white px-3 py-2 rounded-2xl font-medium">
            Scan Barcode
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex flex-col w-full relative">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <input className="border rounded px-3 py-2 text-sm" required />
            <FaAngleRight className="absolute text-3xl right-3 top-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input className="border rounded px-3 py-2 text-sm" required />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Product Description
            </label>
            <input className="border rounded px-3 py-2 text-sm" required />
          </div>
          <div className="flex flex-col w-full sm:w-1/4">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Reorder Level(Stock) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="border rounded px-3 py-2 text-sm"
              required
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/4">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Expire Alert Days <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="border rounded px-3 py-2 text-sm"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 mb-6 font-bold">
          {["GST", "HST", "VAT", "Tax"].map((tax, index) => (
            <label
              key={index}
              className="flex items-center gap-4 text-lg text-gray-700 cursor-pointer"
            >
              <input type="checkbox" className="w-6 h-6 accent-green-500" />
              <span className="text-lg">{tax}</span>
            </label>
          ))}
        </div>

        <div className="border p-4 rounded mb-6 bg-gray-50">
          <div className="flex flex-wrap items-center gap-6 mb-4">
            <div className="w-50 h-10 mt-3 bg-gray-300 rounded flex flex-shrink-0">
              <div className="bg-white rounded-full p-2 flex">
                <FaUpload className="text-3xl text-gray-400" />
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <span className="text-base">Use for Sale</span>
              <input type="checkbox" className="w-5 h-5 accent-green-500" />
            </label>

            <div className="flex flex-col w-full sm:w-1/2">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Product Code <span className="text-red-500">*</span>
              </label>
              <input className="border rounded px-3 py-2 text-sm" required />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex flex-col w-full sm:w-1/4">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="border rounded px-3 py-2 text-sm"
                required
              />
            </div>
            <div className="flex flex-col w-full sm:w-1/4">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Unit of Sale <span className="text-red-500">*</span>
              </label>
              <input className="border rounded px-3 py-2 text-sm" required />
            </div>
          </div>

          <div className="border bg-white rounded p-4">
            <div className="flex flex-nowrap gap-4">
              {["Location", "Rack Name", "Rack Column", "Rack Row"].map(
                (field, i) => (
                  <div
                    key={i}
                    className=" relative flex flex-col flex-grow flex-shrink basis-0 min-w-0"
                  >
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      {field}{" "}
                      {field !== "Location" && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <input
                      className="border rounded px-3 py-2 text-sm w-full"
                      required={field !== "Location"}
                    />
                    {["Rack Name", "Rack Column", "Rack Row"].includes(
                      field
                    ) && (
                      <FaAngleRight className="absolute text-3xl right-3 top-1/2 text-gray-400 pointer-events-none" />
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4 mt-6">
          <Button
            onClick={() => {}}
            aria-label="Refresh"
            className="flex items-center text-green-500 border border-green-500"
            type="button"
          >
            <FaSyncAlt className="mr-2 text-lg" />
          </Button>

          <Button
            onClick={() => {
              onClose();
            }}
            className="text-sm text-red-700 border border-red-700 hover:bg-red-300"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="text-sm bg-gradient-to-r from-[#39e28e] to-[#12a55e] text-white"
          >
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
