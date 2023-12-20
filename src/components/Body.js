import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
const Body = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar></SideBar>
      <MainContainer></MainContainer>
    </div>
  );
};

export default Body;
