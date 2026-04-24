import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "@tanstack/react-router";

export default function App() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
