// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19362__auto__,writer__19363__auto__,opt__19364__auto__){
return cljs.core._write.call(null,writer__19363__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__19871__auto__ = [];
var len__19864__auto___19969 = arguments.length;
var i__19865__auto___19970 = (0);
while(true){
if((i__19865__auto___19970 < len__19864__auto___19969)){
args__19871__auto__.push((arguments[i__19865__auto___19970]));

var G__19971 = (i__19865__auto___19970 + (1));
i__19865__auto___19970 = G__19971;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq19968){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19968));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__19871__auto__ = [];
var len__19864__auto___19973 = arguments.length;
var i__19865__auto___19974 = (0);
while(true){
if((i__19865__auto___19974 < len__19864__auto___19973)){
args__19871__auto__.push((arguments[i__19865__auto___19974]));

var G__19975 = (i__19865__auto___19974 + (1));
i__19865__auto___19974 = G__19975;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq19972){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19972));
});

var g_QMARK__19976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_19977 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__19976){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__19976))
,null));
var mkg_19978 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__19976,g_19977){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__19976,g_19977))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__19976,g_19977,mkg_19978){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__19976).call(null,x);
});})(g_QMARK__19976,g_19977,mkg_19978))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__19976,g_19977,mkg_19978){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_19978).call(null,gfn);
});})(g_QMARK__19976,g_19977,mkg_19978))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__19976,g_19977,mkg_19978){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_19977).call(null,generator);
});})(g_QMARK__19976,g_19977,mkg_19978))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__19940__auto___19997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__19940__auto___19997){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19871__auto__ = [];
var len__19864__auto___19998 = arguments.length;
var i__19865__auto___19999 = (0);
while(true){
if((i__19865__auto___19999 < len__19864__auto___19998)){
args__19871__auto__.push((arguments[i__19865__auto___19999]));

var G__20000 = (i__19865__auto___19999 + (1));
i__19865__auto___19999 = G__20000;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___19997))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___19997){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___19997),args);
});})(g__19940__auto___19997))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__19940__auto___19997){
return (function (seq19979){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19979));
});})(g__19940__auto___19997))
;


var g__19940__auto___20001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__19940__auto___20001){
return (function cljs$spec$impl$gen$list(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20002 = arguments.length;
var i__19865__auto___20003 = (0);
while(true){
if((i__19865__auto___20003 < len__19864__auto___20002)){
args__19871__auto__.push((arguments[i__19865__auto___20003]));

var G__20004 = (i__19865__auto___20003 + (1));
i__19865__auto___20003 = G__20004;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20001))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20001){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20001),args);
});})(g__19940__auto___20001))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__19940__auto___20001){
return (function (seq19980){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19980));
});})(g__19940__auto___20001))
;


var g__19940__auto___20005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__19940__auto___20005){
return (function cljs$spec$impl$gen$map(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20006 = arguments.length;
var i__19865__auto___20007 = (0);
while(true){
if((i__19865__auto___20007 < len__19864__auto___20006)){
args__19871__auto__.push((arguments[i__19865__auto___20007]));

var G__20008 = (i__19865__auto___20007 + (1));
i__19865__auto___20007 = G__20008;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20005))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20005){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20005),args);
});})(g__19940__auto___20005))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__19940__auto___20005){
return (function (seq19981){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19981));
});})(g__19940__auto___20005))
;


var g__19940__auto___20009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__19940__auto___20009){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20010 = arguments.length;
var i__19865__auto___20011 = (0);
while(true){
if((i__19865__auto___20011 < len__19864__auto___20010)){
args__19871__auto__.push((arguments[i__19865__auto___20011]));

var G__20012 = (i__19865__auto___20011 + (1));
i__19865__auto___20011 = G__20012;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20009))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20009){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20009),args);
});})(g__19940__auto___20009))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__19940__auto___20009){
return (function (seq19982){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19982));
});})(g__19940__auto___20009))
;


var g__19940__auto___20013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__19940__auto___20013){
return (function cljs$spec$impl$gen$set(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20014 = arguments.length;
var i__19865__auto___20015 = (0);
while(true){
if((i__19865__auto___20015 < len__19864__auto___20014)){
args__19871__auto__.push((arguments[i__19865__auto___20015]));

var G__20016 = (i__19865__auto___20015 + (1));
i__19865__auto___20015 = G__20016;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20013))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20013){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20013),args);
});})(g__19940__auto___20013))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__19940__auto___20013){
return (function (seq19983){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19983));
});})(g__19940__auto___20013))
;


var g__19940__auto___20017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__19940__auto___20017){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20018 = arguments.length;
var i__19865__auto___20019 = (0);
while(true){
if((i__19865__auto___20019 < len__19864__auto___20018)){
args__19871__auto__.push((arguments[i__19865__auto___20019]));

var G__20020 = (i__19865__auto___20019 + (1));
i__19865__auto___20019 = G__20020;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20017))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20017){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20017),args);
});})(g__19940__auto___20017))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__19940__auto___20017){
return (function (seq19984){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19984));
});})(g__19940__auto___20017))
;


var g__19940__auto___20021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__19940__auto___20021){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20022 = arguments.length;
var i__19865__auto___20023 = (0);
while(true){
if((i__19865__auto___20023 < len__19864__auto___20022)){
args__19871__auto__.push((arguments[i__19865__auto___20023]));

var G__20024 = (i__19865__auto___20023 + (1));
i__19865__auto___20023 = G__20024;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20021))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20021){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20021),args);
});})(g__19940__auto___20021))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__19940__auto___20021){
return (function (seq19985){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19985));
});})(g__19940__auto___20021))
;


var g__19940__auto___20025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__19940__auto___20025){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20026 = arguments.length;
var i__19865__auto___20027 = (0);
while(true){
if((i__19865__auto___20027 < len__19864__auto___20026)){
args__19871__auto__.push((arguments[i__19865__auto___20027]));

var G__20028 = (i__19865__auto___20027 + (1));
i__19865__auto___20027 = G__20028;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20025))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20025){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20025),args);
});})(g__19940__auto___20025))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__19940__auto___20025){
return (function (seq19986){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19986));
});})(g__19940__auto___20025))
;


var g__19940__auto___20029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__19940__auto___20029){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20030 = arguments.length;
var i__19865__auto___20031 = (0);
while(true){
if((i__19865__auto___20031 < len__19864__auto___20030)){
args__19871__auto__.push((arguments[i__19865__auto___20031]));

var G__20032 = (i__19865__auto___20031 + (1));
i__19865__auto___20031 = G__20032;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20029))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20029),args);
});})(g__19940__auto___20029))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__19940__auto___20029){
return (function (seq19987){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19987));
});})(g__19940__auto___20029))
;


var g__19940__auto___20033 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__19940__auto___20033){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20034 = arguments.length;
var i__19865__auto___20035 = (0);
while(true){
if((i__19865__auto___20035 < len__19864__auto___20034)){
args__19871__auto__.push((arguments[i__19865__auto___20035]));

var G__20036 = (i__19865__auto___20035 + (1));
i__19865__auto___20035 = G__20036;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20033))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20033){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20033),args);
});})(g__19940__auto___20033))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__19940__auto___20033){
return (function (seq19988){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19988));
});})(g__19940__auto___20033))
;


var g__19940__auto___20037 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__19940__auto___20037){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20038 = arguments.length;
var i__19865__auto___20039 = (0);
while(true){
if((i__19865__auto___20039 < len__19864__auto___20038)){
args__19871__auto__.push((arguments[i__19865__auto___20039]));

var G__20040 = (i__19865__auto___20039 + (1));
i__19865__auto___20039 = G__20040;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20037))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20037){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20037),args);
});})(g__19940__auto___20037))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__19940__auto___20037){
return (function (seq19989){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19989));
});})(g__19940__auto___20037))
;


var g__19940__auto___20041 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__19940__auto___20041){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20042 = arguments.length;
var i__19865__auto___20043 = (0);
while(true){
if((i__19865__auto___20043 < len__19864__auto___20042)){
args__19871__auto__.push((arguments[i__19865__auto___20043]));

var G__20044 = (i__19865__auto___20043 + (1));
i__19865__auto___20043 = G__20044;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20041))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20041){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20041),args);
});})(g__19940__auto___20041))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__19940__auto___20041){
return (function (seq19990){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19990));
});})(g__19940__auto___20041))
;


var g__19940__auto___20045 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__19940__auto___20045){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20046 = arguments.length;
var i__19865__auto___20047 = (0);
while(true){
if((i__19865__auto___20047 < len__19864__auto___20046)){
args__19871__auto__.push((arguments[i__19865__auto___20047]));

var G__20048 = (i__19865__auto___20047 + (1));
i__19865__auto___20047 = G__20048;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20045))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20045){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20045),args);
});})(g__19940__auto___20045))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__19940__auto___20045){
return (function (seq19991){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19991));
});})(g__19940__auto___20045))
;


var g__19940__auto___20049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__19940__auto___20049){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20050 = arguments.length;
var i__19865__auto___20051 = (0);
while(true){
if((i__19865__auto___20051 < len__19864__auto___20050)){
args__19871__auto__.push((arguments[i__19865__auto___20051]));

var G__20052 = (i__19865__auto___20051 + (1));
i__19865__auto___20051 = G__20052;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20049))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20049),args);
});})(g__19940__auto___20049))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__19940__auto___20049){
return (function (seq19992){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19992));
});})(g__19940__auto___20049))
;


var g__19940__auto___20053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__19940__auto___20053){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20054 = arguments.length;
var i__19865__auto___20055 = (0);
while(true){
if((i__19865__auto___20055 < len__19864__auto___20054)){
args__19871__auto__.push((arguments[i__19865__auto___20055]));

var G__20056 = (i__19865__auto___20055 + (1));
i__19865__auto___20055 = G__20056;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20053))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20053),args);
});})(g__19940__auto___20053))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__19940__auto___20053){
return (function (seq19993){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19993));
});})(g__19940__auto___20053))
;


var g__19940__auto___20057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__19940__auto___20057){
return (function cljs$spec$impl$gen$return(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20058 = arguments.length;
var i__19865__auto___20059 = (0);
while(true){
if((i__19865__auto___20059 < len__19864__auto___20058)){
args__19871__auto__.push((arguments[i__19865__auto___20059]));

var G__20060 = (i__19865__auto___20059 + (1));
i__19865__auto___20059 = G__20060;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20057))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20057),args);
});})(g__19940__auto___20057))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__19940__auto___20057){
return (function (seq19994){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19994));
});})(g__19940__auto___20057))
;


var g__19940__auto___20061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__19940__auto___20061){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20062 = arguments.length;
var i__19865__auto___20063 = (0);
while(true){
if((i__19865__auto___20063 < len__19864__auto___20062)){
args__19871__auto__.push((arguments[i__19865__auto___20063]));

var G__20064 = (i__19865__auto___20063 + (1));
i__19865__auto___20063 = G__20064;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20061))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20061),args);
});})(g__19940__auto___20061))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__19940__auto___20061){
return (function (seq19995){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19995));
});})(g__19940__auto___20061))
;


var g__19940__auto___20065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__19940__auto___20065){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20066 = arguments.length;
var i__19865__auto___20067 = (0);
while(true){
if((i__19865__auto___20067 < len__19864__auto___20066)){
args__19871__auto__.push((arguments[i__19865__auto___20067]));

var G__20068 = (i__19865__auto___20067 + (1));
i__19865__auto___20067 = G__20068;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19940__auto___20065))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19940__auto___20065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__19940__auto___20065),args);
});})(g__19940__auto___20065))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__19940__auto___20065){
return (function (seq19996){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19996));
});})(g__19940__auto___20065))
;

var g__19953__auto___20090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__19953__auto___20090){
return (function cljs$spec$impl$gen$any(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20091 = arguments.length;
var i__19865__auto___20092 = (0);
while(true){
if((i__19865__auto___20092 < len__19864__auto___20091)){
args__19871__auto__.push((arguments[i__19865__auto___20092]));

var G__20093 = (i__19865__auto___20092 + (1));
i__19865__auto___20092 = G__20093;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20090))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20090){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20090);
});})(g__19953__auto___20090))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__19953__auto___20090){
return (function (seq20069){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20069));
});})(g__19953__auto___20090))
;


var g__19953__auto___20094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__19953__auto___20094){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20095 = arguments.length;
var i__19865__auto___20096 = (0);
while(true){
if((i__19865__auto___20096 < len__19864__auto___20095)){
args__19871__auto__.push((arguments[i__19865__auto___20096]));

var G__20097 = (i__19865__auto___20096 + (1));
i__19865__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20094))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20094){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20094);
});})(g__19953__auto___20094))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__19953__auto___20094){
return (function (seq20070){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20070));
});})(g__19953__auto___20094))
;


var g__19953__auto___20098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__19953__auto___20098){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20099 = arguments.length;
var i__19865__auto___20100 = (0);
while(true){
if((i__19865__auto___20100 < len__19864__auto___20099)){
args__19871__auto__.push((arguments[i__19865__auto___20100]));

var G__20101 = (i__19865__auto___20100 + (1));
i__19865__auto___20100 = G__20101;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20098))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20098){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20098);
});})(g__19953__auto___20098))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__19953__auto___20098){
return (function (seq20071){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20071));
});})(g__19953__auto___20098))
;


var g__19953__auto___20102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__19953__auto___20102){
return (function cljs$spec$impl$gen$char(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20103 = arguments.length;
var i__19865__auto___20104 = (0);
while(true){
if((i__19865__auto___20104 < len__19864__auto___20103)){
args__19871__auto__.push((arguments[i__19865__auto___20104]));

var G__20105 = (i__19865__auto___20104 + (1));
i__19865__auto___20104 = G__20105;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20102))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20102){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20102);
});})(g__19953__auto___20102))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__19953__auto___20102){
return (function (seq20072){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20072));
});})(g__19953__auto___20102))
;


var g__19953__auto___20106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__19953__auto___20106){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20107 = arguments.length;
var i__19865__auto___20108 = (0);
while(true){
if((i__19865__auto___20108 < len__19864__auto___20107)){
args__19871__auto__.push((arguments[i__19865__auto___20108]));

var G__20109 = (i__19865__auto___20108 + (1));
i__19865__auto___20108 = G__20109;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20106))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20106){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20106);
});})(g__19953__auto___20106))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__19953__auto___20106){
return (function (seq20073){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20073));
});})(g__19953__auto___20106))
;


var g__19953__auto___20110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__19953__auto___20110){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20111 = arguments.length;
var i__19865__auto___20112 = (0);
while(true){
if((i__19865__auto___20112 < len__19864__auto___20111)){
args__19871__auto__.push((arguments[i__19865__auto___20112]));

var G__20113 = (i__19865__auto___20112 + (1));
i__19865__auto___20112 = G__20113;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20110))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20110){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20110);
});})(g__19953__auto___20110))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__19953__auto___20110){
return (function (seq20074){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20074));
});})(g__19953__auto___20110))
;


var g__19953__auto___20114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__19953__auto___20114){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20115 = arguments.length;
var i__19865__auto___20116 = (0);
while(true){
if((i__19865__auto___20116 < len__19864__auto___20115)){
args__19871__auto__.push((arguments[i__19865__auto___20116]));

var G__20117 = (i__19865__auto___20116 + (1));
i__19865__auto___20116 = G__20117;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20114))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20114){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20114);
});})(g__19953__auto___20114))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__19953__auto___20114){
return (function (seq20075){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20075));
});})(g__19953__auto___20114))
;


var g__19953__auto___20118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__19953__auto___20118){
return (function cljs$spec$impl$gen$double(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20119 = arguments.length;
var i__19865__auto___20120 = (0);
while(true){
if((i__19865__auto___20120 < len__19864__auto___20119)){
args__19871__auto__.push((arguments[i__19865__auto___20120]));

var G__20121 = (i__19865__auto___20120 + (1));
i__19865__auto___20120 = G__20121;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20118))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20118){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20118);
});})(g__19953__auto___20118))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__19953__auto___20118){
return (function (seq20076){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20076));
});})(g__19953__auto___20118))
;


var g__19953__auto___20122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__19953__auto___20122){
return (function cljs$spec$impl$gen$int(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20123 = arguments.length;
var i__19865__auto___20124 = (0);
while(true){
if((i__19865__auto___20124 < len__19864__auto___20123)){
args__19871__auto__.push((arguments[i__19865__auto___20124]));

var G__20125 = (i__19865__auto___20124 + (1));
i__19865__auto___20124 = G__20125;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20122))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20122){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20122);
});})(g__19953__auto___20122))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__19953__auto___20122){
return (function (seq20077){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20077));
});})(g__19953__auto___20122))
;


var g__19953__auto___20126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__19953__auto___20126){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20127 = arguments.length;
var i__19865__auto___20128 = (0);
while(true){
if((i__19865__auto___20128 < len__19864__auto___20127)){
args__19871__auto__.push((arguments[i__19865__auto___20128]));

var G__20129 = (i__19865__auto___20128 + (1));
i__19865__auto___20128 = G__20129;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20126))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20126){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20126);
});})(g__19953__auto___20126))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__19953__auto___20126){
return (function (seq20078){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20078));
});})(g__19953__auto___20126))
;


var g__19953__auto___20130 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__19953__auto___20130){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20131 = arguments.length;
var i__19865__auto___20132 = (0);
while(true){
if((i__19865__auto___20132 < len__19864__auto___20131)){
args__19871__auto__.push((arguments[i__19865__auto___20132]));

var G__20133 = (i__19865__auto___20132 + (1));
i__19865__auto___20132 = G__20133;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20130))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20130){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20130);
});})(g__19953__auto___20130))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__19953__auto___20130){
return (function (seq20079){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20079));
});})(g__19953__auto___20130))
;


var g__19953__auto___20134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__19953__auto___20134){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20135 = arguments.length;
var i__19865__auto___20136 = (0);
while(true){
if((i__19865__auto___20136 < len__19864__auto___20135)){
args__19871__auto__.push((arguments[i__19865__auto___20136]));

var G__20137 = (i__19865__auto___20136 + (1));
i__19865__auto___20136 = G__20137;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20134))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20134){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20134);
});})(g__19953__auto___20134))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__19953__auto___20134){
return (function (seq20080){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20080));
});})(g__19953__auto___20134))
;


var g__19953__auto___20138 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__19953__auto___20138){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20139 = arguments.length;
var i__19865__auto___20140 = (0);
while(true){
if((i__19865__auto___20140 < len__19864__auto___20139)){
args__19871__auto__.push((arguments[i__19865__auto___20140]));

var G__20141 = (i__19865__auto___20140 + (1));
i__19865__auto___20140 = G__20141;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20138))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20138){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20138);
});})(g__19953__auto___20138))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__19953__auto___20138){
return (function (seq20081){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20081));
});})(g__19953__auto___20138))
;


var g__19953__auto___20142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__19953__auto___20142){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20143 = arguments.length;
var i__19865__auto___20144 = (0);
while(true){
if((i__19865__auto___20144 < len__19864__auto___20143)){
args__19871__auto__.push((arguments[i__19865__auto___20144]));

var G__20145 = (i__19865__auto___20144 + (1));
i__19865__auto___20144 = G__20145;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20142))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20142){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20142);
});})(g__19953__auto___20142))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__19953__auto___20142){
return (function (seq20082){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20082));
});})(g__19953__auto___20142))
;


var g__19953__auto___20146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__19953__auto___20146){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20147 = arguments.length;
var i__19865__auto___20148 = (0);
while(true){
if((i__19865__auto___20148 < len__19864__auto___20147)){
args__19871__auto__.push((arguments[i__19865__auto___20148]));

var G__20149 = (i__19865__auto___20148 + (1));
i__19865__auto___20148 = G__20149;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20146))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20146){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20146);
});})(g__19953__auto___20146))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__19953__auto___20146){
return (function (seq20083){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20083));
});})(g__19953__auto___20146))
;


var g__19953__auto___20150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__19953__auto___20150){
return (function cljs$spec$impl$gen$string(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20151 = arguments.length;
var i__19865__auto___20152 = (0);
while(true){
if((i__19865__auto___20152 < len__19864__auto___20151)){
args__19871__auto__.push((arguments[i__19865__auto___20152]));

var G__20153 = (i__19865__auto___20152 + (1));
i__19865__auto___20152 = G__20153;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20150))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20150){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20150);
});})(g__19953__auto___20150))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__19953__auto___20150){
return (function (seq20084){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20084));
});})(g__19953__auto___20150))
;


var g__19953__auto___20154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__19953__auto___20154){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20155 = arguments.length;
var i__19865__auto___20156 = (0);
while(true){
if((i__19865__auto___20156 < len__19864__auto___20155)){
args__19871__auto__.push((arguments[i__19865__auto___20156]));

var G__20157 = (i__19865__auto___20156 + (1));
i__19865__auto___20156 = G__20157;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20154))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20154){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20154);
});})(g__19953__auto___20154))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__19953__auto___20154){
return (function (seq20085){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20085));
});})(g__19953__auto___20154))
;


var g__19953__auto___20158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__19953__auto___20158){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20159 = arguments.length;
var i__19865__auto___20160 = (0);
while(true){
if((i__19865__auto___20160 < len__19864__auto___20159)){
args__19871__auto__.push((arguments[i__19865__auto___20160]));

var G__20161 = (i__19865__auto___20160 + (1));
i__19865__auto___20160 = G__20161;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20158))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20158){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20158);
});})(g__19953__auto___20158))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__19953__auto___20158){
return (function (seq20086){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20086));
});})(g__19953__auto___20158))
;


var g__19953__auto___20162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__19953__auto___20162){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20163 = arguments.length;
var i__19865__auto___20164 = (0);
while(true){
if((i__19865__auto___20164 < len__19864__auto___20163)){
args__19871__auto__.push((arguments[i__19865__auto___20164]));

var G__20165 = (i__19865__auto___20164 + (1));
i__19865__auto___20164 = G__20165;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20162))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20162){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20162);
});})(g__19953__auto___20162))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__19953__auto___20162){
return (function (seq20087){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20087));
});})(g__19953__auto___20162))
;


var g__19953__auto___20166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__19953__auto___20166){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20167 = arguments.length;
var i__19865__auto___20168 = (0);
while(true){
if((i__19865__auto___20168 < len__19864__auto___20167)){
args__19871__auto__.push((arguments[i__19865__auto___20168]));

var G__20169 = (i__19865__auto___20168 + (1));
i__19865__auto___20168 = G__20169;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20166))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20166){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20166);
});})(g__19953__auto___20166))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__19953__auto___20166){
return (function (seq20088){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20088));
});})(g__19953__auto___20166))
;


var g__19953__auto___20170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__19953__auto___20170){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20171 = arguments.length;
var i__19865__auto___20172 = (0);
while(true){
if((i__19865__auto___20172 < len__19864__auto___20171)){
args__19871__auto__.push((arguments[i__19865__auto___20172]));

var G__20173 = (i__19865__auto___20172 + (1));
i__19865__auto___20172 = G__20173;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__19953__auto___20170))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__19953__auto___20170){
return (function (args){
return cljs.core.deref.call(null,g__19953__auto___20170);
});})(g__19953__auto___20170))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__19953__auto___20170){
return (function (seq20089){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20089));
});})(g__19953__auto___20170))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19871__auto__ = [];
var len__19864__auto___20176 = arguments.length;
var i__19865__auto___20177 = (0);
while(true){
if((i__19865__auto___20177 < len__19864__auto___20176)){
args__19871__auto__.push((arguments[i__19865__auto___20177]));

var G__20178 = (i__19865__auto___20177 + (1));
i__19865__auto___20177 = G__20178;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__20174_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__20174_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq20175){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20175));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__20179_SHARP_){
return (new Date(p1__20179_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1484862753947