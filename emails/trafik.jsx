import { Head } from "@react-email/head";
import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";

export default function Index(props) {
  const form = props;
  return (
    <Tailwind>
      <Head>
        <title>{form.formName}</title>
      </Head>
      <Html lang="tr">
        <div className="max-w-screen-xl px-4 py-24 mx-auto bg-white md:px-8">
          <h2 className="m-auto mt-4 text-4xl font-medium text-center text-slate-700">
            <span className="inline-block font-bold text-slate-950">
              {form.fullName.toLocaleUpperCase('tr')}
            </span>{" "}
            tarafından
            <br />
            <span className="font-black text-sky-700">
              {form.formName}
            </span>
            <br /> Teklif İsteği Gönderildi.
          </h2>
          <div className="items-center mx-auto my-12">
            <h3 className="flex gap-2 text-center">
              <span className="font-extralight">Ad ve Soyad:</span>
              <span className="font-bold capitalize text-slate-800">{form.fullName}</span>
            </h3>
            <h3 className="flex gap-2 text-center">
              <span className="font-extralight">Kimlik Numarası:</span>
              <span className="font-bold text-slate-800">
                {form.identityNumber}
              </span>
            </h3>
            <h3 className="flex gap-2 text-center">
              <span className="font-extralight">Doğum Tarihi:</span>
              <span className="font-bold text-slate-800">
                {form.dateOfBirthday}
              </span>
            </h3>
            <h3 className="flex gap-2 text-center">
              <span className="font-extralight">Telefon Numarası:</span>
              <span className="font-bold text-slate-800">
                {form.phoneNumber}
              </span>
            </h3>

            <br />
            <hr />
            <br />

            <h3 className="flex gap-2 text-center">
              <span className="font-extralight">Araç Plakası:</span>
              <span className="font-bold text-slate-800">{form.carPlate}</span>
            </h3>
            <h3 className="flex gap-2 text-center">
              <span className="font-extralight">Araç Belge Seri Numarası:</span>
              <span className="font-bold text-slate-800">{form.carSerial}</span>
            </h3>
          </div>
        </div>
      </Html>
    </Tailwind>
  );
}

// Styles for the email template
