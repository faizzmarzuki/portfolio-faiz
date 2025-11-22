"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();

  // Don't show default navbar on home page since it has its own
  if (pathname === "/") {
    return null;
  }

  return <Navbar />;
}
