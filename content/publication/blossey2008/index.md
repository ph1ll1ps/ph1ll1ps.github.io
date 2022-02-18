---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Compositionality, stochasticity, and cooperativity in dynamic models of gene regulation"
subtitle: ""
summary: " "
authors:

- Ralf Blossey
- Luca Cardelli
- Andrew Phillips

tags: [Pi-calculus]
categories: []
date: 2008-02-01T00:00:00Z
publishDate: 2008-02-01T00:00:00Z
url_pdf: http://www.tandfonline.com/doi/abs/10.2976/1.2804749
featured: false
draft: false
publication_types: ["2"]
publication: "HFSP Journal"

abstract: "We present an approach for constructing dynamic models for the simulation of gene regulatory networks from simple computational elements. Each element is called a \"gene gate\" and defines an inputoutput relationship corresponding to the binding and production of transcription factors. The proposed reaction kinetics of the gene gates can be mapped onto stochastic processes and the standard ordinary differential equation (ODE) description. While the ODE approach requires fixing the system's topology before its correct implementation, expressing them in stochastic pi-calculus leads to a fully compositional scheme: network elements become autonomous and only the inputoutput relationships fix their wiring. The modularity of our approach allows to pass easily from a basic first-level description to refined models which capture more details of the biological system. As an illustrative application we present the stochastic repressilator, an artificial cellular clock, which oscillates readily without any cooperative effects."

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
