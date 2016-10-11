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
var args__17871__auto__ = [];
var len__17864__auto___31240 = arguments.length;
var i__17865__auto___31241 = (0);
while(true){
if((i__17865__auto___31241 < len__17864__auto___31240)){
args__17871__auto__.push((arguments[i__17865__auto___31241]));

var G__31242 = (i__17865__auto___31241 + (1));
i__17865__auto___31241 = G__31242;
continue;
} else {
}
break;
}

var argseq__17872__auto__ = ((((2) < args__17871__auto__.length))?(new cljs.core.IndexedSeq(args__17871__auto__.slice((2)),(0))):null);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17872__auto__);
});

climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

climbr.utils.utils.TODO.cljs$lang$maxFixedArity = (2);

climbr.utils.utils.TODO.cljs$lang$applyTo = (function (seq31237){
var G__31238 = cljs.core.first.call(null,seq31237);
var seq31237__$1 = cljs.core.next.call(null,seq31237);
var G__31239 = cljs.core.first.call(null,seq31237__$1);
var seq31237__$2 = cljs.core.next.call(null,seq31237__$1);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic(G__31238,G__31239,seq31237__$2);
});

climbr.utils.utils.TODO.cljs$lang$macro = true;
/**
 * true if coll contains elm
 */
climbr.utils.utils.in_QMARK_ = (function climbr$utils$utils$in_QMARK_(coll,el){
return cljs.core.some.call(null,(function (p1__31243_SHARP_){
return cljs.core._EQ_.call(null,el,p1__31243_SHARP_);
}),coll);
});
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.script,climbr.utils.utils.which,climbr.utils.utils.parses,climbr.utils.utils.source,climbr.utils.utils.code,climbr.utils.utils.end,climbr.utils.utils.extracts,climbr.utils.utils.all,climbr.utils.utils.TODOs);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.issue,climbr.utils.utils.macro);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.import$,climbr.utils.utils.globally);
climbr.utils.utils.when_let_STAR_ = (function climbr$utils$utils$when_let_STAR_(var_args){
var args__17871__auto__ = [];
var len__17864__auto___31248 = arguments.length;
var i__17865__auto___31249 = (0);
while(true){
if((i__17865__auto___31249 < len__17864__auto___31248)){
args__17871__auto__.push((arguments[i__17865__auto___31249]));

var G__31250 = (i__17865__auto___31249 + (1));
i__17865__auto___31249 = G__31250;
continue;
} else {
}
break;
}

var argseq__17872__auto__ = ((((3) < args__17871__auto__.length))?(new cljs.core.IndexedSeq(args__17871__auto__.slice((3)),(0))):null);
return climbr.utils.utils.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17872__auto__);
});

climbr.utils.utils.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.seq.call(null,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.first.call(null,bindings)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.second.call(null,bindings))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("climbr.utils.utils","when-let*","climbr.utils.utils/when-let*",1421207562,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.drop.call(null,(2),bindings)),body)))))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
}
});

climbr.utils.utils.when_let_STAR_.cljs$lang$maxFixedArity = (3);

climbr.utils.utils.when_let_STAR_.cljs$lang$applyTo = (function (seq31244){
var G__31245 = cljs.core.first.call(null,seq31244);
var seq31244__$1 = cljs.core.next.call(null,seq31244);
var G__31246 = cljs.core.first.call(null,seq31244__$1);
var seq31244__$2 = cljs.core.next.call(null,seq31244__$1);
var G__31247 = cljs.core.first.call(null,seq31244__$2);
var seq31244__$3 = cljs.core.next.call(null,seq31244__$2);
return climbr.utils.utils.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__31245,G__31246,G__31247,seq31244__$3);
});

climbr.utils.utils.when_let_STAR_.cljs$lang$macro = true;
climbr.utils.utils.for_each = (function climbr$utils$utils$for_each(_AMPERSAND_form,_AMPERSAND_env,_){
return new cljs.core.Keyword(null,"TODO","TODO",-523795145);
});

climbr.utils.utils.for_each.cljs$lang$macro = true;
climbr.utils.utils.test = (function climbr$utils$utils$test(ts){
var temp__4423__auto___31251 = false;
if(temp__4423__auto___31251){
var x_31252 = temp__4423__auto___31251;
} else {
}

return climbr.utils.utils.when_let_STAR_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.utils.utils.x,(1),climbr.utils.utils.y,(2)], null),climbr.utils.utils.println.call(null,((1) + (2))));
});

//# sourceMappingURL=utils.js.map?rel=1476217195442