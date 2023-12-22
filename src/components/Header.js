import { MAINLOGOIMG, HAMBURGERIMG, PROFILEIMG } from "../constants";
import { toggleMenu } from "../redux/appSlice";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="h-16 pl-4 col-span-1 flex">
        <img
          className="h-16 p-2 col-span-1 cursor-pointer"
          alt="hamburger"
          src={HAMBURGERIMG}
          onClick={toggleMenuHandler}
        />
        <img
          className="h-16 p-2 col-span-1"
          alt="main-logo"
          src={MAINLOGOIMG}
        />
      </div>
      <SearchBar />
      <img className="h-16 p-2 col-span-1 ml-72" alt="profile" src={PROFILEIMG} />
    </div>
  );
};

export default Header;
