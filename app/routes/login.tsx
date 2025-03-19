import { FaFacebook, FaGoogle } from "react-icons/fa6";
import { GoLock } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { Form, Link, redirect, useNavigate } from "react-router";
import type { Route } from "../+types/root";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  console.log("Form Has been submitted");
  formData.forEach((entry) => console.log(entry));
  redirect("/");
}

export default function login() {
  return (
    <section>
      <h1>Welcome to NBE</h1>
      <p className="mt-4 text-center">Sign in to access your study material</p>

      <Form action="/login" method="post" className="mt-8">
        <label htmlFor="email">Email</label>
        <div className="relative">
          <input
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            type="email"
            name="email"
            id="email"
          />
          <LuUser className="absolute size-8 inset-y-0 left-0 pl-3 pt-2 flex items-center pointer-events-none" />
        </div>

        <div className="relative">
          <label htmlFor="password">Password</label>
          <input
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            type="password"
            name="password"
            id="password"
          />
          <GoLock className="absolute size-8 inset-y-0 left-0 top-5 pl-3 pt-4 flex items-center pointer-events-none" />
        </div>

        <div className="flex justify-between mt-4">
          <div>
            <input type="checkbox" name="isRemembered" id="isRemembered" />
            <label htmlFor="isRemembered" className="ml-3">
              Remember Me
            </label>
          </div>

          <Link
            className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-500"
            to="/forgot"
          >
            Forgot Password
          </Link>
        </div>

        <button
          className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          type="submit"
        >
          Sign In
        </button>
      </Form>

      <div className="relative my-8">
        <p className="absolute left-[33%] -top-3 bg-bg-black px-2">
          or continue with
        </p>
        <hr />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750">
          <FaGoogle />
        </button>
        <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-750">
          <FaFacebook />
        </button>
      </div>
    </section>
  );
}
