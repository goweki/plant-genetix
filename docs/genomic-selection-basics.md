---
id: genomic-selection-basics
title: Genomic Selection Basics
sidebar_position: 2
description: A primer on genomic selection — principles, workflows, and implementation steps for accelerating crop breeding.
---

Genomic selection (GS) is a breeding approach that uses genome-wide DNA markers to **predict the performance** of individuals before field testing.  
It enables faster, data-driven selection decisions in long-cycle crops such as tea, maize, and cassava.

---

## 🌱 Why It Matters

Traditional selection relies on years of phenotypic observation.  
GS, by contrast, uses statistical models trained on **genotype–phenotype datasets** to estimate _genomic estimated breeding values (GEBVs)_, reducing the need for full-cycle trials.

This allows:

- Earlier identification of promising genotypes
- Reduced breeding cycle times
- Greater genetic gain per unit time

---

## 🧬 Key Steps in a GS Workflow

1. **Genotyping** – collect genome-wide marker data (e.g., SNP arrays, sequencing).
2. **Phenotyping** – measure target traits in a training population.
3. **Model training** – fit a statistical or machine-learning model linking markers to traits.
4. **Prediction** – use the trained model to estimate GEBVs for untested individuals.
5. **Selection** – choose top candidates for crossing or field validation.

---

## ⚙️ Common Statistical Models

| Model         | Description                                              | Software               |
| ------------- | -------------------------------------------------------- | ---------------------- |
| GBLUP         | Linear mixed model assuming equal marker effects         | `rrBLUP`, `sommer` (R) |
| BayesB/BayesC | Variable selection models with marker-specific variances | `BGLR`                 |
| Random Forest | Non-parametric ML model capturing interactions           | `caret`, `ranger`      |
| DeepGS        | Neural network-based approach                            | `TensorFlow`, `Keras`  |

---

## 📊 Evaluating Accuracy

Prediction accuracy depends on:

- Marker density and quality
- Training population size
- Genetic relatedness between training and test sets
- Trait heritability

Use cross-validation or forward prediction to quantify performance before deployment.

---

## 📚 Further Reading

- Meuwissen, T., Hayes, B., & Goddard, M. (2001). _Prediction of total genetic value using genome-wide dense marker maps._ Genetics, 157(4), 1819–1829.
- Lubanga et al. (2023). _Genomic selection strategies to increase genetic gain in tea breeding programs._ _The Plant Genome_.
