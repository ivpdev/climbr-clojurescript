// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.utils.utils');
goog.require('cljs.core');
climbr.utils.utils.def_ = (function climbr$utils$utils$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,item),cljs.core._conj.call(null,cljs.core.List.EMPTY,value))));
});

climbr.utils.utils.def_.cljs$lang$macro = true;
climbr.utils.utils.debug = (function climbr$utils$utils$debug(x){
window.debug1 = x;

return console.log(x);
});
climbr.utils.utils.println = (function climbr$utils$utils$println(x){
return console.log(x);
});
/**
 * Ignores body, yields nil
 */
climbr.utils.utils.TODO = (function climbr$utils$utils$TODO(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24430 = arguments.length;
var i__17864__auto___24431 = (0);
while(true){
if((i__17864__auto___24431 < len__17863__auto___24430)){
args__17870__auto__.push((arguments[i__17864__auto___24431]));

var G__24432 = (i__17864__auto___24431 + (1));
i__17864__auto___24431 = G__24432;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

climbr.utils.utils.TODO.cljs$lang$maxFixedArity = (2);

climbr.utils.utils.TODO.cljs$lang$applyTo = (function (seq24427){
var G__24428 = cljs.core.first.call(null,seq24427);
var seq24427__$1 = cljs.core.next.call(null,seq24427);
var G__24429 = cljs.core.first.call(null,seq24427__$1);
var seq24427__$2 = cljs.core.next.call(null,seq24427__$1);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic(G__24428,G__24429,seq24427__$2);
});

climbr.utils.utils.TODO.cljs$lang$macro = true;
/**
 * true if coll contains el
 */
climbr.utils.utils.in_QMARK_ = (function climbr$utils$utils$in_QMARK_(coll,el){
return cljs.core.some.call(null,(function (p1__24433_SHARP_){
return cljs.core._EQ_.call(null,el,p1__24433_SHARP_);
}),coll);
});
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.script,climbr.utils.utils.which,climbr.utils.utils.parses,climbr.utils.utils.source,climbr.utils.utils.code,climbr.utils.utils.end,climbr.utils.utils.extracts,climbr.utils.utils.all,climbr.utils.utils.TODOs);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.issue,climbr.utils.utils.macro);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.import$,climbr.utils.utils.globally);

//# sourceMappingURL=utils.js.map?rel=1476565036182