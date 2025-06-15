import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import mockData from "../assets/mockdata.js";
import mobileImage from "../assets/iphone.png";
import ProductDetails from "./ProductDetails.jsx";

const getStockBorderTextColor = (value) => {
  if (value === "Not Available") return "border-red-500 text-red-600";
  if (typeof value === "number") {
    if (value > 100) return "border-green-500 text-green-600";
    if (value < 50) return "border-orange-500 text-orange-600";
    return "border-red-500 text-red-600";
  }
  return "border-gray-400 text-gray-600";
};

const ProductTable = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };
  return (
    <>
      <div className="bg-white rounded shadow p-4 border border-gray-300 w-full max-w-full">
        <div className="overflow-y-auto max-h-[450px]">
          <table className="min-w-full text-base text-left">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="font-bold">
                <th className="p-3 capitalize">Products</th>
                <th className="p-3 capitalize">Product Code</th>
                <th className="p-3 capitalize">Barcode</th>
                <th className="p-3 capitalize">Category</th>
                <th className="p-3 capitalize">Tax</th>
                <th className="p-3 capitalize">Price</th>
                <th className="p-3 capitalize pl-8">Store</th>
                <th className="p-3 capitalize">Warehouse</th>
                <th className="p-3 capitalize">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((product, index) => (
                <tr
                  key={index}
                  className="border-t-3 border-gray-400 hover:bg-green-200 transition duration-200"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={mobileImage}
                        alt="Product"
                        className="w-10 h-10 rounded-full border border-gray-300"
                      />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td className="p-3">{product.code}</td>
                  <td className="p-3">{product.barcode}</td>
                  <td className="p-3">{product.category}</td>
                  <td className="p-3">{product.tax}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-0.5 rounded-full border text-xs md:text-sm font-medium whitespace-nowrap ${getStockBorderTextColor(
                        product.store
                      )}`}
                      title={
                        typeof product.store === "number"
                          ? `${product.store} in Stock`
                          : product.store
                      }
                    >
                      {typeof product.store === "number"
                        ? `${product.store} in Stock`
                        : product.store}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-0.5 rounded-full border text-xs md:text-sm font-medium whitespace-nowrap ${getStockBorderTextColor(
                        product.warehouse
                      )}`}
                    >
                      {typeof product.warehouse === "number"
                        ? `${product.warehouse} in Stock`
                        : product.warehouse}
                    </span>
                  </td>
                  <td className="p-3 flex items-center">
                    <FaEdit
                      className="text-green-500 cursor-pointer ml-5 text-3xl"
                      onClick={() => handleEdit(product)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ProductDetails product={selectedProduct} onClose={closeModal} />
    </>
  );
};

export default ProductTable;
