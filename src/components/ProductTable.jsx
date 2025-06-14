import { FaEdit } from "react-icons/fa";

const mockData = [
  {
    name: "Product A",
    code: "P001",
    barcode: "123456789",
    category: "Steel",
    tax: "15%",
    price: "$100",
    store: "Main",
    warehouse: "Colombo",
    status: "In Stock",
  },
  {
    name: "Product B",
    code: "P002",
    barcode: "987654321",
    category: "Wood",
    tax: "10%",
    price: "$80",
    store: "Branch",
    warehouse: "Kandy",
    status: "Not Available",
  },
];

const ProductTable = ({ onEdit }) => (
  <div className="overflow-x-auto bg-white rounded shadow p-4">
    <table className="min-w-full text-sm text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">Product</th>
          <th className="p-2">Code</th>
          <th className="p-2">Barcode</th>
          <th className="p-2">Category</th>
          <th className="p-2">Tax</th>
          <th className="p-2">Price</th>
          <th className="p-2">Store</th>
          <th className="p-2">Warehouse</th>
          <th className="p-2">Status</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((item, i) => (
          <tr key={i} className="border-t">
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.code}</td>
            <td className="p-2">{item.barcode}</td>
            <td className="p-2">{item.category}</td>
            <td className="p-2">{item.tax}</td>
            <td className="p-2">{item.price}</td>
            <td className="p-2">{item.store}</td>
            <td className="p-2">{item.warehouse}</td>
            <td
              className={`p-2 font-medium ${
                item.status === "In Stock" ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.status}
            </td>
            <td className="p-2">
              <FaEdit
                className="text-blue-500 cursor-pointer"
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
