---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Probabilistic Analysis of Localized DNA Hybridization Circuits"
subtitle: ""
summary: " "
authors:

- Neil Dalchau
- Harish Chandran
- Nikhil Gopalkrishnan
- Andrew Phillips
- John Reif

tags: [Molecular Circuits]
categories: []
date: 2015-08-21T00:00:00Z
publishDate: 2015-08-21T00:00:00Z
url_pdf: http://pubs.acs.org/doi/abs/10.1021/acssynbio.5b00044
featured: false
draft: false
publication_types: ["2"]
publication: "ACS Synthetic Biology"

abstract: "Molecular devices made of nucleic acids can perform complex information processing tasks at the nanoscale, with potential applications in biofabrication and smart therapeutics. However, limitations in the speed and scalability of such devices in a well-mixed setting can significantly affect their performance. In this article, we propose designs for localized circuits involving DNA molecules that are arranged on addressable substrates and interact via hybridization reactions. We propose designs for localized elementary logic circuits, which we compose to produce more complex devices, including a circuit for computing the square root of a four bit number. We develop an efficient method for probabilistic model checking of localized circuits, which we implement within the Visual DSD design tool. We use this method to prove the correctness of our circuits with respect to their functional specifications and to analyze their performance over a broad range of local rate parameters. Specifically, we analyze the extent to which our localized designs can overcome the limitations of well-mixed circuits, with respect to speed and scalability. To provide an estimate of local rate parameters, we propose a biophysical model of localized hybridization. Finally, we use our analysis to identify constraints in the rate parameters that enable localized circuits to retain their advantages in the presence of unintended interferences between strands."

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
