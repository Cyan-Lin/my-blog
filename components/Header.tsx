import Link from "next/link";
import Image from "next/image";

import Capoo from "@/public/images/Capoo.png";

function Header() {
  return (
    <header className="bg-[--color-white] shadow header">
      <div className="flex items-center justify-between w-7/12 mx-auto">
        <div className="w-10 rounded-full overflow-hidden">
          <Link href="/">
            <Image
              src={Capoo}
              alt="Capoo"
              className="object-cover object-center"
            />
          </Link>
        </div>
        <div className="">
          <nav className="">
            <ul className="flex space-x-3">
              <li className="">
                <Link
                  href="/"
                  className="text-[var(--color-grey-dark-4)] block py-5 px-3 hover:text-[var(--color-grey-dark-1)]"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  href="/"
                  className="text-[var(--color-grey-dark-4)] block py-5 px-3 hover:text-[var(--color-grey-dark-1)]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
