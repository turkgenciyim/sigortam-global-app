"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TrafikSchema } from "@/app/utils/yup";
import Link from "next/link";
const Page = () => {
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const [isError, setIsError] = useState({ status: false, message: "" });

  const {
    register,
    handleSubmit,

    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      formName: "Trafik Sigortası",
    },
    mode: "onTouched",
    resolver: yupResolver(TrafikSchema),
  });

  const onSubmit = async (formValues) => {
    setIsError({ status: false });
    await fetch("/trafik-sigortasi/api", {
      body: JSON.stringify(formValues),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      const { status, statusText } = response;
      if (status == "200" && statusText == "OK") {
        setIsSuccessfullySubmitted(true);
      } else if (status == "500") {
        setIsError({
          status: true,
          message:
            "Teklif isteği gönderilirken bir hata oluştu. Lütfen bize ulaşın.",
        });
      }
    });
  };

  return (
    <div className="p-4 xs:p-6 sm:p-8 max-w-[100rem] mx-auto">
      <HeaderSection />
      <div className="mx-auto ">
        {isSuccessfullySubmitted && (
          <div className="w-full px-6 py-20 border bg-sky-50 border-slate-100 rounded-b-xl">
            <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-center text-transparent pb-1.5 bg-clip-text bg-gradient-to-tr from-sky-500 to-cyan-500">
              Trafik Sigortası teklif <br /> isteğiniz başarıyla gönderildi.
            </h2>
            <p className="max-w-xl mx-auto my-4 text-slate-600">
              Sevgili müşterimiz teklif isteğiniz bize ulaştı. Sizi en geç 30
              dakika içerisinde arayıp en uygun teklifi sunacağız. Çetinkal
              Sigorta&apos;dan gelecek aramaları lütfen cevaplayınız.
            </p>
            <div className="max-w-xs mx-auto mt-8">
              <p className="text-lg font-semibold tracking-tight text-center md:text-xl text-slate-700">
                Aranacağınız numara aşağıda yer almaktadır:
              </p>
              <button className="w-full px-8 py-4 mt-4 text-lg font-bold text-white md:text-xl font-lato bg-sky-500 rounded-xl">
                0 (532) 273 43 25
              </button>
            </div>
          </div>
        )}
        {!isSuccessfullySubmitted && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid max-w-[50rem]  mt-12 grid-cols-2 gap-x-6 gap-y-0 py-6 space-y-5 mx-auto sm:flex-nowrap"
          >
            {/* Standart Inputs */}
            <>
              {/* Steps Start */}
              <div className="col-span-full">
                <div className="space-y-5">
                  <div>
                    <h5 className="text-2xl font-bold tracking-tight text-sky-950">
                      1. Teklif almak istediğiniz yolu seçin.
                    </h5>
                    <p className="mt-1 text-lg font-medium tracking-tight text-slate-400">
                 Whatsapp ile fotokopinizi veya ruhsatı göndererek teklif alabilirsiniz.{" "}
                   
                  </p>
                  </div>
                  <div className="flex flex-wrap gap-5">
                    <Link
                      target="_blank"
                      href={`https://wa.me/905322734325`}
                      className="flex flex-col w-full max-w-sm gap-4 py-5 pl-6 pr-6 transition-colors border xs:flex-row xs:pl-6 xs:pr-12 border-emerald-500 active:scale-95 rounded-xl bg-emerald-500 hover:bg-emerald-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="self-center w-7 h-7 fill-white"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>

                      <div>
                        <span className="block font-semibold text-white">
                          Whatsapp ile teklif alın.
                        </span>
                        <span className="block mt-1 text-sm text-left text-slate-100/75">
                          Hızlıca teklif alma imkanı
                        </span>
                      </div>
                    </Link>
                    <button
                      type="button"
                      role="button"
                      className="flex flex-col w-full max-w-sm gap-4 py-5 pl-6 pr-6 transition-colors border xs:flex-row xs:pl-6 xs:pr-12 border-sky-500 active:scale-95 rounded-xl bg-sky-500 hover:bg-sky-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        gi
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
                          30 dakika içinde geri dönüş garantisi
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <hr className="my-8" />
                <div>
                  <h5 className="text-xl font-bold">
                    1. Kişisel Bilgiler
                  </h5>
                  <p className="mt-1 text-slate-400">
                    Neden kişisel verilerine ihtiyacımız var? Kısa bir göz
                    atabilirsin.{" "}
                    <Link
                      href={"/kisisel-verilerin-korunmasi-metni"}
                      target="_blank"
                      className="text-blue-400 underline"
                    >
                      Bkz.
                    </Link>
                  </p>
                </div>
              </div>
              {/* Steps End */}
              <label
                htmlFor="fullName"
                className="flex-grow block col-span-full sm:col-span-1"
              >
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={`${
                    errors.fullName
                      ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-600 placeholder:text-red-500 focus:bg-red-100"
                      : "bg-slate-50/50 border-slate-200/70 focus:bg-slate-50/20 focus:border-slate-300 hover:border-slate-200"
                  } p-4 uppercase border placeholder:capitalize outline-none rounded-xl disabled:opacity-80 w-full max-w-xs sm:max-w-sm transition-all`}
                  {...register("fullName")}
                  disabled={isSubmitting || isSuccessfullySubmitted}
                  placeholder="Ad ve Soyad"
                  maxLength={50}
                  onKeyDown={(e) => {
                    if (/^[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
                <span className="block mt-1.5 text-sm md:text-base text-red-600">
                  {errors.fullName?.message}
                </span>
              </label>
              <label
                htmlFor="identityNumber"
                className="flex-grow block col-span-full sm:col-span-1"
              >
                <input
                  id="identityNumber"
                  name="identityNumber"
                  type="tel"
                  className={`${
                    errors.identityNumber
                      ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-600 placeholder:text-red-500 focus:bg-red-100"
                      : "bg-slate-50/50 border-slate-200/70 focus:bg-slate-50/20 focus:border-slate-300 hover:border-slate-200"
                  } p-4 uppercase border placeholder:capitalize outline-none rounded-xl disabled:opacity-80 w-full max-w-xs sm:max-w-sm transition-all`}
                  {...register("identityNumber")}
                  disabled={isSubmitting || isSuccessfullySubmitted}
                  placeholder="T.C Kimlik Numarası"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[a-z]/, "");
                  }}
                  maxLength={11}
                />
                <span className="block mt-1.5 text-sm md:text-base text-red-600">
                  {errors.identityNumber?.message}
                </span>
              </label>
              <label
                htmlFor="dateOfBirthday"
                className="relative flex-grow block tooltip tooltip-primary tooltip-bottom tooltip-click col-span-full sm:col-span-1"
                data-tooltip="Örnek kullanım: 30.08.2004"
              >
                <input
                  id="dateOfBirthday"
                  name="dateOfBirthday"
                  type="tel"
                  className={`${
                    errors.dateOfBirthday
                      ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-600 placeholder:text-red-500 focus:bg-red-100"
                      : "bg-slate-50/50 border-slate-200/70 focus:bg-slate-50/20 focus:border-slate-300 hover:border-slate-200"
                  } p-4 uppercase border placeholder:capitalize outline-none rounded-xl disabled:opacity-80 w-full max-w-xs sm:max-w-sm transition-all`}
                  {...register("dateOfBirthday")}
                  disabled={isSubmitting || isSuccessfullySubmitted}
                  placeholder="Doğum Tarihi"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[a-z]/, "");
                    if (e.target.value.length == "3") {
                      e.target.value = e.target.value.replace(".", "/");
                      e.target.value = e.target.value.replace(" ", "/");
                    }
                    if (e.target.value.length == "6") {
                      e.target.value = e.target.value.replace(".", "/");
                      e.target.value = e.target.value.replace(" ", "/");
                    }
                    if (e.target.value.length == "9") {
                      e.target.value = e.target.value.replace(".", "/");
                      e.target.value = e.target.value.replace(" ", "/");
                    }
                  }}
                  maxLength={10}
                />
                <span className="block mt-1.5 text-sm md:text-base text-red-600">
                  {errors.dateOfBirthday?.message}
                </span>
              </label>
              <label
                htmlFor="phoneNumber"
                className="relative flex-grow block tooltip-primary tooltip-bottom tooltip tooltip-click col-span-full sm:col-span-1"
                data-tooltip="Numaranızı başında 0 olmadan yazınız."
              >
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  className={`${
                    errors.phoneNumber
                      ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-600 placeholder:text-red-500 focus:bg-red-100"
                      : "bg-slate-50/50 border-slate-200/70 focus:bg-slate-50/20 focus:border-slate-300 hover:border-slate-200"
                  } p-4 uppercase border placeholder:capitalize outline-none rounded-xl disabled:opacity-80 w-full max-w-xs sm:max-w-sm transition-all`}
                  {...register("phoneNumber")}
                  disabled={isSubmitting || isSuccessfullySubmitted}
                  placeholder="Cep Telefonu Numarası"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[a-z]/, "");
                  }}
                  maxLength={10}
                />
                <span className="block mt-1.5 text-sm md:text-base text-red-600">
                  {errors.phoneNumber?.message}
                </span>
              </label>
            </>

            {/* Custom Inputs */}
            <>
              <div className="space-y-5 col-span-full">
                <hr className="mb-8" />
                <div>
                  <h5 className="text-xl font-bold">
                  2.  İstediğin ürün için teklif almana az kaldı.
                  </h5>
                  <p className="mt-1 text-slate-400">
                    Şimdi teklif almak istediğin ürün için bir kaç bilgiye
                    ihtiyacımız var.
                  </p>
                </div>
              </div>
              <label
                htmlFor="carPlate"
                className="flex-grow block col-span-full sm:col-span-1"
              >
                <input
                  id="carPlate"
                  name="carPlate"
                  type="tel"
                  className={`${
                    errors.carPlate
                      ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-600 placeholder:text-red-500 focus:bg-red-100"
                      : "bg-slate-50/50 border-slate-200/70 focus:bg-slate-50/20 focus:border-slate-300 hover:border-slate-200"
                  } p-4 uppercase border placeholder:capitalize outline-none rounded-xl disabled:opacity-80 w-full max-w-xs sm:max-w-sm transition-all`}
                  {...register("carPlate")}
                  disabled={isSubmitting || isSuccessfullySubmitted}
                  placeholder="Araç Plakası"
                  autoComplete="off"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/ /, "");
                  }}
                  maxLength={9}
                />
                <span className="block mt-1.5 text-sm md:text-base text-red-600">
                  {errors.carPlate?.message}
                </span>
              </label>
              <label
                htmlFor="carSerial"
                className="flex-grow block col-span-full sm:col-span-1"
              >
                <input
                  id="carSerial"
                  name="carSerial"
                  type="tel"
                  className={`${
                    errors.carSerial
                      ? "bg-red-50 border-red-400 focus:border-red-500 hover:border-red-600 placeholder:text-red-500 focus:bg-red-100"
                      : "bg-slate-50/50 border-slate-200/70 focus:bg-slate-50/20 focus:border-slate-300 hover:border-slate-200"
                  } p-4 uppercase border placeholder:capitalize outline-none rounded-xl disabled:opacity-80 w-full max-w-xs sm:max-w-sm transition-all`}
                  {...register("carSerial")}
                  disabled={isSubmitting || isSuccessfullySubmitted}
                  placeholder="Araç Seri Numarası"
                  autoComplete="off"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/ /, "");
                  }}
                  maxLength={8}
                />
                <span className="block mt-1.5 text-sm md:text-base text-red-600">
                  {errors.carSerial?.message}
                </span>
              </label>
            </>

            {/* Continue Form */}
            <>
              <div className="space-y-5 col-span-full">
                <hr className="mb-8" />
                <label className="flex items-center w-full gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isTerms"
                    id="isTerms"
                    disabled={isSubmitting || isSuccessfullySubmitted}
                    {...register("isTerms")}
                    className={`checkbox min-w-[20px] flex-1 xs:flex-none disabled:bg-blue-500 disabled:opacity-40 disabled:border-blue-500 ${
                      errors.isTerms
                        ? " checkbox-bordered-error"
                        : " checkbox-solid"
                    }`}
                  />
                  <span className="text-sm text-slate-700 sm:text-base">
                    {" "}
                    <Link
                      href={"/kisisel-verilerin-korunmasi-metni"}
                      className={`${
                        errors.isTerms
                          ? "text-red-600 underline underline-offset-2 decoration-red-200"
                          : "text-blue-600 underline underline-offset-2 decoration-blue-200"
                      } transition-all `}
                    >
                      Kişisel Verilerin İşlenmesini ve Aydınlatma Metnini
                    </Link>{" "}
                    okudum, onaylıyorum.
                  </span>
                </label>
                <label className="flex items-center w-full gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isPrivacy"
                    id="isPrivacy"
                    disabled={isSubmitting || isSuccessfullySubmitted}
                    {...register("isPrivacy")}
                    className={`checkbox min-w-[20px] flex-1 xs:flex-none disabled:bg-blue-500 disabled:opacity-40 disabled:border-blue-500 ${
                      errors.isPrivacy
                        ? " checkbox-bordered-error"
                        : " checkbox-solid"
                    }`}
                  />
                  <span className="text-sm text-slate-700 sm:text-base">
                    {" "}
                    <Link
                      href={"/gizlilik-politikasi"}
                      className={`${
                        errors.isPrivacy
                          ? "text-red-600 underline underline-offset-2 decoration-red-200"
                          : "text-blue-600 underline underline-offset-2 decoration-blue-200"
                      } transition-all`}
                    >
                      Gizlilik Politikasını
                    </Link>{" "}
                    metnini okudum, onaylıyorum.
                  </span>
                </label>
              </div>

              {isError.status && (
                <div className="max-w-lg p-3 text-sm text-red-700 bg-red-200 sm:p-4 sm:text-base col-span-full">
                  {isError.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSuccessfullySubmitted}
                className={`flex col-span-full disabled:btn-loading items-center justify-center disabled:opacity-70  h-16 max-w-md mt-16 btn btn-primary rounded-xl`}
              >
                {!isSubmitting && "Teklif İsteğini Oluştur ve Gönder"}
              </button>
            </>
          </form>
        )}
      </div>
    </div>
  );
};

export const HeaderSection = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row bg-gradient-to-b md:bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 min-h-[23rem] rounded-t-xl sm:rounded-t-3xl">
      <div className="flex-1 px-4 py-6 sm:py-12 xl:py-12 lg:pl-12 xl:pl-24">
        <div className="flex flex-col items-center justify-center h-full max-w-xl mx-auto space-y-4 text-center md:space-y-8 lg:text-left lg:max-w-md xl:max-w-4xl lg:items-start">
          <h1 className="text-2xl font-black tracking-tight text-blue-800 xs:text-3xl sm:text-5xl md:text-6xl font-lato">
            Trafik Sigortası ile karşı tarafın <br />  maddi zararlarını karşılayın.
          </h1>
          <p className="max-w-xl text-sm text-blue-700">
            Aracınız ile karşı tarafa veya üçüncü şahıslara vereceğiniz maddi
            zararları karşılamak için Trafik Sigortası yanınızda!
          </p>
        </div>
      </div>
      <div className="relative self-center w-56 h-56 -mt-16 lg:-mt-0 lg:w-64 lg:h-64 top-6 lg:-right-6 lg:self-end xl:w-96 xl:h-96">
        <Image
          src={"/assets/svg/trafik-sigortasi.svg"}
          fill
          priority
          alt="Trafik Sigortası SVG"
        />
      </div>
    </div>
  );
};

export default Page;
