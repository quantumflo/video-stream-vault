import Header from "./Header";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <Header />
            <h1>Oops! Go back <a href="/">HOME</a>.</h1>
            <p>{err.data}</p>
            <p3>{err.status + " : "}</p3>
            <p3>{err.statusText}</p3>
        </div>
    );
};

export default Error;