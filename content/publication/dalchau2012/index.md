---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Towards the rational design of synthetic cells with prescribed population dynamics"
subtitle: ""
summary: " "
authors:

- Neil Dalchau
- Matthew J Smith
- Samuel Martin
- James R Brown
- Stephen Emmott
- Andrew Phillips

tags: [Genetic Circuits]
categories: []
date: 2012-11-07T00:00:00Z
publishDate: 2012-11-07T00:00:00Z
url_pdf: https://royalsocietypublishing.org/doi/10.1098/rsif.2012.0280
featured: false
draft: false
publication_types: ["2"]
publication: "Journal of The Royal Society Interface"

abstract: "The rational design of synthetic cell populations with prescribed behaviours is a long-standing goal of synthetic biology, with the potential to greatly accelerate the development of biotechnological applications in areas ranging from medical research to energy production. Achieving this goal requires well-characterized components, modular implementation strategies, simulation across temporal and spatial scales and automatic compilation of high-level designs to low-level genetic parts that function reliably inside cells. Many of these steps are incomplete or only partially understood, and methods for integrating them within a common design framework have yet to be developed. Here, we address these challenges by developing a prototype framework for designing synthetic cells with prescribed population dynamics. We extend the genetic engineering of cells (GEC) language, originally developed for programming intracellular dynamics, with cell population factors such as cell growth, division and dormancy, together with spatio-temporal simulation methods. As a case study, we use our framework to design synthetic cells with predator–prey interactions that, when simulated, produce complex spatio-temporal behaviours such as travelling waves and spatio-temporal chaos. An analysis of our design reveals that environmental factors such as density-dependent dormancy and reduced extracellular space destabilize the population dynamics and increase the range of genetic variants for which complex spatio-temporal behaviours are possible. Our findings highlight the importance of considering such factors during the design process. We then use our analysis of population dynamics to inform the selection of genetic parts, which could be used to obtain the desired spatio-temporal behaviours. By identifying, integrating and automating key stages of the design process, we provide a computational framework for designing synthetic systems, which could be tested in future laboratory studies."

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
projects: [visualgec]
---
