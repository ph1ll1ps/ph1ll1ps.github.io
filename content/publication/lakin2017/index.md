---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Automated, Constraint-Based Analysis of Tethered DNA Nanostructures"
subtitle: ""
summary: " "
authors:

- Matthew R Lakin
- Andrew Phillips

tags: [Molecular Circuits]
categories: []
date: 2017-08-21T00:00:00Z
publishDate: 2017-08-21T00:00:00Z
url_pdf: http://link.springer.com/10.1007/978-3-319-66799-7_1
featured: false
draft: false
publication_types: ["1"]
publication: "DNA Computing and Molecular Programming (DNA)"

abstract: "Implementing DNA computing circuits using components tethered to a surface offers several advantages over using components that freely diffuse in bulk solution. However, automated computational modeling of tethered circuits is far more challenging than for solution-phase circuits, because molecular geometry must be taken into account when deciding whether two tethered species may interact. Here, we tackle this issue by translating a tethered molecular circuit into a constraint problem that encodes the possible physical configurations of the components, using a simple biophysical model. We use a satisfaction modulo theories (SMT) solver to determine whether the constraint problem associated with a given structure is satisfiable, which corresponds to whether that structure is physically realizable given the constraints imposed by the tether geometry. We apply this technique to example structures from the literature, and discuss how this approach could be integrated with a reaction enumerator to enable fully automated analysis of tethered molecular computing systems."

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
