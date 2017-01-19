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
return (function (p1__27868_SHARP_){
return cljs.core.nth.call(null,p1__27868_SHARP_,(0));
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
return (function (p1__27869_SHARP_){
return climbr.matter.matter.same_body_QMARK_.call(null,p1__27869_SHARP_,hand);
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
var G__27871 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__27871) {
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
return (function (p1__27873_SHARP_){
return climbr.matter.matter.is_above_QMARK_.call(null,climber_body,p1__27873_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null));
});})(climber_body,standables))
;
return cljs.core.some.call(null,climber_above_QMARK_,standables);
});
climbr.behaviour.user_actions.hand_above_body_QMARK_ = (function climbr$behaviour$user_actions$hand_above_body_QMARK_(){
var hands = climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var above_body_QMARK_ = ((function (hands,body){
return (function (p1__27874_SHARP_){
return (climbr.matter.matter.y.call(null,body) > climbr.matter.matter.y.call(null,p1__27874_SHARP_));
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
var len__19864__auto___27889 = arguments.length;
var i__19865__auto___27890 = (0);
while(true){
if((i__19865__auto___27890 < len__19864__auto___27889)){
args__19871__auto__.push((arguments[i__19865__auto___27890]));

var G__27891 = (i__19865__auto___27890 + (1));
i__19865__auto___27890 = G__27891;
continue;
} else {
}
break;
}

var argseq__19872__auto__ = ((((3) < args__19871__auto__.length))?(new cljs.core.IndexedSeq(args__19871__auto__.slice((3)),(0),null)):null);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19872__auto__);
});

climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (what,_,where,p__27879){
var vec__27880 = p__27879;
var ___$1 = cljs.core.nth.call(null,vec__27880,(0),null);
var opts = cljs.core.nth.call(null,vec__27880,(1),null);
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var bodies = (function (){var G__27883 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__27883) {
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
var force_obj = (function (){var G__27884 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__27884) {
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
var seq__27885 = cljs.core.seq.call(null,bodies);
var chunk__27886 = null;
var count__27887 = (0);
var i__27888 = (0);
while(true){
if((i__27888 < count__27887)){
var b = cljs.core._nth.call(null,chunk__27886,i__27888);
climbr.matter.matter.apply_force.call(null,b,force);

var G__27894 = seq__27885;
var G__27895 = chunk__27886;
var G__27896 = count__27887;
var G__27897 = (i__27888 + (1));
seq__27885 = G__27894;
chunk__27886 = G__27895;
count__27887 = G__27896;
i__27888 = G__27897;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27885);
if(temp__4657__auto__){
var seq__27885__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27885__$1)){
var c__19570__auto__ = cljs.core.chunk_first.call(null,seq__27885__$1);
var G__27898 = cljs.core.chunk_rest.call(null,seq__27885__$1);
var G__27899 = c__19570__auto__;
var G__27900 = cljs.core.count.call(null,c__19570__auto__);
var G__27901 = (0);
seq__27885 = G__27898;
chunk__27886 = G__27899;
count__27887 = G__27900;
i__27888 = G__27901;
continue;
} else {
var b = cljs.core.first.call(null,seq__27885__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__27902 = cljs.core.next.call(null,seq__27885__$1);
var G__27903 = null;
var G__27904 = (0);
var G__27905 = (0);
seq__27885 = G__27902;
chunk__27886 = G__27903;
count__27887 = G__27904;
i__27888 = G__27905;
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

climbr.behaviour.user_actions.lunge_BANG_.cljs$lang$applyTo = (function (seq27875){
var G__27876 = cljs.core.first.call(null,seq27875);
var seq27875__$1 = cljs.core.next.call(null,seq27875);
var G__27877 = cljs.core.first.call(null,seq27875__$1);
var seq27875__$2 = cljs.core.next.call(null,seq27875__$1);
var G__27878 = cljs.core.first.call(null,seq27875__$2);
var seq27875__$3 = cljs.core.next.call(null,seq27875__$2);
return climbr.behaviour.user_actions.lunge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27876,G__27877,G__27878,seq27875__$3);
});

climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__21296__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21296__auto__,keypressed_chan){
return (function (){
var f__21297__auto__ = (function (){var switch__21281__auto__ = ((function (c__21296__auto__,keypressed_chan){
return (function (state_27963){
var state_val_27964 = (state_27963[(1)]);
if((state_val_27964 === (7))){
var inst_27949 = (state_27963[(7)]);
var inst_27948 = (state_27963[(2)]);
var inst_27949__$1 = cljs.core.get.call(null,key_actions,inst_27948);
var inst_27950 = (inst_27949__$1 == null);
var state_27963__$1 = (function (){var statearr_27965 = state_27963;
(statearr_27965[(7)] = inst_27949__$1);

return statearr_27965;
})();
if(cljs.core.truth_(inst_27950)){
var statearr_27966_27984 = state_27963__$1;
(statearr_27966_27984[(1)] = (8));

} else {
var statearr_27967_27985 = state_27963__$1;
(statearr_27967_27985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (1))){
var state_27963__$1 = state_27963;
var statearr_27968_27986 = state_27963__$1;
(statearr_27968_27986[(2)] = null);

(statearr_27968_27986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (4))){
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27963__$1,(7),keypressed_chan);
} else {
if((state_val_27964 === (6))){
var inst_27959 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
var statearr_27969_27987 = state_27963__$1;
(statearr_27969_27987[(2)] = inst_27959);

(statearr_27969_27987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (3))){
var inst_27961 = (state_27963[(2)]);
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27963__$1,inst_27961);
} else {
if((state_val_27964 === (2))){
var state_27963__$1 = state_27963;
var statearr_27970_27988 = state_27963__$1;
(statearr_27970_27988[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (9))){
var inst_27949 = (state_27963[(7)]);
var inst_27953 = inst_27949.call(null);
var state_27963__$1 = state_27963;
var statearr_27972_27989 = state_27963__$1;
(statearr_27972_27989[(2)] = inst_27953);

(statearr_27972_27989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (5))){
var state_27963__$1 = state_27963;
var statearr_27973_27990 = state_27963__$1;
(statearr_27973_27990[(2)] = null);

(statearr_27973_27990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (10))){
var inst_27955 = (state_27963[(2)]);
var state_27963__$1 = (function (){var statearr_27974 = state_27963;
(statearr_27974[(8)] = inst_27955);

return statearr_27974;
})();
var statearr_27975_27991 = state_27963__$1;
(statearr_27975_27991[(2)] = null);

(statearr_27975_27991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27964 === (8))){
var state_27963__$1 = state_27963;
var statearr_27976_27992 = state_27963__$1;
(statearr_27976_27992[(2)] = null);

(statearr_27976_27992[(1)] = (10));


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
var statearr_27980 = [null,null,null,null,null,null,null,null,null];
(statearr_27980[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__);

(statearr_27980[(1)] = (1));

return statearr_27980;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____1 = (function (state_27963){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_27963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e27981){if((e27981 instanceof Object)){
var ex__21285__auto__ = e27981;
var statearr_27982_27993 = state_27963;
(statearr_27982_27993[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27994 = state_27963;
state_27963 = G__27994;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__ = function(state_27963){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____1.call(this,state_27963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,keypressed_chan))
})();
var state__21298__auto__ = (function (){var statearr_27983 = f__21297__auto__.call(null);
(statearr_27983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_27983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21298__auto__);
});})(c__21296__auto__,keypressed_chan))
);

return c__21296__auto__;
});
climbr.behaviour.user_actions.get_hooked_boulder_for_hand = (function climbr$behaviour$user_actions$get_hooked_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__27996 = hand_name;
switch (G__27996) {
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
var key_boulder = (function (){var G__27999 = hand_name;
switch (G__27999) {
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
var key_hooked = (function (){var G__28002 = hand_name;
switch (G__28002) {
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
return (function (state_28082){
var state_val_28083 = (state_28082[(1)]);
if((state_val_28083 === (7))){
var inst_28061 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
var G__28084_28112 = (((inst_28061 instanceof cljs.core.Keyword))?inst_28061.fqn:null);
switch (G__28084_28112) {
case "release-left":
var statearr_28085_28114 = state_28082__$1;
(statearr_28085_28114[(1)] = (9));


break;
case "release-right":
var statearr_28086_28115 = state_28082__$1;
(statearr_28086_28115[(1)] = (10));


break;
case "release-both":
var statearr_28087_28116 = state_28082__$1;
(statearr_28087_28116[(1)] = (11));


break;
default:
var statearr_28088_28117 = state_28082__$1;
(statearr_28088_28117[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (1))){
var state_28082__$1 = state_28082;
var statearr_28089_28118 = state_28082__$1;
(statearr_28089_28118[(2)] = null);

(statearr_28089_28118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (4))){
var state_28082__$1 = state_28082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28082__$1,(7),keypressed);
} else {
if((state_val_28083 === (15))){
var inst_28074 = (state_28082[(2)]);
var state_28082__$1 = (function (){var statearr_28090 = state_28082;
(statearr_28090[(7)] = inst_28074);

return statearr_28090;
})();
var statearr_28091_28119 = state_28082__$1;
(statearr_28091_28119[(2)] = null);

(statearr_28091_28119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (13))){
var inst_28067 = (state_28082[(8)]);
var inst_28069 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_28067);
var inst_28070 = cljs.core.map.call(null,release_hand_BANG_,inst_28069);
var inst_28071 = cljs.core.doall.call(null,inst_28070);
var state_28082__$1 = state_28082;
var statearr_28092_28120 = state_28082__$1;
(statearr_28092_28120[(2)] = inst_28071);

(statearr_28092_28120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (6))){
var inst_28078 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
var statearr_28093_28121 = state_28082__$1;
(statearr_28093_28121[(2)] = inst_28078);

(statearr_28093_28121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (3))){
var inst_28080 = (state_28082[(2)]);
var state_28082__$1 = state_28082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28082__$1,inst_28080);
} else {
if((state_val_28083 === (12))){
var state_28082__$1 = state_28082;
var statearr_28094_28122 = state_28082__$1;
(statearr_28094_28122[(2)] = null);

(statearr_28094_28122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (2))){
var state_28082__$1 = state_28082;
var statearr_28095_28123 = state_28082__$1;
(statearr_28095_28123[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (11))){
var state_28082__$1 = state_28082;
var statearr_28097_28124 = state_28082__$1;
(statearr_28097_28124[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_28097_28124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (9))){
var state_28082__$1 = state_28082;
var statearr_28098_28125 = state_28082__$1;
(statearr_28098_28125[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_28098_28125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (5))){
var state_28082__$1 = state_28082;
var statearr_28099_28126 = state_28082__$1;
(statearr_28099_28126[(2)] = null);

(statearr_28099_28126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (14))){
var state_28082__$1 = state_28082;
var statearr_28100_28127 = state_28082__$1;
(statearr_28100_28127[(2)] = null);

(statearr_28100_28127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (10))){
var state_28082__$1 = state_28082;
var statearr_28101_28128 = state_28082__$1;
(statearr_28101_28128[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_28101_28128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28083 === (8))){
var inst_28067 = (state_28082[(8)]);
var inst_28067__$1 = (state_28082[(2)]);
var state_28082__$1 = (function (){var statearr_28102 = state_28082;
(statearr_28102[(8)] = inst_28067__$1);

return statearr_28102;
})();
if(cljs.core.truth_(inst_28067__$1)){
var statearr_28103_28129 = state_28082__$1;
(statearr_28103_28129[(1)] = (13));

} else {
var statearr_28104_28130 = state_28082__$1;
(statearr_28104_28130[(1)] = (14));

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
var statearr_28108 = [null,null,null,null,null,null,null,null,null];
(statearr_28108[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__);

(statearr_28108[(1)] = (1));

return statearr_28108;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____1 = (function (state_28082){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_28082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e28109){if((e28109 instanceof Object)){
var ex__21285__auto__ = e28109;
var statearr_28110_28131 = state_28082;
(statearr_28110_28131[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28132 = state_28082;
state_28082 = G__28132;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__ = function(state_28082){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____1.call(this,state_28082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,keypressed,release_hand_BANG_))
})();
var state__21298__auto__ = (function (){var statearr_28111 = f__21297__auto__.call(null);
(statearr_28111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_28111;
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
var hand_key = (function (){var G__28189 = hand_name;
switch (G__28189) {
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
return (function (state_28215){
var state_val_28216 = (state_28215[(1)]);
if((state_val_28216 === (7))){
var inst_28193 = (state_28215[(2)]);
var state_28215__$1 = state_28215;
var G__28217_28246 = (((inst_28193 instanceof cljs.core.Keyword))?inst_28193.fqn:null);
switch (G__28217_28246) {
case "hook-left":
var statearr_28218_28248 = state_28215__$1;
(statearr_28218_28248[(1)] = (9));


break;
case "hook-right":
var statearr_28219_28249 = state_28215__$1;
(statearr_28219_28249[(1)] = (10));


break;
case "hook-both":
var statearr_28220_28250 = state_28215__$1;
(statearr_28220_28250[(1)] = (11));


break;
default:
var statearr_28221_28251 = state_28215__$1;
(statearr_28221_28251[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (1))){
var state_28215__$1 = state_28215;
var statearr_28222_28252 = state_28215__$1;
(statearr_28222_28252[(2)] = null);

(statearr_28222_28252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (4))){
var state_28215__$1 = state_28215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28215__$1,(7),keypressed);
} else {
if((state_val_28216 === (15))){
var inst_28205 = (state_28215[(2)]);
var inst_28206 = cljs.core.map.call(null,hook_hand_BANG_,inst_28205);
var inst_28207 = cljs.core.doall.call(null,inst_28206);
var state_28215__$1 = (function (){var statearr_28223 = state_28215;
(statearr_28223[(7)] = inst_28207);

return statearr_28223;
})();
var statearr_28224_28253 = state_28215__$1;
(statearr_28224_28253[(2)] = null);

(statearr_28224_28253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (13))){
var state_28215__$1 = state_28215;
var statearr_28225_28254 = state_28215__$1;
(statearr_28225_28254[(2)] = null);

(statearr_28225_28254[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (6))){
var inst_28211 = (state_28215[(2)]);
var state_28215__$1 = state_28215;
var statearr_28226_28255 = state_28215__$1;
(statearr_28226_28255[(2)] = inst_28211);

(statearr_28226_28255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (3))){
var inst_28213 = (state_28215[(2)]);
var state_28215__$1 = state_28215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28215__$1,inst_28213);
} else {
if((state_val_28216 === (12))){
var state_28215__$1 = state_28215;
var statearr_28227_28256 = state_28215__$1;
(statearr_28227_28256[(2)] = null);

(statearr_28227_28256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (2))){
var state_28215__$1 = state_28215;
var statearr_28228_28257 = state_28215__$1;
(statearr_28228_28257[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (11))){
var state_28215__$1 = state_28215;
var statearr_28230_28258 = state_28215__$1;
(statearr_28230_28258[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_28230_28258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (9))){
var state_28215__$1 = state_28215;
var statearr_28231_28259 = state_28215__$1;
(statearr_28231_28259[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_28231_28259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (5))){
var state_28215__$1 = state_28215;
var statearr_28232_28260 = state_28215__$1;
(statearr_28232_28260[(2)] = null);

(statearr_28232_28260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (14))){
var inst_28199 = (state_28215[(8)]);
var inst_28203 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_28199);
var state_28215__$1 = state_28215;
var statearr_28233_28261 = state_28215__$1;
(statearr_28233_28261[(2)] = inst_28203);

(statearr_28233_28261[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (10))){
var state_28215__$1 = state_28215;
var statearr_28234_28262 = state_28215__$1;
(statearr_28234_28262[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_28234_28262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (8))){
var inst_28199 = (state_28215[(8)]);
var inst_28199__$1 = (state_28215[(2)]);
var inst_28200 = (inst_28199__$1 == null);
var state_28215__$1 = (function (){var statearr_28235 = state_28215;
(statearr_28235[(8)] = inst_28199__$1);

return statearr_28235;
})();
if(cljs.core.truth_(inst_28200)){
var statearr_28236_28263 = state_28215__$1;
(statearr_28236_28263[(1)] = (13));

} else {
var statearr_28237_28264 = state_28215__$1;
(statearr_28237_28264[(1)] = (14));

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
var statearr_28241 = [null,null,null,null,null,null,null,null,null];
(statearr_28241[(0)] = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__);

(statearr_28241[(1)] = (1));

return statearr_28241;
});
var climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____1 = (function (state_28215){
while(true){
var ret_value__21283__auto__ = (function (){try{while(true){
var result__21284__auto__ = switch__21281__auto__.call(null,state_28215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21284__auto__;
}
break;
}
}catch (e28242){if((e28242 instanceof Object)){
var ex__21285__auto__ = e28242;
var statearr_28243_28265 = state_28215;
(statearr_28243_28265[(5)] = ex__21285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28266 = state_28215;
state_28215 = G__28266;
continue;
} else {
return ret_value__21283__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__ = function(state_28215){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____1.call(this,state_28215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____0;
climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto____1;
return climbr$behaviour$user_actions$setup_climber_hook_events_BANG__$_state_machine__21282__auto__;
})()
;})(switch__21281__auto__,c__21296__auto__,keypressed,hook_hand_BANG_))
})();
var state__21298__auto__ = (function (){var statearr_28244 = f__21297__auto__.call(null);
(statearr_28244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21296__auto__);

return statearr_28244;
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

//# sourceMappingURL=user_actions.js.map?rel=1484862758774