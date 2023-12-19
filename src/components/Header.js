
import { MAINLOGOIMG, HAMBURGERIMG, PROFILEIMG } from "../constants";
const Header = () => {
    return (
        <div className="grid grid-flow-col shadow-lg">
            <img className="h-16 p-2 col-span-1" alt='hamburger' src={HAMBURGERIMG} />
            <img className="h-16 p-2 col-span-1"alt="main-logo" src={MAINLOGOIMG}  />
            <div className="h-16 p-4 col-span-9">
                <input type="text" placeholder="Search" />
                <button className="pl-1">Search</button>
            </div>
            <img className="h-16 p-2 col-span-1" alt='profile' src={PROFILEIMG} />

        </div>
    );
};

export default Header;
