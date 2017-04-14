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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__19348__auto__,writer__19349__auto__,opt__19350__auto__){
return cljs.core._write.call(null,writer__19349__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__19857__auto__ = [];
var len__19850__auto___29210 = arguments.length;
var i__19851__auto___29211 = (0);
while(true){
if((i__19851__auto___29211 < len__19850__auto___29210)){
args__19857__auto__.push((arguments[i__19851__auto___29211]));

var G__29212 = (i__19851__auto___29211 + (1));
i__19851__auto___29211 = G__29212;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq29209){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29209));
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
var args__19857__auto__ = [];
var len__19850__auto___29214 = arguments.length;
var i__19851__auto___29215 = (0);
while(true){
if((i__19851__auto___29215 < len__19850__auto___29214)){
args__19857__auto__.push((arguments[i__19851__auto___29215]));

var G__29216 = (i__19851__auto___29215 + (1));
i__19851__auto___29215 = G__29216;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq29213){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29213));
});

var g_QMARK__29217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_29218 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29217){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29217))
,null));
var mkg_29219 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29217,g_29218){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29217,g_29218))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__29217,g_29218,mkg_29219){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29217).call(null,x);
});})(g_QMARK__29217,g_29218,mkg_29219))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__29217,g_29218,mkg_29219){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_29219).call(null,gfn);
});})(g_QMARK__29217,g_29218,mkg_29219))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__29217,g_29218,mkg_29219){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_29218).call(null,generator);
});})(g_QMARK__29217,g_29218,mkg_29219))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29181__auto___29238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29181__auto___29238){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29239 = arguments.length;
var i__19851__auto___29240 = (0);
while(true){
if((i__19851__auto___29240 < len__19850__auto___29239)){
args__19857__auto__.push((arguments[i__19851__auto___29240]));

var G__29241 = (i__19851__auto___29240 + (1));
i__19851__auto___29240 = G__29241;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29238))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29238),args);
});})(g__29181__auto___29238))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29181__auto___29238){
return (function (seq29220){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29220));
});})(g__29181__auto___29238))
;


var g__29181__auto___29242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29181__auto___29242){
return (function cljs$spec$impl$gen$list(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29243 = arguments.length;
var i__19851__auto___29244 = (0);
while(true){
if((i__19851__auto___29244 < len__19850__auto___29243)){
args__19857__auto__.push((arguments[i__19851__auto___29244]));

var G__29245 = (i__19851__auto___29244 + (1));
i__19851__auto___29244 = G__29245;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29242))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29242),args);
});})(g__29181__auto___29242))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29181__auto___29242){
return (function (seq29221){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29221));
});})(g__29181__auto___29242))
;


var g__29181__auto___29246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29181__auto___29246){
return (function cljs$spec$impl$gen$map(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29247 = arguments.length;
var i__19851__auto___29248 = (0);
while(true){
if((i__19851__auto___29248 < len__19850__auto___29247)){
args__19857__auto__.push((arguments[i__19851__auto___29248]));

var G__29249 = (i__19851__auto___29248 + (1));
i__19851__auto___29248 = G__29249;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29246))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29246),args);
});})(g__29181__auto___29246))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29181__auto___29246){
return (function (seq29222){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29222));
});})(g__29181__auto___29246))
;


var g__29181__auto___29250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29181__auto___29250){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29251 = arguments.length;
var i__19851__auto___29252 = (0);
while(true){
if((i__19851__auto___29252 < len__19850__auto___29251)){
args__19857__auto__.push((arguments[i__19851__auto___29252]));

var G__29253 = (i__19851__auto___29252 + (1));
i__19851__auto___29252 = G__29253;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29250))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29250),args);
});})(g__29181__auto___29250))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29181__auto___29250){
return (function (seq29223){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29223));
});})(g__29181__auto___29250))
;


var g__29181__auto___29254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29181__auto___29254){
return (function cljs$spec$impl$gen$set(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29255 = arguments.length;
var i__19851__auto___29256 = (0);
while(true){
if((i__19851__auto___29256 < len__19850__auto___29255)){
args__19857__auto__.push((arguments[i__19851__auto___29256]));

var G__29257 = (i__19851__auto___29256 + (1));
i__19851__auto___29256 = G__29257;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29254))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29254),args);
});})(g__29181__auto___29254))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29181__auto___29254){
return (function (seq29224){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29224));
});})(g__29181__auto___29254))
;


var g__29181__auto___29258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29181__auto___29258){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29259 = arguments.length;
var i__19851__auto___29260 = (0);
while(true){
if((i__19851__auto___29260 < len__19850__auto___29259)){
args__19857__auto__.push((arguments[i__19851__auto___29260]));

var G__29261 = (i__19851__auto___29260 + (1));
i__19851__auto___29260 = G__29261;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29258))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29258),args);
});})(g__29181__auto___29258))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29181__auto___29258){
return (function (seq29225){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29225));
});})(g__29181__auto___29258))
;


var g__29181__auto___29262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__29181__auto___29262){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29263 = arguments.length;
var i__19851__auto___29264 = (0);
while(true){
if((i__19851__auto___29264 < len__19850__auto___29263)){
args__19857__auto__.push((arguments[i__19851__auto___29264]));

var G__29265 = (i__19851__auto___29264 + (1));
i__19851__auto___29264 = G__29265;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29262))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29262),args);
});})(g__29181__auto___29262))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__29181__auto___29262){
return (function (seq29226){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29226));
});})(g__29181__auto___29262))
;


var g__29181__auto___29266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29181__auto___29266){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29267 = arguments.length;
var i__19851__auto___29268 = (0);
while(true){
if((i__19851__auto___29268 < len__19850__auto___29267)){
args__19857__auto__.push((arguments[i__19851__auto___29268]));

var G__29269 = (i__19851__auto___29268 + (1));
i__19851__auto___29268 = G__29269;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29266))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29266),args);
});})(g__29181__auto___29266))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29181__auto___29266){
return (function (seq29227){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29227));
});})(g__29181__auto___29266))
;


var g__29181__auto___29270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29181__auto___29270){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29271 = arguments.length;
var i__19851__auto___29272 = (0);
while(true){
if((i__19851__auto___29272 < len__19850__auto___29271)){
args__19857__auto__.push((arguments[i__19851__auto___29272]));

var G__29273 = (i__19851__auto___29272 + (1));
i__19851__auto___29272 = G__29273;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29270))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29270),args);
});})(g__29181__auto___29270))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29181__auto___29270){
return (function (seq29228){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29228));
});})(g__29181__auto___29270))
;


var g__29181__auto___29274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29181__auto___29274){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29275 = arguments.length;
var i__19851__auto___29276 = (0);
while(true){
if((i__19851__auto___29276 < len__19850__auto___29275)){
args__19857__auto__.push((arguments[i__19851__auto___29276]));

var G__29277 = (i__19851__auto___29276 + (1));
i__19851__auto___29276 = G__29277;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29274))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29274),args);
});})(g__29181__auto___29274))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29181__auto___29274){
return (function (seq29229){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29229));
});})(g__29181__auto___29274))
;


var g__29181__auto___29278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29181__auto___29278){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29279 = arguments.length;
var i__19851__auto___29280 = (0);
while(true){
if((i__19851__auto___29280 < len__19850__auto___29279)){
args__19857__auto__.push((arguments[i__19851__auto___29280]));

var G__29281 = (i__19851__auto___29280 + (1));
i__19851__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29278))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29278){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29278),args);
});})(g__29181__auto___29278))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29181__auto___29278){
return (function (seq29230){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29230));
});})(g__29181__auto___29278))
;


var g__29181__auto___29282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29181__auto___29282){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29283 = arguments.length;
var i__19851__auto___29284 = (0);
while(true){
if((i__19851__auto___29284 < len__19850__auto___29283)){
args__19857__auto__.push((arguments[i__19851__auto___29284]));

var G__29285 = (i__19851__auto___29284 + (1));
i__19851__auto___29284 = G__29285;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29282))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29282){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29282),args);
});})(g__29181__auto___29282))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29181__auto___29282){
return (function (seq29231){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29231));
});})(g__29181__auto___29282))
;


var g__29181__auto___29286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29181__auto___29286){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29287 = arguments.length;
var i__19851__auto___29288 = (0);
while(true){
if((i__19851__auto___29288 < len__19850__auto___29287)){
args__19857__auto__.push((arguments[i__19851__auto___29288]));

var G__29289 = (i__19851__auto___29288 + (1));
i__19851__auto___29288 = G__29289;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29286))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29286),args);
});})(g__29181__auto___29286))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29181__auto___29286){
return (function (seq29232){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29232));
});})(g__29181__auto___29286))
;


var g__29181__auto___29290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29181__auto___29290){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29291 = arguments.length;
var i__19851__auto___29292 = (0);
while(true){
if((i__19851__auto___29292 < len__19850__auto___29291)){
args__19857__auto__.push((arguments[i__19851__auto___29292]));

var G__29293 = (i__19851__auto___29292 + (1));
i__19851__auto___29292 = G__29293;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29290))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29290),args);
});})(g__29181__auto___29290))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29181__auto___29290){
return (function (seq29233){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29233));
});})(g__29181__auto___29290))
;


var g__29181__auto___29294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29181__auto___29294){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29295 = arguments.length;
var i__19851__auto___29296 = (0);
while(true){
if((i__19851__auto___29296 < len__19850__auto___29295)){
args__19857__auto__.push((arguments[i__19851__auto___29296]));

var G__29297 = (i__19851__auto___29296 + (1));
i__19851__auto___29296 = G__29297;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29294))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29294),args);
});})(g__29181__auto___29294))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29181__auto___29294){
return (function (seq29234){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29234));
});})(g__29181__auto___29294))
;


var g__29181__auto___29298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29181__auto___29298){
return (function cljs$spec$impl$gen$return(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29299 = arguments.length;
var i__19851__auto___29300 = (0);
while(true){
if((i__19851__auto___29300 < len__19850__auto___29299)){
args__19857__auto__.push((arguments[i__19851__auto___29300]));

var G__29301 = (i__19851__auto___29300 + (1));
i__19851__auto___29300 = G__29301;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29298))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29298){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29298),args);
});})(g__29181__auto___29298))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29181__auto___29298){
return (function (seq29235){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29235));
});})(g__29181__auto___29298))
;


var g__29181__auto___29302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__29181__auto___29302){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29303 = arguments.length;
var i__19851__auto___29304 = (0);
while(true){
if((i__19851__auto___29304 < len__19850__auto___29303)){
args__19857__auto__.push((arguments[i__19851__auto___29304]));

var G__29305 = (i__19851__auto___29304 + (1));
i__19851__auto___29304 = G__29305;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29302))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29302){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29302),args);
});})(g__29181__auto___29302))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29181__auto___29302){
return (function (seq29236){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29236));
});})(g__29181__auto___29302))
;


var g__29181__auto___29306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__29181__auto___29306){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29307 = arguments.length;
var i__19851__auto___29308 = (0);
while(true){
if((i__19851__auto___29308 < len__19850__auto___29307)){
args__19857__auto__.push((arguments[i__19851__auto___29308]));

var G__29309 = (i__19851__auto___29308 + (1));
i__19851__auto___29308 = G__29309;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29181__auto___29306))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29181__auto___29306){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29181__auto___29306),args);
});})(g__29181__auto___29306))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__29181__auto___29306){
return (function (seq29237){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29237));
});})(g__29181__auto___29306))
;

var g__29194__auto___29331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29194__auto___29331){
return (function cljs$spec$impl$gen$any(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29332 = arguments.length;
var i__19851__auto___29333 = (0);
while(true){
if((i__19851__auto___29333 < len__19850__auto___29332)){
args__19857__auto__.push((arguments[i__19851__auto___29333]));

var G__29334 = (i__19851__auto___29333 + (1));
i__19851__auto___29333 = G__29334;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29331))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29331){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29331);
});})(g__29194__auto___29331))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29194__auto___29331){
return (function (seq29310){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29310));
});})(g__29194__auto___29331))
;


var g__29194__auto___29335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29194__auto___29335){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29336 = arguments.length;
var i__19851__auto___29337 = (0);
while(true){
if((i__19851__auto___29337 < len__19850__auto___29336)){
args__19857__auto__.push((arguments[i__19851__auto___29337]));

var G__29338 = (i__19851__auto___29337 + (1));
i__19851__auto___29337 = G__29338;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29335))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29335){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29335);
});})(g__29194__auto___29335))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29194__auto___29335){
return (function (seq29311){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29311));
});})(g__29194__auto___29335))
;


var g__29194__auto___29339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29194__auto___29339){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29340 = arguments.length;
var i__19851__auto___29341 = (0);
while(true){
if((i__19851__auto___29341 < len__19850__auto___29340)){
args__19857__auto__.push((arguments[i__19851__auto___29341]));

var G__29342 = (i__19851__auto___29341 + (1));
i__19851__auto___29341 = G__29342;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29339))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29339){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29339);
});})(g__29194__auto___29339))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29194__auto___29339){
return (function (seq29312){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29312));
});})(g__29194__auto___29339))
;


var g__29194__auto___29343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29194__auto___29343){
return (function cljs$spec$impl$gen$char(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29344 = arguments.length;
var i__19851__auto___29345 = (0);
while(true){
if((i__19851__auto___29345 < len__19850__auto___29344)){
args__19857__auto__.push((arguments[i__19851__auto___29345]));

var G__29346 = (i__19851__auto___29345 + (1));
i__19851__auto___29345 = G__29346;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29343))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29343){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29343);
});})(g__29194__auto___29343))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29194__auto___29343){
return (function (seq29313){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29313));
});})(g__29194__auto___29343))
;


var g__29194__auto___29347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29194__auto___29347){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29348 = arguments.length;
var i__19851__auto___29349 = (0);
while(true){
if((i__19851__auto___29349 < len__19850__auto___29348)){
args__19857__auto__.push((arguments[i__19851__auto___29349]));

var G__29350 = (i__19851__auto___29349 + (1));
i__19851__auto___29349 = G__29350;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29347))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29347){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29347);
});})(g__29194__auto___29347))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29194__auto___29347){
return (function (seq29314){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29314));
});})(g__29194__auto___29347))
;


var g__29194__auto___29351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29194__auto___29351){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29352 = arguments.length;
var i__19851__auto___29353 = (0);
while(true){
if((i__19851__auto___29353 < len__19850__auto___29352)){
args__19857__auto__.push((arguments[i__19851__auto___29353]));

var G__29354 = (i__19851__auto___29353 + (1));
i__19851__auto___29353 = G__29354;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29351))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29351){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29351);
});})(g__29194__auto___29351))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29194__auto___29351){
return (function (seq29315){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29315));
});})(g__29194__auto___29351))
;


var g__29194__auto___29355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29194__auto___29355){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29356 = arguments.length;
var i__19851__auto___29357 = (0);
while(true){
if((i__19851__auto___29357 < len__19850__auto___29356)){
args__19857__auto__.push((arguments[i__19851__auto___29357]));

var G__29358 = (i__19851__auto___29357 + (1));
i__19851__auto___29357 = G__29358;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29355))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29355){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29355);
});})(g__29194__auto___29355))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29194__auto___29355){
return (function (seq29316){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29316));
});})(g__29194__auto___29355))
;


var g__29194__auto___29359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29194__auto___29359){
return (function cljs$spec$impl$gen$double(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29360 = arguments.length;
var i__19851__auto___29361 = (0);
while(true){
if((i__19851__auto___29361 < len__19850__auto___29360)){
args__19857__auto__.push((arguments[i__19851__auto___29361]));

var G__29362 = (i__19851__auto___29361 + (1));
i__19851__auto___29361 = G__29362;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29359))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29359){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29359);
});})(g__29194__auto___29359))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29194__auto___29359){
return (function (seq29317){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29317));
});})(g__29194__auto___29359))
;


var g__29194__auto___29363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29194__auto___29363){
return (function cljs$spec$impl$gen$int(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29364 = arguments.length;
var i__19851__auto___29365 = (0);
while(true){
if((i__19851__auto___29365 < len__19850__auto___29364)){
args__19857__auto__.push((arguments[i__19851__auto___29365]));

var G__29366 = (i__19851__auto___29365 + (1));
i__19851__auto___29365 = G__29366;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29363))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29363){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29363);
});})(g__29194__auto___29363))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29194__auto___29363){
return (function (seq29318){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29318));
});})(g__29194__auto___29363))
;


var g__29194__auto___29367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29194__auto___29367){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29368 = arguments.length;
var i__19851__auto___29369 = (0);
while(true){
if((i__19851__auto___29369 < len__19850__auto___29368)){
args__19857__auto__.push((arguments[i__19851__auto___29369]));

var G__29370 = (i__19851__auto___29369 + (1));
i__19851__auto___29369 = G__29370;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29367))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29367){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29367);
});})(g__29194__auto___29367))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29194__auto___29367){
return (function (seq29319){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29319));
});})(g__29194__auto___29367))
;


var g__29194__auto___29371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29194__auto___29371){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29372 = arguments.length;
var i__19851__auto___29373 = (0);
while(true){
if((i__19851__auto___29373 < len__19850__auto___29372)){
args__19857__auto__.push((arguments[i__19851__auto___29373]));

var G__29374 = (i__19851__auto___29373 + (1));
i__19851__auto___29373 = G__29374;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29371))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29371){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29371);
});})(g__29194__auto___29371))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29194__auto___29371){
return (function (seq29320){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29320));
});})(g__29194__auto___29371))
;


var g__29194__auto___29375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29194__auto___29375){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29376 = arguments.length;
var i__19851__auto___29377 = (0);
while(true){
if((i__19851__auto___29377 < len__19850__auto___29376)){
args__19857__auto__.push((arguments[i__19851__auto___29377]));

var G__29378 = (i__19851__auto___29377 + (1));
i__19851__auto___29377 = G__29378;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29375))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29375){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29375);
});})(g__29194__auto___29375))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29194__auto___29375){
return (function (seq29321){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29321));
});})(g__29194__auto___29375))
;


var g__29194__auto___29379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29194__auto___29379){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29380 = arguments.length;
var i__19851__auto___29381 = (0);
while(true){
if((i__19851__auto___29381 < len__19850__auto___29380)){
args__19857__auto__.push((arguments[i__19851__auto___29381]));

var G__29382 = (i__19851__auto___29381 + (1));
i__19851__auto___29381 = G__29382;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29379))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29379){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29379);
});})(g__29194__auto___29379))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29194__auto___29379){
return (function (seq29322){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29322));
});})(g__29194__auto___29379))
;


var g__29194__auto___29383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29194__auto___29383){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29384 = arguments.length;
var i__19851__auto___29385 = (0);
while(true){
if((i__19851__auto___29385 < len__19850__auto___29384)){
args__19857__auto__.push((arguments[i__19851__auto___29385]));

var G__29386 = (i__19851__auto___29385 + (1));
i__19851__auto___29385 = G__29386;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29383))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29383){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29383);
});})(g__29194__auto___29383))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29194__auto___29383){
return (function (seq29323){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29323));
});})(g__29194__auto___29383))
;


var g__29194__auto___29387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29194__auto___29387){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29388 = arguments.length;
var i__19851__auto___29389 = (0);
while(true){
if((i__19851__auto___29389 < len__19850__auto___29388)){
args__19857__auto__.push((arguments[i__19851__auto___29389]));

var G__29390 = (i__19851__auto___29389 + (1));
i__19851__auto___29389 = G__29390;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29387))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29387){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29387);
});})(g__29194__auto___29387))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29194__auto___29387){
return (function (seq29324){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29324));
});})(g__29194__auto___29387))
;


var g__29194__auto___29391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29194__auto___29391){
return (function cljs$spec$impl$gen$string(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29392 = arguments.length;
var i__19851__auto___29393 = (0);
while(true){
if((i__19851__auto___29393 < len__19850__auto___29392)){
args__19857__auto__.push((arguments[i__19851__auto___29393]));

var G__29394 = (i__19851__auto___29393 + (1));
i__19851__auto___29393 = G__29394;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29391))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29391){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29391);
});})(g__29194__auto___29391))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29194__auto___29391){
return (function (seq29325){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29325));
});})(g__29194__auto___29391))
;


var g__29194__auto___29395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29194__auto___29395){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29396 = arguments.length;
var i__19851__auto___29397 = (0);
while(true){
if((i__19851__auto___29397 < len__19850__auto___29396)){
args__19857__auto__.push((arguments[i__19851__auto___29397]));

var G__29398 = (i__19851__auto___29397 + (1));
i__19851__auto___29397 = G__29398;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29395))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29395){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29395);
});})(g__29194__auto___29395))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29194__auto___29395){
return (function (seq29326){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29326));
});})(g__29194__auto___29395))
;


var g__29194__auto___29399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29194__auto___29399){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29400 = arguments.length;
var i__19851__auto___29401 = (0);
while(true){
if((i__19851__auto___29401 < len__19850__auto___29400)){
args__19857__auto__.push((arguments[i__19851__auto___29401]));

var G__29402 = (i__19851__auto___29401 + (1));
i__19851__auto___29401 = G__29402;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29399))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29399){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29399);
});})(g__29194__auto___29399))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29194__auto___29399){
return (function (seq29327){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29327));
});})(g__29194__auto___29399))
;


var g__29194__auto___29403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29194__auto___29403){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29404 = arguments.length;
var i__19851__auto___29405 = (0);
while(true){
if((i__19851__auto___29405 < len__19850__auto___29404)){
args__19857__auto__.push((arguments[i__19851__auto___29405]));

var G__29406 = (i__19851__auto___29405 + (1));
i__19851__auto___29405 = G__29406;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29403))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29403){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29403);
});})(g__29194__auto___29403))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29194__auto___29403){
return (function (seq29328){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29328));
});})(g__29194__auto___29403))
;


var g__29194__auto___29407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29194__auto___29407){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29408 = arguments.length;
var i__19851__auto___29409 = (0);
while(true){
if((i__19851__auto___29409 < len__19850__auto___29408)){
args__19857__auto__.push((arguments[i__19851__auto___29409]));

var G__29410 = (i__19851__auto___29409 + (1));
i__19851__auto___29409 = G__29410;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29407))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29407){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29407);
});})(g__29194__auto___29407))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29194__auto___29407){
return (function (seq29329){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29329));
});})(g__29194__auto___29407))
;


var g__29194__auto___29411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29194__auto___29411){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29412 = arguments.length;
var i__19851__auto___29413 = (0);
while(true){
if((i__19851__auto___29413 < len__19850__auto___29412)){
args__19857__auto__.push((arguments[i__19851__auto___29413]));

var G__29414 = (i__19851__auto___29413 + (1));
i__19851__auto___29413 = G__29414;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});})(g__29194__auto___29411))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29194__auto___29411){
return (function (args){
return cljs.core.deref.call(null,g__29194__auto___29411);
});})(g__29194__auto___29411))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29194__auto___29411){
return (function (seq29330){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29330));
});})(g__29194__auto___29411))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19857__auto__ = [];
var len__19850__auto___29417 = arguments.length;
var i__19851__auto___29418 = (0);
while(true){
if((i__19851__auto___29418 < len__19850__auto___29417)){
args__19857__auto__.push((arguments[i__19851__auto___29418]));

var G__29419 = (i__19851__auto___29418 + (1));
i__19851__auto___29418 = G__29419;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((0) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19858__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__29415_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__29415_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq29416){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29416));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__29420_SHARP_){
return (new Date(p1__29420_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1492189018875