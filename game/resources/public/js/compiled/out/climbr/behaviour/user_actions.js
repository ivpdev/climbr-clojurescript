// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.figures.figures');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('cljs.core.async');
goog.require('climbr.figures.climber');
goog.require('climbr.controls.keyboard');
goog.require('clojure.data');
climbr.behaviour.user_actions.fetch_climber_part = (function climbr$behaviour$user_actions$fetch_climber_part(part){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),part], null));
});
climbr.behaviour.user_actions.fetch_holding_hands = (function climbr$behaviour$user_actions$fetch_holding_hands(){
var h1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var h2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h1,h2], null);
var standables = climbr.figures.figures.get_all_standables.call(null);
var hand_standable_combinations = climbr.utils.utils.cartesian_prod.call(null,hands,standables);
var hand_above_QMARK_ = ((function (h1,h2,hands,standables,hand_standable_combinations){
return (function (pair){
var hand = cljs.core.nth.call(null,pair,(0));
var standable = cljs.core.nth.call(null,pair,(1));
return climbr.matter.matter.is_above_QMARK_.call(null,hand,standable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(h1,h2,hands,standables,hand_standable_combinations))
;
return cljs.core.map.call(null,((function (h1,h2,hands,standables,hand_standable_combinations,hand_above_QMARK_){
return (function (p1__22981_SHARP_){
return cljs.core.nth.call(null,p1__22981_SHARP_,(0));
});})(h1,h2,hands,standables,hand_standable_combinations,hand_above_QMARK_))
,cljs.core.filter.call(null,hand_above_QMARK_,hand_standable_combinations));
});
climbr.behaviour.user_actions.fetch_hold_SHARP_free_hand = (function climbr$behaviour$user_actions$fetch_hold_SHARP_free_hand(){
var holding_hands = climbr.behaviour.user_actions.fetch_holding_hands.call(null);
var h1 = new cljs.core.Keyword(null,"h1","h1",-1896887462).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var h2 = new cljs.core.Keyword(null,"h2","h2",-372662728).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var hands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h1,h2], null);
var is_holding_hand_QMARK_ = ((function (holding_hands,h1,h2,hands){
return (function (hand){
return cljs.core.some.call(null,((function (holding_hands,h1,h2,hands){
return (function (p1__22982_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__22982_SHARP_,hand);
});})(holding_hands,h1,h2,hands))
,holding_hands);
});})(holding_hands,h1,h2,hands))
;
return cljs.core.filter.call(null,((function (holding_hands,h1,h2,hands,is_holding_hand_QMARK_){
return (function (hand){
return cljs.core.not.call(null,is_holding_hand_QMARK_.call(null,hand));
});})(holding_hands,h1,h2,hands,is_holding_hand_QMARK_))
,hands);
});
climbr.behaviour.user_actions.fetch_hook_SHARP_free_hand = (function climbr$behaviour$user_actions$fetch_hook_SHARP_free_hand(){
var h1_hooked = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165));
var h2_hooked = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382));
var both_hooked = (function (){var and__18730__auto__ = climbr.utils.utils.not_nil_QMARK_.call(null,h1_hooked);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.utils.utils.not_nil_QMARK_.call(null,h2_hooked);
} else {
return and__18730__auto__;
}
})();
if(cljs.core.truth_(both_hooked)){
return null;
} else {
if(!((h1_hooked == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
} else {
if(!((h2_hooked == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
} else {
return null;

}
}
}
});
climbr.behaviour.user_actions.fetch_hands = (function climbr$behaviour$user_actions$fetch_hands(hand){
var h1 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__22984 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__22984) {
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_hand], null);

break;
case "hook#free":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hook_SHARP_free_hand.call(null)], null);

break;
case "hold#free":
return climbr.behaviour.user_actions.fetch_hold_SHARP_free_hand.call(null);

break;
case "holding":
return climbr.behaviour.user_actions.fetch_holding_hands.call(null);

break;
case "both":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand,right_hand], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand)].join('')));

}
});
climbr.behaviour.user_actions.on_the_ground_QMARK_ = (function climbr$behaviour$user_actions$on_the_ground_QMARK_(){
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var y = climbr.matter.matter.y.call(null,body);
return (y > (550));
});
climbr.behaviour.user_actions.is_standing_QMARK_ = (function climbr$behaviour$user_actions$is_standing_QMARK_(){
var climber_body = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(climbr.figures.climber.climber);
var standables = climbr.figures.figures.get_all_standables.call(null);
var climber_above_QMARK_ = ((function (climber_body,standables){
return (function (p1__22986_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__22986_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__22987_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__22987_SHARP_));
});})(hands,body))
;
return cljs.core.some.call(null,above_body_QMARK_,hands);
});
climbr.behaviour.user_actions.h1_hooked_QMARK_ = (function climbr$behaviour$user_actions$h1_hooked_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165)) == null));
});
climbr.behaviour.user_actions.h2_hooked_QMARK_ = (function climbr$behaviour$user_actions$h2_hooked_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382)) == null));
});
climbr.behaviour.user_actions.hooked_both_QMARK_ = (function climbr$behaviour$user_actions$hooked_both_QMARK_(){
var and__18730__auto__ = climbr.behaviour.user_actions.h1_hooked_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.h2_hooked_QMARK_.call(null);
} else {
return and__18730__auto__;
}
});
climbr.behaviour.user_actions.hooked_nothing_QMARK_ = (function climbr$behaviour$user_actions$hooked_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__18742__auto__ = climbr.behaviour.user_actions.h1_hooked_QMARK_.call(null);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return climbr.behaviour.user_actions.h2_hooked_QMARK_.call(null);
}
})());
});
climbr.behaviour.user_actions.hooked_one_QMARK_ = (function climbr$behaviour$user_actions$hooked_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null)));
});
climbr.behaviour.user_actions.holds_one_QMARK_ = (function climbr$behaviour$user_actions$holds_one_QMARK_(){
return (cljs.core.count.call(null,climbr.behaviour.user_actions.fetch_holding_hands.call(null)) > (0));
});
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(var_args){
var args__19857__auto__ = [];
var len__19850__auto___23002 = arguments.length;
var i__19851__auto___23003 = (0);
while(true){
if((i__19851__auto___23003 < len__19850__auto___23002)){
args__19857__auto__.push((arguments[i__19851__auto___23003]));

var G__23004 = (i__19851__auto___23003 + (1));
i__19851__auto___23003 = G__23004;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((3) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19858__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__22992){
var vec__22993 = p__22992;
var ___$1 = cljs.core.nth.call(null,vec__22993,(0),null);
var opts = cljs.core.nth.call(null,vec__22993,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__22996 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__22996) {
case "left-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "right-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "both-hands":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));

break;
case "hook#free-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"hook#free","hook#free",-504039825));

break;
case "hold#free-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"hold#free","hold#free",-93454629));

break;
case "holding-hands":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"holding","holding",1269510599));

break;
case "body":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force_obj = (function (){var G__22997 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__22997) {
case "left-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "right-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "both-hands":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "hold#free-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "holding-hands":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "hook#free-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "body":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"body","body",-2049205669));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var factor = (function (){var or__18742__auto__ = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return (1);
}
})();
var vertical_force_component_raw = (new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var horizontal_force_component_raw = (new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var directions = ((cljs.core.vector_QMARK_.call(null,where))?where:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)
);
var vertical_force_component = (cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"top","top",-1856271961)))?(- vertical_force_component_raw):(0));
var horizontal_force_component = (cljs.core.truth_((function (){var and__18730__auto__ = climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_(and__18730__auto__)){
return climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return and__18730__auto__;
}
})())?(0):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937)))?(- horizontal_force_component_raw):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833)))?horizontal_force_component_raw:(0)
)));
var force = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),horizontal_force_component,new cljs.core.Keyword(null,"y","y",-1757859776),vertical_force_component], null);
var seq__22998 = cljs.core.seq.call(null,bodies);
var chunk__22999 = null;
var count__23000 = (0);
var i__23001 = (0);
while(true){
if((i__23001 < count__23000)){
var b = cljs.core._nth.call(null,chunk__22999,i__23001);
climbr.matter.matter.apply_force.call(null,b,force);

var G__23007 = seq__22998;
var G__23008 = chunk__22999;
var G__23009 = count__23000;
var G__23010 = (i__23001 + (1));
seq__22998 = G__23007;
chunk__22999 = G__23008;
count__23000 = G__23009;
i__23001 = G__23010;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22998);
if(temp__4657__auto__){
var seq__22998__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22998__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__22998__$1);
var G__23011 = cljs.core.chunk_rest.call(null,seq__22998__$1);
var G__23012 = c__19556__auto__;
var G__23013 = cljs.core.count.call(null,c__19556__auto__);
var G__23014 = (0);
seq__22998 = G__23011;
chunk__22999 = G__23012;
count__23000 = G__23013;
i__23001 = G__23014;
continue;
} else {
var b = cljs.core.first.call(null,seq__22998__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__23015 = cljs.core.next.call(null,seq__22998__$1);
var G__23016 = null;
var G__23017 = (0);
var G__23018 = (0);
seq__22998 = G__23015;
chunk__22999 = G__23016;
count__23000 = G__23017;
i__23001 = G__23018;
continue;
}
} else {
return null;
}
}
break;
}
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$maxFixedArity = (3);

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq22988){
var G__22989 = cljs.core.first.call(null,seq22988);
var seq22988__$1 = cljs.core.next.call(null,seq22988);
var G__22990 = cljs.core.first.call(null,seq22988__$1);
var seq22988__$2 = cljs.core.next.call(null,seq22988__$1);
var G__22991 = cljs.core.first.call(null,seq22988__$2);
var seq22988__$3 = cljs.core.next.call(null,seq22988__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22989,G__22990,G__22991,seq22988__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed_chan){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed_chan){
return (function (state_23076){
var state_val_23077 = (state_23076[(1)]);
if((state_val_23077 === (7))){
var inst_23062 = (state_23076[(7)]);
var inst_23061 = (state_23076[(2)]);
var inst_23062__$1 = cljs.core.get.call(null,key_actions,inst_23061);
var inst_23063 = (inst_23062__$1 == null);
var state_23076__$1 = (function (){var statearr_23078 = state_23076;
(statearr_23078[(7)] = inst_23062__$1);

return statearr_23078;
})();
if(cljs.core.truth_(inst_23063)){
var statearr_23079_23097 = state_23076__$1;
(statearr_23079_23097[(1)] = (8));

} else {
var statearr_23080_23098 = state_23076__$1;
(statearr_23080_23098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (1))){
var state_23076__$1 = state_23076;
var statearr_23081_23099 = state_23076__$1;
(statearr_23081_23099[(2)] = null);

(statearr_23081_23099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (4))){
var state_23076__$1 = state_23076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23076__$1,(7),keypressed_chan);
} else {
if((state_val_23077 === (6))){
var inst_23072 = (state_23076[(2)]);
var state_23076__$1 = state_23076;
var statearr_23082_23100 = state_23076__$1;
(statearr_23082_23100[(2)] = inst_23072);

(statearr_23082_23100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (3))){
var inst_23074 = (state_23076[(2)]);
var state_23076__$1 = state_23076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23076__$1,inst_23074);
} else {
if((state_val_23077 === (2))){
var state_23076__$1 = state_23076;
var statearr_23083_23101 = state_23076__$1;
(statearr_23083_23101[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (9))){
var inst_23062 = (state_23076[(7)]);
var inst_23066 = inst_23062.call(null);
var state_23076__$1 = state_23076;
var statearr_23085_23102 = state_23076__$1;
(statearr_23085_23102[(2)] = inst_23066);

(statearr_23085_23102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (5))){
var state_23076__$1 = state_23076;
var statearr_23086_23103 = state_23076__$1;
(statearr_23086_23103[(2)] = null);

(statearr_23086_23103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (10))){
var inst_23068 = (state_23076[(2)]);
var state_23076__$1 = (function (){var statearr_23087 = state_23076;
(statearr_23087[(8)] = inst_23068);

return statearr_23087;
})();
var statearr_23088_23104 = state_23076__$1;
(statearr_23088_23104[(2)] = null);

(statearr_23088_23104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23077 === (8))){
var state_23076__$1 = state_23076;
var statearr_23089_23105 = state_23076__$1;
(statearr_23089_23105[(2)] = null);

(statearr_23089_23105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__20805__auto__,keypressed_chan))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0 = (function (){
var statearr_23093 = [null,null,null,null,null,null,null,null,null];
(statearr_23093[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__);

(statearr_23093[(1)] = (1));

return statearr_23093;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1 = (function (state_23076){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_23076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e23094){if((e23094 instanceof Object)){
var ex__20788__auto__ = e23094;
var statearr_23095_23106 = state_23076;
(statearr_23095_23106[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23107 = state_23076;
state_23076 = G__23107;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__ = function(state_23076){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1.call(this,state_23076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed_chan))
})();
var state__20807__auto__ = (function (){var statearr_23096 = f__20806__auto__.call(null);
(statearr_23096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_23096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed_chan))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__23109 = hand_name;
switch (G__23109) {
case "h1":
return new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382);

break;
default:
return null;

}
})();
return cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),boulder_key);
});
climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_ = (function climbr$behaviour$user_actions$remove_boulder_for_hand_BANG_(hand_name){
var key_boulder = (function (){var G__23112 = hand_name;
switch (G__23112) {
case "h1":
return new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand_name)].join('')));

}
})();
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.dissoc,key_boulder);
});
climbr.behaviour.user_actions.connect_hand_and_boulder = (function climbr$behaviour$user_actions$connect_hand_and_boulder(hand,boulder,engine){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var constraint = climbr.matter.matter.constraint.create(({"bodyA": hand, "bodyB": boulder}));
var key_hooked = (function (){var G__23115 = hand_name;
switch (G__23115) {
case "h1":
return new cljs.core.Keyword(null,"h1-hooked","h1-hooked",-70028165);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-hooked","h2-hooked",131771382);

break;
default:
return null;

}
})();
climbr.matter.matter.world.addConstraint(engine.world,constraint);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_hooked,constraint);
});
climbr.behaviour.user_actions.setup_climber_release_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_release_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var release_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var boulder = climbr.behaviour.user_actions.get_hooked_boulder_for_hand.call(null,hand_name);
if(!((boulder == null))){
climbr.matter.matter.world.remove(engine.world,boulder);

return climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_.call(null,hand_name);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed,release_hand_BANG_){
return (function (state_23195){
var state_val_23196 = (state_23195[(1)]);
if((state_val_23196 === (7))){
var inst_23174 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var G__23197_23225 = (((inst_23174 instanceof cljs.core.Keyword))?inst_23174.fqn:null);
switch (G__23197_23225) {
case "release-left":
var statearr_23198_23227 = state_23195__$1;
(statearr_23198_23227[(1)] = (9));


break;
case "release-right":
var statearr_23199_23228 = state_23195__$1;
(statearr_23199_23228[(1)] = (10));


break;
case "release-both":
var statearr_23200_23229 = state_23195__$1;
(statearr_23200_23229[(1)] = (11));


break;
default:
var statearr_23201_23230 = state_23195__$1;
(statearr_23201_23230[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (1))){
var state_23195__$1 = state_23195;
var statearr_23202_23231 = state_23195__$1;
(statearr_23202_23231[(2)] = null);

(statearr_23202_23231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (4))){
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23195__$1,(7),keypressed);
} else {
if((state_val_23196 === (15))){
var inst_23187 = (state_23195[(2)]);
var state_23195__$1 = (function (){var statearr_23203 = state_23195;
(statearr_23203[(7)] = inst_23187);

return statearr_23203;
})();
var statearr_23204_23232 = state_23195__$1;
(statearr_23204_23232[(2)] = null);

(statearr_23204_23232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (13))){
var inst_23180 = (state_23195[(8)]);
var inst_23182 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_23180);
var inst_23183 = cljs.core.map.call(null,release_hand_BANG_,inst_23182);
var inst_23184 = cljs.core.doall.call(null,inst_23183);
var state_23195__$1 = state_23195;
var statearr_23205_23233 = state_23195__$1;
(statearr_23205_23233[(2)] = inst_23184);

(statearr_23205_23233[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (6))){
var inst_23191 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
var statearr_23206_23234 = state_23195__$1;
(statearr_23206_23234[(2)] = inst_23191);

(statearr_23206_23234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (3))){
var inst_23193 = (state_23195[(2)]);
var state_23195__$1 = state_23195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23195__$1,inst_23193);
} else {
if((state_val_23196 === (12))){
var state_23195__$1 = state_23195;
var statearr_23207_23235 = state_23195__$1;
(statearr_23207_23235[(2)] = null);

(statearr_23207_23235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (2))){
var state_23195__$1 = state_23195;
var statearr_23208_23236 = state_23195__$1;
(statearr_23208_23236[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (11))){
var state_23195__$1 = state_23195;
var statearr_23210_23237 = state_23195__$1;
(statearr_23210_23237[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_23210_23237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (9))){
var state_23195__$1 = state_23195;
var statearr_23211_23238 = state_23195__$1;
(statearr_23211_23238[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_23211_23238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (5))){
var state_23195__$1 = state_23195;
var statearr_23212_23239 = state_23195__$1;
(statearr_23212_23239[(2)] = null);

(statearr_23212_23239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (14))){
var state_23195__$1 = state_23195;
var statearr_23213_23240 = state_23195__$1;
(statearr_23213_23240[(2)] = null);

(statearr_23213_23240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (10))){
var state_23195__$1 = state_23195;
var statearr_23214_23241 = state_23195__$1;
(statearr_23214_23241[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_23214_23241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23196 === (8))){
var inst_23180 = (state_23195[(8)]);
var inst_23180__$1 = (state_23195[(2)]);
var state_23195__$1 = (function (){var statearr_23215 = state_23195;
(statearr_23215[(8)] = inst_23180__$1);

return statearr_23215;
})();
if(cljs.core.truth_(inst_23180__$1)){
var statearr_23216_23242 = state_23195__$1;
(statearr_23216_23242[(1)] = (13));

} else {
var statearr_23217_23243 = state_23195__$1;
(statearr_23217_23243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20805__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0 = (function (){
var statearr_23221 = [null,null,null,null,null,null,null,null,null];
(statearr_23221[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__);

(statearr_23221[(1)] = (1));

return statearr_23221;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1 = (function (state_23195){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_23195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e23222){if((e23222 instanceof Object)){
var ex__20788__auto__ = e23222;
var statearr_23223_23244 = state_23195;
(statearr_23223_23244[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23245 = state_23195;
state_23195 = G__23245;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__ = function(state_23195){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1.call(this,state_23195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,release_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_23224 = f__20806__auto__.call(null);
(statearr_23224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_23224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed,release_hand_BANG_))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.setup_climber_hook_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_hook_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var hook_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__23302 = hand_name;
switch (G__23302) {
case "h1":
return new cljs.core.Keyword(null,"h1","h1",-1896887462);

break;
case "h2":
return new cljs.core.Keyword(null,"h2","h2",-372662728);

break;
default:
return null;

}
})();
var can_hook_boulders = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-hook","can-hook",301323690),hand_key], null)));
var boulder_to_hook = cljs.core.nth.call(null,can_hook_boulders,(0));
var have_something_to_hook_QMARK_ = !((boulder_to_hook == null));
var hooked_boulder = climbr.behaviour.user_actions.get_hooked_boulder_for_hand.call(null,hand_name);
var already_hooked_QMARK_ = !((hooked_boulder == null));
var engine__$1 = new cljs.core.Keyword(null,"engine","engine",1459054265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,climbr.app_state.app_state));
if((have_something_to_hook_QMARK_) && (!(already_hooked_QMARK_))){
return climbr.behaviour.user_actions.connect_hand_and_boulder.call(null,hand,boulder_to_hook,engine__$1);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__20805__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20805__auto__,keypressed,hook_hand_BANG_){
return (function (){
var f__20806__auto__ = (function (){var switch__20784__auto__ = ((function (c__20805__auto__,keypressed,hook_hand_BANG_){
return (function (state_23328){
var state_val_23329 = (state_23328[(1)]);
if((state_val_23329 === (7))){
var inst_23306 = (state_23328[(2)]);
var state_23328__$1 = state_23328;
var G__23330_23359 = (((inst_23306 instanceof cljs.core.Keyword))?inst_23306.fqn:null);
switch (G__23330_23359) {
case "hook-left":
var statearr_23331_23361 = state_23328__$1;
(statearr_23331_23361[(1)] = (9));


break;
case "hook-right":
var statearr_23332_23362 = state_23328__$1;
(statearr_23332_23362[(1)] = (10));


break;
case "hook-both":
var statearr_23333_23363 = state_23328__$1;
(statearr_23333_23363[(1)] = (11));


break;
default:
var statearr_23334_23364 = state_23328__$1;
(statearr_23334_23364[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (1))){
var state_23328__$1 = state_23328;
var statearr_23335_23365 = state_23328__$1;
(statearr_23335_23365[(2)] = null);

(statearr_23335_23365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (4))){
var state_23328__$1 = state_23328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23328__$1,(7),keypressed);
} else {
if((state_val_23329 === (15))){
var inst_23318 = (state_23328[(2)]);
var inst_23319 = cljs.core.map.call(null,hook_hand_BANG_,inst_23318);
var inst_23320 = cljs.core.doall.call(null,inst_23319);
var state_23328__$1 = (function (){var statearr_23336 = state_23328;
(statearr_23336[(7)] = inst_23320);

return statearr_23336;
})();
var statearr_23337_23366 = state_23328__$1;
(statearr_23337_23366[(2)] = null);

(statearr_23337_23366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (13))){
var state_23328__$1 = state_23328;
var statearr_23338_23367 = state_23328__$1;
(statearr_23338_23367[(2)] = null);

(statearr_23338_23367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (6))){
var inst_23324 = (state_23328[(2)]);
var state_23328__$1 = state_23328;
var statearr_23339_23368 = state_23328__$1;
(statearr_23339_23368[(2)] = inst_23324);

(statearr_23339_23368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (3))){
var inst_23326 = (state_23328[(2)]);
var state_23328__$1 = state_23328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23328__$1,inst_23326);
} else {
if((state_val_23329 === (12))){
var state_23328__$1 = state_23328;
var statearr_23340_23369 = state_23328__$1;
(statearr_23340_23369[(2)] = null);

(statearr_23340_23369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (2))){
var state_23328__$1 = state_23328;
var statearr_23341_23370 = state_23328__$1;
(statearr_23341_23370[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (11))){
var state_23328__$1 = state_23328;
var statearr_23343_23371 = state_23328__$1;
(statearr_23343_23371[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_23343_23371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (9))){
var state_23328__$1 = state_23328;
var statearr_23344_23372 = state_23328__$1;
(statearr_23344_23372[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_23344_23372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (5))){
var state_23328__$1 = state_23328;
var statearr_23345_23373 = state_23328__$1;
(statearr_23345_23373[(2)] = null);

(statearr_23345_23373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (14))){
var inst_23312 = (state_23328[(8)]);
var inst_23316 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_23312);
var state_23328__$1 = state_23328;
var statearr_23346_23374 = state_23328__$1;
(statearr_23346_23374[(2)] = inst_23316);

(statearr_23346_23374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (10))){
var state_23328__$1 = state_23328;
var statearr_23347_23375 = state_23328__$1;
(statearr_23347_23375[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_23347_23375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23329 === (8))){
var inst_23312 = (state_23328[(8)]);
var inst_23312__$1 = (state_23328[(2)]);
var inst_23313 = (inst_23312__$1 == null);
var state_23328__$1 = (function (){var statearr_23348 = state_23328;
(statearr_23348[(8)] = inst_23312__$1);

return statearr_23348;
})();
if(cljs.core.truth_(inst_23313)){
var statearr_23349_23376 = state_23328__$1;
(statearr_23349_23376[(1)] = (13));

} else {
var statearr_23350_23377 = state_23328__$1;
(statearr_23350_23377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20805__auto__,keypressed,hook_hand_BANG_))
;
return ((function (switch__20784__auto__,c__20805__auto__,keypressed,hook_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____0 = (function (){
var statearr_23354 = [null,null,null,null,null,null,null,null,null];
(statearr_23354[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__);

(statearr_23354[(1)] = (1));

return statearr_23354;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____1 = (function (state_23328){
while(true){
var ret_value__20786__auto__ = (function (){try{while(true){
var result__20787__auto__ = switch__20784__auto__.call(null,state_23328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20787__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20787__auto__;
}
break;
}
}catch (e23355){if((e23355 instanceof Object)){
var ex__20788__auto__ = e23355;
var statearr_23356_23378 = state_23328;
(statearr_23356_23378[(5)] = ex__20788__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20786__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23379 = state_23328;
state_23328 = G__23379;
continue;
} else {
return ret_value__20786__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__ = function(state_23328){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____1.call(this,state_23328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20785__auto__;
})()
;})(switch__20784__auto__,c__20805__auto__,keypressed,hook_hand_BANG_))
})();
var state__20807__auto__ = (function (){var statearr_23357 = f__20806__auto__.call(null);
(statearr_23357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20805__auto__);

return statearr_23357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20807__auto__);
});})(c__20805__auto__,keypressed,hook_hand_BANG_))
);

return c__20805__auto__;
});
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,climbr.controls.keyboard.keypressed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"both-hands","both-hands",1160692521),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hook#free-hand","hook#free-hand",-779765343),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"holding-hands","holding-hands",1686068849),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return null;

}
}
}
}
}),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hook#free-hand","hook#free-hand",-779765343),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hold#free-hand","hold#free-hand",113706379),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

}
}
}
}
}),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hook#free-hand","hook#free-hand",-779765343),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.hooked_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18730__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"hold#free-hand","hold#free-hand",113706379),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

}
}
}
}
})], null));
});

//# sourceMappingURL=user_actions.js.map?rel=1483657434484