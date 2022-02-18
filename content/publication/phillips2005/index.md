---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Specifying and Implementing Secure Mobile Applications in the Channel Ambient System"
subtitle: ""
summary: " "
authors:

- Andrew Phillips

tags: []
categories: []
date: 2005-10-01T00:00:00Z
publishDate: 2005-10-01T00:00:00Z
url_pdf: "files/Thesis.pdf"
featured: false
draft: false
publication_types: ["7"]
publication: "PhD Thesis"

abstract: "The Internet has grown substantially in recent years, and an increasing number of applications are now being developed to exploit this distributed infrastructure. Mobility is an important paradigm for such applications, where mobile code is supplied on demand and mobile components interact freely within a given network. However, mobile applications are difficult to develop: not only do they involve complex parallel interactions between multiple components, but they must also satisfy strict security requirements. One could argue that the development of such applications requires a rigorous means of describing and reasoning about mobile computation, through the use of an appropriate model. 

Foundational research by Cardelli and Gordon on the Ambient Calculus has shown that process calculi are a promising approach to modelling mobile computation. This thesis builds on more recent research in the field of process calculi, and presents a new model of computation known as the Channel Ambient calculus, which can be used both to specify mobile applications and to reason about their security properties. The primitives of the model were developed with real-world applications in mind, and are designed to be at a level of abstraction suitable for an application programmer. 

The thesis also bridges a gap between theory and implementation by defining a distributed abstract machine for the Channel Ambient calculus. The abstract machine uses a list semantics, which is close to an implementation language, and a blocking semantics, which leads to an efficient implementation. The machine is proved sound and complete with respect to the underlying calculus. A prototype implementation is also described, together with an application for tracking the location of migrating ambients. The correctness of the machine ensures that the work done in specifying and analysing mobile applications is not lost during their implementation."

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
projects: []
---
