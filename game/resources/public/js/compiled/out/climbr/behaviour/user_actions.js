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
return (function (p1__37950_SHARP_){
return cljs.core.nth.call(null,p1__37950_SHARP_,(0));
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
return (function (p1__37951_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__37951_SHARP_,hand);
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
var both_hooked = (function (){var and__18744__auto__ = climbr.utils.utils.not_nil_QMARK_.call(null,h1_hooked);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.utils.utils.not_nil_QMARK_.call(null,h2_hooked);
} else {
return and__18744__auto__;
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
var G__37953 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__37953) {
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
return (function (p1__37955_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__37955_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__37956_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__37956_SHARP_));
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
var and__18744__auto__ = climbr.behaviour.user_actions.h1_hooked_QMARK_.call(null);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.behaviour.user_actions.h2_hooked_QMARK_.call(null);
} else {
return and__18744__auto__;
}
});
climbr.behaviour.user_actions.hooked_nothing_QMARK_ = (function climbr$behaviour$user_actions$hooked_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__18756__auto__ = climbr.behaviour.user_actions.h1_hooked_QMARK_.call(null);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
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
var args__19871__auto__ = [];
var len__19864__auto___37971 = arguments.length;
var i__19865__auto___37972 = (0);
while(true){
if((i__19865__auto___37972 < len__19864__auto___37971)){
args__19871__auto__.push((arguments[i__19865__auto___37972]));

var G__37973 = (i__19865__auto___37972 + (1));
i__19865__auto___37972 = G__37973;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((3) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19872__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__37961){
var vec__37962 = p__37961;
var ___$1 = cljs.core.nth.call(null,vec__37962,(0),null);
var opts = cljs.core.nth.call(null,vec__37962,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__37965 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__37965) {
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
var force_obj = (function (){var G__37966 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__37966) {
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
var factor = (function (){var or__18756__auto__ = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18756__auto__)){
return or__18756__auto__;
} else {
return (1);
}
})();
var vertical_force_component_raw = (new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var horizontal_force_component_raw = (new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var directions = ((cljs.core.vector_QMARK_.call(null,where))?where:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)
);
var vertical_force_component = (cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"top","top",-1856271961)))?(- vertical_force_component_raw):(0));
var horizontal_force_component = (cljs.core.truth_((function (){var and__18744__auto__ = climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_(and__18744__auto__)){
return climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return and__18744__auto__;
}
})())?(0):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"left","left",-399115937)))?(- horizontal_force_component_raw):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,directions,new cljs.core.Keyword(null,"right","right",-452581833)))?horizontal_force_component_raw:(0)
)));
var force = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),horizontal_force_component,new cljs.core.Keyword(null,"y","y",-1757859776),vertical_force_component], null);
var seq__37967 = cljs.core.seq.call(null,bodies);
var chunk__37968 = null;
var count__37969 = (0);
var i__37970 = (0);
while(true){
if((i__37970 < count__37969)){
var b = cljs.core._nth.call(null,chunk__37968,i__37970);
climbr.matter.matter.apply_force.call(null,b,force);

var G__37976 = seq__37967;
var G__37977 = chunk__37968;
var G__37978 = count__37969;
var G__37979 = (i__37970 + (1));
seq__37967 = G__37976;
chunk__37968 = G__37977;
count__37969 = G__37978;
i__37970 = G__37979;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37967);
if(temp__4657__auto__){
var seq__37967__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37967__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__37967__$1);
var G__37980 = cljs.core.chunk_rest.call(null,seq__37967__$1);
var G__37981 = c__19570__auto__;
var G__37982 = cljs.core.count.call(null,c__19570__auto__);
var G__37983 = (0);
seq__37967 = G__37980;
chunk__37968 = G__37981;
count__37969 = G__37982;
i__37970 = G__37983;
continue;
} else {
var b = cljs.core.first.call(null,seq__37967__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__37984 = cljs.core.next.call(null,seq__37967__$1);
var G__37985 = null;
var G__37986 = (0);
var G__37987 = (0);
seq__37967 = G__37984;
chunk__37968 = G__37985;
count__37969 = G__37986;
i__37970 = G__37987;
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

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq37957){
var G__37958 = cljs.core.first.call(null,seq37957);
var seq37957__$1 = cljs.core.next.call(null,seq37957);
var G__37959 = cljs.core.first.call(null,seq37957__$1);
var seq37957__$2 = cljs.core.next.call(null,seq37957__$1);
var G__37960 = cljs.core.first.call(null,seq37957__$2);
var seq37957__$3 = cljs.core.next.call(null,seq37957__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37958,G__37959,G__37960,seq37957__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__20819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20819__auto__,keypressed_chan){
return (function (){
var f__20820__auto__ = (function (){var switch__20798__auto__ = ((function (c__20819__auto__,keypressed_chan){
return (function (state_38045){
var state_val_38046 = (state_38045[(1)]);
if((state_val_38046 === (7))){
var inst_38031 = (state_38045[(7)]);
var inst_38030 = (state_38045[(2)]);
var inst_38031__$1 = cljs.core.get.call(null,key_actions,inst_38030);
var inst_38032 = (inst_38031__$1 == null);
var state_38045__$1 = (function (){var statearr_38047 = state_38045;
(statearr_38047[(7)] = inst_38031__$1);

return statearr_38047;
})();
if(cljs.core.truth_(inst_38032)){
var statearr_38048_38066 = state_38045__$1;
(statearr_38048_38066[(1)] = (8));

} else {
var statearr_38049_38067 = state_38045__$1;
(statearr_38049_38067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (1))){
var state_38045__$1 = state_38045;
var statearr_38050_38068 = state_38045__$1;
(statearr_38050_38068[(2)] = null);

(statearr_38050_38068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (4))){
var state_38045__$1 = state_38045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38045__$1,(7),keypressed_chan);
} else {
if((state_val_38046 === (6))){
var inst_38041 = (state_38045[(2)]);
var state_38045__$1 = state_38045;
var statearr_38051_38069 = state_38045__$1;
(statearr_38051_38069[(2)] = inst_38041);

(statearr_38051_38069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (3))){
var inst_38043 = (state_38045[(2)]);
var state_38045__$1 = state_38045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38045__$1,inst_38043);
} else {
if((state_val_38046 === (2))){
var state_38045__$1 = state_38045;
var statearr_38052_38070 = state_38045__$1;
(statearr_38052_38070[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (9))){
var inst_38031 = (state_38045[(7)]);
var inst_38035 = inst_38031.call(null);
var state_38045__$1 = state_38045;
var statearr_38054_38071 = state_38045__$1;
(statearr_38054_38071[(2)] = inst_38035);

(statearr_38054_38071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (5))){
var state_38045__$1 = state_38045;
var statearr_38055_38072 = state_38045__$1;
(statearr_38055_38072[(2)] = null);

(statearr_38055_38072[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (10))){
var inst_38037 = (state_38045[(2)]);
var state_38045__$1 = (function (){var statearr_38056 = state_38045;
(statearr_38056[(8)] = inst_38037);

return statearr_38056;
})();
var statearr_38057_38073 = state_38045__$1;
(statearr_38057_38073[(2)] = null);

(statearr_38057_38073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38046 === (8))){
var state_38045__$1 = state_38045;
var statearr_38058_38074 = state_38045__$1;
(statearr_38058_38074[(2)] = null);

(statearr_38058_38074[(1)] = (10));


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
});})(c__20819__auto__,keypressed_chan))
;
return ((function (switch__20798__auto__,c__20819__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____0 = (function (){
var statearr_38062 = [null,null,null,null,null,null,null,null,null];
(statearr_38062[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__);

(statearr_38062[(1)] = (1));

return statearr_38062;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____1 = (function (state_38045){
while(true){
var ret_value__20800__auto__ = (function (){try{while(true){
var result__20801__auto__ = switch__20798__auto__.call(null,state_38045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20801__auto__;
}
break;
}
}catch (e38063){if((e38063 instanceof Object)){
var ex__20802__auto__ = e38063;
var statearr_38064_38075 = state_38045;
(statearr_38064_38075[(5)] = ex__20802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38076 = state_38045;
state_38045 = G__38076;
continue;
} else {
return ret_value__20800__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__ = function(state_38045){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____1.call(this,state_38045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__;
})()
;})(switch__20798__auto__,c__20819__auto__,keypressed_chan))
})();
var state__20821__auto__ = (function (){var statearr_38065 = f__20820__auto__.call(null);
(statearr_38065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20819__auto__);

return statearr_38065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20821__auto__);
});})(c__20819__auto__,keypressed_chan))
);

return c__20819__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__38078 = hand_name;
switch (G__38078) {
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
var key_boulder = (function (){var G__38081 = hand_name;
switch (G__38081) {
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
var key_hooked = (function (){var G__38084 = hand_name;
switch (G__38084) {
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

var c__20819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20819__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__20820__auto__ = (function (){var switch__20798__auto__ = ((function (c__20819__auto__,keypressed,release_hand_BANG_){
return (function (state_38164){
var state_val_38165 = (state_38164[(1)]);
if((state_val_38165 === (7))){
var inst_38143 = (state_38164[(2)]);
var state_38164__$1 = state_38164;
var G__38166_38194 = (((inst_38143 instanceof cljs.core.Keyword))?inst_38143.fqn:null);
switch (G__38166_38194) {
case "release-left":
var statearr_38167_38196 = state_38164__$1;
(statearr_38167_38196[(1)] = (9));


break;
case "release-right":
var statearr_38168_38197 = state_38164__$1;
(statearr_38168_38197[(1)] = (10));


break;
case "release-both":
var statearr_38169_38198 = state_38164__$1;
(statearr_38169_38198[(1)] = (11));


break;
default:
var statearr_38170_38199 = state_38164__$1;
(statearr_38170_38199[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (1))){
var state_38164__$1 = state_38164;
var statearr_38171_38200 = state_38164__$1;
(statearr_38171_38200[(2)] = null);

(statearr_38171_38200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (4))){
var state_38164__$1 = state_38164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38164__$1,(7),keypressed);
} else {
if((state_val_38165 === (15))){
var inst_38156 = (state_38164[(2)]);
var state_38164__$1 = (function (){var statearr_38172 = state_38164;
(statearr_38172[(7)] = inst_38156);

return statearr_38172;
})();
var statearr_38173_38201 = state_38164__$1;
(statearr_38173_38201[(2)] = null);

(statearr_38173_38201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (13))){
var inst_38149 = (state_38164[(8)]);
var inst_38151 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_38149);
var inst_38152 = cljs.core.map.call(null,release_hand_BANG_,inst_38151);
var inst_38153 = cljs.core.doall.call(null,inst_38152);
var state_38164__$1 = state_38164;
var statearr_38174_38202 = state_38164__$1;
(statearr_38174_38202[(2)] = inst_38153);

(statearr_38174_38202[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (6))){
var inst_38160 = (state_38164[(2)]);
var state_38164__$1 = state_38164;
var statearr_38175_38203 = state_38164__$1;
(statearr_38175_38203[(2)] = inst_38160);

(statearr_38175_38203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (3))){
var inst_38162 = (state_38164[(2)]);
var state_38164__$1 = state_38164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38164__$1,inst_38162);
} else {
if((state_val_38165 === (12))){
var state_38164__$1 = state_38164;
var statearr_38176_38204 = state_38164__$1;
(statearr_38176_38204[(2)] = null);

(statearr_38176_38204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (2))){
var state_38164__$1 = state_38164;
var statearr_38177_38205 = state_38164__$1;
(statearr_38177_38205[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (11))){
var state_38164__$1 = state_38164;
var statearr_38179_38206 = state_38164__$1;
(statearr_38179_38206[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_38179_38206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (9))){
var state_38164__$1 = state_38164;
var statearr_38180_38207 = state_38164__$1;
(statearr_38180_38207[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_38180_38207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (5))){
var state_38164__$1 = state_38164;
var statearr_38181_38208 = state_38164__$1;
(statearr_38181_38208[(2)] = null);

(statearr_38181_38208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (14))){
var state_38164__$1 = state_38164;
var statearr_38182_38209 = state_38164__$1;
(statearr_38182_38209[(2)] = null);

(statearr_38182_38209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (10))){
var state_38164__$1 = state_38164;
var statearr_38183_38210 = state_38164__$1;
(statearr_38183_38210[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_38183_38210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38165 === (8))){
var inst_38149 = (state_38164[(8)]);
var inst_38149__$1 = (state_38164[(2)]);
var state_38164__$1 = (function (){var statearr_38184 = state_38164;
(statearr_38184[(8)] = inst_38149__$1);

return statearr_38184;
})();
if(cljs.core.truth_(inst_38149__$1)){
var statearr_38185_38211 = state_38164__$1;
(statearr_38185_38211[(1)] = (13));

} else {
var statearr_38186_38212 = state_38164__$1;
(statearr_38186_38212[(1)] = (14));

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
});})(c__20819__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__20798__auto__,c__20819__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____0 = (function (){
var statearr_38190 = [null,null,null,null,null,null,null,null,null];
(statearr_38190[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__);

(statearr_38190[(1)] = (1));

return statearr_38190;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____1 = (function (state_38164){
while(true){
var ret_value__20800__auto__ = (function (){try{while(true){
var result__20801__auto__ = switch__20798__auto__.call(null,state_38164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20801__auto__;
}
break;
}
}catch (e38191){if((e38191 instanceof Object)){
var ex__20802__auto__ = e38191;
var statearr_38192_38213 = state_38164;
(statearr_38192_38213[(5)] = ex__20802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38214 = state_38164;
state_38164 = G__38214;
continue;
} else {
return ret_value__20800__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__ = function(state_38164){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____1.call(this,state_38164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__;
})()
;})(switch__20798__auto__,c__20819__auto__,keypressed,release_hand_BANG_))
})();
var state__20821__auto__ = (function (){var statearr_38193 = f__20820__auto__.call(null);
(statearr_38193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20819__auto__);

return statearr_38193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20821__auto__);
});})(c__20819__auto__,keypressed,release_hand_BANG_))
);

return c__20819__auto__;
});
climbr.behaviour.user_actions.setup_climber_hook_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_hook_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var hook_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__38271 = hand_name;
switch (G__38271) {
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

var c__20819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20819__auto__,keypressed,hook_hand_BANG_){
return (function (){
var f__20820__auto__ = (function (){var switch__20798__auto__ = ((function (c__20819__auto__,keypressed,hook_hand_BANG_){
return (function (state_38297){
var state_val_38298 = (state_38297[(1)]);
if((state_val_38298 === (7))){
var inst_38275 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
var G__38299_38328 = (((inst_38275 instanceof cljs.core.Keyword))?inst_38275.fqn:null);
switch (G__38299_38328) {
case "hook-left":
var statearr_38300_38330 = state_38297__$1;
(statearr_38300_38330[(1)] = (9));


break;
case "hook-right":
var statearr_38301_38331 = state_38297__$1;
(statearr_38301_38331[(1)] = (10));


break;
case "hook-both":
var statearr_38302_38332 = state_38297__$1;
(statearr_38302_38332[(1)] = (11));


break;
default:
var statearr_38303_38333 = state_38297__$1;
(statearr_38303_38333[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (1))){
var state_38297__$1 = state_38297;
var statearr_38304_38334 = state_38297__$1;
(statearr_38304_38334[(2)] = null);

(statearr_38304_38334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (4))){
var state_38297__$1 = state_38297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38297__$1,(7),keypressed);
} else {
if((state_val_38298 === (15))){
var inst_38287 = (state_38297[(2)]);
var inst_38288 = cljs.core.map.call(null,hook_hand_BANG_,inst_38287);
var inst_38289 = cljs.core.doall.call(null,inst_38288);
var state_38297__$1 = (function (){var statearr_38305 = state_38297;
(statearr_38305[(7)] = inst_38289);

return statearr_38305;
})();
var statearr_38306_38335 = state_38297__$1;
(statearr_38306_38335[(2)] = null);

(statearr_38306_38335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (13))){
var state_38297__$1 = state_38297;
var statearr_38307_38336 = state_38297__$1;
(statearr_38307_38336[(2)] = null);

(statearr_38307_38336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (6))){
var inst_38293 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
var statearr_38308_38337 = state_38297__$1;
(statearr_38308_38337[(2)] = inst_38293);

(statearr_38308_38337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (3))){
var inst_38295 = (state_38297[(2)]);
var state_38297__$1 = state_38297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38297__$1,inst_38295);
} else {
if((state_val_38298 === (12))){
var state_38297__$1 = state_38297;
var statearr_38309_38338 = state_38297__$1;
(statearr_38309_38338[(2)] = null);

(statearr_38309_38338[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (2))){
var state_38297__$1 = state_38297;
var statearr_38310_38339 = state_38297__$1;
(statearr_38310_38339[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (11))){
var state_38297__$1 = state_38297;
var statearr_38312_38340 = state_38297__$1;
(statearr_38312_38340[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_38312_38340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (9))){
var state_38297__$1 = state_38297;
var statearr_38313_38341 = state_38297__$1;
(statearr_38313_38341[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_38313_38341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (5))){
var state_38297__$1 = state_38297;
var statearr_38314_38342 = state_38297__$1;
(statearr_38314_38342[(2)] = null);

(statearr_38314_38342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (14))){
var inst_38281 = (state_38297[(8)]);
var inst_38285 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_38281);
var state_38297__$1 = state_38297;
var statearr_38315_38343 = state_38297__$1;
(statearr_38315_38343[(2)] = inst_38285);

(statearr_38315_38343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (10))){
var state_38297__$1 = state_38297;
var statearr_38316_38344 = state_38297__$1;
(statearr_38316_38344[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_38316_38344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38298 === (8))){
var inst_38281 = (state_38297[(8)]);
var inst_38281__$1 = (state_38297[(2)]);
var inst_38282 = (inst_38281__$1 == null);
var state_38297__$1 = (function (){var statearr_38317 = state_38297;
(statearr_38317[(8)] = inst_38281__$1);

return statearr_38317;
})();
if(cljs.core.truth_(inst_38282)){
var statearr_38318_38345 = state_38297__$1;
(statearr_38318_38345[(1)] = (13));

} else {
var statearr_38319_38346 = state_38297__$1;
(statearr_38319_38346[(1)] = (14));

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
});})(c__20819__auto__,keypressed,hook_hand_BANG_))
;
return ((function (switch__20798__auto__,c__20819__auto__,keypressed,hook_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____0 = (function (){
var statearr_38323 = [null,null,null,null,null,null,null,null,null];
(statearr_38323[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__);

(statearr_38323[(1)] = (1));

return statearr_38323;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____1 = (function (state_38297){
while(true){
var ret_value__20800__auto__ = (function (){try{while(true){
var result__20801__auto__ = switch__20798__auto__.call(null,state_38297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20801__auto__;
}
break;
}
}catch (e38324){if((e38324 instanceof Object)){
var ex__20802__auto__ = e38324;
var statearr_38325_38347 = state_38297;
(statearr_38325_38347[(5)] = ex__20802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38348 = state_38297;
state_38297 = G__38348;
continue;
} else {
return ret_value__20800__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__ = function(state_38297){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____1.call(this,state_38297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__;
})()
;})(switch__20798__auto__,c__20819__auto__,keypressed,hook_hand_BANG_))
})();
var state__20821__auto__ = (function (){var statearr_38326 = f__20820__auto__.call(null);
(statearr_38326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20819__auto__);

return statearr_38326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20821__auto__);
});})(c__20819__auto__,keypressed,hook_hand_BANG_))
);

return c__20819__auto__;
});
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,climbr.controls.keyboard.keypressed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__18744__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18744__auto__;
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
if(cljs.core.truth_((function (){var and__18744__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18744__auto__;
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
if(cljs.core.truth_((function (){var and__18744__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18744__auto__;
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
if(cljs.core.truth_((function (){var and__18744__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18744__auto__;
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
if(cljs.core.truth_((function (){var and__18744__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.behaviour.user_actions.hooked_nothing_QMARK_.call(null);
} else {
return and__18744__auto__;
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
if(cljs.core.truth_((function (){var and__18744__auto__ = climbr.behaviour.user_actions.holds_one_QMARK_.call(null);
if(cljs.core.truth_(and__18744__auto__)){
return climbr.behaviour.user_actions.hand_above_body_QMARK_.call(null);
} else {
return and__18744__auto__;
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

//# sourceMappingURL=user_actions.js.map?rel=1487434215598