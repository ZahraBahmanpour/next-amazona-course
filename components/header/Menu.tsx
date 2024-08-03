"use client";

import Link from "next/link";

const Menu = () => {
  return (
    <>
      <div>
        <ul className="flex items-stretch gap-5">
          <li>
            <Link
              className="btn bg-grayBgColor rounded-lg p-4 hover:bg-grayBgColor"
              href="/cart"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              className="btn bg-grayBgColor rounded-lg p-4 hover:bg-grayBgColor"
              href="/signin"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
