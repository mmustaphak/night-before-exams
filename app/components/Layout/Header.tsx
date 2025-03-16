import { FiUpload } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Link, useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();

  const navBarRoutes = [
    {
      icon: HiOutlineHome,
      to: "/",
    },
    {
      icon: FiUpload,
      to: "upload",
    },
    {
      icon: IoBookOutline,
      to: "/generator",
    },
    {
      icon: LuUser,
      to: "/login",
    },
  ];

  const renderedNav = navBarRoutes.map((navData) => {
    return (
      <li>
        <Link to={navData.to}>
          <navData.icon className="size-8 p-1 rounded-sm hover:bg-gray-200" />
        </Link>
      </li>
    );
  });

  return (
    <header className="flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <IoBookOutline className="size-8 text-purple" />
        <span className="font-bold text-xl">NBE</span>
      </Link>

      {pathname != "/login" && (
        <ul className="flex items-center gap-x-6">{renderedNav}</ul>
      )}
    </header>
  );
}
