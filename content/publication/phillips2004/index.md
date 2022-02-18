---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "A Distributed Abstract Machine for Boxed Ambient Calculi"
subtitle: ""
summary: " "
authors:

- Andrew Phillips
- Nobuko Yoshida
- Susan Eisenbach

tags: [Pi-calculus]
categories: []
date: 2004-03-29T00:00:00Z
publishDate: 2004-03-29T00:00:00Z
url_pdf: http://link.springer.com/10.1007/978-3-540-24725-8_12
featured: false
draft: false
publication_types: ["1"]
publication: "European Symposium on Programming (ESOP)"

abstract: "Boxed ambient calculi have been used to model and reason about a wide variety of problems in mobile computing. Recently, several new variants of Boxed Ambients have been proposed, which seek to improve on the original calculus. In spite of these theoretical advances, there has been little research on how such calculi can be correctly implemented in a distributed environment. This paper bridges a gap between theory and implementation by defining a distributed abstract machine for a variant of Boxed Ambients with channels. The abstract machine uses a list semantics, which is close to an implementation language, and a blocking semantics, which leads to an efficient implementation. The machine is proved sound and complete with respect to the underlying calculus. A prototype implementation is also described, together with an application for tracking the location of migrating ambients. The correctness of the machine ensures that the work done in specifying and analysing mobile applications is not lost during their implementation."

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
