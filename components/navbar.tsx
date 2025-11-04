"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/work", label: "WORK" },
  { href: "/blog", label: "BLOG" },
  { href: "/pages", label: "PAGES" },
  { href: "/cart", label: "CART (0)" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-white/10 bg-[#0a0a0a] text-white">
      <nav className="grid grid-cols-3 items-center border-b border-white/10">
        {/* Left */}
        <div className="border-r border-white/10 px-6 py-4 text-sm tracking-wider">
          <span className="block leading-none">
            NEW WAY OF <br /> DOING THINGS
          </span>
        </div>

        {/* Center */}
        <ul className="flex justify-center items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "hover:text-gray-300 transition-colors",
                  pathname === link.href && "text-gray-400"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="border-l border-white/10 px-6 py-4 text-right text-sm font-medium">
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors"
          >
            CONTACT
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
