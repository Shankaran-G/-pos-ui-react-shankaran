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
    { name: "Help", icon: FaQuestionCircle, color: "text-gray-700" },
  ];

  return (
    <div className="sm:w-24 md:w-32 lg:w-64 bg-white text-gray-700 p-3 flex flex-col h-screen overflow-hidden shadow-md border-r border-gray-200">
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col flex-grow-0">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-4 hidden lg:block tracking-wide">
            POS SHANKARAN
          </h1>

          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#39e28e] to-[#12a55e] text-white px-3 py-1.5 rounded-full w-full mb-6 text-sm md:text-base font-semibold shadow-sm hover:shadow-none transition-shadow duration-200">
            <FaHome className="text-base md:text-lg lg:text-xl" />
            <span className="hidden md:inline">HOME</span>
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
                  <Icon
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl transition-transform duration-200 group-hover:scale-110 ${
                      isActive ? "text-[#2ac97b]" : ""
                    }`}
                  />
                  <div className="text-xs md:text-sm lg:text-base font-medium text-center hidden sm:block">
                    {item.name}
                  </div>
                  <hr
                    className={`w-10 sm:w-20 lg:w-28 mt-1 border-t-2 transition-colors duration-200 ${
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

        <div className="flex flex-col gap-1 mb-6 flex-grow-0">
          {footer.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={"footer-" + index}
                className={`flex items-center justify-center gap-2 px-2 py-2 cursor-pointer ${item.color} text-base font-semibold hover:opacity-80 transition-opacity duration-200 rounded lg:text-lg`}
              >
                <Icon className="text-xl lg:text-2xl" />
                <span className="hidden sm:inline">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
