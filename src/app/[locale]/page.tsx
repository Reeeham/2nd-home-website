import { notFound } from "next/navigation";
import { dictionaries, isLocale } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Contact, FAQ, Pricing, Process, Reviews, Services, TrustBar, WhyUs } from "@/components/Sections";
import BookingForm from "@/components/BookingForm";
import Results from "@/components/Results";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = dictionaries[locale];

  return (
    <>
      <Navbar t={t} locale={locale} />
      <main className="flex-1">
        <Hero t={t} locale={locale} />
        <TrustBar t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <Pricing t={t} />
        <Process t={t} />
        <Results t={t} />
        <Reviews t={t} />
        <FAQ t={t} />
        <BookingForm t={t} locale={locale} />
        <Contact t={t} locale={locale} />
      </main>
      <Footer t={t} locale={locale} />
      <FloatingActions t={t} />
    </>
  );
}
