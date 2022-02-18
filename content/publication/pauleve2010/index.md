---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A generic abstract machine for stochastic process calculi"
subtitle: ""
summary: " "
authors:

- Loïc Paulevé
- Simon Youssef
- Matthew R Lakin
- Andrew Phillips

tags: [Pi-calculus]
categories: []
date: 2010-09-29T00:00:00Z
publishDate: 2010-09-29T00:00:00Z
url_pdf: https://dl.acm.org/doi/10.1145/1839764.1839771
featured: false
draft: false
publication_types: ["1"]
publication: "Computational Methods in Systems Biology (CMSB)"

abstract: "This paper presents a generic abstract machine for simulating a broad range of process calculi with an arbitrary reaction-based simulation algorithm. The abstract machine is nstantiated to a particular calculus by defining two functions: one for transforming a process of the calculus to a set of species, and another for computing the set of possible reactions between species. Unlike existing simulation algorithms for chemical reactions, the abstract machine can simulate process calculi that generate potentially unbounded numbers of species and reactions. This is achieved by means of a just-in-time compiler, which dynamically updates the set of possible reactions and chooses the next reaction in an iterative cycle. As a proof of concept, the generic abstract machine is instantiated for the stochastic pi-calculus, and the instantiation is implemented as part of the SPiM stochastic simulator. The structure of the abstract machine facilitates a significant optimisation by allowing channel restrictions to be stored as species complexes. We also present a novel algorithm for simulating chemical reactions with genera distributions, based on the Next Reaction Method of Gibson and Bruck. We use our generic framework to simulate a stochastic pi-calculus model of plasmid co-transfection, where plasmids can form aggregates of arbitrary size and where rates of mRNA degradation are non-exponential. The example illustrates the exibility of our framework, which allows an appropriate high-level language to be paired with the required simulation algorithm, based on the biological system under consideration."

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
projects: [spim]
---
