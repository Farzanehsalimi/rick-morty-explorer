import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="grow bg-white pt-14 pb-14">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
