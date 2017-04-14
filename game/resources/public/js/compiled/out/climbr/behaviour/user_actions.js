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
return (function (p1__39613_SHARP_){
return cljs.core.nth.call(null,p1__39613_SHARP_,(0));
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
return (function (p1__39614_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__39614_SHARP_,hand);
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
var G__39616 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__39616) {
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
return (function (p1__39618_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__39618_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__39619_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__39619_SHARP_));
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
var len__19850__auto___39634 = arguments.length;
var i__19851__auto___39635 = (0);
while(true){
if((i__19851__auto___39635 < len__19850__auto___39634)){
args__19857__auto__.push((arguments[i__19851__auto___39635]));

var G__39636 = (i__19851__auto___39635 + (1));
i__19851__auto___39635 = G__39636;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((3) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19858__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__39624){
var vec__39625 = p__39624;
var ___$1 = cljs.core.nth.call(null,vec__39625,(0),null);
var opts = cljs.core.nth.call(null,vec__39625,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__39628 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__39628) {
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
var force_obj = (function (){var G__39629 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__39629) {
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
var seq__39630 = cljs.core.seq.call(null,bodies);
var chunk__39631 = null;
var count__39632 = (0);
var i__39633 = (0);
while(true){
if((i__39633 < count__39632)){
var b = cljs.core._nth.call(null,chunk__39631,i__39633);
climbr.matter.matter.apply_force.call(null,b,force);

var G__39639 = seq__39630;
var G__39640 = chunk__39631;
var G__39641 = count__39632;
var G__39642 = (i__39633 + (1));
seq__39630 = G__39639;
chunk__39631 = G__39640;
count__39632 = G__39641;
i__39633 = G__39642;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39630);
if(temp__4657__auto__){
var seq__39630__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39630__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__39630__$1);
var G__39643 = cljs.core.chunk_rest.call(null,seq__39630__$1);
var G__39644 = c__19556__auto__;
var G__39645 = cljs.core.count.call(null,c__19556__auto__);
var G__39646 = (0);
seq__39630 = G__39643;
chunk__39631 = G__39644;
count__39632 = G__39645;
i__39633 = G__39646;
continue;
} else {
var b = cljs.core.first.call(null,seq__39630__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__39647 = cljs.core.next.call(null,seq__39630__$1);
var G__39648 = null;
var G__39649 = (0);
var G__39650 = (0);
seq__39630 = G__39647;
chunk__39631 = G__39648;
count__39632 = G__39649;
i__39633 = G__39650;
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

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq39620){
var G__39621 = cljs.core.first.call(null,seq39620);
var seq39620__$1 = cljs.core.next.call(null,seq39620);
var G__39622 = cljs.core.first.call(null,seq39620__$1);
var seq39620__$2 = cljs.core.next.call(null,seq39620__$1);
var G__39623 = cljs.core.first.call(null,seq39620__$2);
var seq39620__$3 = cljs.core.next.call(null,seq39620__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39621,G__39622,G__39623,seq39620__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,keypressed_chan){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,keypressed_chan){
return (function (state_39708){
var state_val_39709 = (state_39708[(1)]);
if((state_val_39709 === (7))){
var inst_39694 = (state_39708[(7)]);
var inst_39693 = (state_39708[(2)]);
var inst_39694__$1 = cljs.core.get.call(null,key_actions,inst_39693);
var inst_39695 = (inst_39694__$1 == null);
var state_39708__$1 = (function (){var statearr_39710 = state_39708;
(statearr_39710[(7)] = inst_39694__$1);

return statearr_39710;
})();
if(cljs.core.truth_(inst_39695)){
var statearr_39711_39729 = state_39708__$1;
(statearr_39711_39729[(1)] = (8));

} else {
var statearr_39712_39730 = state_39708__$1;
(statearr_39712_39730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (1))){
var state_39708__$1 = state_39708;
var statearr_39713_39731 = state_39708__$1;
(statearr_39713_39731[(2)] = null);

(statearr_39713_39731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (4))){
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39708__$1,(7),keypressed_chan);
} else {
if((state_val_39709 === (6))){
var inst_39704 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
var statearr_39714_39732 = state_39708__$1;
(statearr_39714_39732[(2)] = inst_39704);

(statearr_39714_39732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (3))){
var inst_39706 = (state_39708[(2)]);
var state_39708__$1 = state_39708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39708__$1,inst_39706);
} else {
if((state_val_39709 === (2))){
var state_39708__$1 = state_39708;
var statearr_39715_39733 = state_39708__$1;
(statearr_39715_39733[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (9))){
var inst_39694 = (state_39708[(7)]);
var inst_39698 = inst_39694.call(null);
var state_39708__$1 = state_39708;
var statearr_39717_39734 = state_39708__$1;
(statearr_39717_39734[(2)] = inst_39698);

(statearr_39717_39734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (5))){
var state_39708__$1 = state_39708;
var statearr_39718_39735 = state_39708__$1;
(statearr_39718_39735[(2)] = null);

(statearr_39718_39735[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (10))){
var inst_39700 = (state_39708[(2)]);
var state_39708__$1 = (function (){var statearr_39719 = state_39708;
(statearr_39719[(8)] = inst_39700);

return statearr_39719;
})();
var statearr_39720_39736 = state_39708__$1;
(statearr_39720_39736[(2)] = null);

(statearr_39720_39736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39709 === (8))){
var state_39708__$1 = state_39708;
var statearr_39721_39737 = state_39708__$1;
(statearr_39721_39737[(2)] = null);

(statearr_39721_39737[(1)] = (10));


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
});})(c__21107__auto__,keypressed_chan))
;
return ((function (switch__21092__auto__,c__21107__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____0 = (function (){
var statearr_39725 = [null,null,null,null,null,null,null,null,null];
(statearr_39725[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__);

(statearr_39725[(1)] = (1));

return statearr_39725;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____1 = (function (state_39708){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_39708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e39726){if((e39726 instanceof Object)){
var ex__21096__auto__ = e39726;
var statearr_39727_39738 = state_39708;
(statearr_39727_39738[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39739 = state_39708;
state_39708 = G__39739;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__ = function(state_39708){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____1.call(this,state_39708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,keypressed_chan))
})();
var state__21109__auto__ = (function (){var statearr_39728 = f__21108__auto__.call(null);
(statearr_39728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_39728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,keypressed_chan))
);

return c__21107__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__39741 = hand_name;
switch (G__39741) {
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
var key_boulder = (function (){var G__39744 = hand_name;
switch (G__39744) {
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
var key_hooked = (function (){var G__39747 = hand_name;
switch (G__39747) {
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

var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,keypressed,release_hand_BANG_){
return (function (state_39827){
var state_val_39828 = (state_39827[(1)]);
if((state_val_39828 === (7))){
var inst_39806 = (state_39827[(2)]);
var state_39827__$1 = state_39827;
var G__39829_39857 = (((inst_39806 instanceof cljs.core.Keyword))?inst_39806.fqn:null);
switch (G__39829_39857) {
case "release-left":
var statearr_39830_39859 = state_39827__$1;
(statearr_39830_39859[(1)] = (9));


break;
case "release-right":
var statearr_39831_39860 = state_39827__$1;
(statearr_39831_39860[(1)] = (10));


break;
case "release-both":
var statearr_39832_39861 = state_39827__$1;
(statearr_39832_39861[(1)] = (11));


break;
default:
var statearr_39833_39862 = state_39827__$1;
(statearr_39833_39862[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (1))){
var state_39827__$1 = state_39827;
var statearr_39834_39863 = state_39827__$1;
(statearr_39834_39863[(2)] = null);

(statearr_39834_39863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (4))){
var state_39827__$1 = state_39827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39827__$1,(7),keypressed);
} else {
if((state_val_39828 === (15))){
var inst_39819 = (state_39827[(2)]);
var state_39827__$1 = (function (){var statearr_39835 = state_39827;
(statearr_39835[(7)] = inst_39819);

return statearr_39835;
})();
var statearr_39836_39864 = state_39827__$1;
(statearr_39836_39864[(2)] = null);

(statearr_39836_39864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (13))){
var inst_39812 = (state_39827[(8)]);
var inst_39814 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_39812);
var inst_39815 = cljs.core.map.call(null,release_hand_BANG_,inst_39814);
var inst_39816 = cljs.core.doall.call(null,inst_39815);
var state_39827__$1 = state_39827;
var statearr_39837_39865 = state_39827__$1;
(statearr_39837_39865[(2)] = inst_39816);

(statearr_39837_39865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (6))){
var inst_39823 = (state_39827[(2)]);
var state_39827__$1 = state_39827;
var statearr_39838_39866 = state_39827__$1;
(statearr_39838_39866[(2)] = inst_39823);

(statearr_39838_39866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (3))){
var inst_39825 = (state_39827[(2)]);
var state_39827__$1 = state_39827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39827__$1,inst_39825);
} else {
if((state_val_39828 === (12))){
var state_39827__$1 = state_39827;
var statearr_39839_39867 = state_39827__$1;
(statearr_39839_39867[(2)] = null);

(statearr_39839_39867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (2))){
var state_39827__$1 = state_39827;
var statearr_39840_39868 = state_39827__$1;
(statearr_39840_39868[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (11))){
var state_39827__$1 = state_39827;
var statearr_39842_39869 = state_39827__$1;
(statearr_39842_39869[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_39842_39869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (9))){
var state_39827__$1 = state_39827;
var statearr_39843_39870 = state_39827__$1;
(statearr_39843_39870[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_39843_39870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (5))){
var state_39827__$1 = state_39827;
var statearr_39844_39871 = state_39827__$1;
(statearr_39844_39871[(2)] = null);

(statearr_39844_39871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (14))){
var state_39827__$1 = state_39827;
var statearr_39845_39872 = state_39827__$1;
(statearr_39845_39872[(2)] = null);

(statearr_39845_39872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (10))){
var state_39827__$1 = state_39827;
var statearr_39846_39873 = state_39827__$1;
(statearr_39846_39873[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_39846_39873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (8))){
var inst_39812 = (state_39827[(8)]);
var inst_39812__$1 = (state_39827[(2)]);
var state_39827__$1 = (function (){var statearr_39847 = state_39827;
(statearr_39847[(8)] = inst_39812__$1);

return statearr_39847;
})();
if(cljs.core.truth_(inst_39812__$1)){
var statearr_39848_39874 = state_39827__$1;
(statearr_39848_39874[(1)] = (13));

} else {
var statearr_39849_39875 = state_39827__$1;
(statearr_39849_39875[(1)] = (14));

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
});})(c__21107__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__21092__auto__,c__21107__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____0 = (function (){
var statearr_39853 = [null,null,null,null,null,null,null,null,null];
(statearr_39853[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__);

(statearr_39853[(1)] = (1));

return statearr_39853;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____1 = (function (state_39827){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_39827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e39854){if((e39854 instanceof Object)){
var ex__21096__auto__ = e39854;
var statearr_39855_39876 = state_39827;
(statearr_39855_39876[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39877 = state_39827;
state_39827 = G__39877;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__ = function(state_39827){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____1.call(this,state_39827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,keypressed,release_hand_BANG_))
})();
var state__21109__auto__ = (function (){var statearr_39856 = f__21108__auto__.call(null);
(statearr_39856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_39856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,keypressed,release_hand_BANG_))
);

return c__21107__auto__;
});
climbr.behaviour.user_actions.setup_climber_hook_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_hook_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var hook_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__39934 = hand_name;
switch (G__39934) {
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

var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,keypressed,hook_hand_BANG_){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,keypressed,hook_hand_BANG_){
return (function (state_39960){
var state_val_39961 = (state_39960[(1)]);
if((state_val_39961 === (7))){
var inst_39938 = (state_39960[(2)]);
var state_39960__$1 = state_39960;
var G__39962_39991 = (((inst_39938 instanceof cljs.core.Keyword))?inst_39938.fqn:null);
switch (G__39962_39991) {
case "hook-left":
var statearr_39963_39993 = state_39960__$1;
(statearr_39963_39993[(1)] = (9));


break;
case "hook-right":
var statearr_39964_39994 = state_39960__$1;
(statearr_39964_39994[(1)] = (10));


break;
case "hook-both":
var statearr_39965_39995 = state_39960__$1;
(statearr_39965_39995[(1)] = (11));


break;
default:
var statearr_39966_39996 = state_39960__$1;
(statearr_39966_39996[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (1))){
var state_39960__$1 = state_39960;
var statearr_39967_39997 = state_39960__$1;
(statearr_39967_39997[(2)] = null);

(statearr_39967_39997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (4))){
var state_39960__$1 = state_39960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39960__$1,(7),keypressed);
} else {
if((state_val_39961 === (15))){
var inst_39950 = (state_39960[(2)]);
var inst_39951 = cljs.core.map.call(null,hook_hand_BANG_,inst_39950);
var inst_39952 = cljs.core.doall.call(null,inst_39951);
var state_39960__$1 = (function (){var statearr_39968 = state_39960;
(statearr_39968[(7)] = inst_39952);

return statearr_39968;
})();
var statearr_39969_39998 = state_39960__$1;
(statearr_39969_39998[(2)] = null);

(statearr_39969_39998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (13))){
var state_39960__$1 = state_39960;
var statearr_39970_39999 = state_39960__$1;
(statearr_39970_39999[(2)] = null);

(statearr_39970_39999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (6))){
var inst_39956 = (state_39960[(2)]);
var state_39960__$1 = state_39960;
var statearr_39971_40000 = state_39960__$1;
(statearr_39971_40000[(2)] = inst_39956);

(statearr_39971_40000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (3))){
var inst_39958 = (state_39960[(2)]);
var state_39960__$1 = state_39960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39960__$1,inst_39958);
} else {
if((state_val_39961 === (12))){
var state_39960__$1 = state_39960;
var statearr_39972_40001 = state_39960__$1;
(statearr_39972_40001[(2)] = null);

(statearr_39972_40001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (2))){
var state_39960__$1 = state_39960;
var statearr_39973_40002 = state_39960__$1;
(statearr_39973_40002[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (11))){
var state_39960__$1 = state_39960;
var statearr_39975_40003 = state_39960__$1;
(statearr_39975_40003[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_39975_40003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (9))){
var state_39960__$1 = state_39960;
var statearr_39976_40004 = state_39960__$1;
(statearr_39976_40004[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_39976_40004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (5))){
var state_39960__$1 = state_39960;
var statearr_39977_40005 = state_39960__$1;
(statearr_39977_40005[(2)] = null);

(statearr_39977_40005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (14))){
var inst_39944 = (state_39960[(8)]);
var inst_39948 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_39944);
var state_39960__$1 = state_39960;
var statearr_39978_40006 = state_39960__$1;
(statearr_39978_40006[(2)] = inst_39948);

(statearr_39978_40006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (10))){
var state_39960__$1 = state_39960;
var statearr_39979_40007 = state_39960__$1;
(statearr_39979_40007[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_39979_40007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39961 === (8))){
var inst_39944 = (state_39960[(8)]);
var inst_39944__$1 = (state_39960[(2)]);
var inst_39945 = (inst_39944__$1 == null);
var state_39960__$1 = (function (){var statearr_39980 = state_39960;
(statearr_39980[(8)] = inst_39944__$1);

return statearr_39980;
})();
if(cljs.core.truth_(inst_39945)){
var statearr_39981_40008 = state_39960__$1;
(statearr_39981_40008[(1)] = (13));

} else {
var statearr_39982_40009 = state_39960__$1;
(statearr_39982_40009[(1)] = (14));

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
});})(c__21107__auto__,keypressed,hook_hand_BANG_))
;
return ((function (switch__21092__auto__,c__21107__auto__,keypressed,hook_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____0 = (function (){
var statearr_39986 = [null,null,null,null,null,null,null,null,null];
(statearr_39986[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__);

(statearr_39986[(1)] = (1));

return statearr_39986;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____1 = (function (state_39960){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_39960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e39987){if((e39987 instanceof Object)){
var ex__21096__auto__ = e39987;
var statearr_39988_40010 = state_39960;
(statearr_39988_40010[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40011 = state_39960;
state_39960 = G__40011;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__ = function(state_39960){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____1.call(this,state_39960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,keypressed,hook_hand_BANG_))
})();
var state__21109__auto__ = (function (){var statearr_39989 = f__21108__auto__.call(null);
(statearr_39989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_39989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,keypressed,hook_hand_BANG_))
);

return c__21107__auto__;
});
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,climbr.controls.keyboard.keypressed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.is_standing_QMARK_.call(null);
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

//# sourceMappingURL=user_actions.js.map?rel=1492194137583