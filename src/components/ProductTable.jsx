import { FaEdit } from "react-icons/fa";

const mockData = [
  {
    name: "Product A",
    code: "P001",
    barcode: "123456789",
    category: "Steel",
    tax: "15%",
    price: "$120",
    store: 200,
    warehouse: 150,
  },
  {
    name: "Product B",
    code: "P002",
    barcode: "987654321",
    category: "Wood",
    tax: "10%",
    price: "$80",
    store: 45,
    warehouse: 20,
  },
];

const getStockBorderTextColor = (value) => {
  if (value === "Not Available") return "border-red-500 text-red-600";
  if (typeof value === "number") {
    if (value > 100) return "border-green-500 text-green-600";
    if (value < 50) return "border-orange-500 text-orange-600";
    return "border-red-500 text-red-600";
  }
  return "border-gray-400 text-gray-600";
};

const ProductTable = ({ onEdit }) => (
  <div className="overflow-x-auto bg-white rounded shadow p-4 border-1 border-gray-300">
    <table className="min-w-full text-base text-left">
      <thead>
        <tr className="bg-white font-bold">
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
        {mockData.map((item, i) => (
          <tr
            key={i}
            className="border-t-2 border-gray-400 hover:bg-green-50 transition duration-200"
          >
            <td className="p-3">{item.name}</td>
            <td className="p-3">{item.code}</td>
            <td className="p-3">{item.barcode}</td>
            <td className="p-3">{item.category}</td>
            <td className="p-3">{item.tax}</td>
            <td className="p-3">{item.price}</td>

            <td className="p-3">
              <span
                className={`px-3 py-1 rounded-full border text-sm font-medium ${getStockBorderTextColor(
                  item.store
                )}`}
              >
                {typeof item.store === "number"
                  ? `${item.store} in Stock`
                  : item.store}
              </span>
            </td>

            <td className="p-3">
              <span
                className={`px-3 py-1 rounded-full border text-sm font-medium ${getStockBorderTextColor(
                  item.warehouse
                )}`}
              >
                {typeof item.warehouse === "number"
                  ? `${item.warehouse} in Stock`
                  : item.warehouse}
              </span>
            </td>

            <td className="p-3 flex items-center">
              <FaEdit
                className="text-green-500 cursor-pointer ml-5 text-3xl"
                onClick={() => onEdit(item)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
