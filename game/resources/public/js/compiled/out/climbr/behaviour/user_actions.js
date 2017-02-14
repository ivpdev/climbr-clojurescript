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
return (function (p1__23423_SHARP_){
return cljs.core.nth.call(null,p1__23423_SHARP_,(0));
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
return (function (p1__23424_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__23424_SHARP_,hand);
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
var G__23426 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__23426) {
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
return (function (p1__23428_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__23428_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__23429_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__23429_SHARP_));
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
var len__19864__auto___23444 = arguments.length;
var i__19865__auto___23445 = (0);
while(true){
if((i__19865__auto___23445 < len__19864__auto___23444)){
args__19871__auto__.push((arguments[i__19865__auto___23445]));

var G__23446 = (i__19865__auto___23445 + (1));
i__19865__auto___23445 = G__23446;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((3) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19872__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__23434){
var vec__23435 = p__23434;
var ___$1 = cljs.core.nth.call(null,vec__23435,(0),null);
var opts = cljs.core.nth.call(null,vec__23435,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__23438 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__23438) {
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
var force_obj = (function (){var G__23439 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__23439) {
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
var seq__23440 = cljs.core.seq.call(null,bodies);
var chunk__23441 = null;
var count__23442 = (0);
var i__23443 = (0);
while(true){
if((i__23443 < count__23442)){
var b = cljs.core._nth.call(null,chunk__23441,i__23443);
climbr.matter.matter.apply_force.call(null,b,force);

var G__23449 = seq__23440;
var G__23450 = chunk__23441;
var G__23451 = count__23442;
var G__23452 = (i__23443 + (1));
seq__23440 = G__23449;
chunk__23441 = G__23450;
count__23442 = G__23451;
i__23443 = G__23452;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23440);
if(temp__4657__auto__){
var seq__23440__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23440__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__23440__$1);
var G__23453 = cljs.core.chunk_rest.call(null,seq__23440__$1);
var G__23454 = c__19570__auto__;
var G__23455 = cljs.core.count.call(null,c__19570__auto__);
var G__23456 = (0);
seq__23440 = G__23453;
chunk__23441 = G__23454;
count__23442 = G__23455;
i__23443 = G__23456;
continue;
} else {
var b = cljs.core.first.call(null,seq__23440__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__23457 = cljs.core.next.call(null,seq__23440__$1);
var G__23458 = null;
var G__23459 = (0);
var G__23460 = (0);
seq__23440 = G__23457;
chunk__23441 = G__23458;
count__23442 = G__23459;
i__23443 = G__23460;
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

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq23430){
var G__23431 = cljs.core.first.call(null,seq23430);
var seq23430__$1 = cljs.core.next.call(null,seq23430);
var G__23432 = cljs.core.first.call(null,seq23430__$1);
var seq23430__$2 = cljs.core.next.call(null,seq23430__$1);
var G__23433 = cljs.core.first.call(null,seq23430__$2);
var seq23430__$3 = cljs.core.next.call(null,seq23430__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23431,G__23432,G__23433,seq23430__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__21433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21433__auto__,keypressed_chan){
return (function (){
var f__21434__auto__ = (function (){var switch__21418__auto__ = ((function (c__21433__auto__,keypressed_chan){
return (function (state_23518){
var state_val_23519 = (state_23518[(1)]);
if((state_val_23519 === (7))){
var inst_23504 = (state_23518[(7)]);
var inst_23503 = (state_23518[(2)]);
var inst_23504__$1 = cljs.core.get.call(null,key_actions,inst_23503);
var inst_23505 = (inst_23504__$1 == null);
var state_23518__$1 = (function (){var statearr_23520 = state_23518;
(statearr_23520[(7)] = inst_23504__$1);

return statearr_23520;
})();
if(cljs.core.truth_(inst_23505)){
var statearr_23521_23539 = state_23518__$1;
(statearr_23521_23539[(1)] = (8));

} else {
var statearr_23522_23540 = state_23518__$1;
(statearr_23522_23540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (1))){
var state_23518__$1 = state_23518;
var statearr_23523_23541 = state_23518__$1;
(statearr_23523_23541[(2)] = null);

(statearr_23523_23541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (4))){
var state_23518__$1 = state_23518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23518__$1,(7),keypressed_chan);
} else {
if((state_val_23519 === (6))){
var inst_23514 = (state_23518[(2)]);
var state_23518__$1 = state_23518;
var statearr_23524_23542 = state_23518__$1;
(statearr_23524_23542[(2)] = inst_23514);

(statearr_23524_23542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (3))){
var inst_23516 = (state_23518[(2)]);
var state_23518__$1 = state_23518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23518__$1,inst_23516);
} else {
if((state_val_23519 === (2))){
var state_23518__$1 = state_23518;
var statearr_23525_23543 = state_23518__$1;
(statearr_23525_23543[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (9))){
var inst_23504 = (state_23518[(7)]);
var inst_23508 = inst_23504.call(null);
var state_23518__$1 = state_23518;
var statearr_23527_23544 = state_23518__$1;
(statearr_23527_23544[(2)] = inst_23508);

(statearr_23527_23544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (5))){
var state_23518__$1 = state_23518;
var statearr_23528_23545 = state_23518__$1;
(statearr_23528_23545[(2)] = null);

(statearr_23528_23545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (10))){
var inst_23510 = (state_23518[(2)]);
var state_23518__$1 = (function (){var statearr_23529 = state_23518;
(statearr_23529[(8)] = inst_23510);

return statearr_23529;
})();
var statearr_23530_23546 = state_23518__$1;
(statearr_23530_23546[(2)] = null);

(statearr_23530_23546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23519 === (8))){
var state_23518__$1 = state_23518;
var statearr_23531_23547 = state_23518__$1;
(statearr_23531_23547[(2)] = null);

(statearr_23531_23547[(1)] = (10));


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
});})(c__21433__auto__,keypressed_chan))
;
return ((function (switch__21418__auto__,c__21433__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto____0 = (function (){
var statearr_23535 = [null,null,null,null,null,null,null,null,null];
(statearr_23535[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto__);

(statearr_23535[(1)] = (1));

return statearr_23535;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto____1 = (function (state_23518){
while(true){
var ret_value__21420__auto__ = (function (){try{while(true){
var result__21421__auto__ = switch__21418__auto__.call(null,state_23518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21421__auto__;
}
break;
}
}catch (e23536){if((e23536 instanceof Object)){
var ex__21422__auto__ = e23536;
var statearr_23537_23548 = state_23518;
(statearr_23537_23548[(5)] = ex__21422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23549 = state_23518;
state_23518 = G__23549;
continue;
} else {
return ret_value__21420__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto__ = function(state_23518){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto____1.call(this,state_23518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21419__auto__;
})()
;})(switch__21418__auto__,c__21433__auto__,keypressed_chan))
})();
var state__21435__auto__ = (function (){var statearr_23538 = f__21434__auto__.call(null);
(statearr_23538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21433__auto__);

return statearr_23538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21435__auto__);
});})(c__21433__auto__,keypressed_chan))
);

return c__21433__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__23551 = hand_name;
switch (G__23551) {
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
var key_boulder = (function (){var G__23554 = hand_name;
switch (G__23554) {
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
var key_hooked = (function (){var G__23557 = hand_name;
switch (G__23557) {
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

var c__21433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21433__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__21434__auto__ = (function (){var switch__21418__auto__ = ((function (c__21433__auto__,keypressed,release_hand_BANG_){
return (function (state_23637){
var state_val_23638 = (state_23637[(1)]);
if((state_val_23638 === (7))){
var inst_23616 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var G__23639_23667 = (((inst_23616 instanceof cljs.core.Keyword))?inst_23616.fqn:null);
switch (G__23639_23667) {
case "release-left":
var statearr_23640_23669 = state_23637__$1;
(statearr_23640_23669[(1)] = (9));


break;
case "release-right":
var statearr_23641_23670 = state_23637__$1;
(statearr_23641_23670[(1)] = (10));


break;
case "release-both":
var statearr_23642_23671 = state_23637__$1;
(statearr_23642_23671[(1)] = (11));


break;
default:
var statearr_23643_23672 = state_23637__$1;
(statearr_23643_23672[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (1))){
var state_23637__$1 = state_23637;
var statearr_23644_23673 = state_23637__$1;
(statearr_23644_23673[(2)] = null);

(statearr_23644_23673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (4))){
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23637__$1,(7),keypressed);
} else {
if((state_val_23638 === (15))){
var inst_23629 = (state_23637[(2)]);
var state_23637__$1 = (function (){var statearr_23645 = state_23637;
(statearr_23645[(7)] = inst_23629);

return statearr_23645;
})();
var statearr_23646_23674 = state_23637__$1;
(statearr_23646_23674[(2)] = null);

(statearr_23646_23674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (13))){
var inst_23622 = (state_23637[(8)]);
var inst_23624 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_23622);
var inst_23625 = cljs.core.map.call(null,release_hand_BANG_,inst_23624);
var inst_23626 = cljs.core.doall.call(null,inst_23625);
var state_23637__$1 = state_23637;
var statearr_23647_23675 = state_23637__$1;
(statearr_23647_23675[(2)] = inst_23626);

(statearr_23647_23675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (6))){
var inst_23633 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
var statearr_23648_23676 = state_23637__$1;
(statearr_23648_23676[(2)] = inst_23633);

(statearr_23648_23676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (3))){
var inst_23635 = (state_23637[(2)]);
var state_23637__$1 = state_23637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23637__$1,inst_23635);
} else {
if((state_val_23638 === (12))){
var state_23637__$1 = state_23637;
var statearr_23649_23677 = state_23637__$1;
(statearr_23649_23677[(2)] = null);

(statearr_23649_23677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (2))){
var state_23637__$1 = state_23637;
var statearr_23650_23678 = state_23637__$1;
(statearr_23650_23678[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (11))){
var state_23637__$1 = state_23637;
var statearr_23652_23679 = state_23637__$1;
(statearr_23652_23679[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_23652_23679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (9))){
var state_23637__$1 = state_23637;
var statearr_23653_23680 = state_23637__$1;
(statearr_23653_23680[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_23653_23680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (5))){
var state_23637__$1 = state_23637;
var statearr_23654_23681 = state_23637__$1;
(statearr_23654_23681[(2)] = null);

(statearr_23654_23681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (14))){
var state_23637__$1 = state_23637;
var statearr_23655_23682 = state_23637__$1;
(statearr_23655_23682[(2)] = null);

(statearr_23655_23682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (10))){
var state_23637__$1 = state_23637;
var statearr_23656_23683 = state_23637__$1;
(statearr_23656_23683[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_23656_23683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23638 === (8))){
var inst_23622 = (state_23637[(8)]);
var inst_23622__$1 = (state_23637[(2)]);
var state_23637__$1 = (function (){var statearr_23657 = state_23637;
(statearr_23657[(8)] = inst_23622__$1);

return statearr_23657;
})();
if(cljs.core.truth_(inst_23622__$1)){
var statearr_23658_23684 = state_23637__$1;
(statearr_23658_23684[(1)] = (13));

} else {
var statearr_23659_23685 = state_23637__$1;
(statearr_23659_23685[(1)] = (14));

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
});})(c__21433__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__21418__auto__,c__21433__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto____0 = (function (){
var statearr_23663 = [null,null,null,null,null,null,null,null,null];
(statearr_23663[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto__);

(statearr_23663[(1)] = (1));

return statearr_23663;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto____1 = (function (state_23637){
while(true){
var ret_value__21420__auto__ = (function (){try{while(true){
var result__21421__auto__ = switch__21418__auto__.call(null,state_23637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21421__auto__;
}
break;
}
}catch (e23664){if((e23664 instanceof Object)){
var ex__21422__auto__ = e23664;
var statearr_23665_23686 = state_23637;
(statearr_23665_23686[(5)] = ex__21422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23687 = state_23637;
state_23637 = G__23687;
continue;
} else {
return ret_value__21420__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto__ = function(state_23637){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto____1.call(this,state_23637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21419__auto__;
})()
;})(switch__21418__auto__,c__21433__auto__,keypressed,release_hand_BANG_))
})();
var state__21435__auto__ = (function (){var statearr_23666 = f__21434__auto__.call(null);
(statearr_23666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21433__auto__);

return statearr_23666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21435__auto__);
});})(c__21433__auto__,keypressed,release_hand_BANG_))
);

return c__21433__auto__;
});
climbr.behaviour.user_actions.setup_climber_hook_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_hook_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var hook_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__23744 = hand_name;
switch (G__23744) {
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

var c__21433__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21433__auto__,keypressed,hook_hand_BANG_){
return (function (){
var f__21434__auto__ = (function (){var switch__21418__auto__ = ((function (c__21433__auto__,keypressed,hook_hand_BANG_){
return (function (state_23770){
var state_val_23771 = (state_23770[(1)]);
if((state_val_23771 === (7))){
var inst_23748 = (state_23770[(2)]);
var state_23770__$1 = state_23770;
var G__23772_23801 = (((inst_23748 instanceof cljs.core.Keyword))?inst_23748.fqn:null);
switch (G__23772_23801) {
case "hook-left":
var statearr_23773_23803 = state_23770__$1;
(statearr_23773_23803[(1)] = (9));


break;
case "hook-right":
var statearr_23774_23804 = state_23770__$1;
(statearr_23774_23804[(1)] = (10));


break;
case "hook-both":
var statearr_23775_23805 = state_23770__$1;
(statearr_23775_23805[(1)] = (11));


break;
default:
var statearr_23776_23806 = state_23770__$1;
(statearr_23776_23806[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (1))){
var state_23770__$1 = state_23770;
var statearr_23777_23807 = state_23770__$1;
(statearr_23777_23807[(2)] = null);

(statearr_23777_23807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (4))){
var state_23770__$1 = state_23770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23770__$1,(7),keypressed);
} else {
if((state_val_23771 === (15))){
var inst_23760 = (state_23770[(2)]);
var inst_23761 = cljs.core.map.call(null,hook_hand_BANG_,inst_23760);
var inst_23762 = cljs.core.doall.call(null,inst_23761);
var state_23770__$1 = (function (){var statearr_23778 = state_23770;
(statearr_23778[(7)] = inst_23762);

return statearr_23778;
})();
var statearr_23779_23808 = state_23770__$1;
(statearr_23779_23808[(2)] = null);

(statearr_23779_23808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (13))){
var state_23770__$1 = state_23770;
var statearr_23780_23809 = state_23770__$1;
(statearr_23780_23809[(2)] = null);

(statearr_23780_23809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (6))){
var inst_23766 = (state_23770[(2)]);
var state_23770__$1 = state_23770;
var statearr_23781_23810 = state_23770__$1;
(statearr_23781_23810[(2)] = inst_23766);

(statearr_23781_23810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (3))){
var inst_23768 = (state_23770[(2)]);
var state_23770__$1 = state_23770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23770__$1,inst_23768);
} else {
if((state_val_23771 === (12))){
var state_23770__$1 = state_23770;
var statearr_23782_23811 = state_23770__$1;
(statearr_23782_23811[(2)] = null);

(statearr_23782_23811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (2))){
var state_23770__$1 = state_23770;
var statearr_23783_23812 = state_23770__$1;
(statearr_23783_23812[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (11))){
var state_23770__$1 = state_23770;
var statearr_23785_23813 = state_23770__$1;
(statearr_23785_23813[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_23785_23813[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (9))){
var state_23770__$1 = state_23770;
var statearr_23786_23814 = state_23770__$1;
(statearr_23786_23814[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_23786_23814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (5))){
var state_23770__$1 = state_23770;
var statearr_23787_23815 = state_23770__$1;
(statearr_23787_23815[(2)] = null);

(statearr_23787_23815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (14))){
var inst_23754 = (state_23770[(8)]);
var inst_23758 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_23754);
var state_23770__$1 = state_23770;
var statearr_23788_23816 = state_23770__$1;
(statearr_23788_23816[(2)] = inst_23758);

(statearr_23788_23816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (10))){
var state_23770__$1 = state_23770;
var statearr_23789_23817 = state_23770__$1;
(statearr_23789_23817[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_23789_23817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23771 === (8))){
var inst_23754 = (state_23770[(8)]);
var inst_23754__$1 = (state_23770[(2)]);
var inst_23755 = (inst_23754__$1 == null);
var state_23770__$1 = (function (){var statearr_23790 = state_23770;
(statearr_23790[(8)] = inst_23754__$1);

return statearr_23790;
})();
if(cljs.core.truth_(inst_23755)){
var statearr_23791_23818 = state_23770__$1;
(statearr_23791_23818[(1)] = (13));

} else {
var statearr_23792_23819 = state_23770__$1;
(statearr_23792_23819[(1)] = (14));

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
});})(c__21433__auto__,keypressed,hook_hand_BANG_))
;
return ((function (switch__21418__auto__,c__21433__auto__,keypressed,hook_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto____0 = (function (){
var statearr_23796 = [null,null,null,null,null,null,null,null,null];
(statearr_23796[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto__);

(statearr_23796[(1)] = (1));

return statearr_23796;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto____1 = (function (state_23770){
while(true){
var ret_value__21420__auto__ = (function (){try{while(true){
var result__21421__auto__ = switch__21418__auto__.call(null,state_23770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21421__auto__;
}
break;
}
}catch (e23797){if((e23797 instanceof Object)){
var ex__21422__auto__ = e23797;
var statearr_23798_23820 = state_23770;
(statearr_23798_23820[(5)] = ex__21422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23821 = state_23770;
state_23770 = G__23821;
continue;
} else {
return ret_value__21420__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto__ = function(state_23770){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto____1.call(this,state_23770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21419__auto__;
})()
;})(switch__21418__auto__,c__21433__auto__,keypressed,hook_hand_BANG_))
})();
var state__21435__auto__ = (function (){var statearr_23799 = f__21434__auto__.call(null);
(statearr_23799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21433__auto__);

return statearr_23799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21435__auto__);
});})(c__21433__auto__,keypressed,hook_hand_BANG_))
);

return c__21433__auto__;
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

//# sourceMappingURL=user_actions.js.map?rel=1487058560171