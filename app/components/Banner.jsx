import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-4 px-6 py-3 border-b md:px-12 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 group border-slate-300">
      <p className="flex-grow-0 block text-sm font-semibold text-center text-white xs:text-base xs:text-left xs:flex-1 sm:flex-grow xs:basis-72 sm:basis-0 lg:text-center">
        Çetinkal Akademi ile sigorta ürünleri hakkında bilgi sahibi olun.
      </p>
      <Link className="" href={"/"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="p-2 text-white transition-all rounded-full w-7 h-7 group-hover:bg-blue-600 group-hover:scale-105 bg-blue-400/40 xs:w-9 xs:h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Banner;
