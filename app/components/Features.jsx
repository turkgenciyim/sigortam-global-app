import Link from "next/link";
import React from "react";

const Features = () => {
  return (
    <div className="px-4 md:px-0 flex flex-wrap md:flex-nowrap justify-between gap-4 mx-auto max-w-7xl md:min-h-[15rem] mb-12">
      <div className="w-full md:min-h-[15rem] xl:min-h-0 max-w-lg pr-6 pl-4  py-6 mx-auto active:scale-95 border border-orange-200 md:mx-0 bg-md bg-gradient-to-b from-orange-50/50 to-orange-50 rounded-xl group">
        <div>
          <h4 className="flex gap-2 text-2xl font-black tracking-tight text-orange-800 md:text-2xl lg:text-4xl">
            <span className="flex-1 block">
              Teklif İsteği <br /> Oluştur{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative top-0 right-0 w-10 h-10 p-2 bg-orange-100 border lg:w-12 lg:h-12 border-orange-300/20 rounded-xl group-hover:-top-1 group-hover:-right-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </h4>
          <p className="max-w-[20rem] mt-4 text-orange-950 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quibusdam praesentium fugit recusandae nulla. Esse!
          </p>
        </div>
      </div>
      <Link
        target="_blank"
        href={`https://akademi.sigortamglobal.com`}
        className="w-full md:min-h-[15rem] xl:min-h-0 max-w-lg pr-6 pl-4  py-6 mx-auto active:scale-95 bg-white border md:mx-0 border-blue-600 bg-gradient-to-b from-blue-600 to-blue-700 rounded-xl group"
      >
        <div>
          <h4 className="flex gap-2 text-2xl font-black tracking-tight text-blue-100 md:text-2xl lg:text-4xl">
            <span className="flex-1 block">
              Çetinkal Akademi ile öğrenin.
              <br />{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative top-0 right-0 w-10 h-10 p-2 text-blue-100 bg-blue-700 lg:w-12 lg:h-12 rounded-xl group-hover:-top-1 group-hover:-right-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </h4>
          <p className="max-w-[20rem] mt-4 text-blue-200 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quibusdam praesentium fugit recusandae nulla. Esse!
          </p>
        </div>
      </Link>
      <Link
        target="_blank"
        href={`https://wa.me/${process.env.contactNumber}`}
        className="w-full md:min-h-[15rem] xl:min-h-0 max-w-lg pr-6 pl-4  py-6 mx-auto active:scale-95 bg-white border md:mx-0 border-emerald-200 bg-gradient-to-b from-emerald-50/50 to-emerald-50 rounded-xl group"
      >
        <div>
          <h4 className="flex gap-2 text-2xl font-black tracking-tight md:text-2xl lg:text-4xl text-emerald-800">
            <span className="flex-1 block">
              Whatsapp ile Teklif Alın.
              <br />{" "}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="relative top-0 right-0 w-10 h-10 p-2 border lg:w-12 lg:h-12 bg-emerald-100 border-emerald-300/20 rounded-xl group-hover:-top-1 group-hover:-right-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </h4>
          <p className="max-w-[20rem] mt-4 text-emerald-950 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quibusdam praesentium fugit recusandae nulla. Esse!
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Features;
