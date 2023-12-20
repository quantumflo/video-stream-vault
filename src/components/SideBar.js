import { useSelector } from "react-redux";

const Sidebar = () => {
  const sidebarItems = [
    'Home',
    'Trending',
    'Subscriptions',
    'Library',
    'History',
    'Your videos',
    'Watch later',
    'Liked videos',
    'Show more',
  ];

  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className="bg-gray-800 text-white p-4 w-60">
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index} className="mb-2 cursor-pointer hover:bg-gray-700 p-2 rounded">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
