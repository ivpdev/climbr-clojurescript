// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.figures.boulders');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
climbr.figures.boulders.boulders = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.matter.matter.bodies.rectangle((300),(400),(20),(20),{"isStatic": true});
var b2 = climbr.matter.matter.bodies.rectangle((500),(400),(20),(20),{"isStatic": true});
var b3 = climbr.matter.matter.bodies.rectangle((100),(200),(20),(20),{"isStatic": true});
var b4 = climbr.matter.matter.bodies.rectangle((400),(200),(20),(20),{"isStatic": true});
climbr.matter.matter.data_BANG_.call(null,"class","boulder",b1);

climbr.matter.matter.data_BANG_.call(null,"class","boulder",b2);

climbr.matter.matter.data_BANG_.call(null,"class","boulder",b3);

climbr.matter.matter.data_BANG_.call(null,"class","boulder",b4);

climbr.matter.matter.composite.add(boulders,b1);

climbr.matter.matter.composite.add(boulders,b2);

climbr.matter.matter.composite.add(boulders,b3);

climbr.matter.matter.composite.add(boulders,b4);

return boulders;
})();

//# sourceMappingURL=boulders.js.map?rel=1460579060502