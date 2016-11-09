// Compiled by ClojureScript 1.9.293 {}
goog.provide('climbr.behaviour.user_actions');
goog.require('cljs.core');
goog.require('climbr.app_state');
goog.require('climbr.utils.utils');
goog.require('climbr.matter.matter');
goog.require('cljs.core.async');
goog.require('climbr.figures.climber');
goog.require('climbr.controls.keyboard');
climbr.behaviour.user_actions.setup_climber_moves_BANG_ = (function climbr$behaviour$user_actions$setup_climber_moves_BANG_(){
return climbr.behaviour.user_actions.bind_keys_BANG_.call(null,climbr.controls.keyboard.keypressed,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),(function (){
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
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
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
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
if(cljs.core.truth_((function (){var and__18730__auto__ = climbr.behaviour.user_actions.on_the_ground_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null);
} else {
return and__18730__auto__;
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
var hand_key = (function (){var G__30957 = hand_name;
switch (G__30957) {
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

var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__,keypressed,grab_hand_BANG_){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__,keypressed,grab_hand_BANG_){
return (function (state_30983){
var state_val_30984 = (state_30983[(1)]);
if((state_val_30984 === (7))){
var inst_30961 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
var G__30985_31014 = (((inst_30961 instanceof cljs.core.Keyword))?inst_30961.fqn:null);
switch (G__30985_31014) {
case "grab-left":
var statearr_30986_31016 = state_30983__$1;
(statearr_30986_31016[(1)] = (9));


break;
case "grab-right":
var statearr_30987_31017 = state_30983__$1;
(statearr_30987_31017[(1)] = (10));


break;
case "grab-both":
var statearr_30988_31018 = state_30983__$1;
(statearr_30988_31018[(1)] = (11));


break;
default:
var statearr_30989_31019 = state_30983__$1;
(statearr_30989_31019[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (1))){
var state_30983__$1 = state_30983;
var statearr_30990_31020 = state_30983__$1;
(statearr_30990_31020[(2)] = null);

(statearr_30990_31020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (4))){
var state_30983__$1 = state_30983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30983__$1,(7),keypressed);
} else {
if((state_val_30984 === (15))){
var inst_30973 = (state_30983[(2)]);
var inst_30974 = cljs.core.map.call(null,grab_hand_BANG_,inst_30973);
var inst_30975 = cljs.core.doall.call(null,inst_30974);
var state_30983__$1 = (function (){var statearr_30991 = state_30983;
(statearr_30991[(7)] = inst_30975);

return statearr_30991;
})();
var statearr_30992_31021 = state_30983__$1;
(statearr_30992_31021[(2)] = null);

(statearr_30992_31021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (13))){
var state_30983__$1 = state_30983;
var statearr_30993_31022 = state_30983__$1;
(statearr_30993_31022[(2)] = null);

(statearr_30993_31022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (6))){
var inst_30979 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
var statearr_30994_31023 = state_30983__$1;
(statearr_30994_31023[(2)] = inst_30979);

(statearr_30994_31023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (3))){
var inst_30981 = (state_30983[(2)]);
var state_30983__$1 = state_30983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30983__$1,inst_30981);
} else {
if((state_val_30984 === (12))){
var state_30983__$1 = state_30983;
var statearr_30995_31024 = state_30983__$1;
(statearr_30995_31024[(2)] = null);

(statearr_30995_31024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (2))){
var state_30983__$1 = state_30983;
var statearr_30996_31025 = state_30983__$1;
(statearr_30996_31025[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (11))){
var state_30983__$1 = state_30983;
var statearr_30998_31026 = state_30983__$1;
(statearr_30998_31026[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_30998_31026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (9))){
var state_30983__$1 = state_30983;
var statearr_30999_31027 = state_30983__$1;
(statearr_30999_31027[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_30999_31027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (5))){
var state_30983__$1 = state_30983;
var statearr_31000_31028 = state_30983__$1;
(statearr_31000_31028[(2)] = null);

(statearr_31000_31028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (14))){
var inst_30967 = (state_30983[(8)]);
var inst_30971 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_30967);
var state_30983__$1 = state_30983;
var statearr_31001_31029 = state_30983__$1;
(statearr_31001_31029[(2)] = inst_30971);

(statearr_31001_31029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (10))){
var state_30983__$1 = state_30983;
var statearr_31002_31030 = state_30983__$1;
(statearr_31002_31030[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_31002_31030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30984 === (8))){
var inst_30967 = (state_30983[(8)]);
var inst_30967__$1 = (state_30983[(2)]);
var inst_30968 = (inst_30967__$1 == null);
var state_30983__$1 = (function (){var statearr_31003 = state_30983;
(statearr_31003[(8)] = inst_30967__$1);

return statearr_31003;
})();
if(cljs.core.truth_(inst_30968)){
var statearr_31004_31031 = state_30983__$1;
(statearr_31004_31031[(1)] = (13));

} else {
var statearr_31005_31032 = state_30983__$1;
(statearr_31005_31032[(1)] = (14));

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
});})(c__20903__auto__,keypressed,grab_hand_BANG_))
;
return ((function (switch__20882__auto__,c__20903__auto__,keypressed,grab_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto____0 = (function (){
var statearr_31009 = [null,null,null,null,null,null,null,null,null];
(statearr_31009[(0)] = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto__);

(statearr_31009[(1)] = (1));

return statearr_31009;
});
var climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto____1 = (function (state_30983){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_30983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e31010){if((e31010 instanceof Object)){
var ex__20886__auto__ = e31010;
var statearr_31011_31033 = state_30983;
(statearr_31011_31033[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_30983;
state_30983 = G__31034;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto__ = function(state_30983){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto____1.call(this,state_30983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto____0;
climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto____1;
return climbr$behaviour$user_actions$setup_climber_grab_events_BANG__$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__,keypressed,grab_hand_BANG_))
})();
var state__20905__auto__ = (function (){var statearr_31012 = f__20904__auto__.call(null);
(statearr_31012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_31012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__,keypressed,grab_hand_BANG_))
);

return c__20903__auto__;
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

var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__,keypressed,release_hand_BANG_){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__,keypressed,release_hand_BANG_){
return (function (state_31113){
var state_val_31114 = (state_31113[(1)]);
if((state_val_31114 === (7))){
var inst_31092 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var G__31115_31143 = (((inst_31092 instanceof cljs.core.Keyword))?inst_31092.fqn:null);
switch (G__31115_31143) {
case "release-left":
var statearr_31116_31145 = state_31113__$1;
(statearr_31116_31145[(1)] = (9));


break;
case "release-right":
var statearr_31117_31146 = state_31113__$1;
(statearr_31117_31146[(1)] = (10));


break;
case "release-both":
var statearr_31118_31147 = state_31113__$1;
(statearr_31118_31147[(1)] = (11));


break;
default:
var statearr_31119_31148 = state_31113__$1;
(statearr_31119_31148[(1)] = (12));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (1))){
var state_31113__$1 = state_31113;
var statearr_31120_31149 = state_31113__$1;
(statearr_31120_31149[(2)] = null);

(statearr_31120_31149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (4))){
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31113__$1,(7),keypressed);
} else {
if((state_val_31114 === (15))){
var inst_31105 = (state_31113[(2)]);
var state_31113__$1 = (function (){var statearr_31121 = state_31113;
(statearr_31121[(7)] = inst_31105);

return statearr_31121;
})();
var statearr_31122_31150 = state_31113__$1;
(statearr_31122_31150[(2)] = null);

(statearr_31122_31150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (13))){
var inst_31098 = (state_31113[(8)]);
var inst_31100 = climbr.behaviour.user_actions.fetch_hands.call(null,inst_31098);
var inst_31101 = cljs.core.map.call(null,release_hand_BANG_,inst_31100);
var inst_31102 = cljs.core.doall.call(null,inst_31101);
var state_31113__$1 = state_31113;
var statearr_31123_31151 = state_31113__$1;
(statearr_31123_31151[(2)] = inst_31102);

(statearr_31123_31151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (6))){
var inst_31109 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
var statearr_31124_31152 = state_31113__$1;
(statearr_31124_31152[(2)] = inst_31109);

(statearr_31124_31152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (3))){
var inst_31111 = (state_31113[(2)]);
var state_31113__$1 = state_31113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31113__$1,inst_31111);
} else {
if((state_val_31114 === (12))){
var state_31113__$1 = state_31113;
var statearr_31125_31153 = state_31113__$1;
(statearr_31125_31153[(2)] = null);

(statearr_31125_31153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (2))){
var state_31113__$1 = state_31113;
var statearr_31126_31154 = state_31113__$1;
(statearr_31126_31154[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (11))){
var state_31113__$1 = state_31113;
var statearr_31128_31155 = state_31113__$1;
(statearr_31128_31155[(2)] = new cljs.core.Keyword(null,"both","both",-393648840));

(statearr_31128_31155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (9))){
var state_31113__$1 = state_31113;
var statearr_31129_31156 = state_31113__$1;
(statearr_31129_31156[(2)] = new cljs.core.Keyword(null,"left","left",-399115937));

(statearr_31129_31156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (5))){
var state_31113__$1 = state_31113;
var statearr_31130_31157 = state_31113__$1;
(statearr_31130_31157[(2)] = null);

(statearr_31130_31157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (14))){
var state_31113__$1 = state_31113;
var statearr_31131_31158 = state_31113__$1;
(statearr_31131_31158[(2)] = null);

(statearr_31131_31158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (10))){
var state_31113__$1 = state_31113;
var statearr_31132_31159 = state_31113__$1;
(statearr_31132_31159[(2)] = new cljs.core.Keyword(null,"right","right",-452581833));

(statearr_31132_31159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31114 === (8))){
var inst_31098 = (state_31113[(8)]);
var inst_31098__$1 = (state_31113[(2)]);
var state_31113__$1 = (function (){var statearr_31133 = state_31113;
(statearr_31133[(8)] = inst_31098__$1);

return statearr_31133;
})();
if(cljs.core.truth_(inst_31098__$1)){
var statearr_31134_31160 = state_31113__$1;
(statearr_31134_31160[(1)] = (13));

} else {
var statearr_31135_31161 = state_31113__$1;
(statearr_31135_31161[(1)] = (14));

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
});})(c__20903__auto__,keypressed,release_hand_BANG_))
;
return ((function (switch__20882__auto__,c__20903__auto__,keypressed,release_hand_BANG_){
return (function() {
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto__ = null;
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto____0 = (function (){
var statearr_31139 = [null,null,null,null,null,null,null,null,null];
(statearr_31139[(0)] = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto__);

(statearr_31139[(1)] = (1));

return statearr_31139;
});
var climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto____1 = (function (state_31113){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_31113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e31140){if((e31140 instanceof Object)){
var ex__20886__auto__ = e31140;
var statearr_31141_31162 = state_31113;
(statearr_31141_31162[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31163 = state_31113;
state_31113 = G__31163;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto__ = function(state_31113){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto____1.call(this,state_31113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto____0;
climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto____1;
return climbr$behaviour$user_actions$setup_climber_release_events_BANG__$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__,keypressed,release_hand_BANG_))
})();
var state__20905__auto__ = (function (){var statearr_31142 = f__20904__auto__.call(null);
(statearr_31142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_31142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__,keypressed,release_hand_BANG_))
);

return c__20903__auto__;
});
climbr.behaviour.user_actions.on_the_ground_QMARK_ = (function climbr$behaviour$user_actions$on_the_ground_QMARK_(){
var body = climbr.behaviour.user_actions.fetch_climber_part.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
var y = climbr.matter.matter.y.call(null,body);
return (y > (550));
});
climbr.behaviour.user_actions.holds_nothing_QMARK_ = (function climbr$behaviour$user_actions$holds_nothing_QMARK_(){
return cljs.core.not.call(null,(function (){var or__18742__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(or__18742__auto__)){
return or__18742__auto__;
} else {
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
}
})());
});
climbr.behaviour.user_actions.holds_one_QMARK_ = (function climbr$behaviour$user_actions$holds_one_QMARK_(){
return (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_both_QMARK_.call(null))) && (cljs.core.not.call(null,climbr.behaviour.user_actions.holds_nothing_QMARK_.call(null)));
});
climbr.behaviour.user_actions.holds_both_QMARK_ = (function climbr$behaviour$user_actions$holds_both_QMARK_(){
var and__18730__auto__ = climbr.behaviour.user_actions.h1_holds_QMARK_.call(null);
if(cljs.core.truth_(and__18730__auto__)){
return climbr.behaviour.user_actions.h2_holds_QMARK_.call(null);
} else {
return and__18730__auto__;
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
var bodies = (function (){var G__31170 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__31170) {
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
var force_obj = (function (){var G__31171 = (((what instanceof cljs.core.Keyword))?what.fqn:null);
switch (G__31171) {
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
var seq__31172 = cljs.core.seq.call(null,bodies);
var chunk__31173 = null;
var count__31174 = (0);
var i__31175 = (0);
while(true){
if((i__31175 < count__31174)){
var b = cljs.core._nth.call(null,chunk__31173,i__31175);
climbr.matter.matter.apply_force.call(null,b,force);

var G__31178 = seq__31172;
var G__31179 = chunk__31173;
var G__31180 = count__31174;
var G__31181 = (i__31175 + (1));
seq__31172 = G__31178;
chunk__31173 = G__31179;
count__31174 = G__31180;
i__31175 = G__31181;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31172);
if(temp__4657__auto__){
var seq__31172__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31172__$1)){
var c__19556__auto__ = cljs.core.chunk_first.call(null,seq__31172__$1);
var G__31182 = cljs.core.chunk_rest.call(null,seq__31172__$1);
var G__31183 = c__19556__auto__;
var G__31184 = cljs.core.count.call(null,c__19556__auto__);
var G__31185 = (0);
seq__31172 = G__31182;
chunk__31173 = G__31183;
count__31174 = G__31184;
i__31175 = G__31185;
continue;
} else {
var b = cljs.core.first.call(null,seq__31172__$1);
climbr.matter.matter.apply_force.call(null,b,force);

var G__31186 = cljs.core.next.call(null,seq__31172__$1);
var G__31187 = null;
var G__31188 = (0);
var G__31189 = (0);
seq__31172 = G__31186;
chunk__31173 = G__31187;
count__31174 = G__31188;
i__31175 = G__31189;
continue;
}
} else {
return null;
}
}
break;
}
});
climbr.behaviour.user_actions.bind_keys_BANG_ = (function climbr$behaviour$user_actions$bind_keys_BANG_(external_keypressed_chan,key_actions){
var keypressed_chan = cljs.core.async.chan.call(null);
cljs.core.async.tap.call(null,external_keypressed_chan,keypressed_chan);

var c__20903__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20903__auto__,keypressed_chan){
return (function (){
var f__20904__auto__ = (function (){var switch__20882__auto__ = ((function (c__20903__auto__,keypressed_chan){
return (function (state_31247){
var state_val_31248 = (state_31247[(1)]);
if((state_val_31248 === (7))){
var inst_31233 = (state_31247[(7)]);
var inst_31232 = (state_31247[(2)]);
var inst_31233__$1 = cljs.core.get.call(null,key_actions,inst_31232);
var inst_31234 = (inst_31233__$1 == null);
var state_31247__$1 = (function (){var statearr_31249 = state_31247;
(statearr_31249[(7)] = inst_31233__$1);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31234)){
var statearr_31250_31268 = state_31247__$1;
(statearr_31250_31268[(1)] = (8));

} else {
var statearr_31251_31269 = state_31247__$1;
(statearr_31251_31269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (1))){
var state_31247__$1 = state_31247;
var statearr_31252_31270 = state_31247__$1;
(statearr_31252_31270[(2)] = null);

(statearr_31252_31270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (4))){
var state_31247__$1 = state_31247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31247__$1,(7),keypressed_chan);
} else {
if((state_val_31248 === (6))){
var inst_31243 = (state_31247[(2)]);
var state_31247__$1 = state_31247;
var statearr_31253_31271 = state_31247__$1;
(statearr_31253_31271[(2)] = inst_31243);

(statearr_31253_31271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (3))){
var inst_31245 = (state_31247[(2)]);
var state_31247__$1 = state_31247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31247__$1,inst_31245);
} else {
if((state_val_31248 === (2))){
var state_31247__$1 = state_31247;
var statearr_31254_31272 = state_31247__$1;
(statearr_31254_31272[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (9))){
var inst_31233 = (state_31247[(7)]);
var inst_31237 = inst_31233.call(null);
var state_31247__$1 = state_31247;
var statearr_31256_31273 = state_31247__$1;
(statearr_31256_31273[(2)] = inst_31237);

(statearr_31256_31273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (5))){
var state_31247__$1 = state_31247;
var statearr_31257_31274 = state_31247__$1;
(statearr_31257_31274[(2)] = null);

(statearr_31257_31274[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (10))){
var inst_31239 = (state_31247[(2)]);
var state_31247__$1 = (function (){var statearr_31258 = state_31247;
(statearr_31258[(8)] = inst_31239);

return statearr_31258;
})();
var statearr_31259_31275 = state_31247__$1;
(statearr_31259_31275[(2)] = null);

(statearr_31259_31275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31248 === (8))){
var state_31247__$1 = state_31247;
var statearr_31260_31276 = state_31247__$1;
(statearr_31260_31276[(2)] = null);

(statearr_31260_31276[(1)] = (10));


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
});})(c__20903__auto__,keypressed_chan))
;
return ((function (switch__20882__auto__,c__20903__auto__,keypressed_chan){
return (function() {
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto__ = null;
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto____0 = (function (){
var statearr_31264 = [null,null,null,null,null,null,null,null,null];
(statearr_31264[(0)] = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto__);

(statearr_31264[(1)] = (1));

return statearr_31264;
});
var climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto____1 = (function (state_31247){
while(true){
var ret_value__20884__auto__ = (function (){try{while(true){
var result__20885__auto__ = switch__20882__auto__.call(null,state_31247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20885__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20885__auto__;
}
break;
}
}catch (e31265){if((e31265 instanceof Object)){
var ex__20886__auto__ = e31265;
var statearr_31266_31277 = state_31247;
(statearr_31266_31277[(5)] = ex__20886__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31278 = state_31247;
state_31247 = G__31278;
continue;
} else {
return ret_value__20884__auto__;
}
break;
}
});
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto__ = function(state_31247){
switch(arguments.length){
case 0:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto____0.call(this);
case 1:
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto____1.call(this,state_31247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$0 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto____0;
climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto__.cljs$core$IFn$_invoke$arity$1 = climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto____1;
return climbr$behaviour$user_actions$bind_keys_BANG__$_state_machine__20883__auto__;
})()
;})(switch__20882__auto__,c__20903__auto__,keypressed_chan))
})();
var state__20905__auto__ = (function (){var statearr_31267 = f__20904__auto__.call(null);
(statearr_31267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20903__auto__);

return statearr_31267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20905__auto__);
});})(c__20903__auto__,keypressed_chan))
);

return c__20903__auto__;
});
climbr.behaviour.user_actions.get_boulder_for_hand = (function climbr$behaviour$user_actions$get_boulder_for_hand(hand_name){
var boulder_key = (function (){var G__31280 = hand_name;
switch (G__31280) {
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
var key_boulder = (function (){var G__31283 = hand_name;
switch (G__31283) {
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
var constraint = climbr.matter.matter.constraint.create(({"bodyA": hand, "bodyB": boulder}));
var key_holds = (function (){var G__31286 = hand_name;
switch (G__31286) {
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
var G__31289 = (((hand instanceof cljs.core.Keyword))?hand.fqn:null);
switch (G__31289) {
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

//# sourceMappingURL=user_actions.js.map?rel=1478680653723