import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
    return (
        <div className="p-5">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;