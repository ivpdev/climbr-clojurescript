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
var len__17863__auto___79005 = arguments.length;
var i__17864__auto___79006 = (0);
while(true){
if((i__17864__auto___79006 < len__17863__auto___79005)){
args__17870__auto__.push((arguments[i__17864__auto___79006]));

var G__79007 = (i__17864__auto___79006 + (1));
i__17864__auto___79006 = G__79007;
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

climbr.utils.utils.TODO.cljs$lang$applyTo = (function (seq79002){
var G__79003 = cljs.core.first.call(null,seq79002);
var seq79002__$1 = cljs.core.next.call(null,seq79002);
var G__79004 = cljs.core.first.call(null,seq79002__$1);
var seq79002__$2 = cljs.core.next.call(null,seq79002__$1);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic(G__79003,G__79004,seq79002__$2);
});

climbr.utils.utils.TODO.cljs$lang$macro = true;
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.script,climbr.utils.utils.which,climbr.utils.utils.parses,climbr.utils.utils.source,climbr.utils.utils.code,climbr.utils.utils.end,climbr.utils.utils.extracts,climbr.utils.utils.all,climbr.utils.utils.TODOs);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.issue,climbr.utils.utils.macro);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.import$,climbr.utils.utils.globally);
climbr.utils.utils.when_let_STAR_ = (function climbr$utils$utils$when_let_STAR_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___79012 = arguments.length;
var i__17864__auto___79013 = (0);
while(true){
if((i__17864__auto___79013 < len__17863__auto___79012)){
args__17870__auto__.push((arguments[i__17864__auto___79013]));

var G__79014 = (i__17864__auto___79013 + (1));
i__17864__auto___79013 = G__79014;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return climbr.utils.utils.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

climbr.utils.utils.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.seq.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,bindings)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,bindings))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("climbr.utils.utils","when-let*","climbr.utils.utils/when-let*",1421207562,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.drop.call(null,(2),bindings)),body)))))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
}
});

climbr.utils.utils.when_let_STAR_.cljs$lang$maxFixedArity = (3);

climbr.utils.utils.when_let_STAR_.cljs$lang$applyTo = (function (seq79008){
var G__79009 = cljs.core.first.call(null,seq79008);
var seq79008__$1 = cljs.core.next.call(null,seq79008);
var G__79010 = cljs.core.first.call(null,seq79008__$1);
var seq79008__$2 = cljs.core.next.call(null,seq79008__$1);
var G__79011 = cljs.core.first.call(null,seq79008__$2);
var seq79008__$3 = cljs.core.next.call(null,seq79008__$2);
return climbr.utils.utils.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__79009,G__79010,G__79011,seq79008__$3);
});

climbr.utils.utils.when_let_STAR_.cljs$lang$macro = true;
climbr.utils.utils.for_each = (function climbr$utils$utils$for_each(_AMPERSAND_form,_AMPERSAND_env,_){
return new cljs.core.Keyword(null,"TODO","TODO",-523795145);
});

climbr.utils.utils.for_each.cljs$lang$macro = true;
climbr.utils.utils.test = (function climbr$utils$utils$test(ts){
var temp__4423__auto___79015 = false;
if(temp__4423__auto___79015){
var x_79016 = temp__4423__auto___79015;
} else {
}

return climbr.utils.utils.when_let_STAR_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.utils.utils.x,(1),climbr.utils.utils.y,(2)], null),climbr.utils.utils.println.call(null,((1) + (2))));
});

//# sourceMappingURL=utils.js.map?rel=1476047227901