// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.utils.macro_draft');
goog.require('cljs.core');
cljs.core.println.call(null,climbr.utils.macro_draft.a_PLUS_b);
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.utils.macro_draft.bindings], null);
climbr.utils.macro_draft.compute = (function climbr$utils$macro_draft$compute(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20590 = arguments.length;
var i__17864__auto___20591 = (0);
while(true){
if((i__17864__auto___20591 < len__17863__auto___20590)){
args__17870__auto__.push((arguments[i__17864__auto___20591]));

var G__20592 = (i__17864__auto___20591 + (1));
i__17864__auto___20591 = G__20592;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((4) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((4)),(0))):null);
return climbr.utils.macro_draft.compute.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__17871__auto__);
});

climbr.utils.macro_draft.compute.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,arg,_,bindings){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),bindings,cljs.core._conj.call(null,cljs.core.List.EMPTY,arg))));
});

climbr.utils.macro_draft.compute.cljs$lang$maxFixedArity = (4);

climbr.utils.macro_draft.compute.cljs$lang$applyTo = (function (seq20585){
var G__20586 = cljs.core.first.call(null,seq20585);
var seq20585__$1 = cljs.core.next.call(null,seq20585);
var G__20587 = cljs.core.first.call(null,seq20585__$1);
var seq20585__$2 = cljs.core.next.call(null,seq20585__$1);
var G__20588 = cljs.core.first.call(null,seq20585__$2);
var seq20585__$3 = cljs.core.next.call(null,seq20585__$2);
var G__20589 = cljs.core.first.call(null,seq20585__$3);
var seq20585__$4 = cljs.core.next.call(null,seq20585__$3);
return climbr.utils.macro_draft.compute.cljs$core$IFn$_invoke$arity$variadic(G__20586,G__20587,G__20588,G__20589,seq20585__$4);
});

climbr.utils.macro_draft.compute.cljs$lang$macro = true;

//# sourceMappingURL=macro_draft.js.map?rel=1476484757753