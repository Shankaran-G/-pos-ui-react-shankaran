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
    <div className="sm:w-24 md:w-32 lg:w-64 bg-white text-gray-700 p-3 sm:p-4 md:p-5 flex flex-col justify-between h-screen shadow">
      <div>
        <h1 className="text-base md:text-xl lg:text-2xl font-bold mb-4 hidden lg:block text-center">
          POS SHANKARAN
        </h1>

        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#39e28e] to-[#12a55e] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full w-full mb-4">
          <FaHome className="text-sm sm:text-base md:text-lg" />
          <span className="font-semibold text-xs sm:text-sm hidden md:inline">
            HOME
          </span>
        </button>

        <ul className="flex flex-col gap-2">
          {sections.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.name === "Products";
            return (
              <li
                key={index}
                className={`flex flex-col items-center gap-1 group ${
                  isActive ? "text-[#2ac97b]" : "text-gray-500"
                } hover:text-[#2ac97b] cursor-pointer transition-colors duration-200 py-2`}
              >
                <Icon className="text-base sm:text-lg md:text-xl" />
                <div className="text-[10px] sm:text-xs md:text-sm hidden sm:block text-center font-medium">
                  {item.name}
                </div>
                <hr
                  className={`w-12 sm:w-20 md:w-28 lg:w-32 border-t-2 ${
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

      <div className="flex flex-col gap-2">
        {footer.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={"footer-" + index}
              className={`flex items-center justify-center gap-2 px-2 py-2 ${item.color} text-sm sm:text-base font-medium hover:opacity-80 transition`}
            >
              <Icon className="text-base sm:text-lg" />
              <span className="hidden sm:inline">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
