---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Automated Leak Analysis of Nucleic Acid Circuits"
subtitle: ""
summary: " "
authors:

- Iuliia Zarubiieva
- Carlo Spaccasassi
- Vishwesh Kulkarni
- Andrew Phillips

tags: [Molecular Circuits]
categories: []
date: 2022-05-11T00:00:00Z
publishDate: 2022-05-11T00:00:00Z
url_pdf: https://pubs.acs.org/doi/10.1021/acssynbio.2c00084
featured: true
draft: false
publication_types: ["2"]
publication: "ACS Synthetic Biology"

abstract: "Nucleic acids are a powerful engineering material that can be used to implement a broad range of computational circuits at the nanoscale, with potential applications in high-precision biosensing, diagnostics, and therapeutics. However, nucleic acid circuits are prone to leaks, which result from unintended displacement interactions between nucleic acid strands. Such leaks can grow combinatorially with circuit size, are challenging to mitigate, and can significantly compromise circuit behavior. While several techniques have been proposed to partially mitigate leaks, computational methods for designing new leak mitigation strategies and comparing their effectiveness on circuit behavior are limited. Here we present a general method for the automated leak analysis of nucleic acid circuits, referred to as DSD Leaks. Our method extends the logic programming functionality of the Visual DSD language, developed for the design and analysis of nucleic acid circuits, with predicates for leak generation, a leak reaction enumeration algorithm, and predicates to exclude low probability leak reactions. We use our method to identify the critical leak reactions affecting the performance of control circuits, and to analyze leak mitigation strategies by automatically generating leak reactions. Finally, we design new control circuits with substantially reduced leakage including a sophisticated proportional-integral controller circuit, which can in turn serve as building blocks for future circuits. By integrating our method within an open-source nucleic acid circuit design tool, we enable the leak analysis of a broad range of circuits, as an important step toward facilitating robust and scalable nucleic acid circuit design."

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
