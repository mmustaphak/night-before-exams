import type { Route } from "./+types/_index";
import { Link, Outlet, useLocation } from "react-router";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { LuSunMoon, LuUser } from "react-icons/lu";
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

      <footer className="container flex items-center justify-between mt-auto">
        ©{new Date().getFullYear()} Night Before Exams
        <button>
          <LuSunMoon className="size-8" />
        </button>
      </footer>
    </div>
  );
}
