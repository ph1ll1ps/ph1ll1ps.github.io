---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A Chart Semantics for the Pi-Calculus"
subtitle: ""
summary: " "
authors:

- Johannes Borgström
- Andrew D Gordon
- Andrew Phillips

tags: [Pi-calculus]
categories: []
date: 2008-01-16T00:00:00Z
publishDate: 2008-01-16T00:00:00Z
url_pdf: https://www.sciencedirect.com/science/article/pii/S1571066108000030
featured: false
draft: false
publication_types: ["2"]
publication: "Electronic Notes in Theoretical Computer Science"

abstract: "We present a graphical semantics for the pi-calculus, that is easier to visualize and better suited to expressing causality and temporal properties than conventional relational semantics. A pi-chart is a finite directed acyclic graph recording a computation in the pi-calculus. Each node represents a process, and each edge either represents a computation step, or a message-passing interaction. Pi-charts enjoy a natural pictorial representation, akin to message sequence charts, in which vertical edges represent control flow and horizontal edges represent data flow based on message passing. A pi-chart represents a single computation starting from its top (the nodes with no ancestors) to its bottom (the nodes with no descendants). Unlike conventional reductions or transitions, the edges in a pi-chart induce ancestry and other causal relations on processes. We give both compositional and operational definitions of pi-charts, and illustrate the additional expressivity afforded by the chart semantics via a series of examples."

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
