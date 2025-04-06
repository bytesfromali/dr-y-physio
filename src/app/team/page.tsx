import { Metadata } from "next";
import TeamPageClient from "@/components/TeamPage/TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team - Dr. Y Physio",
  description:
    "Meet the expert physiotherapists, nutritionists, and interns at Dr. Y Physio. Our team combines advanced qualifications, extensive experience, and a commitment to exceptional patient care in Noida.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
