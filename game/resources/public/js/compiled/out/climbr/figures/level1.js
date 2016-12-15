// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.level1');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
climbr.figures.level1.create_boulder = (function climbr$figures$level1$create_boulder(x,y,with$,heights){
var boulder = climbr.matter.matter.bodies.rectangle(x,y,(20),(20),({"isStatic": true, "collisionFilter": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),"red"], null)}));
climbr.matter.matter.data_BANG_.call(null,"class","boulder",boulder);

return boulder;
});
climbr.figures.level1.level = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.figures.level1.create_boulder.call(null,(300),(400));
var b2 = climbr.figures.level1.create_boulder.call(null,(500),(400));
var b3 = climbr.figures.level1.create_boulder.call(null,(100),(200));
var b4 = climbr.figures.level1.create_boulder.call(null,(400),(200));
climbr.matter.matter.data_BANG_.call(null,"name","4",b1);

climbr.matter.matter.data_BANG_.call(null,"name","3",b2);

climbr.matter.matter.data_BANG_.call(null,"name","2",b3);

climbr.matter.matter.data_BANG_.call(null,"name","1",b4);

climbr.matter.matter.composite.add(boulders,b1);

climbr.matter.matter.composite.add(boulders,b2);

climbr.matter.matter.composite.add(boulders,b3);

climbr.matter.matter.composite.add(boulders,b4);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"composite","composite",-257118970),boulders,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,b3,b4], null)], null);
})();

//# sourceMappingURL=level1.js.map?rel=1481836785610