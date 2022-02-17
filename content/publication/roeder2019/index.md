---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Efficient Amortised Bayesian Inference for Hierarchical and Nonlinear Dynamical Systems"
subtitle: ""
summary: " "
authors:

- Geoffrey Roeder
- Paul K. Grant
- Andrew Phillips 
- Neil Dalchau
- Edward Meeds

tags: [Genetic Circuits, Machine Learning]
categories: []
date: 2019-06-11T00:00:00Z
publishDate: 2019-06-11T00:00:00Z
url_pdf: http://proceedings.mlr.press/v97/meeds19a.html
featured: false
draft: false
publication_types: ["1"]
publication: International Conference on Machine Learning (ICML)

abstract: "We introduce a flexible, scalable Bayesian inference framework for nonlinear dynamical systems characterised by distinct and hierarchical variability at the individual, group, and population levels. Our model class is a generalisation of nonlinear mixed-effects (NLME) dynamical systems, the statistical workhorse for many experimental sciences. We cast parameter inference as stochastic optimisation of an end-to-end differentiable, block-conditional variational autoencoder. We specify the dynamics of the data-generating process as an ordinary differential equation (ODE) such that both the ODE and its solver are fully differentiable. This model class is highly flexible: the ODE right-hand sides can be a mixture of user-prescribed or \"white-box\" sub-components and neural network or \"black-box\" sub-components. Using stochastic optimisation, our amortised inference algorithm could seamlessly scale up to massive data collection pipelines (common in labs with robotic automation). Finally, our framework supports interpretability with respect to the underlying dynamics, as well as predictive generalization to unseen combinations of group components (also called \"zero-shot\" learning). We empirically validate our method by predicting the dynamic behaviour of bacteria that were genetically engineered to function as biosensors."

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
