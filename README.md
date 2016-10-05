

# DockerFinder

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE 
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Thesis](#What is Docker Finder ?)
  - [regex](#regex)
- [PyFinder](#pyfinder)
- [ServerApi](#serverapi)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
**Enhanced discovery of Docker
images**  is the title of the thesis submitted for the degree of
MSc in Computer Science and Networking
University of Pisa and SSSUP Sant’Anna. a.a. 2015/2016


## What is Docker Finder ?
Docker Finder is a tool enabling a more powerful search of Docker images with
respect to the tools currently provided by the Docker platform (**docker search**, **Docker Hub**).


## Docker Finder steps
The main steps performed by Docker Finder are the following:

1. *Download* Docker images from a Docker registry (e.g. Docker Hub),
2. *generate* a descriptions of the images into a local storage,
and
3. users can search the images via APIs and a GUI.

<div align="center">
<img src="./docs/df_discovery.png" width="500">
</div>


## GUI of Docker Finder
The GUI of Docker Finder.
<div  align="center">
<img src="./docs/df_gif.gif" width="500">
</div>



## Docker Finder-in-Docker
The figure represents the architecture of Docker Finder deployed in the Docker platform. Each compoenet is shippend inside a Docker image.

<div align="center">
<img src="./docs/architecture_docker.png" width="500">
</div>
 
