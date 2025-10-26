---
id: shiny-apps
title: R Shiny App Documentation
sidebar_position: 4
description: Documentation for interactive R Shiny tools built for exploring genetic data, predictions, and breeding analytics.
---

This section describes the **R Shiny applications** developed as part of the Plant Genetix toolkit — designed to make genomic and predictive models more accessible to breeders and researchers.

---

## 🧰 Current Apps

### 1. **Genomic Prediction Explorer**

- Visualize and compare model performance (GBLUP, Random Forest, etc.)
- Upload new genotype and phenotype datasets
- Generate GEBV prediction plots and summaries

### 2. **Marker–Trait Explorer**

- Interactive Manhattan plots and linkage visualization
- Dynamic filtering by trait, chromosome, or p-value
- Exportable reports for publication or field decision support

### 3. **Selection Dashboard**

- Prioritize genotypes or crosses based on multi-trait indices
- Combine genomic predictions, environmental data, and cost constraints
- Supports custom weighting schemes and exportable candidate lists

---

## 💾 Deployment

Each Shiny app can be run:

- Locally using `shiny::runApp()`
- On a server via **Shiny Server** or **RStudio Connect**
- In the cloud (e.g., Posit Cloud or Dockerized instance)

## 🚀 Example Usage

To launch an app locally, navigate to its directory and run:

```r
shiny::runApp("apps/genomic_prediction_explorer")
```

Once running, the interface will open in your default browser, allowing you to explore datasets, visualize predictions, and export results interactively.

---

## 🧩 Integration

These Shiny apps are designed to fit seamlessly into the broader **Plant Genetix** workflow:

- **Predictive Modeling Integration:** Load prediction outputs and evaluation metrics directly from model runs.
- **Genomic Selection Datasets:** Connect training and validation datasets for interactive exploration.
- **Cross-Language Compatibility:** Interface with Python-based models or scripts using the `reticulate` package.

---

## 📘 Additional Resources

- [📗 R Shiny Documentation](https://shiny.posit.co/r/reference/shiny/latest/)
- [🖥️ Posit Connect Deployment Guide](https://docs.posit.co/connect/)
- [📊 Plotly for Shiny](https://plotly.com/r/shiny/)
