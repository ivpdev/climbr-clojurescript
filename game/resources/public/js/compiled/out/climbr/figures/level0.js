// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.level0');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.utils.utils');
climbr.figures.level0.create_boulder = (function climbr$figures$level0$create_boulder(x,y,opts){
var standable_QMARK_ = climbr.utils.utils.not_nil_QMARK_.call(null,new cljs.core.Keyword(null,"standable","standable",492063634).cljs$core$IFn$_invoke$arity$1(opts));
var boulder = climbr.matter.matter.bodies.rectangle(x,y,(20),(20),({"isStatic": true, "collisionFilter": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),"red"], null)}));
climbr.matter.matter.data_BANG_.call(null,"standable",true,boulder);

return boulder;
});
climbr.figures.level0.level = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.figures.level0.create_boulder.call(null,(300),(400),null);
var b3 = climbr.figures.level0.create_boulder.call(null,(100),(200),null);
var b4 = climbr.figures.level0.create_boulder.call(null,(400),(200),null);
climbr.matter.matter.data_BANG_.call(null,"name","4",b1);

climbr.matter.matter.data_BANG_.call(null,"name","2",b3);

climbr.matter.matter.data_BANG_.call(null,"name","1",b4);

climbr.matter.matter.composite.add(boulders,b1);

climbr.matter.matter.composite.add(boulders,b3);

climbr.matter.matter.composite.add(boulders,b4);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"composite","composite",-257118970),boulders,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b3,b4], null)], null);
})();

//# sourceMappingURL=level0.js.map?rel=1481836785627