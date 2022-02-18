---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Computational modeling of the EGFR network elucidates control mechanisms regulating signal dynamics"
subtitle: ""
summary: " "
authors:

- Dennis YQ Wang
- Luca Cardelli
- Andrew Phillips
- Nir Piterman
- Jasmin Fisher

tags: [Pi-calculus]
categories: []
date: 2009-12-22T00:00:00Z
publishDate: 2009-12-22T00:00:00Z
url_pdf: https://bmcsystbiol.biomedcentral.com/articles/10.1186/1752-0509-3-118
featured: false
draft: false
publication_types: ["2"]
publication: "BMC Systems Biology"

abstract: "BACKGROUND: The epidermal growth factor receptor (EGFR) signaling pathway plays a key role in regulation of cellular growth and development. While highly studied, it is still not fully understood how the signal is orchestrated. One of the reasons for the complexity of this pathway is the extensive network of inter-connected components involved in the signaling. In the aim of identifying critical mechanisms controlling signal transduction we have performed extensive analysis of an executable model of the EGFR pathway using the stochastic pi-calculus as a modeling language. RESULTS: Our analysis, done through simulation of various perturbations, suggests that the EGFR pathway contains regions of functional redundancy in the upstream parts; in the event of low EGF stimulus or partial system failure, this redundancy helps to maintain functional robustness. Downstream parts, like the parts controlling Ras and ERK, have fewer redundancies, and more than 50% inhibition of specific reactions in those parts greatly attenuates signal response. In addition, we suggest an abstract model that captures the main control mechanisms in the pathway. Simulation of this abstract model suggests that without redundancies in the upstream modules, signal transduction through the entire pathway could be attenuated. In terms of specific control mechanisms, we have identified positive feedback loops whose role is to prolong the active state of key components (e.g., MEK-PP, Ras-GTP), and negative feedback loops that help promote signal adaptation and stabilization. CONCLUSIONS: The insights gained from simulating this executable model facilitate the formulation of specific hypotheses regarding the control mechanisms of the EGFR signaling, and further substantiate the benefit to construct abstract executable models of large complex biological networks."

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
