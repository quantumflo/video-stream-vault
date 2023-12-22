import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
          <Link to={item === 'Home' && '/'} >
          <li key={index} className="mb-2 cursor-pointer px-12 py-2 text-lg hover:bg-gray-700 p-2 rounded">
            {item}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
