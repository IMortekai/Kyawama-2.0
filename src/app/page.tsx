import { Hero } from "@/components/home/Hero";
import { LearningJourney } from "@/components/home/LearningJourney";
import { Pilot } from "@/components/home/Pilot";
import { Statement } from "@/components/home/Statement";
import { Story } from "@/components/home/Story";
import { Support } from "@/components/home/Support";

/** Narrative: opportunity → people → learning journey → pilot → how to help. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <Story />
      <LearningJourney />
      <Pilot />
      <Support />
    </>
  );
}
