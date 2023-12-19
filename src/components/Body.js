import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="flex">
      <SideBar></SideBar>
      <MainContainer></MainContainer>
    </div>
  );
};

export default Body;
