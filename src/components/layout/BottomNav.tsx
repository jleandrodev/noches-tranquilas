"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Calendar, BookMarked, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: Moon, label: "Hoy" },
  { href: "/programa", icon: Calendar, label: "Programa" },
  { href: "/diario", icon: BookMarked, label: "Diario" },
  { href: "/conteudos", icon: BookOpen, label: "Contenidos" },
  { href: "/perfil", icon: User, label: "Perfil" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[398px] z-50">
      <nav
        className="rounded-[22px] px-2 py-2"
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.92)",
          border: "1px solid rgba(255,255,255,0.8)",
          boxShadow: "0 8px 32px rgba(33,117,135,0.15), 0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <div className="flex items-center justify-around">
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-0.5 px-4 py-2 rounded-2xl transition-all cursor-pointer"
                style={active ? { background: "rgba(33,117,135,0.10)" } : {}}
              >
                <Icon
                  size={21}
                  className={cn("transition-colors", active ? "text-[#217587]" : "text-[#b0cdd3]")}
                  strokeWidth={active ? 2.2 : 1.8}
                />
                <span className={cn("text-[10px] font-semibold transition-colors", active ? "text-[#217587]" : "text-[#b0cdd3]")}>
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
