// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.level0');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.figures');
goog.require('climbr.utils.utils');
climbr.figures.level0.level = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(400),new cljs.core.Keyword(null,"standable","standable",492063634),true,new cljs.core.Keyword(null,"holdable","holdable",1363007938),true], null));
var b3 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"holdable","holdable",1363007938),true], null));
var b4 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"standable","standable",492063634),true], null));
climbr.matter.matter.data_BANG_.call(null,"name","4",b1);

climbr.matter.matter.data_BANG_.call(null,"name","2",b3);

climbr.matter.matter.data_BANG_.call(null,"name","1",b4);

climbr.matter.matter.composite.add(boulders,b1);

climbr.matter.matter.composite.add(boulders,b3);

climbr.matter.matter.composite.add(boulders,b4);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"composite","composite",-257118970),boulders,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b3,b4], null)], null);
})();

//# sourceMappingURL=level0.js.map?rel=1482099879658