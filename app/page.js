import Banner from "@/app/components/Banner";
import Header from "@/app/components/Header";
import Partners from "@/app/components/Partners";
import Query from "@/app/components/Query";
import Features from "@/app/components/Features";

export default function Home() {
  return (
    <main>
      <Banner />
      <Header />
      <Partners />
      <Query />
      <Features/>
    </main>
  );
}
