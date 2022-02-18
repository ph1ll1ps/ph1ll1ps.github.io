---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Stochastic simulation of multiple process calculi for biology"
subtitle: ""
summary: " "
authors:

- Matthew R Lakin
- Loïc Paulevé
- Andrew Phillips

tags: [Molecular Circuits, Formal Semantics, Pi-calculus]
categories: []
date: 2012-05-04T00:00:00Z
publishDate: 2012-05-04T00:00:00Z
url_pdf: https://linkinghub.elsevier.com/retrieve/pii/S0304397511010231
featured: false
draft: false
publication_types: ["2"]
publication: "Theoretical Computer Science"

abstract: "Numerous programming languages based on process calculi have been developed for biological modelling, many of which can generate potentially unbounded numbers of molecular species and reactions. As a result, such languages cannot rely on standard reaction-based simulation methods, and are generally implemented using custom stochastic simulation algorithms. As an alternative, this paper proposes a generic abstract machine that can be instantiated to simulate a range of process calculi using a range of simulation methods. The abstract machine functions as a just-in-time compiler, which dynamically updates the set of possible reactions and chooses the next reaction in an iterative cycle. We instantiate the generic abstract machine with two Markovian simulation methods and provide encodings for four process calculi: the agent-based pi-calculus, the compartment-based bioambient calculus, the rule-based kappa calculus and the domain-specific DNA strand displacement calculus. We present a generic method for proving that the encoding of an arbitrary process calculus into the abstract machine is correct, and we use this method to prove the correctness of all four calculus encodings. Finally, we demonstrate how the generic abstract machine can be used to simulate heterogeneous models in which discrete communicating sub-models are written using different domain-specific languages and then simulated together. Our approach forms the basis of a multi-language environment for the simulation of heterogeneous biological models."

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
