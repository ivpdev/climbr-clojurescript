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
return (function (p1__34449_SHARP_){
return cljs.core.nth.call(null,p1__34449_SHARP_,(0));
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
return (function (p1__34450_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__34450_SHARP_,hand);
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
var G__34452 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__34452) {
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
return (function (p1__34454_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__34454_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__34455_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__34455_SHARP_));
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
var len__19864__auto___34470 = arguments.length;
var i__19865__auto___34471 = (0);
while(true){
if((i__19865__auto___34471 < len__19864__auto___34470)){
args__19871__auto__.push((arguments[i__19865__auto___34471]));

var G__34472 = (i__19865__auto___34471 + (1));
i__19865__auto___34471 = G__34472;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((3) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19872__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__34460){
var vec__34461 = p__34460;
var ___$1 = cljs.core.nth.call(null,vec__34461,(0),null);
var opts = cljs.core.nth.call(null,vec__34461,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__34464 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__34464) {
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
var force_obj = (function (){var G__34465 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__34465) {
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
var seq__34466 = cljs.core.seq.call(null,bodies);
var chunk__34467 = null;
var count__34468 = (0);
var i__34469 = (0);
while(true){
if((i__34469 < count__34468)){
var b = cljs.core._nth.call(null,chunk__34467,i__34469);
climbr.matter.matter.apply_force.call(null,b,force);

var G__34475 = seq__34466;
var G__34476 = chunk__34467;
var G__34477 = count__34468;
var G__34478 = (i__34469 + (1));
seq__34466 = G__34475;
chunk__34467 = G__34476;
count__34468 = G__34477;
i__34469 = G__34478;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34466);
if(temp__4657__auto__){
var seq__34466__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34466__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__34466__$1);
var G__34479 = cljs.core.chunk_rest.call(null,seq__34466__$1);
var G__34480 = c__19570__auto__;
var G__34481 = cljs.core.count.call(null,c__19570__auto__);
var G__34482 = (0);
seq__34466 = G__34479;
chunk__34467 = G__34480;
count__34468 = G__34481;
i__34469 = G__34482;
continue;
} else {
var b = cljs.core.first.call(null,seq__34466__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__34483 = cljs.core.next.call(null,seq__34466__$1);
var G__34484 = null;
var G__34485 = (0);
var G__34486 = (0);
seq__34466 = G__34483;
chunk__34467 = G__34484;
count__34468 = G__34485;
i__34469 = G__34486;
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

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq34456){
var G__34457 = cljs.core.first.call(null,seq34456);
var seq34456__$1 = cljs.core.next.call(null,seq34456);
var G__34458 = cljs.core.first.call(null,seq34456__$1);
var seq34456__$2 = cljs.core.next.call(null,seq34456__$1);
var G__34459 = cljs.core.first.call(null,seq34456__$2);
var seq34456__$3 = cljs.core.next.call(null,seq34456__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34457,G__34458,G__34459,seq34456__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,keypressed_chan){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,keypressed_chan){
return (function (state_34544){
var state_val_34545 = (state_34544[(1)]);
if((state_val_34545 === (7))){
var inst_34530 = (state_34544[(7)]);
var inst_34529 = (state_34544[(2)]);
var inst_34530__$1 = cljs.core.get.call(null,key_actions,inst_34529);
var inst_34531 = (inst_34530__$1 == null);
var state_34544__$1 = (function (){var statearr_34546 = state_34544;
(statearr_34546[(7)] = inst_34530__$1);

return statearr_34546;
})();
if(cljs.core.truth_(inst_34531)){
var statearr_34547_34565 = state_34544__$1;
(statearr_34547_34565[(1)] = (8));

} else {
var statearr_34548_34566 = state_34544__$1;
(statearr_34548_34566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (1))){
var state_34544__$1 = state_34544;
var statearr_34549_34567 = state_34544__$1;
(statearr_34549_34567[(2)] = null);

(statearr_34549_34567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (4))){
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34544__$1,(7),keypressed_chan);
} else {
if((state_val_34545 === (6))){
var inst_34540 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
var statearr_34550_34568 = state_34544__$1;
(statearr_34550_34568[(2)] = inst_34540);

(statearr_34550_34568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (3))){
var inst_34542 = (state_34544[(2)]);
var state_34544__$1 = state_34544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34544__$1,inst_34542);
} else {
if((state_val_34545 === (2))){
var state_34544__$1 = state_34544;
var statearr_34551_34569 = state_34544__$1;
(statearr_34551_34569[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (9))){
var inst_34530 = (state_34544[(7)]);
var inst_34534 = inst_34530.call(null);
var state_34544__$1 = state_34544;
var statearr_34553_34570 = state_34544__$1;
(statearr_34553_34570[(2)] = inst_34534);

(statearr_34553_34570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (5))){
var state_34544__$1 = state_34544;
var statearr_34554_34571 = state_34544__$1;
(statearr_34554_34571[(2)] = null);

(statearr_34554_34571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (10))){
var inst_34536 = (state_34544[(2)]);
var state_34544__$1 = (function (){var statearr_34555 = state_34544;
(statearr_34555[(8)] = inst_34536);

return statearr_34555;
})();
var statearr_34556_34572 = state_34544__$1;
(statearr_34556_34572[(2)] = null);

(statearr_34556_34572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34545 === (8))){
var state_34544__$1 = state_34544;
var statearr_34557_34573 = state_34544__$1;
(statearr_34557_34573[(2)] = null);

(statearr_34557_34573[(1)] = (10));


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
});})(c__21296__auto__,keypressed_chan))
;
return ((function (switch__21281__auto__,c__21296__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____0 = (function (){
var statearr_34561 = [null,null,null,null,null,null,null,null,null];
(statearr_34561[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__);

(statearr_34561[(1)] = (1));

return statearr_34561;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____1 = (function (state_34544){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_34544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e34562){if((e34562 instanceof Object)){
var ex__21285__auto__ = e34562;
var statearr_34563_34574 = state_34544;
(statearr_34563_34574[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34575 = state_34544;
state_34544 = G__34575;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__ = function(state_34544){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____1.call(this,state_34544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,keypressed_chan))
})();
var state__21298__auto__ = (function (){var statearr_34564 = f__21297__auto__.call(null);
(statearr_34564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_34564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,keypressed_chan))
);

return c__21296__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__34577 = hand_name;
switch (G__34577) {
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
var key_boulder = (function (){var G__34580 = hand_name;
switch (G__34580) {
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
var key_hooked = (function (){var G__34583 = hand_name;
switch (G__34583) {
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

var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,keypressed,release_hand_BANG_){
return (function (state_34663){
var state_val_34664 = (state_34663[(1)]);
if((state_val_34664 === (7))){
var inst_34642 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
var G__34665_34693 = (((inst_34642 instanceof cljs.core.Keyword))?inst_34642.fqn:null);
switch (G__34665_34693) {
case "release-left":
var statearr_34666_34695 = state_34663__$1;
(statearr_34666_34695[(1)] = (9));


break;
case "release-right":
var statearr_34667_34696 = state_34663__$1;
(statearr_34667_34696[(1)] = (10));


break;
case "release-both":
var statearr_34668_34697 = state_34663__$1;
(statearr_34668_34697[(1)] = (11));


break;
default:
var statearr_34669_34698 = state_34663__$1;
(statearr_34669_34698[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (1))){
var state_34663__$1 = state_34663;
var statearr_34670_34699 = state_34663__$1;
(statearr_34670_34699[(2)] = null);

(statearr_34670_34699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (4))){
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34663__$1,(7),keypressed);
} else {
if((state_val_34664 === (15))){
var inst_34655 = (state_34663[(2)]);
var state_34663__$1 = (function (){var statearr_34671 = state_34663;
(statearr_34671[(7)] = inst_34655);

return statearr_34671;
})();
var statearr_34672_34700 = state_34663__$1;
(statearr_34672_34700[(2)] = null);

(statearr_34672_34700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (13))){
var inst_34648 = (state_34663[(8)]);
var inst_34650 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_34648);
var inst_34651 = cljs.core.map.call(null,release_hand_BANG_,inst_34650);
var inst_34652 = cljs.core.doall.call(null,inst_34651);
var state_34663__$1 = state_34663;
var statearr_34673_34701 = state_34663__$1;
(statearr_34673_34701[(2)] = inst_34652);

(statearr_34673_34701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (6))){
var inst_34659 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
var statearr_34674_34702 = state_34663__$1;
(statearr_34674_34702[(2)] = inst_34659);

(statearr_34674_34702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (3))){
var inst_34661 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34663__$1,inst_34661);
} else {
if((state_val_34664 === (12))){
var state_34663__$1 = state_34663;
var statearr_34675_34703 = state_34663__$1;
(statearr_34675_34703[(2)] = null);

(statearr_34675_34703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (2))){
var state_34663__$1 = state_34663;
var statearr_34676_34704 = state_34663__$1;
(statearr_34676_34704[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (11))){
var state_34663__$1 = state_34663;
var statearr_34678_34705 = state_34663__$1;
(statearr_34678_34705[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_34678_34705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (9))){
var state_34663__$1 = state_34663;
var statearr_34679_34706 = state_34663__$1;
(statearr_34679_34706[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_34679_34706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (5))){
var state_34663__$1 = state_34663;
var statearr_34680_34707 = state_34663__$1;
(statearr_34680_34707[(2)] = null);

(statearr_34680_34707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (14))){
var state_34663__$1 = state_34663;
var statearr_34681_34708 = state_34663__$1;
(statearr_34681_34708[(2)] = null);

(statearr_34681_34708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (10))){
var state_34663__$1 = state_34663;
var statearr_34682_34709 = state_34663__$1;
(statearr_34682_34709[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_34682_34709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (8))){
var inst_34648 = (state_34663[(8)]);
var inst_34648__$1 = (state_34663[(2)]);
var state_34663__$1 = (function (){var statearr_34683 = state_34663;
(statearr_34683[(8)] = inst_34648__$1);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34648__$1)){
var statearr_34684_34710 = state_34663__$1;
(statearr_34684_34710[(1)] = (13));

} else {
var statearr_34685_34711 = state_34663__$1;
(statearr_34685_34711[(1)] = (14));

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
});})(c__21296__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__21281__auto__,c__21296__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____0 = (function (){
var statearr_34689 = [null,null,null,null,null,null,null,null,null];
(statearr_34689[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__);

(statearr_34689[(1)] = (1));

return statearr_34689;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____1 = (function (state_34663){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_34663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e34690){if((e34690 instanceof Object)){
var ex__21285__auto__ = e34690;
var statearr_34691_34712 = state_34663;
(statearr_34691_34712[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34713 = state_34663;
state_34663 = G__34713;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__ = function(state_34663){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____1.call(this,state_34663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,keypressed,release_hand_BANG_))
})();
var state__21298__auto__ = (function (){var statearr_34692 = f__21297__auto__.call(null);
(statearr_34692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_34692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,keypressed,release_hand_BANG_))
);

return c__21296__auto__;
});
climbr.behaviour.user_actions.setup_climber_hook_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_hook_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var hook_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__34770 = hand_name;
switch (G__34770) {
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

var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,keypressed,hook_hand_BANG_){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,keypressed,hook_hand_BANG_){
return (function (state_34796){
var state_val_34797 = (state_34796[(1)]);
if((state_val_34797 === (7))){
var inst_34774 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var G__34798_34827 = (((inst_34774 instanceof cljs.core.Keyword))?inst_34774.fqn:null);
switch (G__34798_34827) {
case "hook-left":
var statearr_34799_34829 = state_34796__$1;
(statearr_34799_34829[(1)] = (9));


break;
case "hook-right":
var statearr_34800_34830 = state_34796__$1;
(statearr_34800_34830[(1)] = (10));


break;
case "hook-both":
var statearr_34801_34831 = state_34796__$1;
(statearr_34801_34831[(1)] = (11));


break;
default:
var statearr_34802_34832 = state_34796__$1;
(statearr_34802_34832[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (1))){
var state_34796__$1 = state_34796;
var statearr_34803_34833 = state_34796__$1;
(statearr_34803_34833[(2)] = null);

(statearr_34803_34833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (4))){
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34796__$1,(7),keypressed);
} else {
if((state_val_34797 === (15))){
var inst_34786 = (state_34796[(2)]);
var inst_34787 = cljs.core.map.call(null,hook_hand_BANG_,inst_34786);
var inst_34788 = cljs.core.doall.call(null,inst_34787);
var state_34796__$1 = (function (){var statearr_34804 = state_34796;
(statearr_34804[(7)] = inst_34788);

return statearr_34804;
})();
var statearr_34805_34834 = state_34796__$1;
(statearr_34805_34834[(2)] = null);

(statearr_34805_34834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (13))){
var state_34796__$1 = state_34796;
var statearr_34806_34835 = state_34796__$1;
(statearr_34806_34835[(2)] = null);

(statearr_34806_34835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (6))){
var inst_34792 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
var statearr_34807_34836 = state_34796__$1;
(statearr_34807_34836[(2)] = inst_34792);

(statearr_34807_34836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (3))){
var inst_34794 = (state_34796[(2)]);
var state_34796__$1 = state_34796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34796__$1,inst_34794);
} else {
if((state_val_34797 === (12))){
var state_34796__$1 = state_34796;
var statearr_34808_34837 = state_34796__$1;
(statearr_34808_34837[(2)] = null);

(statearr_34808_34837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (2))){
var state_34796__$1 = state_34796;
var statearr_34809_34838 = state_34796__$1;
(statearr_34809_34838[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (11))){
var state_34796__$1 = state_34796;
var statearr_34811_34839 = state_34796__$1;
(statearr_34811_34839[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_34811_34839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (9))){
var state_34796__$1 = state_34796;
var statearr_34812_34840 = state_34796__$1;
(statearr_34812_34840[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_34812_34840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (5))){
var state_34796__$1 = state_34796;
var statearr_34813_34841 = state_34796__$1;
(statearr_34813_34841[(2)] = null);

(statearr_34813_34841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (14))){
var inst_34780 = (state_34796[(8)]);
var inst_34784 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_34780);
var state_34796__$1 = state_34796;
var statearr_34814_34842 = state_34796__$1;
(statearr_34814_34842[(2)] = inst_34784);

(statearr_34814_34842[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (10))){
var state_34796__$1 = state_34796;
var statearr_34815_34843 = state_34796__$1;
(statearr_34815_34843[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_34815_34843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34797 === (8))){
var inst_34780 = (state_34796[(8)]);
var inst_34780__$1 = (state_34796[(2)]);
var inst_34781 = (inst_34780__$1 == null);
var state_34796__$1 = (function (){var statearr_34816 = state_34796;
(statearr_34816[(8)] = inst_34780__$1);

return statearr_34816;
})();
if(cljs.core.truth_(inst_34781)){
var statearr_34817_34844 = state_34796__$1;
(statearr_34817_34844[(1)] = (13));

} else {
var statearr_34818_34845 = state_34796__$1;
(statearr_34818_34845[(1)] = (14));

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
});})(c__21296__auto__,keypressed,hook_hand_BANG_))
;
return ((function (switch__21281__auto__,c__21296__auto__,keypressed,hook_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____0 = (function (){
var statearr_34822 = [null,null,null,null,null,null,null,null,null];
(statearr_34822[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__);

(statearr_34822[(1)] = (1));

return statearr_34822;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____1 = (function (state_34796){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_34796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e34823){if((e34823 instanceof Object)){
var ex__21285__auto__ = e34823;
var statearr_34824_34846 = state_34796;
(statearr_34824_34846[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34847 = state_34796;
state_34796 = G__34847;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__ = function(state_34796){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____1.call(this,state_34796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,keypressed,hook_hand_BANG_))
})();
var state__21298__auto__ = (function (){var statearr_34825 = f__21297__auto__.call(null);
(statearr_34825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_34825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,keypressed,hook_hand_BANG_))
);

return c__21296__auto__;
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

//# sourceMappingURL=user_actions.js.map?rel=1484864299612