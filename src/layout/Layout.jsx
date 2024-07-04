import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(){

    return (
        <main role="main" className="bg-black h-screen" >
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}
