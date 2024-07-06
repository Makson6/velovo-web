import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export default function Layout() {

    return (
        <main role="main" className="text-slate-950">
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </main>
    )
}
