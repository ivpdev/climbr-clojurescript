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
return (function (p1__53025_SHARP_){
return cljs.core.nth.call(null,p1__53025_SHARP_,(0));
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
return (function (p1__53026_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__53026_SHARP_,hand);
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
var G__53028 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__53028) {
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
return (function (p1__53030_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__53030_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__53031_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__53031_SHARP_));
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
var len__19850__auto___53046 = arguments.length;
var i__19851__auto___53047 = (0);
while(true){
if((i__19851__auto___53047 < len__19850__auto___53046)){
args__19857__auto__.push((arguments[i__19851__auto___53047]));

var G__53048 = (i__19851__auto___53047 + (1));
i__19851__auto___53047 = G__53048;
continue;
} else {
}
break;
}

var argseq__19858__auto__ = ((((3) < args__19857__auto__.length))?(new cljs.core.IndexedSeq(args__19857__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19858__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__53036){
var vec__53037 = p__53036;
var ___$1 = cljs.core.nth.call(null,vec__53037,(0),null);
var opts = cljs.core.nth.call(null,vec__53037,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__53040 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__53040) {
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
var force_obj = (function (){var G__53041 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__53041) {
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
var seq__53042 = cljs.core.seq.call(null,bodies);
var chunk__53043 = null;
var count__53044 = (0);
var i__53045 = (0);
while(true){
if((i__53045 < count__53044)){
var b = cljs.core._nth.call(null,chunk__53043,i__53045);
climbr.matter.matter.apply_force.call(null,b,force);

var G__53051 = seq__53042;
var G__53052 = chunk__53043;
var G__53053 = count__53044;
var G__53054 = (i__53045 + (1));
seq__53042 = G__53051;
chunk__53043 = G__53052;
count__53044 = G__53053;
i__53045 = G__53054;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53042);
if(temp__4657__auto__){
var seq__53042__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53042__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__53042__$1);
var G__53055 = cljs.core.chunk_rest.call(null,seq__53042__$1);
var G__53056 = c__19556__auto__;
var G__53057 = cljs.core.count.call(null,c__19556__auto__);
var G__53058 = (0);
seq__53042 = G__53055;
chunk__53043 = G__53056;
count__53044 = G__53057;
i__53045 = G__53058;
continue;
} else {
var b = cljs.core.first.call(null,seq__53042__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__53059 = cljs.core.next.call(null,seq__53042__$1);
var G__53060 = null;
var G__53061 = (0);
var G__53062 = (0);
seq__53042 = G__53059;
chunk__53043 = G__53060;
count__53044 = G__53061;
i__53045 = G__53062;
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

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq53032){
var G__53033 = cljs.core.first.call(null,seq53032);
var seq53032__$1 = cljs.core.next.call(null,seq53032);
var G__53034 = cljs.core.first.call(null,seq53032__$1);
var seq53032__$2 = cljs.core.next.call(null,seq53032__$1);
var G__53035 = cljs.core.first.call(null,seq53032__$2);
var seq53032__$3 = cljs.core.next.call(null,seq53032__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__53033,G__53034,G__53035,seq53032__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__21107__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21107__auto__,keypressed_chan){
return (function (){
var f__21108__auto__ = (function (){var switch__21092__auto__ = ((function (c__21107__auto__,keypressed_chan){
return (function (state_53120){
var state_val_53121 = (state_53120[(1)]);
if((state_val_53121 === (7))){
var inst_53106 = (state_53120[(7)]);
var inst_53105 = (state_53120[(2)]);
var inst_53106__$1 = cljs.core.get.call(null,key_actions,inst_53105);
var inst_53107 = (inst_53106__$1 == null);
var state_53120__$1 = (function (){var statearr_53122 = state_53120;
(statearr_53122[(7)] = inst_53106__$1);

return statearr_53122;
})();
if(cljs.core.truth_(inst_53107)){
var statearr_53123_53141 = state_53120__$1;
(statearr_53123_53141[(1)] = (8));

} else {
var statearr_53124_53142 = state_53120__$1;
(statearr_53124_53142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53121 === (1))){
var state_53120__$1 = state_53120;
var statearr_53125_53143 = state_53120__$1;
(statearr_53125_53143[(2)] = null);

(statearr_53125_53143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53121 === (4))){
var state_53120__$1 = state_53120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53120__$1,(7),keypressed_chan);
} else {
if((state_val_53121 === (6))){
var inst_53116 = (state_53120[(2)]);
var state_53120__$1 = state_53120;
var statearr_53126_53144 = state_53120__$1;
(statearr_53126_53144[(2)] = inst_53116);

(statearr_53126_53144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53121 === (3))){
var inst_53118 = (state_53120[(2)]);
var state_53120__$1 = state_53120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53120__$1,inst_53118);
} else {
if((state_val_53121 === (2))){
var state_53120__$1 = state_53120;
var statearr_53127_53145 = state_53120__$1;
(statearr_53127_53145[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53121 === (9))){
var inst_53106 = (state_53120[(7)]);
var inst_53110 = inst_53106.call(null);
var state_53120__$1 = state_53120;
var statearr_53129_53146 = state_53120__$1;
(statearr_53129_53146[(2)] = inst_53110);

(statearr_53129_53146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53121 === (5))){
var state_53120__$1 = state_53120;
var statearr_53130_53147 = state_53120__$1;
(statearr_53130_53147[(2)] = null);

(statearr_53130_53147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53121 === (10))){
var inst_53112 = (state_53120[(2)]);
var state_53120__$1 = (function (){var statearr_53131 = state_53120;
(statearr_53131[(8)] = inst_53112);

return statearr_53131;
})();
var statearr_53132_53148 = state_53120__$1;
(statearr_53132_53148[(2)] = null);

(statearr_53132_53148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53121 === (8))){
var state_53120__$1 = state_53120;
var statearr_53133_53149 = state_53120__$1;
(statearr_53133_53149[(2)] = null);

(statearr_53133_53149[(1)] = (10));


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
var statearr_53137 = [null,null,null,null,null,null,null,null,null];
(statearr_53137[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__);

(statearr_53137[(1)] = (1));

return statearr_53137;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____1 = (function (state_53120){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_53120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e53138){if((e53138 instanceof Object)){
var ex__21096__auto__ = e53138;
var statearr_53139_53150 = state_53120;
(statearr_53139_53150[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53151 = state_53120;
state_53120 = G__53151;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__ = function(state_53120){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____1.call(this,state_53120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,keypressed_chan))
})();
var state__21109__auto__ = (function (){var statearr_53140 = f__21108__auto__.call(null);
(statearr_53140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_53140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21109__auto__);
});})(c__21107__auto__,keypressed_chan))
);

return c__21107__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__53153 = hand_name;
switch (G__53153) {
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
var key_boulder = (function (){var G__53156 = hand_name;
switch (G__53156) {
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
var constraint = climbr.matter.matter.constraint.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bodyA","bodyA",-1769198322),hand,new cljs.core.Keyword(null,"bodyB","bodyB",357099697),boulder,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strokeStyle","strokeStyle",-1733337817),"#191716"], null)], null)));
var key_hooked = (function (){var G__53159 = hand_name;
switch (G__53159) {
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
return (function (state_53239){
var state_val_53240 = (state_53239[(1)]);
if((state_val_53240 === (7))){
var inst_53218 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var G__53241_53269 = (((inst_53218 instanceof cljs.core.Keyword))?inst_53218.fqn:null);
switch (G__53241_53269) {
case "release-left":
var statearr_53242_53271 = state_53239__$1;
(statearr_53242_53271[(1)] = (9));


break;
case "release-right":
var statearr_53243_53272 = state_53239__$1;
(statearr_53243_53272[(1)] = (10));


break;
case "release-both":
var statearr_53244_53273 = state_53239__$1;
(statearr_53244_53273[(1)] = (11));


break;
default:
var statearr_53245_53274 = state_53239__$1;
(statearr_53245_53274[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (1))){
var state_53239__$1 = state_53239;
var statearr_53246_53275 = state_53239__$1;
(statearr_53246_53275[(2)] = null);

(statearr_53246_53275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (4))){
var state_53239__$1 = state_53239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53239__$1,(7),keypressed);
} else {
if((state_val_53240 === (15))){
var inst_53231 = (state_53239[(2)]);
var state_53239__$1 = (function (){var statearr_53247 = state_53239;
(statearr_53247[(7)] = inst_53231);

return statearr_53247;
})();
var statearr_53248_53276 = state_53239__$1;
(statearr_53248_53276[(2)] = null);

(statearr_53248_53276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (13))){
var inst_53224 = (state_53239[(8)]);
var inst_53226 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_53224);
var inst_53227 = cljs.core.map.call(null,release_hand_BANG_,inst_53226);
var inst_53228 = cljs.core.doall.call(null,inst_53227);
var state_53239__$1 = state_53239;
var statearr_53249_53277 = state_53239__$1;
(statearr_53249_53277[(2)] = inst_53228);

(statearr_53249_53277[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (6))){
var inst_53235 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
var statearr_53250_53278 = state_53239__$1;
(statearr_53250_53278[(2)] = inst_53235);

(statearr_53250_53278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (3))){
var inst_53237 = (state_53239[(2)]);
var state_53239__$1 = state_53239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53239__$1,inst_53237);
} else {
if((state_val_53240 === (12))){
var state_53239__$1 = state_53239;
var statearr_53251_53279 = state_53239__$1;
(statearr_53251_53279[(2)] = null);

(statearr_53251_53279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (2))){
var state_53239__$1 = state_53239;
var statearr_53252_53280 = state_53239__$1;
(statearr_53252_53280[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (11))){
var state_53239__$1 = state_53239;
var statearr_53254_53281 = state_53239__$1;
(statearr_53254_53281[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_53254_53281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (9))){
var state_53239__$1 = state_53239;
var statearr_53255_53282 = state_53239__$1;
(statearr_53255_53282[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_53255_53282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (5))){
var state_53239__$1 = state_53239;
var statearr_53256_53283 = state_53239__$1;
(statearr_53256_53283[(2)] = null);

(statearr_53256_53283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (14))){
var state_53239__$1 = state_53239;
var statearr_53257_53284 = state_53239__$1;
(statearr_53257_53284[(2)] = null);

(statearr_53257_53284[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (10))){
var state_53239__$1 = state_53239;
var statearr_53258_53285 = state_53239__$1;
(statearr_53258_53285[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_53258_53285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53240 === (8))){
var inst_53224 = (state_53239[(8)]);
var inst_53224__$1 = (state_53239[(2)]);
var state_53239__$1 = (function (){var statearr_53259 = state_53239;
(statearr_53259[(8)] = inst_53224__$1);

return statearr_53259;
})();
if(cljs.core.truth_(inst_53224__$1)){
var statearr_53260_53286 = state_53239__$1;
(statearr_53260_53286[(1)] = (13));

} else {
var statearr_53261_53287 = state_53239__$1;
(statearr_53261_53287[(1)] = (14));

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
var statearr_53265 = [null,null,null,null,null,null,null,null,null];
(statearr_53265[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__);

(statearr_53265[(1)] = (1));

return statearr_53265;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____1 = (function (state_53239){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_53239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e53266){if((e53266 instanceof Object)){
var ex__21096__auto__ = e53266;
var statearr_53267_53288 = state_53239;
(statearr_53267_53288[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53289 = state_53239;
state_53239 = G__53289;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__ = function(state_53239){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____1.call(this,state_53239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,keypressed,release_hand_BANG_))
})();
var state__21109__auto__ = (function (){var statearr_53268 = f__21108__auto__.call(null);
(statearr_53268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_53268;
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
var hand_key = (function (){var G__53346 = hand_name;
switch (G__53346) {
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
return (function (state_53372){
var state_val_53373 = (state_53372[(1)]);
if((state_val_53373 === (7))){
var inst_53350 = (state_53372[(2)]);
var state_53372__$1 = state_53372;
var G__53374_53403 = (((inst_53350 instanceof cljs.core.Keyword))?inst_53350.fqn:null);
switch (G__53374_53403) {
case "hook-left":
var statearr_53375_53405 = state_53372__$1;
(statearr_53375_53405[(1)] = (9));


break;
case "hook-right":
var statearr_53376_53406 = state_53372__$1;
(statearr_53376_53406[(1)] = (10));


break;
case "hook-both":
var statearr_53377_53407 = state_53372__$1;
(statearr_53377_53407[(1)] = (11));


break;
default:
var statearr_53378_53408 = state_53372__$1;
(statearr_53378_53408[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (1))){
var state_53372__$1 = state_53372;
var statearr_53379_53409 = state_53372__$1;
(statearr_53379_53409[(2)] = null);

(statearr_53379_53409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (4))){
var state_53372__$1 = state_53372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53372__$1,(7),keypressed);
} else {
if((state_val_53373 === (15))){
var inst_53362 = (state_53372[(2)]);
var inst_53363 = cljs.core.map.call(null,hook_hand_BANG_,inst_53362);
var inst_53364 = cljs.core.doall.call(null,inst_53363);
var state_53372__$1 = (function (){var statearr_53380 = state_53372;
(statearr_53380[(7)] = inst_53364);

return statearr_53380;
})();
var statearr_53381_53410 = state_53372__$1;
(statearr_53381_53410[(2)] = null);

(statearr_53381_53410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (13))){
var state_53372__$1 = state_53372;
var statearr_53382_53411 = state_53372__$1;
(statearr_53382_53411[(2)] = null);

(statearr_53382_53411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (6))){
var inst_53368 = (state_53372[(2)]);
var state_53372__$1 = state_53372;
var statearr_53383_53412 = state_53372__$1;
(statearr_53383_53412[(2)] = inst_53368);

(statearr_53383_53412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (3))){
var inst_53370 = (state_53372[(2)]);
var state_53372__$1 = state_53372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53372__$1,inst_53370);
} else {
if((state_val_53373 === (12))){
var state_53372__$1 = state_53372;
var statearr_53384_53413 = state_53372__$1;
(statearr_53384_53413[(2)] = null);

(statearr_53384_53413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (2))){
var state_53372__$1 = state_53372;
var statearr_53385_53414 = state_53372__$1;
(statearr_53385_53414[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (11))){
var state_53372__$1 = state_53372;
var statearr_53387_53415 = state_53372__$1;
(statearr_53387_53415[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_53387_53415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (9))){
var state_53372__$1 = state_53372;
var statearr_53388_53416 = state_53372__$1;
(statearr_53388_53416[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_53388_53416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (5))){
var state_53372__$1 = state_53372;
var statearr_53389_53417 = state_53372__$1;
(statearr_53389_53417[(2)] = null);

(statearr_53389_53417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (14))){
var inst_53356 = (state_53372[(8)]);
var inst_53360 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_53356);
var state_53372__$1 = state_53372;
var statearr_53390_53418 = state_53372__$1;
(statearr_53390_53418[(2)] = inst_53360);

(statearr_53390_53418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (10))){
var state_53372__$1 = state_53372;
var statearr_53391_53419 = state_53372__$1;
(statearr_53391_53419[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_53391_53419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53373 === (8))){
var inst_53356 = (state_53372[(8)]);
var inst_53356__$1 = (state_53372[(2)]);
var inst_53357 = (inst_53356__$1 == null);
var state_53372__$1 = (function (){var statearr_53392 = state_53372;
(statearr_53392[(8)] = inst_53356__$1);

return statearr_53392;
})();
if(cljs.core.truth_(inst_53357)){
var statearr_53393_53420 = state_53372__$1;
(statearr_53393_53420[(1)] = (13));

} else {
var statearr_53394_53421 = state_53372__$1;
(statearr_53394_53421[(1)] = (14));

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
var statearr_53398 = [null,null,null,null,null,null,null,null,null];
(statearr_53398[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__);

(statearr_53398[(1)] = (1));

return statearr_53398;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____1 = (function (state_53372){
while(true){
var ret_value__21094__auto__ = (function (){try{while(true){
var result__21095__auto__ = switch__21092__auto__.call(null,state_53372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21095__auto__;
}
break;
}
}catch (e53399){if((e53399 instanceof Object)){
var ex__21096__auto__ = e53399;
var statearr_53400_53422 = state_53372;
(statearr_53400_53422[(5)] = ex__21096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53423 = state_53372;
state_53372 = G__53423;
continue;
} else {
return ret_value__21094__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__ = function(state_53372){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____1.call(this,state_53372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21093__auto__;
})()
;})(switch__21092__auto__,c__21107__auto__,keypressed,hook_hand_BANG_))
})();
var state__21109__auto__ = (function (){var statearr_53401 = f__21108__auto__.call(null);
(statearr_53401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21107__auto__);

return statearr_53401;
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

//# sourceMappingURL=user_actions.js.map?rel=1492204638921