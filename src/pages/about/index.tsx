import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import clsx from "clsx";

export default function AboutPage() {
  return (
    <Layout
      title="About Plant-Genetix"
      description="Who we are, what we do, and how we support modern plant breeding through genomics and predictive modeling."
    >
      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>About Plant-Genetix</h1>
            <p className={styles.heroSubtitle}>
              Empowering plant breeders with genomic analytics, predictive
              modeling, and intelligent decision-support tools.
            </p>
            <div className={styles.contactCard}>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@plant-genetix.com">
                  info@plant-genetix.com
                </a>
              </p>

              <p>
                <strong>Website:</strong>{" "}
                <a href="https://plant-genetix.com" target="_blank">
                  plant-genetix.com
                </a>
              </p>

              {/* <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+254700000000">+254 700 000 000</a>
              </p> */}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Our Mission</h2>
          <p className={styles.text}>
            Plant-Genetix exists to accelerate genetic gain in breeding programs
            by bridging traditional plant breeding methods with modern
            computational genomics. We support researchers, seed companies, and
            breeders by building data-driven pipelines that improve selection
            accuracy, reduce trial costs, and uncover the genetic architecture
            behind key traits.
          </p>
        </section>

        {/* Vision Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Our Vision</h2>
          <p className={styles.text}>
            We envision a future where plant breeders—regardless of program
            size—have access to world-class genomic-enabled decision tools. By
            leveraging modern analytics, breeders can accelerate the development
            of resilient, high-yielding, and climate-adapted varieties that meet
            global food and environmental demands.
          </p>
        </section>

        {/* What We Do */}
        <section className={styles.section}>
          <h2 className={styles.heading}>What We Do</h2>
          <p className={styles.text}>
            Our expertise spans quantitative genetics, statistical modeling,
            machine learning, and multi-environment trial analytics. We partner
            with breeding programs working on tea, canola, ornamentals,
            bioenergy crops, and other species to deliver insights that shape
            smarter breeding decisions.
          </p>

          <div className={styles.serviceList}>
            <ServiceItem
              emoji="🧬"
              title="Genomic Selection Strategy"
              description="Improve trait prediction using BLUP models, linear mixed models, and machine learning algorithms tailored to your breeding pipeline."
            />
            <ServiceItem
              emoji="📉"
              title="Sparse Testing"
              description="Reduce multi-environment trial costs through optimized experimental design without sacrificing prediction accuracy."
            />
            <ServiceItem
              emoji="📊"
              title="Trait Heritability Analysis"
              description="Quantify genetic variance components, environmental influence, and breeding value estimation for key traits."
            />
            <ServiceItem
              emoji="🌍"
              title="Genotype × Environment Analysis"
              description="Interpret G×E interactions and identify genotype stability, adaptability, and region-specific recommendations."
            />
            <ServiceItem
              emoji="🧪"
              title="Breeding Program Design"
              description="Support in designing crossing schemes, trial layouts, selection intensity, and data analysis workflows."
            />
            <ServiceItem
              emoji="🧭"
              title="GWAS & QTL Mapping"
              description="Identify genomic regions linked to important agronomic traits to boost marker-assisted and genomic selection."
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.heading}>Experience & Impact</h2>
          <p className={styles.text}>
            With over a decade of research and applied breeding analytics
            experience, we’ve supported R&D projects across six crop species and
            delivered insights into more than fifteen breeding initiatives.
            Plant-Genetix combines domain-specific knowledge with computational
            expertise to deliver actionable results.
          </p>

          <div className={styles.statsGrid}>
            <StatCard number="10+" label="Years Experience" icon="🎓" />
            <StatCard number="6+" label="Crop Species" icon="🌱" />
            <StatCard number="15+" label="R&D Projects" icon="🔬" />
          </div>
        </section>

        {/* Team */}
        <TeamSection />
      </main>
    </Layout>
  );
}

/* --- Reusable Components --- */

type ServiceItemProps = {
  emoji: string;
  title: string;
  description: string;
};

export const ServiceItem: React.FC<ServiceItemProps> = ({
  emoji,
  title,
  description,
}) => (
  <div className={styles.serviceItem}>
    <div className={styles.serviceEmoji}>{emoji}</div>
    <div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  </div>
);

type StatCardProps = {
  number: string;
  label: string;
  icon: string;
};

export const StatCard: React.FC<StatCardProps> = ({ number, label, icon }) => (
  <div className={styles.statCard}>
    <div className={styles.statIcon}>{icon}</div>
    <div className={styles.statNumber}>{number}</div>
    <div className={styles.statLabel}>{label}</div>
  </div>
);

/* --- TEAM --- */

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className={styles.teamCard}>
      {image && <img src={image} alt={name} className={styles.teamImage} />}
      <h3 className={styles.teamName}>{name}</h3>
      <p className={styles.teamRole}>{role}</p>
      <p className={styles.teamBio}>{bio}</p>
    </div>
  );
}

function TeamSection() {
  const team: TeamMemberProps[] = [
    {
      name: "Dr. Nelson Lubanga",
      role: "Founder & Lead Geneticist",
      bio: "Specializes in genomic prediction, multi-environment trial analysis, and computational breeding strategies. Over 10 years of experience supporting breeding programs across tea, canola, ornamentals, and bioenergy crops.",
      image: "/img/team/nelson-dp.jpg",
    },
    {
      name: "Antonio Gorbachev",
      role: "Software Engineer & Data Scientist",
      bio: "Specializes in TypeScript, Python, and data-driven application development. Builds scalable data pipelines, scientific tooling, and integrates machine learning workflows to support modern research analytics.",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Meet the Team</h2>
      <p className={styles.text}>
        Plant-Genetix brings together expertise in quantitative genetics,
        machine learning, bioinformatics, and applied breeding science.
      </p>

      <div className={styles.teamGrid}>
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
}
