// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.behaviour');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.app_state');
goog.require('climbr.controls.keyboard');
goog.require('climbr.utils.utils');
goog.require('cljs.core.async');
climbr.behaviour.behaviour.init_climber_moves_BANG_ = (function climbr$behaviour$behaviour$init_climber_moves_BANG_(){
return climbr.behaviour.behaviour.bind_keys.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.behaviour.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.behaviour.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"both-hands","both-hands",1160692521),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.behaviour.holds_both_QMARK_.call(null))){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.behaviour.holds_one_QMARK_.call(null))){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return null;

}
}
}
}),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.behaviour.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.behaviour.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.behaviour.holds_one_QMARK_.call(null))){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.behaviour.holds_both_QMARK_.call(null))){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return null;

}
}
}
}),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.behaviour.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.behaviour.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.behaviour.holds_one_QMARK_.call(null))){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.behaviour.holds_both_QMARK_.call(null))){
return climbr.behaviour.behaviour.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return null;

}
}
}
})], null));
});
climbr.behaviour.behaviour.lunge_BANG_ = (function climbr$behaviour$behaviour$lunge_BANG_(what,_,where){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.01,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.03], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.04,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.04], null)], null);
var objects = (function (){var G__19544 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__19544) {
case "left-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.behaviour.fetch_hand.call(null,new cljs.core.Keyword(null,"left","left",-399115937))], null);

break;
case "right-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.behaviour.fetch_hand.call(null,new cljs.core.Keyword(null,"right","right",-452581833))], null);

break;
case "both-hands":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.behaviour.fetch_hand.call(null,new cljs.core.Keyword(null,"left","left",-399115937)),climbr.behaviour.behaviour.fetch_hand.call(null,new cljs.core.Keyword(null,"right","right",-452581833))], null);

break;
case "free-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.behaviour.fetch_hand.call(null,new cljs.core.Keyword(null,"free","free",801364328))], null);

break;
case "body":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.behaviour.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force_obj = (function (){var G__19545 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__19545) {
case "left-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "right-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "both-hands":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "free-hand":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"hand","hand",791601933));

break;
case "body":
return cljs.core.get.call(null,forces_config,new cljs.core.Keyword(null,"body","body",-2049205669));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force = (function (){var G__19546 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__19546) {
case "top":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(- new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj))], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(- new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(where)].join('')));

}
})();
var seq__19547 = cljs.core.seq.call(null,objects);
var chunk__19548 = null;
var count__19549 = (0);
var i__19550 = (0);
while(true){
if((i__19550 < count__19549)){
var o = cljs.core._nth.call(null,chunk__19548,i__19550);
climbr.matter.matter.apply_force.call(null,o,force);

var G__19554 = seq__19547;
var G__19555 = chunk__19548;
var G__19556 = count__19549;
var G__19557 = (i__19550 + (1));
seq__19547 = G__19554;
chunk__19548 = G__19555;
count__19549 = G__19556;
i__19550 = G__19557;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19547);
if(temp__4425__auto__){
var seq__19547__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19547__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__19547__$1);
var G__19558 = cljs.core.chunk_rest.call(null,seq__19547__$1);
var G__19559 = c__17608__auto__;
var G__19560 = cljs.core.count.call(null,c__17608__auto__);
var G__19561 = (0);
seq__19547 = G__19558;
chunk__19548 = G__19559;
count__19549 = G__19560;
i__19550 = G__19561;
continue;
} else {
var o = cljs.core.first.call(null,seq__19547__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__19562 = cljs.core.next.call(null,seq__19547__$1);
var G__19563 = null;
var G__19564 = (0);
var G__19565 = (0);
seq__19547 = G__19562;
chunk__19548 = G__19563;
count__19549 = G__19564;
i__19550 = G__19565;
continue;
}
} else {
return null;
}
}
break;
}
});
climbr.behaviour.behaviour.init_boulder_touch_events_BANG_ = (function climbr$behaviour$behaviour$init_boulder_touch_events_BANG_(engine){
return climbr.matter.matter.events.on(engine,"collisionStart",(function (e){
var pairs = e.pairs;
var pair = (cljs.core.truth_(pairs.length)?(pairs[(0)]):null);
var body_a = (cljs.core.truth_(pair)?pair.bodyA:null);
var body_b = (cljs.core.truth_(pair)?pair.bodyB:null);
var class_a = climbr.matter.matter.read_data.call(null,"class",body_a);
var class_b = climbr.matter.matter.read_data.call(null,"class",body_b);
var touched_a_QMARK_ = (cljs.core._EQ_.call(null,"boulder",class_a)) && (cljs.core._EQ_.call(null,"hand",class_b));
var touched_b_QMARK_ = (cljs.core._EQ_.call(null,"boulder",class_b)) && (cljs.core._EQ_.call(null,"hand",class_a));
var hand = ((touched_a_QMARK_)?body_b:((touched_b_QMARK_)?body_a:null
));
var touched_boulder = ((touched_a_QMARK_)?body_a:((touched_b_QMARK_)?body_b:null
));
var touched_boulder_QMARK_ = cljs.core.not_EQ_.call(null,touched_boulder,null);
var hand_name = ((touched_boulder_QMARK_)?climbr.matter.matter.read_data.call(null,"name",hand):null);
var key_boulder = (function (){var G__19567 = hand_name;
switch (G__19567) {
case "h1":
return new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284);

break;
default:
return null;

}
})();
var existing_boulder = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),key_boulder);
if((touched_boulder_QMARK_) && ((existing_boulder == null))){
var boulder = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": touched_boulder});
climbr.matter.matter.world.addConstraint(engine.world,boulder);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_boulder,boulder);
} else {
return null;
}
}));
});
climbr.behaviour.behaviour.fetch_climber_part = (function climbr$behaviour$behaviour$fetch_climber_part(part){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),part], null));
});
climbr.behaviour.behaviour.fetch_hand = (function climbr$behaviour$behaviour$fetch_hand(hand){
var h1 = climbr.behaviour.behaviour.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.behaviour.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__19570 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__19570) {
case "left":
return left_hand;

break;
case "right":
return right_hand;

break;
case "free":
return climbr.behaviour.behaviour.fetch_free_hand.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand)].join('')));

}
});
climbr.behaviour.behaviour.fetch_free_hand = (function climbr$behaviour$behaviour$fetch_free_hand(){
var h1_holds = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467));
var h2_holds = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284));
var both_hold = (!((h1_holds == null))) && (!((h2_holds == null)));
if(both_hold){
return null;
} else {
if(!((h1_holds == null))){
return climbr.behaviour.behaviour.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
} else {
if(!((h2_holds == null))){
return climbr.behaviour.behaviour.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
} else {
return null;

}
}
}
});
climbr.behaviour.behaviour.get_boulder_for_hand = (function climbr$behaviour$behaviour$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__19573 = hand_name;
switch (G__19573) {
case "h1":
return new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284);

break;
default:
return null;

}
})();
return cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),boulder_key);
});
climbr.behaviour.behaviour.init_boulder_release_events_BANG_ = (function climbr$behaviour$behaviour$init_boulder_release_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var release_hand_BANG_ = ((function (keypressed){
return (function (hand_key){
var hand = climbr.behaviour.behaviour.fetch_hand.call(null,hand_key);
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var boulder = climbr.behaviour.behaviour.get_boulder_for_hand.call(null,hand_name);
if(!((boulder == null))){
climbr.matter.matter.world.remove(engine.world,boulder);

return climbr.behaviour.behaviour.remove_boulder_for_hand_BANG_.call(null,hand_name);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed,release_hand_BANG_){
return (function (state_19645){
var state_val_19646 = (state_19645[(1)]);
if((state_val_19646 === (7))){
var inst_19627 = (state_19645[(2)]);
var state_19645__$1 = state_19645;
var G__19647_19673 = (((inst_19627 instanceof cljs.core.Keyword))?inst_19627.fqn:null);
switch (G__19647_19673) {
case "a":
var statearr_19648_19675 = state_19645__$1;
(statearr_19648_19675[(1)] = (9));


break;
case "d":
var statearr_19649_19676 = state_19645__$1;
(statearr_19649_19676[(1)] = (10));


break;
default:
var statearr_19650_19677 = state_19645__$1;
(statearr_19650_19677[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (1))){
var state_19645__$1 = state_19645;
var statearr_19651_19678 = state_19645__$1;
(statearr_19651_19678[(2)] = null);

(statearr_19651_19678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (4))){
var state_19645__$1 = state_19645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19645__$1,(7),keypressed);
} else {
if((state_val_19646 === (13))){
var state_19645__$1 = state_19645;
var statearr_19652_19679 = state_19645__$1;
(statearr_19652_19679[(2)] = null);

(statearr_19652_19679[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (6))){
var inst_19641 = (state_19645[(2)]);
var state_19645__$1 = state_19645;
var statearr_19653_19680 = state_19645__$1;
(statearr_19653_19680[(2)] = inst_19641);

(statearr_19653_19680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (3))){
var inst_19643 = (state_19645[(2)]);
var state_19645__$1 = state_19645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19645__$1,inst_19643);
} else {
if((state_val_19646 === (12))){
var inst_19632 = (state_19645[(7)]);
var inst_19634 = release_hand_BANG_.call(null,inst_19632);
var state_19645__$1 = state_19645;
var statearr_19654_19681 = state_19645__$1;
(statearr_19654_19681[(2)] = inst_19634);

(statearr_19654_19681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (2))){
var state_19645__$1 = state_19645;
var statearr_19655_19682 = state_19645__$1;
(statearr_19655_19682[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (11))){
var state_19645__$1 = state_19645;
var statearr_19657_19683 = state_19645__$1;
(statearr_19657_19683[(2)] = null);

(statearr_19657_19683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (9))){
var state_19645__$1 = state_19645;
var statearr_19658_19684 = state_19645__$1;
(statearr_19658_19684[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_19658_19684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (5))){
var state_19645__$1 = state_19645;
var statearr_19659_19685 = state_19645__$1;
(statearr_19659_19685[(2)] = null);

(statearr_19659_19685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (14))){
var inst_19637 = (state_19645[(2)]);
var state_19645__$1 = (function (){var statearr_19660 = state_19645;
(statearr_19660[(8)] = inst_19637);

return statearr_19660;
})();
var statearr_19661_19686 = state_19645__$1;
(statearr_19661_19686[(2)] = null);

(statearr_19661_19686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (10))){
var state_19645__$1 = state_19645;
var statearr_19662_19687 = state_19645__$1;
(statearr_19662_19687[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_19662_19687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19646 === (8))){
var inst_19632 = (state_19645[(7)]);
var inst_19632__$1 = (state_19645[(2)]);
var state_19645__$1 = (function (){var statearr_19663 = state_19645;
(statearr_19663[(7)] = inst_19632__$1);

return statearr_19663;
})();
if(cljs.core.truth_(inst_19632__$1)){
var statearr_19664_19688 = state_19645__$1;
(statearr_19664_19688[(1)] = (12));

} else {
var statearr_19665_19689 = state_19645__$1;
(statearr_19665_19689[(1)] = (13));

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
});})(c__18830__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_19669 = [null,null,null,null,null,null,null,null,null];
(statearr_19669[(0)] = climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_19669[(1)] = (1));

return statearr_19669;
});
var climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_19645){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_19645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e19670){if((e19670 instanceof Object)){
var ex__18813__auto__ = e19670;
var statearr_19671_19690 = state_19645;
(statearr_19671_19690[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19691 = state_19645;
state_19645 = G__19691;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_19645){
switch(arguments.length){
case 0:
return climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_19645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$behaviour$init_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_19672 = f__18831__auto__.call(null);
(statearr_19672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_19672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,release_hand_BANG_))
);

return c__18830__auto__;
});
climbr.behaviour.behaviour.remove_boulder_for_hand_BANG_ = (function climbr$behaviour$behaviour$remove_boulder_for_hand_BANG_(hand_name){
var key_boulder = (function (){var G__19693 = hand_name;
switch (G__19693) {
case "h1":
return new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467);

break;
case "h2":
return new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand_name)].join('')));

}
})();
return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.dissoc,key_boulder);
});
climbr.behaviour.behaviour.holds_hand_QMARK_ = (function climbr$behaviour$behaviour$holds_hand_QMARK_(hand){
var boulder = climbr.behaviour.behaviour.get_boulder_for_hand.call(null,hand);
return !((boulder == null));
});
climbr.behaviour.behaviour.h1_holds_QMARK_ = (function climbr$behaviour$behaviour$h1_holds_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467)) == null));
});
climbr.behaviour.behaviour.h2_holds_QMARK_ = (function climbr$behaviour$behaviour$h2_holds_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284)) == null));
});
climbr.behaviour.behaviour.holds_both_QMARK_ = (function climbr$behaviour$behaviour$holds_both_QMARK_(){
var and__16793__auto__ = climbr.behaviour.behaviour.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.behaviour.h2_holds_QMARK_.call(null);
} else {
return and__16793__auto__;
}
});
climbr.behaviour.behaviour.holds_nothing_QMARK_ = (function climbr$behaviour$behaviour$holds_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__16805__auto__ = climbr.behaviour.behaviour.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return climbr.behaviour.behaviour.h2_holds_QMARK_.call(null);
}
})());
});
climbr.behaviour.behaviour.holds_one_QMARK_ = (function climbr$behaviour$behaviour$holds_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.behaviour.holds_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.behaviour.holds_nothing_QMARK_.call(null)));
});
climbr.behaviour.behaviour.on_the_ground_QMARK_ = (function climbr$behaviour$behaviour$on_the_ground_QMARK_(){
return false;
});
climbr.behaviour.behaviour.bind_keys = (function climbr$behaviour$behaviour$bind_keys(key_actions){
var keypressed = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed){
return (function (state_19752){
var state_val_19753 = (state_19752[(1)]);
if((state_val_19753 === (7))){
var inst_19738 = (state_19752[(7)]);
var inst_19737 = (state_19752[(2)]);
var inst_19738__$1 = cljs.core.get.call(null,key_actions,inst_19737);
var inst_19739 = (inst_19738__$1 == null);
var state_19752__$1 = (function (){var statearr_19754 = state_19752;
(statearr_19754[(7)] = inst_19738__$1);

return statearr_19754;
})();
if(cljs.core.truth_(inst_19739)){
var statearr_19755_19773 = state_19752__$1;
(statearr_19755_19773[(1)] = (8));

} else {
var statearr_19756_19774 = state_19752__$1;
(statearr_19756_19774[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (1))){
var state_19752__$1 = state_19752;
var statearr_19757_19775 = state_19752__$1;
(statearr_19757_19775[(2)] = null);

(statearr_19757_19775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (4))){
var state_19752__$1 = state_19752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19752__$1,(7),keypressed);
} else {
if((state_val_19753 === (6))){
var inst_19748 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
var statearr_19758_19776 = state_19752__$1;
(statearr_19758_19776[(2)] = inst_19748);

(statearr_19758_19776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (3))){
var inst_19750 = (state_19752[(2)]);
var state_19752__$1 = state_19752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19752__$1,inst_19750);
} else {
if((state_val_19753 === (2))){
var state_19752__$1 = state_19752;
var statearr_19759_19777 = state_19752__$1;
(statearr_19759_19777[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (9))){
var inst_19738 = (state_19752[(7)]);
var inst_19742 = inst_19738.call(null);
var state_19752__$1 = state_19752;
var statearr_19761_19778 = state_19752__$1;
(statearr_19761_19778[(2)] = inst_19742);

(statearr_19761_19778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (5))){
var state_19752__$1 = state_19752;
var statearr_19762_19779 = state_19752__$1;
(statearr_19762_19779[(2)] = null);

(statearr_19762_19779[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (10))){
var inst_19744 = (state_19752[(2)]);
var state_19752__$1 = (function (){var statearr_19763 = state_19752;
(statearr_19763[(8)] = inst_19744);

return statearr_19763;
})();
var statearr_19764_19780 = state_19752__$1;
(statearr_19764_19780[(2)] = null);

(statearr_19764_19780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19753 === (8))){
var state_19752__$1 = state_19752;
var statearr_19765_19781 = state_19752__$1;
(statearr_19765_19781[(2)] = null);

(statearr_19765_19781[(1)] = (10));


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
});})(c__18830__auto__,keypressed))
;
return ((function (switch__18809__auto__,c__18830__auto__,keypressed){
return (function() {
var climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto__ = null;
var climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto____0 = (function (){
var statearr_19769 = [null,null,null,null,null,null,null,null,null];
(statearr_19769[(0)] = climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto__);

(statearr_19769[(1)] = (1));

return statearr_19769;
});
var climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto____1 = (function (state_19752){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_19752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e19770){if((e19770 instanceof Object)){
var ex__18813__auto__ = e19770;
var statearr_19771_19782 = state_19752;
(statearr_19771_19782[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19783 = state_19752;
state_19752 = G__19783;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto__ = function(state_19752){
switch(arguments.length){
case 0:
return climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto____1.call(this,state_19752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto____0;
climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto____1;
return climbr$behaviour$behaviour$bind_keys_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_19772 = f__18831__auto__.call(null);
(statearr_19772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_19772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.behaviour.def_ = (function climbr$behaviour$behaviour$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,item),cljs.core._conj.call(null,cljs.core.List.EMPTY,value))));
});

climbr.behaviour.behaviour.def_.cljs$lang$macro = true;
climbr.behaviour.behaviour.def_.call(null,climbr.behaviour.behaviour.not_nil_QMARK_,cljs.core.complement.call(null,cljs.core.nil_QMARK_));

//# sourceMappingURL=behaviour.js.map?rel=1464635493208