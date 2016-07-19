// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.figures.boulder');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
climbr.figures.boulder.boulders = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.matter.matter.bodies.rectangle((400),(400),(60),(60),{"isStatic": true});
var b2 = climbr.matter.matter.bodies.rectangle((400),(200),(60),(60),{"isStatic": true});
utils.debug.call(null,climbr.figures.boulder.left_hand);

climbr.matter.matter.composite.add(boulders,b1);

climbr.matter.matter.composite.add(boulders,b2);

return boulders;
})();

//# sourceMappingURL=boulder.js.map?rel=1457384755775