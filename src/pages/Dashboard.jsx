import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";
import ProductTable from "../components/ProductTable";
import AddProduct from "../components/AddProduct";

function Dashboard() {
  const [addProductPopup, setAddProductPopup] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-auto p-4">
          <Searchbar onAddProductClick={() => setAddProductPopup(true)} />

          <div className="mt-6">
            <ProductTable />
          </div>
        </div>

        {addProductPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <AddProduct onClose={() => setAddProductPopup(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
