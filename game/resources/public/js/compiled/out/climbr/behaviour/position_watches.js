// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.behaviour.position_watches');
goog.require('cljs.core');
goog.require('reagi.core');
goog.require('climbr.utils.utils');
climbr.behaviour.position_watches.def_ = (function climbr$behaviour$position_watches$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__19579__auto__ = item;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19579__auto__);
})(),(function (){var x__19579__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19579__auto__);
})())));
});

climbr.behaviour.position_watches.def_.cljs$lang$macro = true;
climbr.behaviour.position_watches.not_keyword_QMARK_ = (function climbr$behaviour$position_watches$not_keyword_QMARK_(val){
return !((val instanceof cljs.core.Keyword));
});
climbr.behaviour.position_watches.without_keywords = (function climbr$behaviour$position_watches$without_keywords(col){
return cljs.core.filter.call(null,climbr.behaviour.position_watches.not_keyword_QMARK_,col);
});
climbr.behaviour.position_watches.signal_from_property_BANG_ = (function climbr$behaviour$position_watches$signal_from_property_BANG_(prop){
var behaviour = reagi.core.behavior_call.call(null,(function (){
return prop;
}));
return reagi.core.sample.call(null,(10),behaviour);
});
/**
 * creates watch(signal + data) body position
 */
climbr.behaviour.position_watches.create_body_position_watch_BANG_ = (function climbr$behaviour$position_watches$create_body_position_watch_BANG_(body){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),body,new cljs.core.Keyword(null,"signal","signal",-1984951589),climbr.behaviour.position_watches.signal_from_property_BANG_.call(null,body.position)], null);
});
climbr.behaviour.position_watches.sqrt = (function climbr$behaviour$position_watches$sqrt(x){
return Math.sqrt(x);
});
climbr.behaviour.position_watches.sqr = (function climbr$behaviour$position_watches$sqr(x){
return (x * x);
});
/**
 * from pair of body position watches creates a watch of body distances
 */
climbr.behaviour.position_watches.create_distance_watch_BANG_ = (function climbr$behaviour$position_watches$create_distance_watch_BANG_(position_watches_pair){
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
return climbr.behaviour.position_watches.sqrt.call(null,(climbr.behaviour.position_watches.sqr.call(null,(x2 - x1)) + climbr.behaviour.position_watches.sqr.call(null,(y2 - y1))));
});})(pos1_watch,pos2_watch,body1,body2,pos1_sig,pos2_sig,pos_LT_1_PLUS_2_GT_sig))
,pos_LT_1_PLUS_2_GT_sig);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [body1,body2], null),new cljs.core.Keyword(null,"signal","signal",-1984951589),distance_sig], null);
});
climbr.behaviour.position_watches.create_position_predicate_watch_BANG_ = (function climbr$behaviour$position_watches$create_position_predicate_watch_BANG_(predicate,position_watch){
var position_signal = new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(position_watch);
var predicate_signal = reagi.core.map.call(null,((function (position_signal){
return (function (position){
var x = position.x;
var y = position.y;
return predicate.call(null,x,y);
});})(position_signal))
,position_signal);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(position_watch),new cljs.core.Keyword(null,"signal","signal",-1984951589),predicate_signal], null);
});
/**
 * creates watch(signal + data) detecting if two bodies are near or not
 */
climbr.behaviour.position_watches.create_nearing_watch_BANG_ = (function climbr$behaviour$position_watches$create_nearing_watch_BANG_(threshold,distance_watch){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(distance_watch);
var distance_sig = new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(distance_watch);
var near_sig = reagi.core.map.call(null,((function (data,distance_sig){
return (function (p1__30742_SHARP_){
return (p1__30742_SHARP_ < threshold);
});})(data,distance_sig))
,distance_sig);
var near_change_sig = reagi.core.uniq.call(null,near_sig);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"signal","signal",-1984951589),near_change_sig], null);
});
climbr.behaviour.position_watches.watch_approaching_BANG_ = (function climbr$behaviour$position_watches$watch_approaching_BANG_(config){
var bodies1 = climbr.behaviour.position_watches.without_keywords.call(null,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(config));
var bodies2 = climbr.behaviour.position_watches.without_keywords.call(null,new cljs.core.Keyword(null,"approaching","approaching",-564158407).cljs$core$IFn$_invoke$arity$1(config));
var distance_threshold = cljs.core.get_in.call(null,config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"distance","distance",-1671893894)], null));
var action_on = new cljs.core.Keyword(null,"when-near","when-near",-35119232).cljs$core$IFn$_invoke$arity$1(config);
var action_off = new cljs.core.Keyword(null,"when-far","when-far",2057815104).cljs$core$IFn$_invoke$arity$1(config);
var bodies1_position_watches = cljs.core.map.call(null,climbr.behaviour.position_watches.create_body_position_watch_BANG_,bodies1);
var bodies2_position_watches = cljs.core.map.call(null,climbr.behaviour.position_watches.create_body_position_watch_BANG_,bodies2);
var bodies_pairs_to_watch = climbr.utils.utils.cartesian_prod.call(null,bodies1_position_watches,bodies2_position_watches);
var distance_watches = cljs.core.map.call(null,climbr.behaviour.position_watches.create_distance_watch_BANG_,bodies_pairs_to_watch);
var nearing_watches = cljs.core.map.call(null,cljs.core.partial.call(null,climbr.behaviour.position_watches.create_nearing_watch_BANG_,distance_threshold),distance_watches);
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
climbr.behaviour.position_watches.watch_position_BANG_ = (function climbr$behaviour$position_watches$watch_position_BANG_(config){
var bodies = climbr.behaviour.position_watches.without_keywords.call(null,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(config));
var position_predicate = new cljs.core.Keyword(null,"is","is",369128998).cljs$core$IFn$_invoke$arity$1(config);
var action_on = new cljs.core.Keyword(null,"when-true","when-true",-657079170).cljs$core$IFn$_invoke$arity$1(config);
var bodies_position_watches = cljs.core.map.call(null,climbr.behaviour.position_watches.create_body_position_watch_BANG_,bodies);
var bodies_position_predicate_watches = cljs.core.map.call(null,cljs.core.partial.call(null,climbr.behaviour.position_watches.create_position_predicate_watch_BANG_,position_predicate),bodies_position_watches);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (bodies,position_predicate,action_on,bodies_position_watches,bodies_position_predicate_watches){
return (function (watch){
var signal = new cljs.core.Keyword(null,"signal","signal",-1984951589).cljs$core$IFn$_invoke$arity$1(watch);
return reagi.core.map.call(null,((function (signal,bodies,position_predicate,action_on,bodies_position_watches,bodies_position_predicate_watches){
return (function (is_true){
if(cljs.core.truth_(is_true)){
return action_on.call(null);
} else {
return null;
}
});})(signal,bodies,position_predicate,action_on,bodies_position_watches,bodies_position_predicate_watches))
,signal);
});})(bodies,position_predicate,action_on,bodies_position_watches,bodies_position_predicate_watches))
,bodies_position_predicate_watches));
});

//# sourceMappingURL=position_watches.js.map?rel=1483691449346