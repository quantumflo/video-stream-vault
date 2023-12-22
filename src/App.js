import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  { path: "/", element: <Body />,  children: [
    {
      path: "/",
      element: <MainContainer />
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
