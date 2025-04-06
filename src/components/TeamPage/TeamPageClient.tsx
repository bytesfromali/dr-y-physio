"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./team.module.css";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Yusuf Asad",
    title: "Lead Physiotherapist",
    degree: "MPT in Sports Physiotherapy",
    experience: "5 years",
    description:
      "Dr. Yusuf Asad leads our team with a proven track record in sports rehabilitation. He is the official physiotherapist for Hindustan Football Club and provides expert care. His focus on advanced sports injury treatment and recovery drives our clinic’s success.",
    image: "/images/dr-yusuf.jpeg",
  },
  {
    id: 2,
    name: "Ms. Ritu Mehta",
    title: "Senior Physiotherapist",
    degree: "BPT, Specialization in Pediatric Physiotherapy",
    experience: "7 years",
    description:
      "Ms. Ritu Mehta is dedicated to pediatric and post-injury recovery. Her compassionate approach and comprehensive treatment plans ensure effective results for patients of all ages.",
    image: "/images/team2.jpg",
  },
  {
    id: 3,
    name: "Mr. Amit Verma",
    title: "Assistant Physiotherapist (On-Demand)",
    degree: "BPT, Certified in Neurological Physiotherapy",
    experience: "4 years",
    description:
      "Mr. Amit Verma focuses on neurological physiotherapy, utilizing evidence-based techniques to manage chronic conditions effectively. His expertise supports our clinic’s innovative patient care approach.",
    image: "/images/team3.jpg",
  },
  {
    id: 4,
    name: "Ms. Kavita Rao",
    title: "Physiotherapist (On-Demand)",
    degree: "BPT, Diploma in Orthopedic Physiotherapy",
    experience: "3 years",
    description:
      "Ms. Kavita Rao specializes in orthopedic physiotherapy and sports rehabilitation. Her personalized treatment plans ensure optimal recovery and proactive care.",
    image: "/images/team4.jpg",
  },
  {
    id: 5,
    name: "Ms. Anjali Kapoor",
    title: "Nutritionist",
    degree: "B.Sc. in Nutrition & Dietetics",
    experience: "5 years",
    description:
      "Ms. Anjali Kapoor integrates clinical nutrition with physiotherapy to enhance recovery and overall wellness, combining science with personalized care.",
    image: "/images/team5.jpg",
  },
  {
    id: 6,
    name: "Mr. Rahul Jain",
    title: "Intern Physiotherapist",
    degree: "MPT (In Training)",
    experience: "Internship - 1 year",
    description:
      "Mr. Rahul Jain is a promising intern learning modern physiotherapy techniques. His fresh perspective and dedication bring dynamic energy to our clinic.",
    image: "/images/team6.jpg",
  },
];

export default function TeamPageClient() {
  return (
    <div className={styles.teamPage}>
      <h1 className={styles.pageTitle}>Our Team</h1>
      <p className={styles.pageDescription}>
        At Dr. Y Physio, our dedicated team of physiotherapists, nutritionists,
        and interns combines advanced qualifications with hands-on experience to
        deliver exceptional care in Noida.
      </p>
      <div className={styles.teamGrid}>
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            className={styles.teamCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: member.id * 0.3 }}
          >
            <Image
              src={member.image}
              alt={member.name}
              className={styles.teamImage}
              width={500}
              height={500}
              quality={90}
            />
            <h2 className={styles.memberName}>{member.name}</h2>
            <p className={styles.memberTitle}>{member.title}</p>
            <div className={styles.structuredInfo}>
              <p className={styles.degree}>
                <strong>Degree:</strong> {member.degree}
              </p>
              <p className={styles.experience}>
                <strong>Experience:</strong> {member.experience}
              </p>
            </div>
            <p className={styles.memberBio}>{member.description}</p>
          </motion.div>
        ))}
      </div>
      <p className={styles.callToAction}>
        Interested in joining our team?{" "}
        <Link href="/contact" className={styles.customLink}>
          Contact us
        </Link>{" "}
        for career opportunities.
      </p>
    </div>
  );
}
