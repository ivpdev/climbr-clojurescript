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
return (function (p1__25022_SHARP_){
return cljs.core.nth.call(null,p1__25022_SHARP_,(0));
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
return (function (p1__25023_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__25023_SHARP_,hand);
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
var G__25025 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__25025) {
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
return (function (p1__25027_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__25027_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__25028_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__25028_SHARP_));
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
var len__19864__auto___25043 = arguments.length;
var i__19865__auto___25044 = (0);
while(true){
if((i__19865__auto___25044 < len__19864__auto___25043)){
args__19871__auto__.push((arguments[i__19865__auto___25044]));

var G__25045 = (i__19865__auto___25044 + (1));
i__19865__auto___25044 = G__25045;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((3) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19872__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__25033){
var vec__25034 = p__25033;
var ___$1 = cljs.core.nth.call(null,vec__25034,(0),null);
var opts = cljs.core.nth.call(null,vec__25034,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__25037 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__25037) {
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
var force_obj = (function (){var G__25038 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__25038) {
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
var seq__25039 = cljs.core.seq.call(null,bodies);
var chunk__25040 = null;
var count__25041 = (0);
var i__25042 = (0);
while(true){
if((i__25042 < count__25041)){
var b = cljs.core._nth.call(null,chunk__25040,i__25042);
climbr.matter.matter.apply_force.call(null,b,force);

var G__25048 = seq__25039;
var G__25049 = chunk__25040;
var G__25050 = count__25041;
var G__25051 = (i__25042 + (1));
seq__25039 = G__25048;
chunk__25040 = G__25049;
count__25041 = G__25050;
i__25042 = G__25051;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25039);
if(temp__4657__auto__){
var seq__25039__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25039__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__25039__$1);
var G__25052 = cljs.core.chunk_rest.call(null,seq__25039__$1);
var G__25053 = c__19570__auto__;
var G__25054 = cljs.core.count.call(null,c__19570__auto__);
var G__25055 = (0);
seq__25039 = G__25052;
chunk__25040 = G__25053;
count__25041 = G__25054;
i__25042 = G__25055;
continue;
} else {
var b = cljs.core.first.call(null,seq__25039__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__25056 = cljs.core.next.call(null,seq__25039__$1);
var G__25057 = null;
var G__25058 = (0);
var G__25059 = (0);
seq__25039 = G__25056;
chunk__25040 = G__25057;
count__25041 = G__25058;
i__25042 = G__25059;
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

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq25029){
var G__25030 = cljs.core.first.call(null,seq25029);
var seq25029__$1 = cljs.core.next.call(null,seq25029);
var G__25031 = cljs.core.first.call(null,seq25029__$1);
var seq25029__$2 = cljs.core.next.call(null,seq25029__$1);
var G__25032 = cljs.core.first.call(null,seq25029__$2);
var seq25029__$3 = cljs.core.next.call(null,seq25029__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25030,G__25031,G__25032,seq25029__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__20819__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20819__auto__,keypressed_chan){
return (function (){
var f__20820__auto__ = (function (){var switch__20798__auto__ = ((function (c__20819__auto__,keypressed_chan){
return (function (state_25117){
var state_val_25118 = (state_25117[(1)]);
if((state_val_25118 === (7))){
var inst_25103 = (state_25117[(7)]);
var inst_25102 = (state_25117[(2)]);
var inst_25103__$1 = cljs.core.get.call(null,key_actions,inst_25102);
var inst_25104 = (inst_25103__$1 == null);
var state_25117__$1 = (function (){var statearr_25119 = state_25117;
(statearr_25119[(7)] = inst_25103__$1);

return statearr_25119;
})();
if(cljs.core.truth_(inst_25104)){
var statearr_25120_25138 = state_25117__$1;
(statearr_25120_25138[(1)] = (8));

} else {
var statearr_25121_25139 = state_25117__$1;
(statearr_25121_25139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (1))){
var state_25117__$1 = state_25117;
var statearr_25122_25140 = state_25117__$1;
(statearr_25122_25140[(2)] = null);

(statearr_25122_25140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (4))){
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25117__$1,(7),keypressed_chan);
} else {
if((state_val_25118 === (6))){
var inst_25113 = (state_25117[(2)]);
var state_25117__$1 = state_25117;
var statearr_25123_25141 = state_25117__$1;
(statearr_25123_25141[(2)] = inst_25113);

(statearr_25123_25141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (3))){
var inst_25115 = (state_25117[(2)]);
var state_25117__$1 = state_25117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25117__$1,inst_25115);
} else {
if((state_val_25118 === (2))){
var state_25117__$1 = state_25117;
var statearr_25124_25142 = state_25117__$1;
(statearr_25124_25142[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (9))){
var inst_25103 = (state_25117[(7)]);
var inst_25107 = inst_25103.call(null);
var state_25117__$1 = state_25117;
var statearr_25126_25143 = state_25117__$1;
(statearr_25126_25143[(2)] = inst_25107);

(statearr_25126_25143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (5))){
var state_25117__$1 = state_25117;
var statearr_25127_25144 = state_25117__$1;
(statearr_25127_25144[(2)] = null);

(statearr_25127_25144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (10))){
var inst_25109 = (state_25117[(2)]);
var state_25117__$1 = (function (){var statearr_25128 = state_25117;
(statearr_25128[(8)] = inst_25109);

return statearr_25128;
})();
var statearr_25129_25145 = state_25117__$1;
(statearr_25129_25145[(2)] = null);

(statearr_25129_25145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25118 === (8))){
var state_25117__$1 = state_25117;
var statearr_25130_25146 = state_25117__$1;
(statearr_25130_25146[(2)] = null);

(statearr_25130_25146[(1)] = (10));


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
var statearr_25134 = [null,null,null,null,null,null,null,null,null];
(statearr_25134[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__);

(statearr_25134[(1)] = (1));

return statearr_25134;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____1 = (function (state_25117){
while(true){
var ret_value__20800__auto__ = (function (){try{while(true){
var result__20801__auto__ = switch__20798__auto__.call(null,state_25117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20801__auto__;
}
break;
}
}catch (e25135){if((e25135 instanceof Object)){
var ex__20802__auto__ = e25135;
var statearr_25136_25147 = state_25117;
(statearr_25136_25147[(5)] = ex__20802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25148 = state_25117;
state_25117 = G__25148;
continue;
} else {
return ret_value__20800__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__ = function(state_25117){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____1.call(this,state_25117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20799__auto__;
})()
;})(switch__20798__auto__,c__20819__auto__,keypressed_chan))
})();
var state__20821__auto__ = (function (){var statearr_25137 = f__20820__auto__.call(null);
(statearr_25137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20819__auto__);

return statearr_25137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20821__auto__);
});})(c__20819__auto__,keypressed_chan))
);

return c__20819__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__25150 = hand_name;
switch (G__25150) {
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
var key_boulder = (function (){var G__25153 = hand_name;
switch (G__25153) {
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
var key_hooked = (function (){var G__25156 = hand_name;
switch (G__25156) {
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
return (function (state_25236){
var state_val_25237 = (state_25236[(1)]);
if((state_val_25237 === (7))){
var inst_25215 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
var G__25238_25266 = (((inst_25215 instanceof cljs.core.Keyword))?inst_25215.fqn:null);
switch (G__25238_25266) {
case "release-left":
var statearr_25239_25268 = state_25236__$1;
(statearr_25239_25268[(1)] = (9));


break;
case "release-right":
var statearr_25240_25269 = state_25236__$1;
(statearr_25240_25269[(1)] = (10));


break;
case "release-both":
var statearr_25241_25270 = state_25236__$1;
(statearr_25241_25270[(1)] = (11));


break;
default:
var statearr_25242_25271 = state_25236__$1;
(statearr_25242_25271[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (1))){
var state_25236__$1 = state_25236;
var statearr_25243_25272 = state_25236__$1;
(statearr_25243_25272[(2)] = null);

(statearr_25243_25272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (4))){
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25236__$1,(7),keypressed);
} else {
if((state_val_25237 === (15))){
var inst_25228 = (state_25236[(2)]);
var state_25236__$1 = (function (){var statearr_25244 = state_25236;
(statearr_25244[(7)] = inst_25228);

return statearr_25244;
})();
var statearr_25245_25273 = state_25236__$1;
(statearr_25245_25273[(2)] = null);

(statearr_25245_25273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (13))){
var inst_25221 = (state_25236[(8)]);
var inst_25223 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_25221);
var inst_25224 = cljs.core.map.call(null,release_hand_BANG_,inst_25223);
var inst_25225 = cljs.core.doall.call(null,inst_25224);
var state_25236__$1 = state_25236;
var statearr_25246_25274 = state_25236__$1;
(statearr_25246_25274[(2)] = inst_25225);

(statearr_25246_25274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (6))){
var inst_25232 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
var statearr_25247_25275 = state_25236__$1;
(statearr_25247_25275[(2)] = inst_25232);

(statearr_25247_25275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (3))){
var inst_25234 = (state_25236[(2)]);
var state_25236__$1 = state_25236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25236__$1,inst_25234);
} else {
if((state_val_25237 === (12))){
var state_25236__$1 = state_25236;
var statearr_25248_25276 = state_25236__$1;
(statearr_25248_25276[(2)] = null);

(statearr_25248_25276[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (2))){
var state_25236__$1 = state_25236;
var statearr_25249_25277 = state_25236__$1;
(statearr_25249_25277[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (11))){
var state_25236__$1 = state_25236;
var statearr_25251_25278 = state_25236__$1;
(statearr_25251_25278[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_25251_25278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (9))){
var state_25236__$1 = state_25236;
var statearr_25252_25279 = state_25236__$1;
(statearr_25252_25279[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_25252_25279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (5))){
var state_25236__$1 = state_25236;
var statearr_25253_25280 = state_25236__$1;
(statearr_25253_25280[(2)] = null);

(statearr_25253_25280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (14))){
var state_25236__$1 = state_25236;
var statearr_25254_25281 = state_25236__$1;
(statearr_25254_25281[(2)] = null);

(statearr_25254_25281[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (10))){
var state_25236__$1 = state_25236;
var statearr_25255_25282 = state_25236__$1;
(statearr_25255_25282[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_25255_25282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25237 === (8))){
var inst_25221 = (state_25236[(8)]);
var inst_25221__$1 = (state_25236[(2)]);
var state_25236__$1 = (function (){var statearr_25256 = state_25236;
(statearr_25256[(8)] = inst_25221__$1);

return statearr_25256;
})();
if(cljs.core.truth_(inst_25221__$1)){
var statearr_25257_25283 = state_25236__$1;
(statearr_25257_25283[(1)] = (13));

} else {
var statearr_25258_25284 = state_25236__$1;
(statearr_25258_25284[(1)] = (14));

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
var statearr_25262 = [null,null,null,null,null,null,null,null,null];
(statearr_25262[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__);

(statearr_25262[(1)] = (1));

return statearr_25262;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____1 = (function (state_25236){
while(true){
var ret_value__20800__auto__ = (function (){try{while(true){
var result__20801__auto__ = switch__20798__auto__.call(null,state_25236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20801__auto__;
}
break;
}
}catch (e25263){if((e25263 instanceof Object)){
var ex__20802__auto__ = e25263;
var statearr_25264_25285 = state_25236;
(statearr_25264_25285[(5)] = ex__20802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25286 = state_25236;
state_25236 = G__25286;
continue;
} else {
return ret_value__20800__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__ = function(state_25236){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____1.call(this,state_25236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20799__auto__;
})()
;})(switch__20798__auto__,c__20819__auto__,keypressed,release_hand_BANG_))
})();
var state__20821__auto__ = (function (){var statearr_25265 = f__20820__auto__.call(null);
(statearr_25265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20819__auto__);

return statearr_25265;
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
var hand_key = (function (){var G__25343 = hand_name;
switch (G__25343) {
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
return (function (state_25369){
var state_val_25370 = (state_25369[(1)]);
if((state_val_25370 === (7))){
var inst_25347 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var G__25371_25400 = (((inst_25347 instanceof cljs.core.Keyword))?inst_25347.fqn:null);
switch (G__25371_25400) {
case "hook-left":
var statearr_25372_25402 = state_25369__$1;
(statearr_25372_25402[(1)] = (9));


break;
case "hook-right":
var statearr_25373_25403 = state_25369__$1;
(statearr_25373_25403[(1)] = (10));


break;
case "hook-both":
var statearr_25374_25404 = state_25369__$1;
(statearr_25374_25404[(1)] = (11));


break;
default:
var statearr_25375_25405 = state_25369__$1;
(statearr_25375_25405[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (1))){
var state_25369__$1 = state_25369;
var statearr_25376_25406 = state_25369__$1;
(statearr_25376_25406[(2)] = null);

(statearr_25376_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (4))){
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25369__$1,(7),keypressed);
} else {
if((state_val_25370 === (15))){
var inst_25359 = (state_25369[(2)]);
var inst_25360 = cljs.core.map.call(null,hook_hand_BANG_,inst_25359);
var inst_25361 = cljs.core.doall.call(null,inst_25360);
var state_25369__$1 = (function (){var statearr_25377 = state_25369;
(statearr_25377[(7)] = inst_25361);

return statearr_25377;
})();
var statearr_25378_25407 = state_25369__$1;
(statearr_25378_25407[(2)] = null);

(statearr_25378_25407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (13))){
var state_25369__$1 = state_25369;
var statearr_25379_25408 = state_25369__$1;
(statearr_25379_25408[(2)] = null);

(statearr_25379_25408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (6))){
var inst_25365 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25380_25409 = state_25369__$1;
(statearr_25380_25409[(2)] = inst_25365);

(statearr_25380_25409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (3))){
var inst_25367 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25369__$1,inst_25367);
} else {
if((state_val_25370 === (12))){
var state_25369__$1 = state_25369;
var statearr_25381_25410 = state_25369__$1;
(statearr_25381_25410[(2)] = null);

(statearr_25381_25410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (2))){
var state_25369__$1 = state_25369;
var statearr_25382_25411 = state_25369__$1;
(statearr_25382_25411[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (11))){
var state_25369__$1 = state_25369;
var statearr_25384_25412 = state_25369__$1;
(statearr_25384_25412[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_25384_25412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (9))){
var state_25369__$1 = state_25369;
var statearr_25385_25413 = state_25369__$1;
(statearr_25385_25413[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_25385_25413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (5))){
var state_25369__$1 = state_25369;
var statearr_25386_25414 = state_25369__$1;
(statearr_25386_25414[(2)] = null);

(statearr_25386_25414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (14))){
var inst_25353 = (state_25369[(8)]);
var inst_25357 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_25353);
var state_25369__$1 = state_25369;
var statearr_25387_25415 = state_25369__$1;
(statearr_25387_25415[(2)] = inst_25357);

(statearr_25387_25415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (10))){
var state_25369__$1 = state_25369;
var statearr_25388_25416 = state_25369__$1;
(statearr_25388_25416[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_25388_25416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (8))){
var inst_25353 = (state_25369[(8)]);
var inst_25353__$1 = (state_25369[(2)]);
var inst_25354 = (inst_25353__$1 == null);
var state_25369__$1 = (function (){var statearr_25389 = state_25369;
(statearr_25389[(8)] = inst_25353__$1);

return statearr_25389;
})();
if(cljs.core.truth_(inst_25354)){
var statearr_25390_25417 = state_25369__$1;
(statearr_25390_25417[(1)] = (13));

} else {
var statearr_25391_25418 = state_25369__$1;
(statearr_25391_25418[(1)] = (14));

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
var statearr_25395 = [null,null,null,null,null,null,null,null,null];
(statearr_25395[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__);

(statearr_25395[(1)] = (1));

return statearr_25395;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____1 = (function (state_25369){
while(true){
var ret_value__20800__auto__ = (function (){try{while(true){
var result__20801__auto__ = switch__20798__auto__.call(null,state_25369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20801__auto__;
}
break;
}
}catch (e25396){if((e25396 instanceof Object)){
var ex__20802__auto__ = e25396;
var statearr_25397_25419 = state_25369;
(statearr_25397_25419[(5)] = ex__20802__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25420 = state_25369;
state_25369 = G__25420;
continue;
} else {
return ret_value__20800__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__ = function(state_25369){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____1.call(this,state_25369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__20799__auto__;
})()
;})(switch__20798__auto__,c__20819__auto__,keypressed,hook_hand_BANG_))
})();
var state__20821__auto__ = (function (){var statearr_25398 = f__20820__auto__.call(null);
(statearr_25398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20819__auto__);

return statearr_25398;
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

//# sourceMappingURL=user_actions.js.map?rel=1490352321957