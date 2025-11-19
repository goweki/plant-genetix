// src/pages/index.tsx
import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { Check } from "lucide-react";

const services: { name: string; description: string; icon: string }[] = [
  {
    name: "Genomic Selection",
    description:
      "Help breeding programs optimize trait selection using predictive models (linear mixed models and machine learning models).",
    icon: "🧬",
  },
  {
    name: "Sparse Testing",
    description:
      "Optimize resources by reducing the cost of multi-environment breeding trials through efficient experimental designs.",
    icon: "📉",
  },
  {
    name: "Trait Heritability",
    description:
      "Offer statistical insights into breeding value, genetic variance, and environmental influence on traits.",
    icon: "📊",
  },
  {
    name: "Genotype x Environment Interaction (GxE) ",
    description:
      "Identify and interpret interactions between genotypes and environments to guide variety recommendations and adaptive breeding decisions.",
    icon: "🌍",
  },
  {
    name: "Breeding Program Design",
    description:
      "Advise on crossing schemes, trial design, selection intensity, and data analysis pipelines for improved genetic gain.",
    icon: "🧪",
  },
  {
    name: "Genome-Wide Association Study (GWAS) and QTL Mapping",
    description:
      "Detect genomic regions associated with important traits to accelerate marker-assisted and genomic selection strategies.",
    icon: "🧭",
  },
];

const MolecularOrbitAnimation = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.molecularOrbit}>
      <div className={styles.outerOrbit}></div>
      <div
        className={styles.middleOrbit}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className={styles.electron1}></div>
        <div className={styles.electron2}></div>
      </div>
      <div
        className={styles.innerOrbit}
        style={{ transform: `rotate(${-rotation * 1.5}deg)` }}
      >
        <div className={styles.electron3}></div>
        <div className={styles.electron4}></div>
      </div>
      <div className={styles.nucleus}></div>
    </div>
  );
};

const FloatingMolecule = ({ delay = 0, size = "small" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.sin(Date.now() * 0.001 + delay) * 20,
        y: Math.cos(Date.now() * 0.0015 + delay) * 15,
      });
    }, 50);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div
      className={clsx(styles.floatingMolecule, styles[size])}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
};

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ name, description, icon }: ServiceCardProps) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <span className={styles.iconText}>{icon}</span>
      </div>
      <h3 className={styles.featureTitle}>{name}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      {/* Animated Background */}
      <div className={styles.backgroundAnimation}>
        {[...Array(15)].map((_, i) => (
          <FloatingMolecule
            key={i}
            delay={i * 0.5}
            size={i % 3 === 0 ? "large" : "small"}
          />
        ))}
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>

      <div className="container">
        <div
          className={clsx(styles.heroContent, { [styles.loaded]: isLoaded })}
        >
          <MolecularOrbitAnimation />
          {/* <img
            src={"img/profile_photo.jpg"}
            alt="photo"
            className={styles.heroLogo}
          /> */}

          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>

          <h2 className={styles.heroSubtitle}>{siteConfig.tagline}</h2>

          <div className={styles.buttons}>
            <Link className={clsx("button", styles.primaryButton)} to="/about">
              About Us →
            </Link>
            {/* <Link
              className={clsx("button", styles.secondaryButton)}
              to="/docs/research"
            >
              Research
            </Link> */}
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.chevronDown}>↓</div>
        </div>
      </div>
    </header>
  );
}

function ResearchFocus() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("research-focus");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research-focus" className={styles.researchSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Research & Development Excellence
          </Heading>
          <p className={styles.sectionSubtitle}>
            Bridging traditional plant breeding with cutting-edge genomic
            technologies across tea, canola, ornamentals, and bioenergy crops
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {services.map((service, index) => (
            <div
              key={service.name}
              className={clsx(styles.featureWrapper, {
                [styles.featureLoaded]: isLoaded,
              })}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Advancing plant science through genomics, predictive modeling, and machine learning."
    >
      <HomepageHeader />
      <main>
        <ResearchFocus />
        {/* <StatsSection /> */}
      </main>
    </Layout>
  );
}
