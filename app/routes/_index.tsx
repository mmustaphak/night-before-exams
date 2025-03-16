import { Link } from "react-router";
import type { Route } from "./+types/_index";
import { FiUpload } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NBE - Night Before Exams" },
    { name: "description", content: "Welcome to Night Before Exams" },
  ];
}

export default function App() {
  const appFeatures = [
    {
      icon: FiUpload,
      title: "Upload Question Papers",
      desc: "Upload Past Question papers and study materials",
      color: "#9333EA",
    },
    {
      icon: FaArrowTrendUp,
      title: "Extract Patters",
      desc: "AI-powered pattern extraction form question papers",
      color: "#22C55E",
    },
    {
      icon: IoBookOutline,
      title: "Visual Study guides with connected concepts",
      desc: "Upload Past Question papers and study materials",
      color: "#3B82F6",
    },
  ];

  const renderedAppFeatures = appFeatures.map((feature) => {
    return (
      <div className="flex p-2 py-4 gap-x-4 shadow-xs">
        <feature.icon
          color={feature.color}
          className="p-2 rounded-full size-10 bg-stone-100 text-purple"
        />
        <div>
          <h2 className="text-lg font-medium">{feature.title}</h2>
          <p className="mt-1 text-stone-400 text-sm">{feature.desc}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container flex flex-col">
      <h1>Night Before Exams</h1>
      <p className="mt-3 text-center">
        Upload past question papers, extract patterns, and ace your exams with
        interactive study guides
      </p>
      <Link
        className="self-center rounded-md w-fit p-2 mt-3 text-stone-200 bg-purple"
        to="upload"
      >
        Upload Question Paper
      </Link>

      <div className="flex flex-col gap-y-8 mt-12">{renderedAppFeatures}</div>
    </div>
  );
}
