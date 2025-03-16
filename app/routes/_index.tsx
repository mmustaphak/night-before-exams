import type { Route } from "./+types/_index";
import { Outlet } from "react-router";
import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NBE - Night Before Exams" },
    { name: "description", content: "Welcome to Night Before Exams" },
  ];
}

export default function App() {
  return (
    <div className="container flex flex-col max-w-[450px] mx-auto h-dvh">
      <Header />
      <h1>Content Goes Here</h1>
      <Outlet />
      <Footer />
    </div>
  );
}
