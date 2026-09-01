"use client";

import { useState } from "react";
import { userMenuItems } from "@/mocks/profilMenu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative ml-1">
      <ChevronDown
        size={18}
        strokeWidth={1.8}
        onClick={openHandler}
        className={`
            cursor-pointer
            rounded-full
            p-0.5
            text-(--color-text-secondary)
            transition-all
            duration-200
            hover:bg-(--color-bg-secondary)
            hover:text-(--color-text)
            ${isOpen ? "rotate-180 text-(--color-text)" : ""}
          `}
      />

      <ul
        className={`
            absolute
            right-0
            top-full
            z-50
            mt-3
            overflow-hidden
            rounded-(--radius-lg)
            border
            border-(--color-border)
            bg-(--color-bg)
            p-1.5
            shadow-xl
            transition-all
            duration-200
            ease-out
            ${
              isOpen
                ? "visible translate-y-0 scale-100 opacity-100"
                : "invisible -translate-y-2 scale-95 opacity-0"
            }
          `}
      >
        {userMenuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
