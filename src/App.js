import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";
import Error from "./components/Error";
import NavMenu from "./components/NavMenu";

const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "/:nav",
      element: <NavMenu />
    },
    {
      path: "/watch",
      element: <WatchVideo />
    }
  ] }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={appRouter}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
