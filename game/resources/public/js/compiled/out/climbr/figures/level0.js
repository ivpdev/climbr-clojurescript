// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.level0');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.figures.figures');
goog.require('climbr.utils.utils');
climbr.figures.level0.level = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(350),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"standable","standable",492063634),true,new cljs.core.Keyword(null,"hookable","hookable",2044539136),true], null));
var b2 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(350),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"hookable","hookable",2044539136),true], null));
var b21 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(350),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(30),new cljs.core.Keyword(null,"hookable","hookable",2044539136),true], null));
var b3 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"hookable","hookable",2044539136),true], null));
var b4 = climbr.figures.figures.create_boulder.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(200),new cljs.core.Keyword(null,"height","height",1025178622),(20),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"standable","standable",492063634),true], null));
climbr.matter.matter.data_BANG_.call(null,"name","4",b1);

climbr.matter.matter.data_BANG_.call(null,"name","3",b2);

climbr.matter.matter.data_BANG_.call(null,"name","31",b21);

climbr.matter.matter.data_BANG_.call(null,"name","2",b3);

climbr.matter.matter.data_BANG_.call(null,"name","1",b4);

climbr.matter.matter.composite.add(boulders,b1);

climbr.matter.matter.composite.add(boulders,b2);

climbr.matter.matter.composite.add(boulders,b21);

climbr.matter.matter.composite.add(boulders,b3);

climbr.matter.matter.composite.add(boulders,b4);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"composite","composite",-257118970),boulders,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,b21,b3,b4], null)], null);
})();

//# sourceMappingURL=level0.js.map?rel=1487058559585