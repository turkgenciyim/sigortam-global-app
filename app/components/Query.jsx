import Image from "next/image";
import Link from "next/link";
import React from "react";

const Query = () => {
  return (
    <div className="grid px-4 py-16 pb-8 mx-auto mb-6 transition-colors border sm:pl-10 border-sky-200 gap-7 lg:grid-cols-2 hover:bg-sky-200 place-items-center xl:pl-14 bg-sky-100 max-w-7xl rounded-3xl">
      <div className="flex flex-col items-center max-w-xl space-y-8 lg:block">
        <h3 className="text-4xl font-black tracking-tight sm:text-5xl xl:text-6xl font-lato text-sky-950">
          Poliçe Sorgulama ile <br /> içiniz rahat olsun.
        </h3>
        <p className="max-w-xs mb-4 sm:max-w-md text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni porro
          facere rem vero facilis natus.
        </p>
        <Link
          href={"https://www.cetinkalsigorta.com/police-sorgula/"}
          className="flex items-center gap-4 py-4 pl-6 pr-6 font-medium text-white transition-all shadow w-fit bg-gradient-to-tr from-sky-600 from-5% to-95% to-sky-500 rounded-xl"
        >
          <span>Daha Fazla Bilgi Al</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </div>
      <div className="relative w-72 sm:w-96 h-72 sm:h-96">
        <Image fill src={"/assets/svg/search.svg"} alt="Search SVG" />
      </div>
    </div>
  );
};

export default Query;
