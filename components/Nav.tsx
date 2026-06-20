"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/worksheets", label: "Worksheets" },
  { href: "/progress", label: "Progress" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center h-14">
        <Link href="/" className="flex items-center gap-3 mr-auto shrink-0">
          <span className="font-bold text-gray-900 text-sm tracking-tight">Tamil Palli</span>
          <span className="text-orange-500 tamil-text text-sm hidden sm:block">தமிழ் பள்ளி</span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  active ? "bg-orange-50 text-orange-700" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
