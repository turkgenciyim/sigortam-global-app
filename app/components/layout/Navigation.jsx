import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-sky-50">
      <div className="flex items-center justify-between gap-4 px-6 py-6 mx-auto md:gap-0 xs:justify-center md:justify-between max-w-7xl xs:px-3 sm:px-3">
        <Link href={"/"}>
          <Image
            src={"/sigortam-global.png"}
            width={65}
            height={65}
            priority={true}
            className="rounded-xl drop-shadow-xl"
            alt="Sigortam Global"
          />
        </Link>
        <div className="items-center flex-1 hidden px-4 mx-8 gap-7 lg:px-0 lg:gap-6 md:flex text-slate-600">
          <button className="inline-flex items-center gap-1">
            <span>Ürünler</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 opacity-25 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <Link
            className="font-medium transition-all rounded-lg lg:hover:bg-white lg:px-5 active:scale-95 hover:text-slate-700 lg:w-32 lg:text-center lg:py-2"
            href={"/#is-ortaklari"}
          >
            İş Ortakları
          </Link>
          <Link
            className="font-medium transition-all rounded-lg lg:hover:bg-white lg:px-5 active:scale-95 hover:text-slate-700 lg:w-32 lg:text-center lg:py-2"
            href={"/hakkimizda"}
          >
            Hakkımızda
          </Link>
          <Link
            className="font-medium transition-all rounded-lg lg:hover:bg-white lg:px-5 active:scale-95 hover:text-slate-700 lg:w-32 lg:text-center lg:py-2"
            href={"/iletisim"}
          >
            İletişim
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden xs:block relative overflow-hidden pl-8 pr-14 bg-blue-600 group font-semibold text-white font-inter py-3.5 rounded-md shadow-[4px_4px_0px_0px_rgba(59,130,500,0.4)] hover:shadow-none transition-all">
            Poliçe Sorgula
            <span className="absolute py-4 pl-3 text-blue-300 -translate-y-1/2 rounded-full pr-11 group-hover:text-white bg-blue-500/50 hover:bg-blue-200/10 -right-10 top-1/2">
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
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                />
              </svg>
            </span>
          </button>
          <div className="p-2 md:hidden bg-white rounded mt-1.5 border border-slate-100 group hover:bg-blue-100 hover:border-blue-400">
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-all opacity-75 stroke-blue-600 group-hover:stroke-blue-700 group-hover:opacity-100"
                d="M11 6h10M11 12h10M11 18h10M5 19V5m0 14l-2-2.5M5 19l2-2.5M5 5L3 7m2-2l2 2"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
