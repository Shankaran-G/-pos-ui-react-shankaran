import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";
import ProductTable from "../components/ProductTable";

function Dashboard() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4">
          <Searchbar onRefresh={() => window.location.reload()} />
          <ProductTable onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
