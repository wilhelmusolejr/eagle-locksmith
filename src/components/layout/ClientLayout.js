"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "../ui/Loader";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, [pathname]); // Triggers when the URL path changes

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
