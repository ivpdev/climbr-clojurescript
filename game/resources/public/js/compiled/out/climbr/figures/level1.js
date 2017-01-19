// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.figures.level1');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
climbr.figures.level1.create_boulder = (function climbr$figures$level1$create_boulder(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20385 = arguments.length;
var i__19865__auto___20386 = (0);
while(true){
if((i__19865__auto___20386 < len__19864__auto___20385)){
args__19871__auto__.push((arguments[i__19865__auto___20386]));

var G__20387 = (i__19865__auto___20386 + (1));
i__19865__auto___20386 = G__20387;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((2) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((2)),(0),null)):null);
return climbr.figures.level1.create_boulder.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19872__auto__);
});

climbr.figures.level1.create_boulder.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__20381){
var vec__20382 = p__20381;
var width = cljs.core.nth.call(null,vec__20382,(0),null);
var heights = cljs.core.nth.call(null,vec__20382,(1),null);
var boulder = climbr.matter.matter.bodies.rectangle(x,y,(20),(20),({"isStatic": true, "collisionFilter": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),"red"], null)}));
climbr.matter.matter.data_BANG_.call(null,"class","boulder",boulder);

return boulder;
});

climbr.figures.level1.create_boulder.cljs$lang$maxFixedArity = (2);

climbr.figures.level1.create_boulder.cljs$lang$applyTo = (function (seq20378){
var G__20379 = cljs.core.first.call(null,seq20378);
var seq20378__$1 = cljs.core.next.call(null,seq20378);
var G__20380 = cljs.core.first.call(null,seq20378__$1);
var seq20378__$2 = cljs.core.next.call(null,seq20378__$1);
return climbr.figures.level1.create_boulder.cljs$core$IFn$_invoke$arity$variadic(G__20379,G__20380,seq20378__$2);
});

climbr.figures.level1.level = (function (){var boulders = climbr.matter.matter.composite.create();
var b1 = climbr.figures.level1.create_boulder.call(null,(300),(350));
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

//# sourceMappingURL=level1.js.map?rel=1484862754483