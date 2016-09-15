// Compiled by ClojureScript 1.7.170 {}
goog.provide('alandipert.kahn');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Returns set s with x removed.
 */
alandipert.kahn.without = (function alandipert$kahn$without(s,x){
return clojure.set.difference.call(null,s,cljs.core.PersistentHashSet.fromArray([x], true));
});
/**
 * Returns the pair [element, s'] where s' is set s with element removed.
 */
alandipert.kahn.take_1 = (function alandipert$kahn$take_1(s){
if(!(cljs.core.empty_QMARK_.call(null,s))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"s","s",-948495851,null)))))].join('')));
}

var item = cljs.core.first.call(null,s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,alandipert.kahn.without.call(null,s,item)], null);
});
/**
 * Returns the set of nodes in graph g for which there are no incoming
 *   edges, where g is a map of nodes to sets of nodes.
 */
alandipert.kahn.no_incoming = (function alandipert$kahn$no_incoming(g){
var nodes = cljs.core.set.call(null,cljs.core.keys.call(null,g));
var have_incoming = cljs.core.apply.call(null,clojure.set.union,cljs.core.vals.call(null,g));
return clojure.set.difference.call(null,nodes,have_incoming);
});
/**
 * Returns g with empty outgoing edges added for nodes with incoming
 *   edges only.  Example: {:a #{:b}} => {:a #{:b}, :b #{}}
 */
alandipert.kahn.normalize = (function alandipert$kahn$normalize(g){
var have_incoming = cljs.core.apply.call(null,clojure.set.union,cljs.core.vals.call(null,g));
return cljs.core.reduce.call(null,((function (have_incoming){
return (function (p1__17984_SHARP_,p2__17985_SHARP_){
if(cljs.core.truth_(cljs.core.get.call(null,p1__17984_SHARP_,p2__17985_SHARP_))){
return p1__17984_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17984_SHARP_,p2__17985_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}
});})(have_incoming))
,g,have_incoming);
});
/**
 * Proposes a topological sort for directed graph g using Kahn's
 * algorithm, where g is a map of nodes to sets of nodes. If g is
 * cyclic, returns nil.
 */
alandipert.kahn.kahn_sort = (function alandipert$kahn$kahn_sort(var_args){
var args17988 = [];
var len__17863__auto___17992 = arguments.length;
var i__17864__auto___17993 = (0);
while(true){
if((i__17864__auto___17993 < len__17863__auto___17992)){
args17988.push((arguments[i__17864__auto___17993]));

var G__17994 = (i__17864__auto___17993 + (1));
i__17864__auto___17993 = G__17994;
continue;
} else {
}
break;
}

var G__17990 = args17988.length;
switch (G__17990) {
case 1:
return alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17988.length)].join('')));

}
});

alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$1 = (function (g){
return alandipert.kahn.kahn_sort.call(null,alandipert.kahn.normalize.call(null,g),cljs.core.PersistentVector.EMPTY,alandipert.kahn.no_incoming.call(null,g));
});

alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$3 = (function (g,l,s){
while(true){
if(cljs.core.empty_QMARK_.call(null,s)){
if(cljs.core.every_QMARK_.call(null,cljs.core.empty_QMARK_,cljs.core.vals.call(null,g))){
return l;
} else {
return null;
}
} else {
var vec__17991 = alandipert.kahn.take_1.call(null,s);
var n = cljs.core.nth.call(null,vec__17991,(0),null);
var s_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__17991,(1),null);
var m = g.call(null,n);
var g_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (g,l,s,vec__17991,n,s_SINGLEQUOTE_,m){
return (function (p1__17986_SHARP_,p2__17987_SHARP_){
return cljs.core.update_in.call(null,p1__17986_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),alandipert.kahn.without,p2__17987_SHARP_);
});})(g,l,s,vec__17991,n,s_SINGLEQUOTE_,m))
,g,m);
var G__17996 = g_SINGLEQUOTE_;
var G__17997 = cljs.core.conj.call(null,l,n);
var G__17998 = clojure.set.union.call(null,s_SINGLEQUOTE_,clojure.set.intersection.call(null,alandipert.kahn.no_incoming.call(null,g_SINGLEQUOTE_),m));
g = G__17996;
l = G__17997;
s = G__17998;
continue;
}
break;
}
});

alandipert.kahn.kahn_sort.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=kahn.js.map?rel=1457129828617