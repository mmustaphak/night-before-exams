import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NBE - Night Before Exams" },
    { name: "description", content: "Welcome to Night Before Exams" },
  ];
}

export default function App() {
  return (
    <div className="container">
      <h1>Content Goes Here</h1>
    </div>
  );
}
