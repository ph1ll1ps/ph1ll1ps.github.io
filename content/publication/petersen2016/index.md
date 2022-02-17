---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A strand graph semantics for DNA-based computation"
subtitle: ""
summary: " "
authors:

- Rasmus L Petersen
- Matthew R Lakin
- Andrew Phillips

tags: [Molecular Circuits]
categories: []
date: 2016-06-13T00:00:00Z
publishDate: 2016-06-13T00:00:00Z
url_pdf: http://dx.doi.org/10.1016/j.tcs.2015.07.041
featured: false
draft: false
publication_types: ["2"]
publication: "Theoretical Computer Science"

abstract: "DNA nanotechnology is a promising approach for engineering computation at the nanoscale, with potential applications in biofabrication and intelligent nanomedicine. DNA strand displacement is a general strategy for implementing a broad range of nanoscale computations, including any computation that can be expressed as a chemical reaction network. Modelling and analysis of DNA strand displacement systems is an important part of the design process, prior to experimental realisation. As experimental techniques improve, it is important for modelling languages to keep pace with the complexity of structures that can be realised experimentally. In this paper we present a process calculus for modelling DNA strand displacement computations involving rich secondary structures, including DNA branches and loops. We prove that our calculus is also sufficiently expressive to model previous work on non-branching structures, and propose a mapping from our calculus to a canonical strand graph representation, in which vertices represent DNA strands, ordered sites represent domains, and edges between sites represent bonds between domains. We define interactions between strands by means of strand graph rewriting, and prove the correspondence between the process calculus and strand graph behaviours. Finally, we propose a mapping from strand graphs to an efficient implementation, which we use to perform modelling and simulation of DNA strand displacement systems with rich secondary structure."

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
