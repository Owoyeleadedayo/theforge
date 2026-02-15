"use client"
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import GetUpdatesSection from "@/components/GetUpdatesSection";
import Gratitude from "@/components/Gratitude";
import HupoSection from "@/components/HupoSection";
import OneforgeSection from "@/components/OneforgeSection";
import PathSection from "@/components/PathSection";
import VolunteerForm from "@/components/VolunteerForm";
import WhatHappensNext from "@/components/WhatHappensNext";

export default function Home() {
  return (
    <>
      <Banner />
      <Gratitude />
      <OneforgeSection />
      <HupoSection />
      <PathSection />
      <GetUpdatesSection />
      <VolunteerForm />
      <WhatHappensNext />
      <Footer />
    </>
  );
}
