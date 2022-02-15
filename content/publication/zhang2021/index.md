---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A deep learning model for predicting next-generation sequencing depth from DNA sequence"
subtitle: ""
summary: " "
authors:

- Jinny X. Zhang
- Boyan Yordanov 
- Alexander Gaunt
- Michael X Wang
- Peng Dai
- Yuan-jyue Chen
- Kerou Zhang
- John Z Fang
- Neil Dalchau
- Jiaming Li
- Andrew Phillips
- David Yu Zhang


tags: []
categories: []
date: 2021-07-19T00:00:00Z
publishDate: 2017-07-19T00:00:00Z
url_pdf: http://www.nature.com/articles/s41467-021-24497-8
featured: true
draft: false
publication_types: ["2"]
publication: Nature Communications

abstract: "Targeted high-throughput DNA sequencing is a primary approach for genomics and molecular diagnostics, and more recently as a readout for DNA information storage. Oligonucleotide probes used to enrich gene loci of interest have different hybridization kinetics, resulting in non-uniform coverage that increases sequencing costs and decreases sequencing sensitivities. Here, we present a deep learning model (DLM) for predicting Next-Generation Sequencing (NGS) depth from DNA probe sequences. Our DLM includes a bidirectional recurrent neural network that takes as input both DNA nucleotide identities as well as the calculated probability of the nucleotide being unpaired. We apply our DLM to three different NGS panels: a 39,145-plex panel for human single nucleotide polymorphisms (SNP), a 2000-plex panel for human long non-coding RNA (lncRNA), and a 7373-plex panel targeting non-human sequences for DNA information storage. In cross-validation, our DLM predicts sequencing depth to within a factor of 3 with 93% accuracy for the SNP panel, and 99% accuracy for the non-human panel. In independent testing, the DLM predicts the lncRNA panel with 89% accuracy when trained on the SNP panel. The same model is also effective at predicting the measured single-plex kinetic rate constants of DNA hybridization and strand displacement."

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image: 
#  caption: ""
  focal_point: "TopLeft"
#  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: [visualdsd]
---
