// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.utils.utils');
goog.require('cljs.core');
goog.require('cemerick.url');
climbr.utils.utils.def_ = (function climbr$utils$utils$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__7380__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})(),(function (){var x__7380__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7380__auto__);
})())));
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
var args__7658__auto__ = [];
var len__7651__auto___7874 = arguments.length;
var i__7652__auto___7875 = (0);
while(true){
if((i__7652__auto___7875 < len__7651__auto___7874)){
args__7658__auto__.push((arguments[i__7652__auto___7875]));

var G__7876 = (i__7652__auto___7875 + (1));
i__7652__auto___7875 = G__7876;
continue;
} else {
}
break;
}

var argseq__7659__auto__ = ((((2) < args__7658__auto__.length))?(new cljs.core.IndexedSeq(args__7658__auto__.slice((2)),(0),null)):null);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7659__auto__);
});

climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

climbr.utils.utils.TODO.cljs$lang$maxFixedArity = (2);

climbr.utils.utils.TODO.cljs$lang$applyTo = (function (seq7871){
var G__7872 = cljs.core.first.call(null,seq7871);
var seq7871__$1 = cljs.core.next.call(null,seq7871);
var G__7873 = cljs.core.first.call(null,seq7871__$1);
var seq7871__$2 = cljs.core.next.call(null,seq7871__$1);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic(G__7872,G__7873,seq7871__$2);
});


climbr.utils.utils.TODO.cljs$lang$macro = true;
/**
 * true if coll contains el
 */
climbr.utils.utils.in_QMARK_ = (function climbr$utils$utils$in_QMARK_(coll,el){
return cljs.core.some.call(null,(function (p1__7877_SHARP_){
return cljs.core._EQ_.call(null,el,p1__7877_SHARP_);
}),coll);
});
climbr.utils.utils.get_level_name = (function climbr$utils$utils$get_level_name(){
var location_details = cemerick.url.url.call(null,window.location.href);
var query = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(location_details);
var level = cljs.core.get.call(null,query,"l");
var default_level = "l0";
var or__6543__auto__ = level;
if(cljs.core.truth_(or__6543__auto__)){
return or__6543__auto__;
} else {
return default_level;
}
});
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.script,climbr.utils.utils.which,climbr.utils.utils.parses,climbr.utils.utils.source,climbr.utils.utils.code,climbr.utils.utils.end,climbr.utils.utils.extracts,climbr.utils.utils.all,climbr.utils.utils.TODOs);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.issue,climbr.utils.utils.macro);
climbr.utils.utils.TODO.call(null,cljs.core.import$,climbr.utils.utils.globally);

//# sourceMappingURL=utils.js.map?rel=1478625868762