---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Abstractions for DNA circuit design"
subtitle: ""
summary: " "
authors:

- Matthew R Lakin
- Simon Youssef
- Luca Cardelli
- Andrew Phillips

tags: [Molecular Circuits]
categories: []
date: 2012-03-07T00:00:00Z
publishDate: 2012-03-07T00:00:00Z
url_pdf: https://royalsocietypublishing.org/doi/10.1098/rsif.2011.0343
featured: false
draft: false
publication_types: ["2"]
publication: "Journal of The Royal Society Interface"

abstract: "DNA strand displacement techniques have been used to implement a broad range of information processing devices, from logic gates, to chemical reaction networks, to architectures for universal computation. Strand displacement techniques enable computational devices to be implemented in DNA without the need for additional components, allowing computation to be programmed solely in terms of nucleotide sequences. A major challenge in the design of strand displacement devices has been to enable rapid analysis of high-level designs while also supporting detailed simulations that include known forms of interference. Another challenge has been to design devices capable of sustaining precise reaction kinetics over long periods, without relying on complex experimental equipment to continually replenish depleted species over time. In this paper, we present a programming language for designing DNA strand displacement devices, which supports progressively increasing levels of molecular detail. The language allows device designs to be programmed using a common syntax and then analysed at varying levels of detail, with or without interference, without needing to modify the program. This allows a trade-off to be made between the level of molecular detail and the computational cost of analysis. We use the language to design a buffered architecture for DNA devices, capable of maintaining precise reaction kinetics for a potentially unbounded period. We test the effectiveness of buffered gates to support long-running computation by designing a DNA strand displacement system capable of sustained oscillations."

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
