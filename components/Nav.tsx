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
    <nav className="bg-white border-b border-orange-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center gap-6 h-14">
        <Link href="/" className="flex items-center gap-2 font-bold text-orange-700 text-lg shrink-0">
          <span className="text-2xl">🏫</span>
          <span className="hidden sm:block">Tamil Palli</span>
          <span className="text-xs text-orange-400 font-normal hidden sm:block">தமிழ் பள்ளி</span>
        </Link>
        <div className="flex items-center gap-1 ml-auto">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-orange-100 text-orange-800"
                    : "text-gray-600 hover:bg-gray-100"
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
