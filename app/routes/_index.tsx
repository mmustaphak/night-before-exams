import type { Route } from "./+types/_index";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NBE - Night Before Exams" },
    { name: "description", content: "Welcome to Night Before Exams" },
  ];
}

export default function App() {
  return (
    <div className="max-w-[450px] mx-auto">
      <header>Header Goes Here</header>
      <Outlet />
      <footer>Footer goes here</footer>
    </div>
  )
}
