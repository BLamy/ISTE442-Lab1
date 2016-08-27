# Lab 1
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Lab 1](#lab-1)
	- [Hosted Web:](#hosted-web)
	- [Browser Support:](#browser-support)
	- [Build Instructions](#build-instructions)
		- [Run With node6 and NPM (recommended)](#run-with-node6-and-npm-recommended)
		- [Run Web with python (Without NPM):](#run-web-with-python-without-npm)
	- [Run Web using NPM](#run-web-using-npm)

<!-- /TOC -->
## Hosted:
`http://people.rit.edu/~bel9708/appDev/lab1/index.html`

## Browser Support:
Limiting Factors
- [Generator Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) - Nothing below IE Edge 13
- [Fetch](http://caniuse.com/#feat=fetch) No Safari

Support could be backported using [regenerator](https://facebook.github.io/regenerator/) and [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)

## Build Instructions
### Run With node6 and NPM (recommended)
*run.sh require npm ^3.0.0 &  node ^6.0.0*
```
git clone https://github.com/BLamy/ISTE442-Lab1.git
cd lab1
sh ./run.sh
```
### Run Web with python (Without NPM):
**http://localhost:8081**
```
python -m SimpleHTTPServer 8081
```

## Run with node
```
npm install
npm run serve
```
