import { Home, Inbox, Group, AccountCircle, Logout } from "@mui/icons-material";
import "tailwindcss/tailwind.css";
import Link from "@mui/material/Link";

export default function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="cta-button-sidebar"
        aria-label="Sidebar"
        className="background-color"
      >
        <div className="h-full px-3 py-4 overflow-y-auto background-color">
          <span  className="flex items-center pl-2.5 mb-5">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
              Apna Facebook
            </span>
          </span>
          <ul className="space-y-2 font-medium">
            <li>
            <Link
                href="/me"
                variant="body2"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-decoration"
              >
                 <AccountCircle />
                <span className="ml-3">Me</span>
              </Link>
            </li>
            <li>
              <Link
                href="/feed"
                variant="body2"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-decoration"
              >
                <Home />
                <span className="ml-3">Feed</span>
              </Link>
            </li>
            <li>
              <Link
                href="/friends"
                variant="body2"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-decoration text-decoration"
              >
                <Group />
                <span className="ml-3">Friends</span>
              </Link>
            </li>
            <li>
            <Link
                href="/signin"
                variant="body2"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group text-decoration"
              >
                <Logout />
                <span className="ml-3">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
