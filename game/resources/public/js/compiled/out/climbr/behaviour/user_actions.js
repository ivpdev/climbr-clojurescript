// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.matter.matter');
goog.require('climbr.app_state');
goog.require('climbr.controls.keyboard');
goog.require('cljs.core.async');
climbr.behaviour.user_actions.def_ = (function climbr$behaviour$user_actions$def_(_AMPERSAND_form,_AMPERSAND_env,item,value){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,item),cljs.core._conj.call(null,cljs.core.List.EMPTY,value))));
});

climbr.behaviour.user_actions.def_.cljs$lang$macro = true;
climbr.behaviour.user_actions.setup_user_controls_BANG_ = (function climbr$behaviour$user_actions$setup_user_controls_BANG_(){
return climbr.behaviour.user_actions.bind_keys.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"both-hands","both-hands",1160692521),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"top","top",-1856271961));
} else {
return null;

}
}
}
}),new cljs.core.Keyword(null,"left","left",-399115937),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return null;

}
}
}
}),new cljs.core.Keyword(null,"right","right",-452581833),(function (){
if(cljs.core.truth_((function (){var and__16793__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_one_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"free-hand","free-hand",-854147740),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
if(cljs.core.truth_(climbr.behaviour.user_actions.holds_both_QMARK_.call(null))){
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return null;

}
}
}
})], null));
});
climbr.behaviour.user_actions.on_the_ground_QMARK_ = (function climbr$behaviour$user_actions$on_the_ground_QMARK_(){
return false;
});
climbr.behaviour.user_actions.holds_nothing_QMARK_ = (function climbr$behaviour$user_actions$holds_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__16805__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
}
})());
});
climbr.behaviour.user_actions.holds_one_QMARK_ = (function climbr$behaviour$user_actions$holds_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null)));
});
climbr.behaviour.user_actions.holds_both_QMARK_ = (function climbr$behaviour$user_actions$holds_both_QMARK_(){
var and__16793__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(and__16793__auto__)){
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
} else {
return and__16793__auto__;
}
});
climbr.behaviour.user_actions.h1_holds_QMARK_ = (function climbr$behaviour$user_actions$h1_holds_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467)) == null));
});
climbr.behaviour.user_actions.h2_holds_QMARK_ = (function climbr$behaviour$user_actions$h2_holds_QMARK_(){
return !((cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284)) == null));
});
climbr.behaviour.user_actions.holds_hand_QMARK_ = (function climbr$behaviour$user_actions$holds_hand_QMARK_(hand){
var boulder = climbr.behaviour.user_actions.get_boulder_for_hand.call(null,hand);
return !((boulder == null));
});
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(what,_,where){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.01,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.03], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.04,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.04], null)], null);
var objects = (function (){var G__21468 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__21468) {
case "left-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"left","left",-399115937))], null);

break;
case "right-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"right","right",-452581833))], null);

break;
case "both-hands":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"left","left",-399115937)),climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"right","right",-452581833))], null);

break;
case "free-hand":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_hand.call(null,new cljs.core.Keyword(null,"free","free",801364328))], null);

break;
case "body":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force_obj = (function (){var G__21469 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__21469) {
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
var force = (function (){var G__21470 = (((where instanceof cljs.core.Keyword))?where.fqn:null);
switch (G__21470) {
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
var seq__21471 = cljs.core.seq.call(null,objects);
var chunk__21472 = null;
var count__21473 = (0);
var i__21474 = (0);
while(true){
if((i__21474 < count__21473)){
var o = cljs.core._nth.call(null,chunk__21472,i__21474);
climbr.matter.matter.apply_force.call(null,o,force);

var G__21478 = seq__21471;
var G__21479 = chunk__21472;
var G__21480 = count__21473;
var G__21481 = (i__21474 + (1));
seq__21471 = G__21478;
chunk__21472 = G__21479;
count__21473 = G__21480;
i__21474 = G__21481;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21471);
if(temp__4425__auto__){
var seq__21471__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21471__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__21471__$1);
var G__21482 = cljs.core.chunk_rest.call(null,seq__21471__$1);
var G__21483 = c__17608__auto__;
var G__21484 = cljs.core.count.call(null,c__17608__auto__);
var G__21485 = (0);
seq__21471 = G__21482;
chunk__21472 = G__21483;
count__21473 = G__21484;
i__21474 = G__21485;
continue;
} else {
var o = cljs.core.first.call(null,seq__21471__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__21486 = cljs.core.next.call(null,seq__21471__$1);
var G__21487 = null;
var G__21488 = (0);
var G__21489 = (0);
seq__21471 = G__21486;
chunk__21472 = G__21487;
count__21473 = G__21488;
i__21474 = G__21489;
continue;
}
} else {
return null;
}
}
break;
}
});
climbr.behaviour.user_actions.bind_keys = (function climbr$behaviour$user_actions$bind_keys(key_actions){
var keypressed = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18830__auto__,keypressed){
return (function (){
var f__18831__auto__ = (function (){var switch__18809__auto__ = ((function (c__18830__auto__,keypressed){
return (function (state_21547){
var state_val_21548 = (state_21547[(1)]);
if((state_val_21548 === (7))){
var inst_21533 = (state_21547[(7)]);
var inst_21532 = (state_21547[(2)]);
var inst_21533__$1 = cljs.core.get.call(null,key_actions,inst_21532);
var inst_21534 = (inst_21533__$1 == null);
var state_21547__$1 = (function (){var statearr_21549 = state_21547;
(statearr_21549[(7)] = inst_21533__$1);

return statearr_21549;
})();
if(cljs.core.truth_(inst_21534)){
var statearr_21550_21568 = state_21547__$1;
(statearr_21550_21568[(1)] = (8));

} else {
var statearr_21551_21569 = state_21547__$1;
(statearr_21551_21569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21548 === (1))){
var state_21547__$1 = state_21547;
var statearr_21552_21570 = state_21547__$1;
(statearr_21552_21570[(2)] = null);

(statearr_21552_21570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21548 === (4))){
var state_21547__$1 = state_21547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21547__$1,(7),keypressed);
} else {
if((state_val_21548 === (6))){
var inst_21543 = (state_21547[(2)]);
var state_21547__$1 = state_21547;
var statearr_21553_21571 = state_21547__$1;
(statearr_21553_21571[(2)] = inst_21543);

(statearr_21553_21571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21548 === (3))){
var inst_21545 = (state_21547[(2)]);
var state_21547__$1 = state_21547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21547__$1,inst_21545);
} else {
if((state_val_21548 === (2))){
var state_21547__$1 = state_21547;
var statearr_21554_21572 = state_21547__$1;
(statearr_21554_21572[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21548 === (9))){
var inst_21533 = (state_21547[(7)]);
var inst_21537 = inst_21533.call(null);
var state_21547__$1 = state_21547;
var statearr_21556_21573 = state_21547__$1;
(statearr_21556_21573[(2)] = inst_21537);

(statearr_21556_21573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21548 === (5))){
var state_21547__$1 = state_21547;
var statearr_21557_21574 = state_21547__$1;
(statearr_21557_21574[(2)] = null);

(statearr_21557_21574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21548 === (10))){
var inst_21539 = (state_21547[(2)]);
var state_21547__$1 = (function (){var statearr_21558 = state_21547;
(statearr_21558[(8)] = inst_21539);

return statearr_21558;
})();
var statearr_21559_21575 = state_21547__$1;
(statearr_21559_21575[(2)] = null);

(statearr_21559_21575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21548 === (8))){
var state_21547__$1 = state_21547;
var statearr_21560_21576 = state_21547__$1;
(statearr_21560_21576[(2)] = null);

(statearr_21560_21576[(1)] = (10));


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
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0 = (function (){
var statearr_21564 = [null,null,null,null,null,null,null,null,null];
(statearr_21564[(0)] = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__);

(statearr_21564[(1)] = (1));

return statearr_21564;
});
var climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1 = (function (state_21547){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21565){if((e21565 instanceof Object)){
var ex__18813__auto__ = e21565;
var statearr_21566_21577 = state_21547;
(statearr_21566_21577[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21578 = state_21547;
state_21547 = G__21578;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__ = function(state_21547){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1.call(this,state_21547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$bind_keys_$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed))
})();
var state__18832__auto__ = (function (){var statearr_21567 = f__18831__auto__.call(null);
(statearr_21567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__21580 = hand_name;
switch (G__21580) {
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
climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_ = (function climbr$behaviour$user_actions$remove_boulder_for_hand_BANG_(hand_name){
var key_boulder = (function (){var G__21583 = hand_name;
switch (G__21583) {
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
climbr.behaviour.user_actions.setup_boulder_release_events_BANG_ = (function climbr$behaviour$user_actions$setup_boulder_release_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var release_hand_BANG_ = ((function (keypressed){
return (function (hand_key){
var hand = climbr.behaviour.user_actions.fetch_hand.call(null,hand_key);
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var boulder = climbr.behaviour.user_actions.get_boulder_for_hand.call(null,hand_name);
if(!((boulder == null))){
climbr.matter.matter.world.remove(engine.world,boulder);

return climbr.behaviour.user_actions.remove_boulder_for_hand_BANG_.call(null,hand_name);
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
return (function (state_21655){
var state_val_21656 = (state_21655[(1)]);
if((state_val_21656 === (7))){
var inst_21637 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
var G__21657_21683 = (((inst_21637 instanceof cljs.core.Keyword))?inst_21637.fqn:null);
switch (G__21657_21683) {
case "release-left":
var statearr_21658_21685 = state_21655__$1;
(statearr_21658_21685[(1)] = (9));


break;
case "release-right":
var statearr_21659_21686 = state_21655__$1;
(statearr_21659_21686[(1)] = (10));


break;
default:
var statearr_21660_21687 = state_21655__$1;
(statearr_21660_21687[(1)] = (11));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (1))){
var state_21655__$1 = state_21655;
var statearr_21661_21688 = state_21655__$1;
(statearr_21661_21688[(2)] = null);

(statearr_21661_21688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (4))){
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21655__$1,(7),keypressed);
} else {
if((state_val_21656 === (13))){
var state_21655__$1 = state_21655;
var statearr_21662_21689 = state_21655__$1;
(statearr_21662_21689[(2)] = null);

(statearr_21662_21689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (6))){
var inst_21651 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
var statearr_21663_21690 = state_21655__$1;
(statearr_21663_21690[(2)] = inst_21651);

(statearr_21663_21690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (3))){
var inst_21653 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21655__$1,inst_21653);
} else {
if((state_val_21656 === (12))){
var inst_21642 = (state_21655[(7)]);
var inst_21644 = release_hand_BANG_.call(null,inst_21642);
var state_21655__$1 = state_21655;
var statearr_21664_21691 = state_21655__$1;
(statearr_21664_21691[(2)] = inst_21644);

(statearr_21664_21691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (2))){
var state_21655__$1 = state_21655;
var statearr_21665_21692 = state_21655__$1;
(statearr_21665_21692[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (11))){
var state_21655__$1 = state_21655;
var statearr_21667_21693 = state_21655__$1;
(statearr_21667_21693[(2)] = null);

(statearr_21667_21693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (9))){
var state_21655__$1 = state_21655;
var statearr_21668_21694 = state_21655__$1;
(statearr_21668_21694[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_21668_21694[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (5))){
var state_21655__$1 = state_21655;
var statearr_21669_21695 = state_21655__$1;
(statearr_21669_21695[(2)] = null);

(statearr_21669_21695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (14))){
var inst_21647 = (state_21655[(2)]);
var state_21655__$1 = (function (){var statearr_21670 = state_21655;
(statearr_21670[(8)] = inst_21647);

return statearr_21670;
})();
var statearr_21671_21696 = state_21655__$1;
(statearr_21671_21696[(2)] = null);

(statearr_21671_21696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (10))){
var state_21655__$1 = state_21655;
var statearr_21672_21697 = state_21655__$1;
(statearr_21672_21697[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_21672_21697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21656 === (8))){
var inst_21642 = (state_21655[(7)]);
var inst_21642__$1 = (state_21655[(2)]);
var state_21655__$1 = (function (){var statearr_21673 = state_21655;
(statearr_21673[(7)] = inst_21642__$1);

return statearr_21673;
})();
if(cljs.core.truth_(inst_21642__$1)){
var statearr_21674_21698 = state_21655__$1;
(statearr_21674_21698[(1)] = (12));

} else {
var statearr_21675_21699 = state_21655__$1;
(statearr_21675_21699[(1)] = (13));

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
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = null;
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0 = (function (){
var statearr_21679 = [null,null,null,null,null,null,null,null,null];
(statearr_21679[(0)] = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__);

(statearr_21679[(1)] = (1));

return statearr_21679;
});
var climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1 = (function (state_21655){
while(true){
var ret_value__18811__auto__ = (function (){try{while(true){
var result__18812__auto__ = switch__18809__auto__.call(null,state_21655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18812__auto__;
}
break;
}
}catch (e21680){if((e21680 instanceof Object)){
var ex__18813__auto__ = e21680;
var statearr_21681_21700 = state_21655;
(statearr_21681_21700[(5)] = ex__18813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21701 = state_21655;
state_21655 = G__21701;
continue;
} else {
return ret_value__18811__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__ = function(state_21655){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1.call(this,state_21655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____0;
climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto____1;
return climbr$behaviour$user_actions$setup_boulder_release_events_BANG__$_state_machine__18810__auto__;
})()
;})(switch__18809__auto__,c__18830__auto__,keypressed,release_hand_BANG_))
})();
var state__18832__auto__ = (function (){var statearr_21682 = f__18831__auto__.call(null);
(statearr_21682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18830__auto__);

return statearr_21682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18832__auto__);
});})(c__18830__auto__,keypressed,release_hand_BANG_))
);

return c__18830__auto__;
});
climbr.behaviour.user_actions.fetch_hand = (function climbr$behaviour$user_actions$fetch_hand(hand){
var h1 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__21703 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__21703) {
case "left":
return left_hand;

break;
case "right":
return right_hand;

break;
case "free":
return climbr.behaviour.user_actions.fetch_free_hand.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(hand)].join('')));

}
});
climbr.behaviour.user_actions.fetch_climber_part = (function climbr$behaviour$user_actions$fetch_climber_part(part){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"climber","climber",1752810721),part], null));
});
climbr.behaviour.user_actions.fetch_free_hand = (function climbr$behaviour$user_actions$fetch_free_hand(){
var h1_holds = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h1-holds","h1-holds",1841478467));
var h2_holds = cljs.core.get.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.Keyword(null,"h2-holds","h2-holds",655000284));
var both_hold = (!((h1_holds == null))) && (!((h2_holds == null)));
if(both_hold){
return null;
} else {
if(!((h1_holds == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
} else {
if(!((h2_holds == null))){
return climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
} else {
return null;

}
}
}
});

//# sourceMappingURL=user_actions.js.map?rel=1474212409448