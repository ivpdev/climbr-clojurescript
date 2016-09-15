// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.utils.utils');
goog.require('cljs.core');
goog.require('reagi.core');
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
var len__17863__auto___20916 = arguments.length;
var i__17864__auto___20917 = (0);
while(true){
if((i__17864__auto___20917 < len__17863__auto___20916)){
args__17870__auto__.push((arguments[i__17864__auto___20917]));

var G__20918 = (i__17864__auto___20917 + (1));
i__17864__auto___20917 = G__20918;
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

climbr.utils.utils.TODO.cljs$lang$applyTo = (function (seq20913){
var G__20914 = cljs.core.first.call(null,seq20913);
var seq20913__$1 = cljs.core.next.call(null,seq20913);
var G__20915 = cljs.core.first.call(null,seq20913__$1);
var seq20913__$2 = cljs.core.next.call(null,seq20913__$1);
return climbr.utils.utils.TODO.cljs$core$IFn$_invoke$arity$variadic(G__20914,G__20915,seq20913__$2);
});

climbr.utils.utils.TODO.cljs$lang$macro = true;
climbr.utils.utils.not_keyword_QMARK_ = (function climbr$utils$utils$not_keyword_QMARK_(val){
return !((val instanceof cljs.core.Keyword));
});
climbr.utils.utils.without_keywords = (function climbr$utils$utils$without_keywords(col){
return cljs.core.filter.call(null,climbr.utils.utils.not_keyword_QMARK_,col);
});
climbr.utils.utils.signal_from_property_BANG_ = (function climbr$utils$utils$signal_from_property_BANG_(prop){
var behaviour = reagi.core.behavior_call.call(null,(function (){
return prop;
}));
climbr.utils.utils.TODO.call(null,climbr.utils.utils.factor,cljs.core.time,cljs.core.into,climbr.utils.utils.config);

return reagi.core.sample.call(null,(10),behaviour);
});
/**
 * creates watch(signal + data) body position
 */
climbr.utils.utils.create_body_position_watch_BANG_ = (function climbr$utils$utils$create_body_position_watch_BANG_(body){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),body,new cljs.core.Keyword(null,"signal","signal",-1984951589),climbr.utils.utils.signal_from_property_BANG_.call(null,body.position)], null);
});
climbr.utils.utils.sqrt = (function climbr$utils$utils$sqrt(x){
return Math.sqrt(x);
});
climbr.utils.utils.sqr = (function climbr$utils$utils$sqr(x){
return (x * x);
});
/**
 * from pair of body position watches creates a watch of body distances
 */
climbr.utils.utils.create_distance_watch_BANG_ = (function climbr$utils$utils$create_distance_watch_BANG_(position_watches_pair){
var pos1_watch = cljs.core.get.call(null,position_watches_pair,(0));
var pos2_watch = cljs.core.get.call(null,position_watches_pair,(1));
var body1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(pos1_watch);
var body2 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(pos2_watch);
var pos1_sig = new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(pos1_watch);
var pos2_sig = new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(pos2_watch);
var pos_LT_1_PLUS_2_GT_sig = reagi.core.zip.call(null,pos1_sig,pos2_sig);
var distance_sig = reagi.core.map.call(null,((function (pos1_watch,pos2_watch,body1,body2,pos1_sig,pos2_sig,pos_LT_1_PLUS_2_GT_sig){
return (function (positions){
var pos1 = cljs.core.get.call(null,positions,(0));
var pos2 = cljs.core.get.call(null,positions,(1));
var x1 = pos1.x;
var y1 = pos1.y;
var x2 = pos2.x;
var y2 = pos2.y;
return climbr.utils.utils.sqrt.call(null,(climbr.utils.utils.sqr.call(null,(x2 - x1)) + climbr.utils.utils.sqr.call(null,(y2 - y1))));
});})(pos1_watch,pos2_watch,body1,body2,pos1_sig,pos2_sig,pos_LT_1_PLUS_2_GT_sig))
,pos_LT_1_PLUS_2_GT_sig);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body1,body2], null),new cljs.core.Keyword(null,"signal","signal",-1984951589),distance_sig], null);
});
/**
 * creates watch(signal + data) detecting if two bodies are near or not
 */
climbr.utils.utils.create_nearing_watch_BANG_ = (function climbr$utils$utils$create_nearing_watch_BANG_(threshold,distance_watch){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(distance_watch);
var distance_sig = new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(distance_watch);
var near_sig = reagi.core.map.call(null,((function (data,distance_sig){
return (function (p1__20919_SHARP_){
return (p1__20919_SHARP_ < threshold);
});})(data,distance_sig))
,distance_sig);
var near_change_sig = reagi.core.uniq.call(null,near_sig);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"signal","signal",-1984951589),near_change_sig], null);
});
climbr.utils.utils.cartesian_prod = (function climbr$utils$utils$cartesian_prod(col1,col2){
var iter__17577__auto__ = (function climbr$utils$utils$cartesian_prod_$_iter__20926(s__20927){
return (new cljs.core.LazySeq(null,(function (){
var s__20927__$1 = s__20927;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20927__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17573__auto__ = ((function (s__20927__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function climbr$utils$utils$cartesian_prod_$_iter__20926_$_iter__20928(s__20929){
return (new cljs.core.LazySeq(null,((function (s__20927__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__20929__$1 = s__20929;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__20929__$1);
if(temp__4425__auto____$1){
var s__20929__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20929__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__20929__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__20931 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__20930 = (0);
while(true){
if((i__20930 < size__17576__auto__)){
var y = cljs.core._nth.call(null,c__17575__auto__,i__20930);
cljs.core.chunk_append.call(null,b__20931,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__20932 = (i__20930 + (1));
i__20930 = G__20932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20931),climbr$utils$utils$cartesian_prod_$_iter__20926_$_iter__20928.call(null,cljs.core.chunk_rest.call(null,s__20929__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20931),null);
}
} else {
var y = cljs.core.first.call(null,s__20929__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),climbr$utils$utils$cartesian_prod_$_iter__20926_$_iter__20928.call(null,cljs.core.rest.call(null,s__20929__$2)));
}
} else {
return null;
}
break;
}
});})(s__20927__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__20927__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__17574__auto__ = cljs.core.seq.call(null,iterys__17573__auto__.call(null,col2));
if(fs__17574__auto__){
return cljs.core.concat.call(null,fs__17574__auto__,climbr$utils$utils$cartesian_prod_$_iter__20926.call(null,cljs.core.rest.call(null,s__20927__$1)));
} else {
var G__20933 = cljs.core.rest.call(null,s__20927__$1);
s__20927__$1 = G__20933;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,col1);
});
climbr.utils.utils.watch_approaching_BANG_ = (function climbr$utils$utils$watch_approaching_BANG_(config){
var bodies1 = climbr.utils.utils.without_keywords.call(null,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(config));
var bodies2 = climbr.utils.utils.without_keywords.call(null,new cljs.core.Keyword(null,"approaching","approaching",-564158407).cljs$core$IFn$_invoke$arity$1(config));
var distance_threshold = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"distance","distance",-1671893894)], null));
var action_on = new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(config);
var action_off = new cljs.core.Keyword(null,"off","off",606440789).cljs$core$IFn$_invoke$arity$1(config);
var bodies1_position_watches = cljs.core.map.call(null,climbr.utils.utils.create_body_position_watch_BANG_,bodies1);
var bodies2_position_watches = cljs.core.map.call(null,climbr.utils.utils.create_body_position_watch_BANG_,bodies2);
var bodies_pairs_to_watch = climbr.utils.utils.cartesian_prod.call(null,bodies1_position_watches,bodies2_position_watches);
var distance_watches = cljs.core.map.call(null,climbr.utils.utils.create_distance_watch_BANG_,bodies_pairs_to_watch);
var nearing_watches = cljs.core.map.call(null,cljs.core.partial.call(null,climbr.utils.utils.create_nearing_watch_BANG_,distance_threshold),distance_watches);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (bodies1,bodies2,distance_threshold,action_on,action_off,bodies1_position_watches,bodies2_position_watches,bodies_pairs_to_watch,distance_watches,nearing_watches){
return (function (watch){
var signal = new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(watch);
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(watch);
return reagi.core.map.call(null,((function (signal,data,bodies1,bodies2,distance_threshold,action_on,action_off,bodies1_position_watches,bodies2_position_watches,bodies_pairs_to_watch,distance_watches,nearing_watches){
return (function (near){
if(cljs.core.truth_(near)){
return cljs.core.apply.call(null,action_on,data);
} else {
return cljs.core.apply.call(null,action_off,data);
}
});})(signal,data,bodies1,bodies2,distance_threshold,action_on,action_off,bodies1_position_watches,bodies2_position_watches,bodies_pairs_to_watch,distance_watches,nearing_watches))
,signal);
});})(bodies1,bodies2,distance_threshold,action_on,action_off,bodies1_position_watches,bodies2_position_watches,bodies_pairs_to_watch,distance_watches,nearing_watches))
,nearing_watches));
});
climbr.utils.utils.TODO.call(null,climbr.utils.utils.move,climbr.utils.utils.all,climbr.utils.utils.bodies,climbr.utils.utils.approaching,climbr.utils.utils.watch,cljs.core.into,climbr.utils.utils.matter,climbr.utils.utils.package$);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.script,climbr.utils.utils.which,climbr.utils.utils.parses,climbr.utils.utils.source,climbr.utils.utils.code,climbr.utils.utils.end,climbr.utils.utils.extracts,climbr.utils.utils.all,climbr.utils.utils.TODOs);
climbr.utils.utils.TODO.call(null,climbr.utils.utils.create,climbr.utils.utils.issue,climbr.utils.utils.macro);

//# sourceMappingURL=utils.js.map?rel=1473977623609