"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { trafik } from "@/app/utils/yup";
const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log({ data });
    reset();
  };

  return (
    <div className="p-4 sm:p-8">
      <HeaderSection />
      <div className="h-screen max-w-6xl mx-auto mt-12">
        {/* Steps Start */}
        <React.Fragment>
          <div className="space-y-5">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-sky-950">
                1. Nasıl teklif almak istersin?
              </h5>
              <p className="mt-1 font-normal text-slate-400">
                İstediğin teklif alma seçeneğini seç! Yakında daha fazlası
                eklenecek.
              </p>
            </div>
            <button className="flex flex-col gap-4 py-5 pl-6 pr-6 border xs:flex-row xs:pl-6 xs:pr-12 border-sky-500 active:scale-95 rounded-xl bg-sky-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="self-center w-7 h-7 stroke-white fill-white/20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <span className="block font-semibold text-white">
                  Form ile teklif almak istiyorum.
                </span>
                <span className="block mt-1 text-sm text-left text-slate-100/75">
                  SMS doğrulaması yapılır.
                </span>
              </div>
            </button>
          </div>
          <hr className="my-8" />
          <div>
            <h5 className="text-xl font-bold">
              Kişisel Bilgilerine ihtiyacımız var
            </h5>
            <p className="mt-1 text-slate-400">
              Seni tanımamıza izin ver, merak etme verilerin güvende!
            </p>
          </div>
        </React.Fragment>
        {/* Steps End */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid max-w-2xl grid-cols-2 gap-4 mt-6 sm:flex-nowrap"
        >
          <label
            htmlFor="fullName"
            className="flex-grow block col-span-full xs:col-span-1"
          >
            <input
              id="fullName"
              type="email"
              className={`${
                errors.fullName
                  ? "bg-red-50 border-red-400 focus:border-red-500 placeholder:text-red-500 focus:bg-red-100"
                  : "bg-slate-50/50  border-slate-200/70 focus:bg-slate-50/20 focus:border-slate-300"
              } p-4 border outline-none rounded-xl w-full max-w-sm transition-all`}
              {...register("fullName", {
                required: "Bu alan boş bırakılamaz.",
                pattern: {
                  value: /[^a-zA-ZwığüşöçĞÜŞÖÇİ]/g,
                  message: "Bu alana sayı giremezsin.",
                },
              })}
              placeholder="Ad ve Soyad"
              autoComplete="off"
            />
            <span className="block mt-1.5 text-sm md:text-base text-red-600">
              {errors.fullName && errors.fullName.message}
            </span>
          </label>
        </form>
      </div>
    </div>
  );
};

export const HeaderSection = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row bg-gradient-to-b md:bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 min-h-[23rem] rounded-xl sm:rounded-3xl">
      <div className="flex-1 px-4 py-6 sm:py-12 xl:py-12 lg:pl-12 xl:pl-24">
        <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-8 lg:max-w-2xl lg:items-start">
          <h1 className="text-2xl font-black tracking-tight text-blue-800 xs:text-3xl sm:text-5xl md:text-6xl font-lato">
            Trafik Sigortası ile karşı <br /> tarafı güvence altın alın.
          </h1>
          <p className="max-w-xl text-sm text-blue-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            labore quos debitis vero molestias dolores sit delectus illo magnam
            modi?F
          </p>
        </div>
      </div>
      <div className="relative self-center w-56 h-56 -mt-16 lg:-mt-0 lg:w-64 lg:h-64 top-6 lg:-right-6 lg:self-end xl:w-96 xl:h-96">
        <Image
          src={"/assets/svg/trafik-sigortasi.svg"}
          fill
          alt="Trafik Sigortası SVG"
        />
      </div>
    </div>
  );
};

export default Page;
