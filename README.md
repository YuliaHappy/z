# JavaScript OOP & Design Patterns Practice

## Purpose

This practice covers the following:

1. *OOP* in *JS*.
2. *Design Patterns* in *JS*.
3. *ES6* features.
4. *BDD* with *Mocha* and *Chai*.
5. *NPM* infrastructure.

Also touches the following:

1. *LESS* CSS preprocessor.
2. *Jade* template engine.
3. *BEM* methodology.
4. *DOM* API.
5. *Canvas 2D* and optimized rendering.
6. *Touch* events API.

## Z

### Overview

This compound task has been conceived as play ground for design patterns practice.
The final decision should look like material points system simulator.
A lot of points bouncing and moving around through fancy paths ;)

### Tasks

0. Review already implemented modules to discover or repeat some ES6 basic theory.
1. Implement *dissipative-force* and *gravity-force*.
2. Implement points system *factory* (abstract factory pattern) to generate systems with different "configurations" (wheel, bridge, house, or any physical object you want).
3. Refactor *canvas-based-view* module to meet better architecture and implement missing parts. Try to use *BEM* methodology and *MVC* pattern.
4. Implement controller to move points by tapping and dragging them. Use *touch-utils* module.

Additional:

Extend controller's layer to control different physical parameters (gravity constant, dissipative constant, and so on).

### Steps

1. Fork this repository.
2. Checkout forked repository.
1. Install [Node.js](http://nodejs.org/).
2. Install project dependencies by `npm install`.
3. Run tests by `npm run test`.
4. Run project in development mode `npm run dev` and open *localhost:8080*.
5. Go to the *src* folder and implement tasks listed above.
6. As necessary part of implementation write tests inside *test* folder.
7. And don't forget to commit working decision ;)
