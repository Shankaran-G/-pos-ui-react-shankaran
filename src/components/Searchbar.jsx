const Searchbar = ({ filters, setFilters, onRefresh }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-100 rounded shadow my-4">
      <input className="p-2 border rounded" placeholder="Search Products" />
      <select className="p-2 border rounded">
        <option>Category</option>
        <option>Steel</option>
        <option>Wood</option>
      </select>
      <button
        onClick={onRefresh}
        className="bg-blue-600 text-white py-2 rounded"
      >
        Refresh
      </button>
    </div>
  );
};

export default Searchbar;
