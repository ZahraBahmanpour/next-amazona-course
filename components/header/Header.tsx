import Link from "next/link";
import Menu from "./Menu";
import { SearchBox } from "./SearchBox";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex items-center w-full min-h-16 justify-between p-2">
          <div className="flex items-center">
            <label
              htmlFor="my-drawer"
              className="btn btn-square hover:bg-grayHoverColor"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <Link
              href="/"
              className="btn hover:bg-grayHoverColor text-lg p-4 rounded-lg"
            >
              Next Amazona V2
            </Link>
          </div>
          <SearchBox />
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
