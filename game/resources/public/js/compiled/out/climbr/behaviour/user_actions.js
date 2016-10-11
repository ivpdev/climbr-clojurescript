// Compiled by ClojureScript 1.7.170 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('cljs.core.async');
goog.require('climbr.figures.climber');
goog.require('climbr.controls.keyboard');
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
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
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"left-hand","left-hand",-817701352),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

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
return climbr.behaviour.user_actions.lunge_BANG_.call(null,new cljs.core.Keyword(null,"right-hand","right-hand",1578446749),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-TODO","top-TODO",-253917026),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"power","power",-937852079),0.2], null));

}
}
}
})], null));
});
climbr.behaviour.user_actions.setup_climber_grab_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_grab_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var grab_hand_BANG_ = ((function (keypressed){
return (function (hand){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var hand_key = (function (){var G__36525 = hand_name;
switch (G__36525) {
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
var can_grab_boulders = cljs.core.seq.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,climbr.app_state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-grab","can-grab",-606284184),hand_key], null)));
var boulder_to_grab = cljs.core.nth.call(null,can_grab_boulders,(0));
var have_something_to_grab_QMARK_ = !((boulder_to_grab == null));
var holds_boulder = climbr.behaviour.user_actions.get_boulder_for_hand.call(null,hand_name);
var already_holds_QMARK_ = !((holds_boulder == null));
var engine__$1 = new cljs.core.Keyword(null,"engine","engine",1459054265).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,climbr.app_state.app_state));
if((have_something_to_grab_QMARK_) && (!(already_holds_QMARK_))){
return climbr.behaviour.user_actions.connect_hand_and_boulder.call(null,hand,boulder_to_grab,engine__$1);
} else {
return null;
}
});})(keypressed))
;
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18831__auto__,keypressed,grab_hand_BANG_){
return (function (){
var f__18832__auto__ = (function (){var switch__18810__auto__ = ((function (c__18831__auto__,keypressed,grab_hand_BANG_){
return (function (state_36550){
var state_val_36551 = (state_36550[(1)]);
if((state_val_36551 === (7))){
var inst_36529 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var G__36552_36581 = (((inst_36529 instanceof cljs.core.Keyword))?inst_36529.fqn:null);
switch (G__36552_36581) {
case "grab-left":
var statearr_36553_36583 = state_36550__$1;
(statearr_36553_36583[(1)] = (9));


break;
case "grab-right":
var statearr_36554_36584 = state_36550__$1;
(statearr_36554_36584[(1)] = (10));


break;
case "grab-both":
var statearr_36555_36585 = state_36550__$1;
(statearr_36555_36585[(1)] = (11));


break;
default:
var statearr_36556_36586 = state_36550__$1;
(statearr_36556_36586[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (1))){
var state_36550__$1 = state_36550;
var statearr_36557_36587 = state_36550__$1;
(statearr_36557_36587[(2)] = null);

(statearr_36557_36587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (4))){
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36550__$1,(7),keypressed);
} else {
if((state_val_36551 === (15))){
var inst_36542 = (state_36550[(2)]);
var state_36550__$1 = (function (){var statearr_36558 = state_36550;
(statearr_36558[(7)] = inst_36542);

return statearr_36558;
})();
var statearr_36559_36588 = state_36550__$1;
(statearr_36559_36588[(2)] = null);

(statearr_36559_36588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (13))){
var inst_36535 = (state_36550[(8)]);
var inst_36537 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_36535);
var inst_36538 = cljs.core.map.call(null,grab_hand_BANG_,inst_36537);
var inst_36539 = cljs.core.doall.call(null,inst_36538);
var state_36550__$1 = state_36550;
var statearr_36560_36589 = state_36550__$1;
(statearr_36560_36589[(2)] = inst_36539);

(statearr_36560_36589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (6))){
var inst_36546 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
var statearr_36561_36590 = state_36550__$1;
(statearr_36561_36590[(2)] = inst_36546);

(statearr_36561_36590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (3))){
var inst_36548 = (state_36550[(2)]);
var state_36550__$1 = state_36550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36550__$1,inst_36548);
} else {
if((state_val_36551 === (12))){
var state_36550__$1 = state_36550;
var statearr_36562_36591 = state_36550__$1;
(statearr_36562_36591[(2)] = null);

(statearr_36562_36591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (2))){
var state_36550__$1 = state_36550;
var statearr_36563_36592 = state_36550__$1;
(statearr_36563_36592[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (11))){
var state_36550__$1 = state_36550;
var statearr_36565_36593 = state_36550__$1;
(statearr_36565_36593[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_36565_36593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (9))){
var state_36550__$1 = state_36550;
var statearr_36566_36594 = state_36550__$1;
(statearr_36566_36594[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_36566_36594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (5))){
var state_36550__$1 = state_36550;
var statearr_36567_36595 = state_36550__$1;
(statearr_36567_36595[(2)] = null);

(statearr_36567_36595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (14))){
var state_36550__$1 = state_36550;
var statearr_36568_36596 = state_36550__$1;
(statearr_36568_36596[(2)] = null);

(statearr_36568_36596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (10))){
var state_36550__$1 = state_36550;
var statearr_36569_36597 = state_36550__$1;
(statearr_36569_36597[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_36569_36597[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36551 === (8))){
var inst_36535 = (state_36550[(8)]);
var inst_36535__$1 = (state_36550[(2)]);
var state_36550__$1 = (function (){var statearr_36570 = state_36550;
(statearr_36570[(8)] = inst_36535__$1);

return statearr_36570;
})();
if(cljs.core.truth_(inst_36535__$1)){
var statearr_36571_36598 = state_36550__$1;
(statearr_36571_36598[(1)] = (13));

} else {
var statearr_36572_36599 = state_36550__$1;
(statearr_36572_36599[(1)] = (14));

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
});})(c__18831__auto__,keypressed,grab_hand_BANG_))
;
return ((function (switch__18810__auto__,c__18831__auto__,keypressed,grab_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto____0 = (function (){
var statearr_36576 = [null,null,null,null,null,null,null,null,null];
(statearr_36576[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto__);

(statearr_36576[(1)] = (1));

return statearr_36576;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto____1 = (function (state_36550){
while(true){
var ret_value__18812__auto__ = (function (){try{while(true){
var result__18813__auto__ = switch__18810__auto__.call(null,state_36550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18813__auto__;
}
break;
}
}catch (e36577){if((e36577 instanceof Object)){
var ex__18814__auto__ = e36577;
var statearr_36578_36600 = state_36550;
(statearr_36578_36600[(5)] = ex__18814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36601 = state_36550;
state_36550 = G__36601;
continue;
} else {
return ret_value__18812__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto__ = function(state_36550){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto____1.call(this,state_36550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__18811__auto__;
})()
;})(switch__18810__auto__,c__18831__auto__,keypressed,grab_hand_BANG_))
})();
var state__18833__auto__ = (function (){var statearr_36579 = f__18832__auto__.call(null);
(statearr_36579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18831__auto__);

return statearr_36579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18833__auto__);
});})(c__18831__auto__,keypressed,grab_hand_BANG_))
);

return c__18831__auto__;
});
climbr.behaviour.user_actions.setup_climber_release_events_BANG_ = (function climbr$behaviour$user_actions$setup_climber_release_events_BANG_(engine){
var keypressed = cljs.core.async.chan.call(null);
var release_hand_BANG_ = ((function (keypressed){
return (function (hand){
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

var c__18831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18831__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__18832__auto__ = (function (){var switch__18810__auto__ = ((function (c__18831__auto__,keypressed,release_hand_BANG_){
return (function (state_36680){
var state_val_36681 = (state_36680[(1)]);
if((state_val_36681 === (7))){
var inst_36659 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
var G__36682_36710 = (((inst_36659 instanceof cljs.core.Keyword))?inst_36659.fqn:null);
switch (G__36682_36710) {
case "release-left":
var statearr_36683_36712 = state_36680__$1;
(statearr_36683_36712[(1)] = (9));


break;
case "release-right":
var statearr_36684_36713 = state_36680__$1;
(statearr_36684_36713[(1)] = (10));


break;
case "release-both":
var statearr_36685_36714 = state_36680__$1;
(statearr_36685_36714[(1)] = (11));


break;
default:
var statearr_36686_36715 = state_36680__$1;
(statearr_36686_36715[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (1))){
var state_36680__$1 = state_36680;
var statearr_36687_36716 = state_36680__$1;
(statearr_36687_36716[(2)] = null);

(statearr_36687_36716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (4))){
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36680__$1,(7),keypressed);
} else {
if((state_val_36681 === (15))){
var inst_36672 = (state_36680[(2)]);
var state_36680__$1 = (function (){var statearr_36688 = state_36680;
(statearr_36688[(7)] = inst_36672);

return statearr_36688;
})();
var statearr_36689_36717 = state_36680__$1;
(statearr_36689_36717[(2)] = null);

(statearr_36689_36717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (13))){
var inst_36665 = (state_36680[(8)]);
var inst_36667 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_36665);
var inst_36668 = cljs.core.map.call(null,release_hand_BANG_,inst_36667);
var inst_36669 = cljs.core.doall.call(null,inst_36668);
var state_36680__$1 = state_36680;
var statearr_36690_36718 = state_36680__$1;
(statearr_36690_36718[(2)] = inst_36669);

(statearr_36690_36718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (6))){
var inst_36676 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
var statearr_36691_36719 = state_36680__$1;
(statearr_36691_36719[(2)] = inst_36676);

(statearr_36691_36719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (3))){
var inst_36678 = (state_36680[(2)]);
var state_36680__$1 = state_36680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36680__$1,inst_36678);
} else {
if((state_val_36681 === (12))){
var state_36680__$1 = state_36680;
var statearr_36692_36720 = state_36680__$1;
(statearr_36692_36720[(2)] = null);

(statearr_36692_36720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (2))){
var state_36680__$1 = state_36680;
var statearr_36693_36721 = state_36680__$1;
(statearr_36693_36721[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (11))){
var state_36680__$1 = state_36680;
var statearr_36695_36722 = state_36680__$1;
(statearr_36695_36722[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_36695_36722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (9))){
var state_36680__$1 = state_36680;
var statearr_36696_36723 = state_36680__$1;
(statearr_36696_36723[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_36696_36723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (5))){
var state_36680__$1 = state_36680;
var statearr_36697_36724 = state_36680__$1;
(statearr_36697_36724[(2)] = null);

(statearr_36697_36724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (14))){
var state_36680__$1 = state_36680;
var statearr_36698_36725 = state_36680__$1;
(statearr_36698_36725[(2)] = null);

(statearr_36698_36725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (10))){
var state_36680__$1 = state_36680;
var statearr_36699_36726 = state_36680__$1;
(statearr_36699_36726[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_36699_36726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36681 === (8))){
var inst_36665 = (state_36680[(8)]);
var inst_36665__$1 = (state_36680[(2)]);
var state_36680__$1 = (function (){var statearr_36700 = state_36680;
(statearr_36700[(8)] = inst_36665__$1);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36665__$1)){
var statearr_36701_36727 = state_36680__$1;
(statearr_36701_36727[(1)] = (13));

} else {
var statearr_36702_36728 = state_36680__$1;
(statearr_36702_36728[(1)] = (14));

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
});})(c__18831__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__18810__auto__,c__18831__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto____0 = (function (){
var statearr_36706 = [null,null,null,null,null,null,null,null,null];
(statearr_36706[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto__);

(statearr_36706[(1)] = (1));

return statearr_36706;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto____1 = (function (state_36680){
while(true){
var ret_value__18812__auto__ = (function (){try{while(true){
var result__18813__auto__ = switch__18810__auto__.call(null,state_36680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18813__auto__;
}
break;
}
}catch (e36707){if((e36707 instanceof Object)){
var ex__18814__auto__ = e36707;
var statearr_36708_36729 = state_36680;
(statearr_36708_36729[(5)] = ex__18814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36730 = state_36680;
state_36680 = G__36730;
continue;
} else {
return ret_value__18812__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto__ = function(state_36680){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto____1.call(this,state_36680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__18811__auto__;
})()
;})(switch__18810__auto__,c__18831__auto__,keypressed,release_hand_BANG_))
})();
var state__18833__auto__ = (function (){var statearr_36709 = f__18832__auto__.call(null);
(statearr_36709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18831__auto__);

return statearr_36709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18833__auto__);
});})(c__18831__auto__,keypressed,release_hand_BANG_))
);

return c__18831__auto__;
});
climbr.behaviour.user_actions.on_the_ground_QMARK_ = (function climbr$behaviour$user_actions$on_the_ground_QMARK_(){
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var y = climbr.matter.matter.y.call(null,body);
return (y > (550));
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
climbr.behaviour.user_actions.lunge_BANG_ = (function climbr$behaviour$user_actions$lunge_BANG_(what,_,where,___$1,opts){
cljs.core.println.call(null,"Lunge ",what," to ",where);

var forces_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.003,new cljs.core.Keyword(null,"vertical","vertical",718696748),0.005], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),0.004,new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425),0.004], null)], null);
var objects = (function (){var G__36737 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__36737) {
case "left-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"left","left",-399115937));

break;
case "right-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "both-hands":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"both","both",-393648840));

break;
case "free-hand":
return climbr.behaviour.user_actions.fetch_hands.call(null,new cljs.core.Keyword(null,"free","free",801364328));

break;
case "body":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(what)].join('')));

}
})();
var force_obj = (function (){var G__36738 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__36738) {
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
var factor = (function (){var or__16805__auto__ = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return (1);
}
})();
var vertical_force_component_raw = (new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var horizontal_force_component_raw = (new cljs.core.Keyword(null,"horizonal","horizonal",-2030982425).cljs$core$IFn$_invoke$arity$1(force_obj) * factor);
var targets = ((cljs.core.vector_QMARK_.call(null,where))?where:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where], null)
);
var vertical_force_component = (cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,targets,new cljs.core.Keyword(null,"top","top",-1856271961)))?(- vertical_force_component_raw):(0));
var horizontal_force_component = (cljs.core.truth_((function (){var and__16793__auto__ = climbr.utils.utils.in_QMARK_.call(null,targets,new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.truth_(and__16793__auto__)){
return climbr.utils.utils.in_QMARK_.call(null,targets,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return and__16793__auto__;
}
})())?(0):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,targets,new cljs.core.Keyword(null,"left","left",-399115937)))?(- horizontal_force_component_raw):(cljs.core.truth_(climbr.utils.utils.in_QMARK_.call(null,targets,new cljs.core.Keyword(null,"right","right",-452581833)))?horizontal_force_component_raw:(0)
)));
var x = cljs.core.println.call(null,"!!");
var x__$1 = cljs.core.println.call(null,targets);
var x__$2 = cljs.core.println.call(null,climbr.utils.utils.in_QMARK_.call(null,targets,new cljs.core.Keyword(null,"left","left",-399115937)));
var x1 = cljs.core.println.call(null,vertical_force_component_raw);
var x1__$1 = cljs.core.println.call(null,factor);
var force = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),horizontal_force_component,new cljs.core.Keyword(null,"y","y",-1757859776),vertical_force_component], null);
var f = cljs.core.println.call(null,force);
var seq__36739 = cljs.core.seq.call(null,objects);
var chunk__36740 = null;
var count__36741 = (0);
var i__36742 = (0);
while(true){
if((i__36742 < count__36741)){
var o = cljs.core._nth.call(null,chunk__36740,i__36742);
climbr.matter.matter.apply_force.call(null,o,force);

var G__36745 = seq__36739;
var G__36746 = chunk__36740;
var G__36747 = count__36741;
var G__36748 = (i__36742 + (1));
seq__36739 = G__36745;
chunk__36740 = G__36746;
count__36741 = G__36747;
i__36742 = G__36748;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__36739);
if(temp__4425__auto__){
var seq__36739__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36739__$1)){
var c__17609__auto__ = cljs.core.chunk_first.call(null,seq__36739__$1);
var G__36749 = cljs.core.chunk_rest.call(null,seq__36739__$1);
var G__36750 = c__17609__auto__;
var G__36751 = cljs.core.count.call(null,c__17609__auto__);
var G__36752 = (0);
seq__36739 = G__36749;
chunk__36740 = G__36750;
count__36741 = G__36751;
i__36742 = G__36752;
continue;
} else {
var o = cljs.core.first.call(null,seq__36739__$1);
climbr.matter.matter.apply_force.call(null,o,force);

var G__36753 = cljs.core.next.call(null,seq__36739__$1);
var G__36754 = null;
var G__36755 = (0);
var G__36756 = (0);
seq__36739 = G__36753;
chunk__36740 = G__36754;
count__36741 = G__36755;
i__36742 = G__36756;
continue;
}
} else {
return null;
}
}
break;
}
});
climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(key_actions){
var keypressed = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,climbr.controls.keyboard.keypressed,keypressed);

var c__18831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18831__auto__,keypressed){
return (function (){
var f__18832__auto__ = (function (){var switch__18810__auto__ = ((function (c__18831__auto__,keypressed){
return (function (state_36814){
var state_val_36815 = (state_36814[(1)]);
if((state_val_36815 === (7))){
var inst_36800 = (state_36814[(7)]);
var inst_36799 = (state_36814[(2)]);
var inst_36800__$1 = cljs.core.get.call(null,key_actions,inst_36799);
var inst_36801 = (inst_36800__$1 == null);
var state_36814__$1 = (function (){var statearr_36816 = state_36814;
(statearr_36816[(7)] = inst_36800__$1);

return statearr_36816;
})();
if(cljs.core.truth_(inst_36801)){
var statearr_36817_36835 = state_36814__$1;
(statearr_36817_36835[(1)] = (8));

} else {
var statearr_36818_36836 = state_36814__$1;
(statearr_36818_36836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (1))){
var state_36814__$1 = state_36814;
var statearr_36819_36837 = state_36814__$1;
(statearr_36819_36837[(2)] = null);

(statearr_36819_36837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (4))){
var state_36814__$1 = state_36814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36814__$1,(7),keypressed);
} else {
if((state_val_36815 === (6))){
var inst_36810 = (state_36814[(2)]);
var state_36814__$1 = state_36814;
var statearr_36820_36838 = state_36814__$1;
(statearr_36820_36838[(2)] = inst_36810);

(statearr_36820_36838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (3))){
var inst_36812 = (state_36814[(2)]);
var state_36814__$1 = state_36814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36814__$1,inst_36812);
} else {
if((state_val_36815 === (2))){
var state_36814__$1 = state_36814;
var statearr_36821_36839 = state_36814__$1;
(statearr_36821_36839[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (9))){
var inst_36800 = (state_36814[(7)]);
var inst_36804 = inst_36800.call(null);
var state_36814__$1 = state_36814;
var statearr_36823_36840 = state_36814__$1;
(statearr_36823_36840[(2)] = inst_36804);

(statearr_36823_36840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (5))){
var state_36814__$1 = state_36814;
var statearr_36824_36841 = state_36814__$1;
(statearr_36824_36841[(2)] = null);

(statearr_36824_36841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (10))){
var inst_36806 = (state_36814[(2)]);
var state_36814__$1 = (function (){var statearr_36825 = state_36814;
(statearr_36825[(8)] = inst_36806);

return statearr_36825;
})();
var statearr_36826_36842 = state_36814__$1;
(statearr_36826_36842[(2)] = null);

(statearr_36826_36842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (8))){
var state_36814__$1 = state_36814;
var statearr_36827_36843 = state_36814__$1;
(statearr_36827_36843[(2)] = null);

(statearr_36827_36843[(1)] = (10));


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
});})(c__18831__auto__,keypressed))
;
return ((function (switch__18810__auto__,c__18831__auto__,keypressed){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto____0 = (function (){
var statearr_36831 = [null,null,null,null,null,null,null,null,null];
(statearr_36831[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto__);

(statearr_36831[(1)] = (1));

return statearr_36831;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto____1 = (function (state_36814){
while(true){
var ret_value__18812__auto__ = (function (){try{while(true){
var result__18813__auto__ = switch__18810__auto__.call(null,state_36814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18813__auto__;
}
break;
}
}catch (e36832){if((e36832 instanceof Object)){
var ex__18814__auto__ = e36832;
var statearr_36833_36844 = state_36814;
(statearr_36833_36844[(5)] = ex__18814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36845 = state_36814;
state_36814 = G__36845;
continue;
} else {
return ret_value__18812__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto__ = function(state_36814){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto____1.call(this,state_36814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__18811__auto__;
})()
;})(switch__18810__auto__,c__18831__auto__,keypressed))
})();
var state__18833__auto__ = (function (){var statearr_36834 = f__18832__auto__.call(null);
(statearr_36834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18831__auto__);

return statearr_36834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18833__auto__);
});})(c__18831__auto__,keypressed))
);

return c__18831__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__36847 = hand_name;
switch (G__36847) {
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
var key_boulder = (function (){var G__36850 = hand_name;
switch (G__36850) {
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
climbr.behaviour.user_actions.connect_hand_and_boulder = (function climbr$behaviour$user_actions$connect_hand_and_boulder(hand,boulder,engine){
var hand_name = climbr.matter.matter.read_data.call(null,"name",hand);
var constraint = climbr.matter.matter.constraint.create({"bodyA": hand, "bodyB": boulder});
var key_holds = (function (){var G__36853 = hand_name;
switch (G__36853) {
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
climbr.matter.matter.world.addConstraint(engine.world,constraint);

return cljs.core.swap_BANG_.call(null,climbr.app_state.app_state,cljs.core.assoc,key_holds,constraint);
});
climbr.behaviour.user_actions.fetch_hands = (function climbr$behaviour$user_actions$fetch_hands(hand){
var h1 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h1","h1",-1896887462));
var h2 = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"h2","h2",-372662728));
var h1x = h1.position.x;
var h2x = h2.position.x;
var h1_is_left_QMARK_ = (h1x < h2x);
var left_hand = ((h1_is_left_QMARK_)?h1:h2);
var right_hand = ((h1_is_left_QMARK_)?h2:h1);
var G__36856 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__36856) {
case "left":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [right_hand], null);

break;
case "free":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [climbr.behaviour.user_actions.fetch_free_hand.call(null)], null);

break;
case "both":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_hand,right_hand], null);

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

//# sourceMappingURL=user_actions.js.map?rel=1476217884405