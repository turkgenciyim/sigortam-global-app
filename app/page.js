import Header from "@/app/components/Header";
import Partners from "@/app/components/Partners";
import Query from "@/app/components/Query";
import Features from "@/app/components/Features";

export default function Home() {
  return (
    <main>
      <Header />
      <Partners />
      <Query />
      <Features />
      {/* <footer className="flex flex-wrap items-start justify-between gap-12 p-12 bg-sky-100">
        <div>
          <Image
            src={"/sigortam-global.png"}
            width={100}
            height={100}
            className="rounded-3xl drop-shadow"
            alt="Sigortam Global Footer Icon"
            title="Sigortam Global Footer Icon"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-12 sm:justify-start sm:flex-nowrap">
          <div className="space-y-4">
            <h5 className="font-bold transition-colors text-slate-700 hover:text-slate-950">
              Ürünler
            </h5>
            <div className="space-y-3">
              <Link
                href={"/trafik-sigortasi"}
                title="Trafik Sigortası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Trafik Sigortası
              </Link>
              <Link
                href={"/kasko-sigortasi"}
                title="Kasko Sigortası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Kasko Sigortası
              </Link>
              <Link
                href={"/dask-sigortasi"}
                title="Dask Sigortası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Dask Sigortası
              </Link>
              <Link
                href={"/konut-sigortasi"}
                title="Konut Sigortası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Konut Sigortası
              </Link>
              <Link
                href={"/pati-sigortasi"}
                title="Pati Sigortası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Pati Sigortası
              </Link>
              <Link
                href={"/telefon-sigortasi"}
                title="Telefon Sigortası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Telefon Sigortası
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold transition-colors text-slate-700 hover:text-slate-950">
              Hızlı Erişim
            </h5>
            <div className="space-y-3">
              <Link
                href={"https://www.akademi.cetinkalsigorta.com/"}
                title="Çetinkal Akademi"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Çetinkal Akademi
              </Link>
              <Link
                href={"https://www.sagliksigortam.biz/"}
                title="Çetinkal Akademi"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Sağlık Sigortam
              </Link>
              <Link
                href={"/hakkımızda"}
                title="Hakkımızda"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Hakkımızda
              </Link>
              <Link
                href={"https://www.cetinkalsigorta.com/iletisim"}
                title="Çetinkal Sigorta İletişim Sayfası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold transition-colors text-slate-700 hover:text-slate-950">
              Politikalar
            </h5>
            <div className="space-y-3">
              <Link
                href={"/kisisel-verilerin-korunmasi-kanunu-metni"}
                title="KVKK Metni"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Kişisel Verilerin <br /> Korunması Kanunu
              </Link>
              <Link
                href={"/gizlilik-politikasi"}
                title="Gizlilik Politikası Metni"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href={"/cerez-politikasi"}
                title="Çerez Politikası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                Çerez Politikası
              </Link>
              <Link
                href={"https://www.cetinkalsigorta.com/iletisim"}
                title="Çetinkal Sigorta İletişim Sayfası"
                className="block text-slate-600 hover:text-slate-900 hover:underline"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
