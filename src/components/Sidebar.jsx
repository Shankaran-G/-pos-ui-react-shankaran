import {
  FaHome,
  FaShoppingCart,
  FaBox,
  FaTools,
  FaChartBar,
  FaUsers,
  FaTruck,
  FaCog,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const Sidebar = () => {
  const sections = [
    { name: "Sales", icon: FaShoppingCart },
    { name: "Products", icon: FaBox },
    { name: "Utilities", icon: FaTools },
    { name: "Stocks", icon: FaBox },
    { name: "Reports", icon: FaChartBar },
    { name: "Users", icon: FaUsers },
    { name: "Suppliers", icon: FaTruck },
    { name: "Settings", icon: FaCog },
  ];

  const footer = [
    { name: "Exit", icon: FaSignOutAlt, color: "text-red-500" },
    { name: "Help", icon: FaQuestionCircle, color: "text-gray-500" },
  ];

  return (
    <div className="sm:w-24 md:w-32 lg:w-64 bg-white text-gray-700 min-h-screen p-5 flex flex-col shadow">
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-6 hidden lg:block">
            POS SHANKARAN
          </h1>

          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#39e28e] to-[#12a55e] text-white px-4 py-2 sm:px-3 md:px-4 rounded-full w-full mb-8">
            <FaHome className="text-lg sm:text-lg md:text-lg" />
            <span className="font-semibold text-sm hidden md:inline">HOME</span>
          </button>

          <ul className="flex flex-col space-y-8">
            {sections.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.name === "Products";
              return (
                <li
                  key={index}
                  className={`flex flex-col items-center gap-1 group ${
                    isActive ? "text-[#2ac97b]" : "text-gray-500"
                  } hover:text-[#2ac97b] cursor-pointer transition-colors duration-200py-3`}
                >
                  <Icon className="text-lg sm:text-xl md:text-2xl" />
                  <div className="text-xs md:text-sm font-medium text-center hidden sm:block">
                    {item.name}
                  </div>
                  <hr
                    className={`w-10 sm:w-20 lg:w-30 mt-1 border-t-2 transition-colors duration-200 ${
                      isActive
                        ? "border-[#2ac97b]"
                        : "border-gray-300 group-hover:border-[#2ac97b]"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col space-y-6">
          {footer.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center justify-center gap-3 px-1 py-0.5 cursor-pointer ${item.color}`}
              >
                <Icon className="text-lg" />
                <span className="font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
