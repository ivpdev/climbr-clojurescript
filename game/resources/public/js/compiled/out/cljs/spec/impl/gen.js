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
var len__19864__auto___29157 = arguments.length;
var i__19865__auto___29158 = (0);
while(true){
if((i__19865__auto___29158 < len__19864__auto___29157)){
args__19871__auto__.push((arguments[i__19865__auto___29158]));

var G__29159 = (i__19865__auto___29158 + (1));
i__19865__auto___29158 = G__29159;
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

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq29156){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29156));
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
var len__19864__auto___29161 = arguments.length;
var i__19865__auto___29162 = (0);
while(true){
if((i__19865__auto___29162 < len__19864__auto___29161)){
args__19871__auto__.push((arguments[i__19865__auto___29162]));

var G__29163 = (i__19865__auto___29162 + (1));
i__19865__auto___29162 = G__29163;
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

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq29160){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29160));
});

var g_QMARK__29164 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_29165 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29164){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29164))
,null));
var mkg_29166 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29164,g_29165){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29164,g_29165))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__29164,g_29165,mkg_29166){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29164).call(null,x);
});})(g_QMARK__29164,g_29165,mkg_29166))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__29164,g_29165,mkg_29166){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_29166).call(null,gfn);
});})(g_QMARK__29164,g_29165,mkg_29166))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__29164,g_29165,mkg_29166){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_29165).call(null,generator);
});})(g_QMARK__29164,g_29165,mkg_29166))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29128__auto___29185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29128__auto___29185){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29186 = arguments.length;
var i__19865__auto___29187 = (0);
while(true){
if((i__19865__auto___29187 < len__19864__auto___29186)){
args__19871__auto__.push((arguments[i__19865__auto___29187]));

var G__29188 = (i__19865__auto___29187 + (1));
i__19865__auto___29187 = G__29188;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29185))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29185){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29185),args);
});})(g__29128__auto___29185))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29128__auto___29185){
return (function (seq29167){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29167));
});})(g__29128__auto___29185))
;


var g__29128__auto___29189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29128__auto___29189){
return (function cljs$spec$impl$gen$list(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29190 = arguments.length;
var i__19865__auto___29191 = (0);
while(true){
if((i__19865__auto___29191 < len__19864__auto___29190)){
args__19871__auto__.push((arguments[i__19865__auto___29191]));

var G__29192 = (i__19865__auto___29191 + (1));
i__19865__auto___29191 = G__29192;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29189))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29189){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29189),args);
});})(g__29128__auto___29189))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29128__auto___29189){
return (function (seq29168){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29168));
});})(g__29128__auto___29189))
;


var g__29128__auto___29193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29128__auto___29193){
return (function cljs$spec$impl$gen$map(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29194 = arguments.length;
var i__19865__auto___29195 = (0);
while(true){
if((i__19865__auto___29195 < len__19864__auto___29194)){
args__19871__auto__.push((arguments[i__19865__auto___29195]));

var G__29196 = (i__19865__auto___29195 + (1));
i__19865__auto___29195 = G__29196;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29193))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29193){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29193),args);
});})(g__29128__auto___29193))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29128__auto___29193){
return (function (seq29169){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29169));
});})(g__29128__auto___29193))
;


var g__29128__auto___29197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29128__auto___29197){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29198 = arguments.length;
var i__19865__auto___29199 = (0);
while(true){
if((i__19865__auto___29199 < len__19864__auto___29198)){
args__19871__auto__.push((arguments[i__19865__auto___29199]));

var G__29200 = (i__19865__auto___29199 + (1));
i__19865__auto___29199 = G__29200;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29197))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29197){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29197),args);
});})(g__29128__auto___29197))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29128__auto___29197){
return (function (seq29170){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29170));
});})(g__29128__auto___29197))
;


var g__29128__auto___29201 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29128__auto___29201){
return (function cljs$spec$impl$gen$set(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29202 = arguments.length;
var i__19865__auto___29203 = (0);
while(true){
if((i__19865__auto___29203 < len__19864__auto___29202)){
args__19871__auto__.push((arguments[i__19865__auto___29203]));

var G__29204 = (i__19865__auto___29203 + (1));
i__19865__auto___29203 = G__29204;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29201))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29201){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29201),args);
});})(g__29128__auto___29201))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29128__auto___29201){
return (function (seq29171){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29171));
});})(g__29128__auto___29201))
;


var g__29128__auto___29205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29128__auto___29205){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29206 = arguments.length;
var i__19865__auto___29207 = (0);
while(true){
if((i__19865__auto___29207 < len__19864__auto___29206)){
args__19871__auto__.push((arguments[i__19865__auto___29207]));

var G__29208 = (i__19865__auto___29207 + (1));
i__19865__auto___29207 = G__29208;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29205))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29205){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29205),args);
});})(g__29128__auto___29205))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29128__auto___29205){
return (function (seq29172){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29172));
});})(g__29128__auto___29205))
;


var g__29128__auto___29209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__29128__auto___29209){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29210 = arguments.length;
var i__19865__auto___29211 = (0);
while(true){
if((i__19865__auto___29211 < len__19864__auto___29210)){
args__19871__auto__.push((arguments[i__19865__auto___29211]));

var G__29212 = (i__19865__auto___29211 + (1));
i__19865__auto___29211 = G__29212;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29209))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29209){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29209),args);
});})(g__29128__auto___29209))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__29128__auto___29209){
return (function (seq29173){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29173));
});})(g__29128__auto___29209))
;


var g__29128__auto___29213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29128__auto___29213){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29214 = arguments.length;
var i__19865__auto___29215 = (0);
while(true){
if((i__19865__auto___29215 < len__19864__auto___29214)){
args__19871__auto__.push((arguments[i__19865__auto___29215]));

var G__29216 = (i__19865__auto___29215 + (1));
i__19865__auto___29215 = G__29216;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29213))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29213){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29213),args);
});})(g__29128__auto___29213))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29128__auto___29213){
return (function (seq29174){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29174));
});})(g__29128__auto___29213))
;


var g__29128__auto___29217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29128__auto___29217){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29218 = arguments.length;
var i__19865__auto___29219 = (0);
while(true){
if((i__19865__auto___29219 < len__19864__auto___29218)){
args__19871__auto__.push((arguments[i__19865__auto___29219]));

var G__29220 = (i__19865__auto___29219 + (1));
i__19865__auto___29219 = G__29220;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29217))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29217){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29217),args);
});})(g__29128__auto___29217))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29128__auto___29217){
return (function (seq29175){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29175));
});})(g__29128__auto___29217))
;


var g__29128__auto___29221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29128__auto___29221){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29222 = arguments.length;
var i__19865__auto___29223 = (0);
while(true){
if((i__19865__auto___29223 < len__19864__auto___29222)){
args__19871__auto__.push((arguments[i__19865__auto___29223]));

var G__29224 = (i__19865__auto___29223 + (1));
i__19865__auto___29223 = G__29224;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29221))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29221){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29221),args);
});})(g__29128__auto___29221))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29128__auto___29221){
return (function (seq29176){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29176));
});})(g__29128__auto___29221))
;


var g__29128__auto___29225 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29128__auto___29225){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29226 = arguments.length;
var i__19865__auto___29227 = (0);
while(true){
if((i__19865__auto___29227 < len__19864__auto___29226)){
args__19871__auto__.push((arguments[i__19865__auto___29227]));

var G__29228 = (i__19865__auto___29227 + (1));
i__19865__auto___29227 = G__29228;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29225))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29225){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29225),args);
});})(g__29128__auto___29225))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29128__auto___29225){
return (function (seq29177){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29177));
});})(g__29128__auto___29225))
;


var g__29128__auto___29229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29128__auto___29229){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29230 = arguments.length;
var i__19865__auto___29231 = (0);
while(true){
if((i__19865__auto___29231 < len__19864__auto___29230)){
args__19871__auto__.push((arguments[i__19865__auto___29231]));

var G__29232 = (i__19865__auto___29231 + (1));
i__19865__auto___29231 = G__29232;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29229))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29229){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29229),args);
});})(g__29128__auto___29229))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29128__auto___29229){
return (function (seq29178){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29178));
});})(g__29128__auto___29229))
;


var g__29128__auto___29233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29128__auto___29233){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29234 = arguments.length;
var i__19865__auto___29235 = (0);
while(true){
if((i__19865__auto___29235 < len__19864__auto___29234)){
args__19871__auto__.push((arguments[i__19865__auto___29235]));

var G__29236 = (i__19865__auto___29235 + (1));
i__19865__auto___29235 = G__29236;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29233))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29233){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29233),args);
});})(g__29128__auto___29233))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29128__auto___29233){
return (function (seq29179){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29179));
});})(g__29128__auto___29233))
;


var g__29128__auto___29237 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29128__auto___29237){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29238 = arguments.length;
var i__19865__auto___29239 = (0);
while(true){
if((i__19865__auto___29239 < len__19864__auto___29238)){
args__19871__auto__.push((arguments[i__19865__auto___29239]));

var G__29240 = (i__19865__auto___29239 + (1));
i__19865__auto___29239 = G__29240;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29237))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29237){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29237),args);
});})(g__29128__auto___29237))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29128__auto___29237){
return (function (seq29180){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29180));
});})(g__29128__auto___29237))
;


var g__29128__auto___29241 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29128__auto___29241){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29242 = arguments.length;
var i__19865__auto___29243 = (0);
while(true){
if((i__19865__auto___29243 < len__19864__auto___29242)){
args__19871__auto__.push((arguments[i__19865__auto___29243]));

var G__29244 = (i__19865__auto___29243 + (1));
i__19865__auto___29243 = G__29244;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29241))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29241){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29241),args);
});})(g__29128__auto___29241))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29128__auto___29241){
return (function (seq29181){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29181));
});})(g__29128__auto___29241))
;


var g__29128__auto___29245 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29128__auto___29245){
return (function cljs$spec$impl$gen$return(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29246 = arguments.length;
var i__19865__auto___29247 = (0);
while(true){
if((i__19865__auto___29247 < len__19864__auto___29246)){
args__19871__auto__.push((arguments[i__19865__auto___29247]));

var G__29248 = (i__19865__auto___29247 + (1));
i__19865__auto___29247 = G__29248;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29245))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29245){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29245),args);
});})(g__29128__auto___29245))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29128__auto___29245){
return (function (seq29182){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29182));
});})(g__29128__auto___29245))
;


var g__29128__auto___29249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__29128__auto___29249){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29250 = arguments.length;
var i__19865__auto___29251 = (0);
while(true){
if((i__19865__auto___29251 < len__19864__auto___29250)){
args__19871__auto__.push((arguments[i__19865__auto___29251]));

var G__29252 = (i__19865__auto___29251 + (1));
i__19865__auto___29251 = G__29252;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29249))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29249){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29249),args);
});})(g__29128__auto___29249))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29128__auto___29249){
return (function (seq29183){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29183));
});})(g__29128__auto___29249))
;


var g__29128__auto___29253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__29128__auto___29253){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29254 = arguments.length;
var i__19865__auto___29255 = (0);
while(true){
if((i__19865__auto___29255 < len__19864__auto___29254)){
args__19871__auto__.push((arguments[i__19865__auto___29255]));

var G__29256 = (i__19865__auto___29255 + (1));
i__19865__auto___29255 = G__29256;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29128__auto___29253))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29128__auto___29253){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29128__auto___29253),args);
});})(g__29128__auto___29253))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__29128__auto___29253){
return (function (seq29184){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29184));
});})(g__29128__auto___29253))
;

var g__29141__auto___29278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29141__auto___29278){
return (function cljs$spec$impl$gen$any(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29279 = arguments.length;
var i__19865__auto___29280 = (0);
while(true){
if((i__19865__auto___29280 < len__19864__auto___29279)){
args__19871__auto__.push((arguments[i__19865__auto___29280]));

var G__29281 = (i__19865__auto___29280 + (1));
i__19865__auto___29280 = G__29281;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29278))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29278){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29278);
});})(g__29141__auto___29278))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29141__auto___29278){
return (function (seq29257){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29257));
});})(g__29141__auto___29278))
;


var g__29141__auto___29282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29141__auto___29282){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29283 = arguments.length;
var i__19865__auto___29284 = (0);
while(true){
if((i__19865__auto___29284 < len__19864__auto___29283)){
args__19871__auto__.push((arguments[i__19865__auto___29284]));

var G__29285 = (i__19865__auto___29284 + (1));
i__19865__auto___29284 = G__29285;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29282))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29282){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29282);
});})(g__29141__auto___29282))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29141__auto___29282){
return (function (seq29258){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29258));
});})(g__29141__auto___29282))
;


var g__29141__auto___29286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29141__auto___29286){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29287 = arguments.length;
var i__19865__auto___29288 = (0);
while(true){
if((i__19865__auto___29288 < len__19864__auto___29287)){
args__19871__auto__.push((arguments[i__19865__auto___29288]));

var G__29289 = (i__19865__auto___29288 + (1));
i__19865__auto___29288 = G__29289;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29286))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29286){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29286);
});})(g__29141__auto___29286))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29141__auto___29286){
return (function (seq29259){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29259));
});})(g__29141__auto___29286))
;


var g__29141__auto___29290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29141__auto___29290){
return (function cljs$spec$impl$gen$char(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29291 = arguments.length;
var i__19865__auto___29292 = (0);
while(true){
if((i__19865__auto___29292 < len__19864__auto___29291)){
args__19871__auto__.push((arguments[i__19865__auto___29292]));

var G__29293 = (i__19865__auto___29292 + (1));
i__19865__auto___29292 = G__29293;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29290))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29290){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29290);
});})(g__29141__auto___29290))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29141__auto___29290){
return (function (seq29260){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29260));
});})(g__29141__auto___29290))
;


var g__29141__auto___29294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29141__auto___29294){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29295 = arguments.length;
var i__19865__auto___29296 = (0);
while(true){
if((i__19865__auto___29296 < len__19864__auto___29295)){
args__19871__auto__.push((arguments[i__19865__auto___29296]));

var G__29297 = (i__19865__auto___29296 + (1));
i__19865__auto___29296 = G__29297;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29294))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29294){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29294);
});})(g__29141__auto___29294))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29141__auto___29294){
return (function (seq29261){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29261));
});})(g__29141__auto___29294))
;


var g__29141__auto___29298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29141__auto___29298){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29299 = arguments.length;
var i__19865__auto___29300 = (0);
while(true){
if((i__19865__auto___29300 < len__19864__auto___29299)){
args__19871__auto__.push((arguments[i__19865__auto___29300]));

var G__29301 = (i__19865__auto___29300 + (1));
i__19865__auto___29300 = G__29301;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29298))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29298){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29298);
});})(g__29141__auto___29298))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29141__auto___29298){
return (function (seq29262){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29262));
});})(g__29141__auto___29298))
;


var g__29141__auto___29302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29141__auto___29302){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29303 = arguments.length;
var i__19865__auto___29304 = (0);
while(true){
if((i__19865__auto___29304 < len__19864__auto___29303)){
args__19871__auto__.push((arguments[i__19865__auto___29304]));

var G__29305 = (i__19865__auto___29304 + (1));
i__19865__auto___29304 = G__29305;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29302))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29302){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29302);
});})(g__29141__auto___29302))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29141__auto___29302){
return (function (seq29263){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29263));
});})(g__29141__auto___29302))
;


var g__29141__auto___29306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29141__auto___29306){
return (function cljs$spec$impl$gen$double(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29307 = arguments.length;
var i__19865__auto___29308 = (0);
while(true){
if((i__19865__auto___29308 < len__19864__auto___29307)){
args__19871__auto__.push((arguments[i__19865__auto___29308]));

var G__29309 = (i__19865__auto___29308 + (1));
i__19865__auto___29308 = G__29309;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29306))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29306){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29306);
});})(g__29141__auto___29306))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29141__auto___29306){
return (function (seq29264){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29264));
});})(g__29141__auto___29306))
;


var g__29141__auto___29310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29141__auto___29310){
return (function cljs$spec$impl$gen$int(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29311 = arguments.length;
var i__19865__auto___29312 = (0);
while(true){
if((i__19865__auto___29312 < len__19864__auto___29311)){
args__19871__auto__.push((arguments[i__19865__auto___29312]));

var G__29313 = (i__19865__auto___29312 + (1));
i__19865__auto___29312 = G__29313;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29310))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29310){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29310);
});})(g__29141__auto___29310))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29141__auto___29310){
return (function (seq29265){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29265));
});})(g__29141__auto___29310))
;


var g__29141__auto___29314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29141__auto___29314){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29315 = arguments.length;
var i__19865__auto___29316 = (0);
while(true){
if((i__19865__auto___29316 < len__19864__auto___29315)){
args__19871__auto__.push((arguments[i__19865__auto___29316]));

var G__29317 = (i__19865__auto___29316 + (1));
i__19865__auto___29316 = G__29317;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29314))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29314){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29314);
});})(g__29141__auto___29314))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29141__auto___29314){
return (function (seq29266){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29266));
});})(g__29141__auto___29314))
;


var g__29141__auto___29318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29141__auto___29318){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29319 = arguments.length;
var i__19865__auto___29320 = (0);
while(true){
if((i__19865__auto___29320 < len__19864__auto___29319)){
args__19871__auto__.push((arguments[i__19865__auto___29320]));

var G__29321 = (i__19865__auto___29320 + (1));
i__19865__auto___29320 = G__29321;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29318))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29318){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29318);
});})(g__29141__auto___29318))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29141__auto___29318){
return (function (seq29267){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29267));
});})(g__29141__auto___29318))
;


var g__29141__auto___29322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29141__auto___29322){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29323 = arguments.length;
var i__19865__auto___29324 = (0);
while(true){
if((i__19865__auto___29324 < len__19864__auto___29323)){
args__19871__auto__.push((arguments[i__19865__auto___29324]));

var G__29325 = (i__19865__auto___29324 + (1));
i__19865__auto___29324 = G__29325;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29322))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29322){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29322);
});})(g__29141__auto___29322))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29141__auto___29322){
return (function (seq29268){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29268));
});})(g__29141__auto___29322))
;


var g__29141__auto___29326 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29141__auto___29326){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29327 = arguments.length;
var i__19865__auto___29328 = (0);
while(true){
if((i__19865__auto___29328 < len__19864__auto___29327)){
args__19871__auto__.push((arguments[i__19865__auto___29328]));

var G__29329 = (i__19865__auto___29328 + (1));
i__19865__auto___29328 = G__29329;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29326))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29326){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29326);
});})(g__29141__auto___29326))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29141__auto___29326){
return (function (seq29269){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29269));
});})(g__29141__auto___29326))
;


var g__29141__auto___29330 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29141__auto___29330){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29331 = arguments.length;
var i__19865__auto___29332 = (0);
while(true){
if((i__19865__auto___29332 < len__19864__auto___29331)){
args__19871__auto__.push((arguments[i__19865__auto___29332]));

var G__29333 = (i__19865__auto___29332 + (1));
i__19865__auto___29332 = G__29333;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29330))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29330){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29330);
});})(g__29141__auto___29330))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29141__auto___29330){
return (function (seq29270){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29270));
});})(g__29141__auto___29330))
;


var g__29141__auto___29334 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29141__auto___29334){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29335 = arguments.length;
var i__19865__auto___29336 = (0);
while(true){
if((i__19865__auto___29336 < len__19864__auto___29335)){
args__19871__auto__.push((arguments[i__19865__auto___29336]));

var G__29337 = (i__19865__auto___29336 + (1));
i__19865__auto___29336 = G__29337;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29334))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29334){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29334);
});})(g__29141__auto___29334))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29141__auto___29334){
return (function (seq29271){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29271));
});})(g__29141__auto___29334))
;


var g__29141__auto___29338 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29141__auto___29338){
return (function cljs$spec$impl$gen$string(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29339 = arguments.length;
var i__19865__auto___29340 = (0);
while(true){
if((i__19865__auto___29340 < len__19864__auto___29339)){
args__19871__auto__.push((arguments[i__19865__auto___29340]));

var G__29341 = (i__19865__auto___29340 + (1));
i__19865__auto___29340 = G__29341;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29338))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29338){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29338);
});})(g__29141__auto___29338))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29141__auto___29338){
return (function (seq29272){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29272));
});})(g__29141__auto___29338))
;


var g__29141__auto___29342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29141__auto___29342){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29343 = arguments.length;
var i__19865__auto___29344 = (0);
while(true){
if((i__19865__auto___29344 < len__19864__auto___29343)){
args__19871__auto__.push((arguments[i__19865__auto___29344]));

var G__29345 = (i__19865__auto___29344 + (1));
i__19865__auto___29344 = G__29345;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29342))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29342){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29342);
});})(g__29141__auto___29342))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29141__auto___29342){
return (function (seq29273){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29273));
});})(g__29141__auto___29342))
;


var g__29141__auto___29346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29141__auto___29346){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29347 = arguments.length;
var i__19865__auto___29348 = (0);
while(true){
if((i__19865__auto___29348 < len__19864__auto___29347)){
args__19871__auto__.push((arguments[i__19865__auto___29348]));

var G__29349 = (i__19865__auto___29348 + (1));
i__19865__auto___29348 = G__29349;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29346))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29346){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29346);
});})(g__29141__auto___29346))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29141__auto___29346){
return (function (seq29274){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29274));
});})(g__29141__auto___29346))
;


var g__29141__auto___29350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29141__auto___29350){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29351 = arguments.length;
var i__19865__auto___29352 = (0);
while(true){
if((i__19865__auto___29352 < len__19864__auto___29351)){
args__19871__auto__.push((arguments[i__19865__auto___29352]));

var G__29353 = (i__19865__auto___29352 + (1));
i__19865__auto___29352 = G__29353;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29350))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29350){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29350);
});})(g__29141__auto___29350))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29141__auto___29350){
return (function (seq29275){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29275));
});})(g__29141__auto___29350))
;


var g__29141__auto___29354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29141__auto___29354){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29355 = arguments.length;
var i__19865__auto___29356 = (0);
while(true){
if((i__19865__auto___29356 < len__19864__auto___29355)){
args__19871__auto__.push((arguments[i__19865__auto___29356]));

var G__29357 = (i__19865__auto___29356 + (1));
i__19865__auto___29356 = G__29357;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29354))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29354){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29354);
});})(g__29141__auto___29354))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29141__auto___29354){
return (function (seq29276){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29276));
});})(g__29141__auto___29354))
;


var g__29141__auto___29358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29141__auto___29358){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29359 = arguments.length;
var i__19865__auto___29360 = (0);
while(true){
if((i__19865__auto___29360 < len__19864__auto___29359)){
args__19871__auto__.push((arguments[i__19865__auto___29360]));

var G__29361 = (i__19865__auto___29360 + (1));
i__19865__auto___29360 = G__29361;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});})(g__29141__auto___29358))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29141__auto___29358){
return (function (args){
return cljs.core.deref.call(null,g__29141__auto___29358);
});})(g__29141__auto___29358))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29141__auto___29358){
return (function (seq29277){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29277));
});})(g__29141__auto___29358))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19871__auto__ = [];
var len__19864__auto___29364 = arguments.length;
var i__19865__auto___29365 = (0);
while(true){
if((i__19865__auto___29365 < len__19864__auto___29364)){
args__19871__auto__.push((arguments[i__19865__auto___29365]));

var G__29366 = (i__19865__auto___29365 + (1));
i__19865__auto___29365 = G__29366;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((0) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19872__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__29362_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__29362_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq29363){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29363));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__29367_SHARP_){
return (new Date(p1__29367_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1485901324908