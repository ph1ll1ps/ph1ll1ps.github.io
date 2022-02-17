---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Modular verification of chemical reaction network encodings via serializability analysis"
subtitle: ""
summary: " "
authors:

- Matthew R Lakin
- Darko Stefanovic
- Andrew Phillips

tags: [Molecular Circuits, Chemical Reaction Networks]
categories: []
date: 2016-06-13T00:00:00Z
publishDate: 2016-06-13T00:00:00Z
url_pdf: http://dx.doi.org/10.1016/j.tcs.2015.06.033
featured: false
draft: false
publication_types: ["2"]
publication: "Theoretical Computer Science"

abstract: "Chemical reaction networks are a powerful means of specifying the intended behavior of synthetic biochemical systems. A high-level formal specification, expressed as a chemical reaction network, may be compiled into a lower-level encoding, which can be directly implemented in wet chemistry and may itself be expressed as a chemical reaction network. Here we present conditions under which a lower-level encoding correctly emulates the sequential dynamics of a high-level chemical reaction network. We require that encodings are transactional, such that their execution is divided by a \"commit reaction\" that irreversibly separates the reactant-consuming phase of the encoding from the product-generating phase. We also impose restrictions on the sharing of species between reaction encodings, based on a notion of \"extra tolerance\", which defines species that may be shared between encodings without enabling unwanted reactions. Our notion of correctness is serializability of interleaved reaction encodings, and if all reaction encodings satisfy our correctness properties then we can infer that the global dynamics of the system are correct. This allows us to infer correctness of any system constructed using verified encodings. As an example, we show how this approach may be used to verify two- and four-domain DNA strand displacement encodings of chemical reaction networks, and we generalize our result to the limit where the populations of helper species are unlimited."

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
