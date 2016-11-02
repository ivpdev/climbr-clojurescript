// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.figures.boulders');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
climbr.figures.boulders.create_boulder = (function climbr$figures$boulders$create_boulder(x,y,with$,heights){
var boulder = climbr.matter.matter.bodies.rectangle(x,y,(20),(20),{"isStatic": true, "collisionFilter": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),"red"], null)});
climbr.matter.matter.data_BANG_.call(null,"class","boulder",boulder);

return boulder;
});
climbr.figures.boulders.boulders = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.figures.boulders.create_boulder.call(null,(300),(400));
var b2 = climbr.figures.boulders.create_boulder.call(null,(500),(400));
var b3 = climbr.figures.boulders.create_boulder.call(null,(100),(200));
var b4 = climbr.figures.boulders.create_boulder.call(null,(400),(200));
climbr.matter.matter.data_BANG_.call(null,"class","boulder",b1);

climbr.matter.matter.data_BANG_.call(null,"class","boulder",b2);

climbr.matter.matter.data_BANG_.call(null,"class","boulder",b3);

climbr.matter.matter.data_BANG_.call(null,"class","boulder",b4);

climbr.matter.matter.data_BANG_.call(null,"name","4",b1);

climbr.matter.matter.data_BANG_.call(null,"name","3",b2);

climbr.matter.matter.data_BANG_.call(null,"name","2",b3);

climbr.matter.matter.data_BANG_.call(null,"name","1",b4);

climbr.matter.matter.composite.add(boulders,b1);

climbr.matter.matter.composite.add(boulders,b2);

climbr.matter.matter.composite.add(boulders,b3);

climbr.matter.matter.composite.add(boulders,b4);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"whole","whole",-1395468966),boulders,new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,b3,b4], null)], null);
})();

//# sourceMappingURL=boulders.js.map?rel=1478008461807