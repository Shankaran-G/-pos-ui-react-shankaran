import { FaTimes } from "react-icons/fa";
import Button from "./Button";

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white  border-4 border-green-500 rounded-lg p-6 w-full max-w-md relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-semibold mb-4">Edit Product Details</h2>

        <div className="space-y-3 text-gray-700">
          <div>
            <strong>Name:</strong> {product.name}
          </div>
          <div>
            <strong>Code:</strong> {product.code}
          </div>
          <div>
            <strong>Barcode:</strong> {product.barcode}
          </div>
          <div>
            <strong>Category:</strong> {product.category}
          </div>
          <div>
            <strong>Tax:</strong> {product.tax}
          </div>
          <div>
            <strong>Price:</strong> {product.price}
          </div>
          <div>
            <strong>Store Stock:</strong>{" "}
            {typeof product.store === "number"
              ? `${product.store} in Stock`
              : product.store}
          </div>
          <div>
            <strong>Warehouse Stock:</strong>{" "}
            {typeof product.warehouse === "number"
              ? `${product.warehouse} in Stock`
              : product.warehouse}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            onClick={onClose}
            className="absolute bottom-4 right-4 bg-red-500 text-white hover:bg-red-600"
            aria-label="Close"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
