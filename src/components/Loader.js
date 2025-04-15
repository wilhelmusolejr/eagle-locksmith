import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-100 bg-opacity-70">
      <div className="w-16 h-16 border-4 border-red-700 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
}
