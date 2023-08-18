import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="relative z-10 mx-auto overflow-hidden bg-sky-50 lg:px-6">

      <div className="py-4 mx-auto md:py-8 max-w-7xl">
        <div className="items-start space-y-16 xl:space-y-0 gap-x-16 xl:flex">
          <div className="max-w-md mx-auto space-y-6 text-center md:px-3 sm:max-w-xl md:max-w-2xl xl:max-w-3xl">
            <h2 className="text-4xl xs:text-5xl md:text-6xl font-black  tracking-tight lg:text-7xl xl:text-[5.5rem] font-lato  bg-clip-text text-transparent bg-gradient-to-b from-slate-950 via-gray-700 to-slate-800">
              <p className="relative z-10 inline text-blue-600">
                <span className="z-20">Sigortam Global</span>
                <span className="absolute bottom-0 w-full -translate-x-full bg-blue-300/40 h-1/3 rotate-3 -skew-y-2 -z-10"></span>
              </p>{" "}
              ile yarım saatten kısa sürede poliçenizi keselim.
            </h2>
            <p className="xl:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, at?
              Modi at ipsum consectetur odio voluptatem quod a nihil totam.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="relative py-4 pl-8 overflow-hidden bg-white border text-slate-600 fontme border-slate-200 group pr-14 rounded-xl">
                <span className="flex-1 inline-block">
                  {" "}
                  Teklif İsteği Oluştur
                </span>{" "}
                <span className="absolute py-4 pl-3 transition-all -translate-y-1/2 bg-white border-l rounded-full text-slate-300 pr-11 group-hover:text-blue-500 border-l-slate-300 hover:bg-blue-100 -right-10 top-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 transition-all "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </button>
              <button className="relative py-4 pl-8 overflow-hidden text-white bg-blue-500 border border-blue-400 group pr-14 rounded-xl academy-button">
                Çetinkal Akademi
                <span className="absolute py-4 pl-3 text-blue-300 transition-all -translate-y-1/2 border-l rounded-full pr-11 transa group-hover:text-white bg-blue-500/20 border-l-blue-400 group-hover:bg-blue-200/10 -right-10 top-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 transition-all"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="relative grid max-w-4xl grid-cols-2 grid-rows-1 gap-4 p-4 mx-auto bg-white border rounded-md sm:grid-cols-3 xl:grid-rows-none xl:grid-cols-4 border-slate-100">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/5 top-1/2 -z-10 w-24 h-64 blur-[50px] bg-blue-500/20"></div>

            <Link
              href={"/trafik-sigortasi"}
              className="flex flex-col xs:min-w-[11.2rem] relative overflow-hidden justify-between max-h-48 md:max-h-64  xl:col-span-2 xl:row-span-1 xl:max-h-64 shadow-[3.5px_3.5px_0px_0px_rgba(59,80,246,0.9)] hover:shadow-none transition-shadow transition-opacity hover:opacity-100  pl-3 xs:pl-6 pr-6 pt-6 pb-3 bg-blue-500 group rounded-md"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/assets/svg/trafik-sigortasi.svg"}
                  alt="Trafik Sigortası"
                  fill
                  priority={true}
                />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-xl font-black transition-all md:text-2xl font-lato text-blue-50 group-hover:text-blue-200">
                  Trafik <br /> Sigortası
                </h2>
                <div className="inset-0 z-20 items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:absolute group-hover:flex bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="hidden w-16 h-16 p-4 text-blue-400 transition-all bg-white rounded-full rounded-tr-none right-4 group-hover:text-blue-500 group-hover:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href={"/kasko-sigortasi"}
              className="flex flex-col xs:min-w-[11.2rem] relative overflow-hidden justify-between max-h-48 md:max-h-64  xl:col-span-2 xl:row-span-1 xl:max-h-64 shadow-[3.5px_3.5px_0px_0px_rgba(129,20,246,0.9)] hover:shadow-none transition-shadow transition-opacity hover:opacity-100  pl-3 xs:pl-6 pr-6 pt-6 pb-3 bg-violet-500 group rounded-md"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/assets/svg/kasko-sigortasi.svg"}
                  alt="Kasko Sigortası"
                  fill
                  priority={true}
                />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-xl font-black transition-all md:text-2xl font-lato text-violet-50 group-hover:text-violet-200">
                  Kasko <br /> Sigortası
                </h2>
                <div className="inset-0 z-20 items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:absolute group-hover:flex bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="hidden w-16 h-16 p-4 text-blue-400 transition-all bg-white rounded-full rounded-tr-none right-4 group-hover:text-violet-500 group-hover:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href={"/konut-sigortasi"}
              className="flex flex-col xs:min-w-[11.2rem] relative overflow-hidden  justify-between max-h-48 md:max-h-64 col-span-1 row-span-1 xl:col-span-2 xl:row-span-1 xl:max-h-64 shadow-[3.5px_3.5px_0px_0px_rgba(200,85,17,0.9)] hover:shadow-none transition-shadow transition-opacity hover:opacity-100  pl-3 xs:pl-6 pr-6 pt-6 pb-3 bg-orange-500 group rounded-md"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/assets/svg/konut-sigortasi.svg"}
                  alt="Konut Sigortası"
                  fill
                />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-xl font-black transition-all md:text-2xl font-lato text-orange-50 group-hover:text-orange-200">
                  Konut <br /> Sigortası
                </h2>
                <div className="inset-0 z-20 items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:absolute group-hover:flex bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="hidden w-16 h-16 p-4 text-blue-400 transition-all bg-white rounded-full rounded-tr-none right-4 group-hover:text-orange-500 group-hover:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href={"/dask-sigortasi"}
              className="flex flex-col xs:min-w-[11.2rem] relative overflow-hidden  justify-between max-h-48 md:max-h-64 col-span-1 row-span-1 xl:col-span-2 xl:row-span-1 xl:max-h-64 shadow-[3.5px_3.5px_0px_0px_rgba(200,10,17,0.9)] hover:shadow-none transition-shadow transition-opacity hover:opacity-100  pl-3 xs:pl-6 pr-6 pt-6 pb-3 bg-red-500 group rounded-md"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/assets/svg/dask-sigortasi.svg"}
                  alt="Dask Sigortası"
                  fill
                />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-xl font-black transition-all md:text-2xl font-lato text-red-50 group-hover:text-red-200">
                  Dask <br /> Sigortası
                </h2>
                <div className="inset-0 z-20 items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:absolute group-hover:flex bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="hidden w-16 h-16 p-4 text-blue-400 transition-all bg-white rounded-full rounded-tr-none right-4 group-hover:text-red-500 group-hover:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href={"/pati-sigortasi"}
              className="flex flex-col xs:min-w-[11.2rem] relative justify-between max-h-48 overflow-hidden  md:max-h-64 col-span-1 row-span-1 xl:col-span-2 xl:row-span-1 xl:max-h-64 shadow-[3.5px_3.5px_0px_0px_rgba(255,200,0,0.9)]  hover:shadow-none transition-shadow transition-opacity hover:opacity-100  pl-3 xs:pl-6 pr-6 pt-6 pb-3 bg-yellow-500 group rounded-md"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/assets/svg/pati-sigortasi.svg"}
                  alt="Pati Sigortası"
                  fill
                />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-xl font-black transition-all md:text-2xl font-lato text-yellow-50 group-hover:text-yellow-200">
                  Pati <br /> Sigortası
                </h2>
                <div className="inset-0 z-20 items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:absolute group-hover:flex bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="hidden w-16 h-16 p-4 text-blue-400 transition-all bg-white rounded-full rounded-tr-none right-4 group-hover:text-yellow-500 group-hover:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <Link
              href={"/telefon-sigortasi"}
              className="flex flex-col xs:min-w-[11.2rem] relative justify-between max-h-48 overflow-hidden  md:max-h-64 col-span-1 row-span-1 xl:col-span-2 xl:row-span-1 xl:max-h-64 shadow-[3.5px_3.5px_0px_0px_rgba(115,257,150,0.9)]  hover:shadow-none transition-shadow transition-opacity hover:opacity-100  pl-3 xs:pl-6 pr-6 pt-6 pb-3 bg-emerald-500 group rounded-md"
            >
              <div className="relative w-full h-24">
                <Image
                  src={"/assets/svg/telefon-sigortasi.svg"}
                  alt="Telefon Sigortası"
                  fill
                />
              </div>

              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-xl font-black transition-all md:text-2xl font-lato text-emerald-50 group-hover:text-emerald-200">
                  Telefon <br /> Sigortası
                </h2>
                <div className="inset-0 z-20 items-center justify-center transition-all opacity-0 group-hover:opacity-100 group-hover:absolute group-hover:flex bg-black/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="hidden w-16 h-16 p-4 text-blue-400 transition-all bg-white rounded-full rounded-tr-none right-4 group-hover:text-emerald-500 group-hover:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>
            </Link>

            {/* <div className="flex justify-center order-last row-span-4 col-span-full">
              <button className="relative w-full h-full py-4 mx-auto overflow-hidden transition-all bg-white border hover:text-sky-700 hover:bg-sky-100 group rounded-xl border-slate-100 hover:border-sky-300 active:scale-95">
                Hepsini Görüntüle
                <div className="absolute -translate-y-1/2 -right-0 top-1/2 opacity-90 group-hover:opacity-100">
                  <Image
                    src={"/sigortam-global.png"}
                    width={60}
                    height={50}
                    className="transition-all ronuded-r-none brightness-125"
                    alt="Sigortam Global"
                  />
                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
